import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

// Genera la imagen de vista previa (1200x630) que se muestra al compartir el enlace
// en LinkedIn, WhatsApp o Twitter. Ejecutar tras cambiar la foto o el titular.
const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const WIDTH = 1200;
const HEIGHT = 630;
const PHOTO = 380;

const background = Buffer.from(`
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="50%" cy="0%" r="80%">
      <stop offset="0%" stop-color="#7877c6" stop-opacity="0.45" />
      <stop offset="100%" stop-color="#0a0a0a" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#4ade80" />
      <stop offset="100%" stop-color="#a855f7" />
    </linearGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="#0a0a0a" />
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glow)" />
  <text x="90" y="290" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="86" font-weight="300" fill="#f5f5f5">José Mario</text>
  <text x="90" y="360" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="42" font-weight="500" fill="url(#accent)">Jr FullStack Developer</text>
  <text x="90" y="425" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="26" fill="#a3a3a3">React · Node.js · Tailwind · MySQL</text>
</svg>`);

const photo = await sharp(join(root, 'src', 'assets', 'Profile2.webp'))
  .resize(PHOTO, PHOTO, { fit: 'cover' })
  .composite([
    {
      input: Buffer.from(
        `<svg width="${PHOTO}" height="${PHOTO}"><rect width="${PHOTO}" height="${PHOTO}" rx="28" ry="28"/></svg>`,
      ),
      blend: 'dest-in',
    },
  ])
  .png()
  .toBuffer();

await sharp(background)
  .composite([{ input: photo, left: WIDTH - PHOTO - 90, top: (HEIGHT - PHOTO) / 2 }])
  .png()
  .toFile(join(root, 'public', 'og-image.png'));

console.log('public/og-image.png generada');
