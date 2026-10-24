/**
 * Read originals from photos-src/<album>/ and write:
 *   public/photos/<album>/*-full.webp
 *   public/photos/<album>/*-thumb.webp
 *
 * Then copy the printed JSON snippets into src/data/albums.ts
 * (or point src at your CDN URLs after uploading the same files).
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = process.cwd();
const SRC = path.join(ROOT, 'photos-src');
const OUT = path.join(ROOT, 'public', 'photos');

const FULL_WIDTH = 2000;
const THUMB_WIDTH = 800;

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function listAlbums() {
  try {
    const entries = await fs.readdir(SRC, { withFileTypes: true });
    return entries.filter((e) => e.isDirectory()).map((e) => e.name);
  } catch {
    console.error(`Missing ${SRC}. Create album folders and drop original images there.`);
    process.exit(1);
  }
}

async function processAlbum(album) {
  const inDir = path.join(SRC, album);
  const outDir = path.join(OUT, album);
  await ensureDir(outDir);

  const files = (await fs.readdir(inDir)).filter((name) =>
    /\.(jpe?g|png|webp|tiff?)$/i.test(name),
  );

  const photos = [];

  for (const file of files) {
    const base = path.parse(file).name;
    const input = path.join(inDir, file);
    const fullName = `${base}-full.webp`;
    const thumbName = `${base}-thumb.webp`;
    const fullPath = path.join(outDir, fullName);
    const thumbPath = path.join(outDir, thumbName);

    const full = await sharp(input)
      .rotate()
      .resize({ width: FULL_WIDTH, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(fullPath);

    await sharp(input)
      .rotate()
      .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
      .webp({ quality: 75 })
      .toFile(thumbPath);

    photos.push({
      src: `/photos/${album}/${fullName}`,
      thumb: `/photos/${album}/${thumbName}`,
      alt: base.replace(/[-_]/g, ' '),
      width: full.width,
      height: full.height,
    });

    console.log(`  ✓ ${file}`);
  }

  return photos;
}

const albums = await listAlbums();
if (albums.length === 0) {
  console.error('No album folders found under photos-src/.');
  process.exit(1);
}

console.log('Processing photos…');
const catalog = {};

for (const album of albums) {
  console.log(`\n[${album}]`);
  catalog[album] = await processAlbum(album);
}

console.log('\n--- paste into src/data/albums.ts (adjust title/date/cover) ---\n');
for (const [slug, photos] of Object.entries(catalog)) {
  console.log(
    JSON.stringify(
      {
        slug,
        title: slug,
        description: '',
        date: new Date().toISOString().slice(0, 7),
        cover: photos[0]?.thumb ?? '',
        photos,
      },
      null,
      2,
    ),
  );
  console.log('');
}
