// Compresses a source image into a web-ready background.
// Usage: node scripts/compress-bg.mjs <input> [output]
//   default output: public/background.webp

import sharp from 'sharp'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(__dirname, '..')

const input = process.argv[2]
const output =
  process.argv[3] ?? path.join(projectRoot, 'public', 'background.webp')

if (!input) {
  console.error('Usage: node scripts/compress-bg.mjs <input> [output]')
  process.exit(1)
}

const MAX_WIDTH = 2560
const QUALITY = 75

const { size: inputSize } = await sharp(input).metadata()
console.log(`Compressing ${input}...`)

await sharp(input)
  .resize({ width: MAX_WIDTH, withoutEnlargement: true })
  .webp({ quality: QUALITY })
  .toFile(output)

const { size: outputSize } = await import('node:fs').then((fs) =>
  fs.promises.stat(output),
)
const outputMeta = await sharp(output).metadata()

const fmt = (bytes) => `${(bytes / 1024 / 1024).toFixed(2)} MB`
console.log(`Wrote ${output}`)
console.log(`  ${fmt(inputSize ?? 0)} → ${fmt(outputSize)}`)
console.log(`  width: ${outputMeta.width}, height: ${outputMeta.height}`)
