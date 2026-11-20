// Generates the raster images search engines and social networks need:
//   public/og-image.png          1200x630, link preview (Open Graph / Twitter)
//   public/apple-touch-icon.png  180x180, iOS home screen icon
// Run with: node scripts/generate-assets.mjs
import sharp from 'sharp'
import { readFile } from 'node:fs/promises'

const W = 1200
const H = 630
const font = "'Helvetica Neue', Helvetica, Arial, sans-serif"

const background = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0b1020"/>
      <stop offset="0.55" stop-color="#141a33"/>
      <stop offset="1" stop-color="#3b2316"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.82" cy="1" r="0.6">
      <stop offset="0" stop-color="#ff8a00" stop-opacity="0.45"/>
      <stop offset="1" stop-color="#ff8a00" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#sky)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <text x="72" y="352" font-family="${font}" font-size="156" font-weight="800"
        letter-spacing="-9" fill="#f1f1f4">Yasmin<tspan fill="#ff8a00">.</tspan></text>
  <text x="76" y="432" font-family="${font}" font-size="46" font-weight="700"
        letter-spacing="-1" fill="#f1f1f4">Full stack developer</text>
  <text x="76" y="490" font-family="${font}" font-size="30" font-weight="500"
        fill="#a8a9b1">Spring Boot  ·  Next.js  ·  Studo.Flow</text>
</svg>`)

const portrait = await sharp('public/assets/img/profile.png')
  .resize({ height: 620 })
  .png()
  .toBuffer()
const portraitMeta = await sharp(portrait).metadata()

const mark = await sharp(await readFile('public/assets/icon/LogoDark.svg'))
  .resize({ height: 64 })
  .png()
  .toBuffer()

await sharp(background)
  .composite([
    { input: portrait, left: W - portraitMeta.width - 10, top: H - 620 },
    { input: mark, left: 76, top: 64 },
  ])
  .png({ compressionLevel: 9 })
  .toFile('public/og-image.png')

// Home screen icon: the mark on the dark tile, with a safe margin.
await sharp('public/assets/icon/LogoBackground.svg')
  .resize(180, 180)
  .png()
  .toFile('public/apple-touch-icon.png')

console.log('og-image.png and apple-touch-icon.png written')
