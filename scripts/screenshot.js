import { chromium } from 'playwright';

const url = process.argv[2] ?? 'http://localhost:4173/';

const VIEWPORTS = [
    { name: 'desktop', width: 1600, height: 1000 },
    { name: 'tablet', width: 900, height: 1200 },
    { name: 'mobile', width: 390, height: 1400 },
];

const browser = await chromium.launch();
const errors = [];

for (const { name, width, height } of VIEWPORTS) {
    const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
    page.on('pageerror', (error) => errors.push(`[${name}] ${error.message}`));
    page.on('console', (msg) => msg.type() === 'error' && errors.push(`[${name}] ${msg.text()}`));

    await page.goto(url, { waitUntil: 'networkidle' });

    // Recorre la página para disparar las animaciones whileInView antes de capturar.
    await page.evaluate(async () => {
        const step = window.innerHeight / 2;
        for (let y = 0; y < document.body.scrollHeight; y += step) {
            window.scrollTo(0, y);
            await new Promise((resolve) => setTimeout(resolve, 120));
        }
        window.scrollTo(0, 0);
    });
    await page.waitForTimeout(1200);
    await page.screenshot({ path: `screenshots/${name}.png` });
    await page.screenshot({ path: `screenshots/${name}-full.png`, fullPage: true });

    // El "leer más" de About alarga su columna y es el caso que más estira el bento.
    await page.getByRole('button', { name: /read more/i }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: `screenshots/${name}-expanded.png`, fullPage: true });
    await page.getByRole('button', { name: /read less/i }).click();
    await page.waitForTimeout(300);

    // El español es más largo que el inglés: conviene comprobar que no desborda.
    await page.getByRole('button', { name: /español/i }).click();
    await page.waitForTimeout(600);
    await page.screenshot({ path: `screenshots/${name}-es.png`, fullPage: true });

    const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    );
    if (overflow) errors.push(`[${name}] hay scroll horizontal`);

    await page.close();
    console.log(`screenshots/${name}.png`);
}

await browser.close();

if (errors.length) {
    console.log('\nErrores detectados en consola:');
    errors.forEach((error) => console.log(' -', error));
} else {
    console.log('\nSin errores de consola.');
}
