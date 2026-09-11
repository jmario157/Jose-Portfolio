import { readdir, stat } from 'node:fs/promises';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const assetsDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'assets');

// Ancho máximo por imagen: el doble del tamaño en que se muestra, para pantallas retina.
const MAX_WIDTH = {
    'Profile2.png': 900,
    'FotitoAb.png': 1000,
    'darkProfile.png': 600,
    'Profile1.jpeg': 600,
    'pro1.png': 800,
    'pro3.png': 800,
    'project-2.png': 800,
    'project-4.png': 800,
};

const collect = async (dir) => {
    const entries = await readdir(dir, { withFileTypes: true });
    const files = await Promise.all(
        entries.map((entry) => {
            const path = join(dir, entry.name);
            if (entry.isDirectory()) return collect(path);
            return /\.(png|jpe?g)$/i.test(entry.name) ? [path] : [];
        }),
    );
    return files.flat();
};

const kb = (bytes) => `${Math.round(bytes / 1024)} KB`;

const files = await collect(assetsDir);
let before = 0;
let after = 0;

for (const file of files) {
    const name = file.split(/[\\/]/).pop();
    const width = MAX_WIDTH[name];
    if (!width) continue;

    const target = file.replace(new RegExp(`${extname(file)}$`), '.webp');
    await sharp(file)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(target);

    const originalSize = (await stat(file)).size;
    const newSize = (await stat(target)).size;
    before += originalSize;
    after += newSize;
    console.log(`${name.padEnd(18)} ${kb(originalSize).padStart(8)} -> ${kb(newSize).padStart(8)}`);
}

console.log(`\nTotal: ${kb(before)} -> ${kb(after)}`);
