/**
 * Process extracted WordPress originals into public/photos/{year}/
 * and rewrite src/data/albums.ts
 *
 * Usage:
 *   node scripts/migrate-from-backup.mjs "E:\\网站备份 2025. 4.8\\_extracted\\originals"
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const SRC_ROOT = process.argv[2];
if (!SRC_ROOT) {
  console.error('Usage: node scripts/migrate-from-backup.mjs <originals-dir>');
  process.exit(1);
}

const ROOT = process.cwd();
const OUT_ROOT = path.join(ROOT, 'public', 'photos');
const ALBUMS_FILE = path.join(ROOT, 'src', 'data', 'albums.ts');

const FULL_WIDTH = 2000;
const THUMB_WIDTH = 800;

/** Optional CDN prefix after you upload public/photos to OSS (no trailing slash). */
const PHOTO_BASE = process.env.PHOTO_BASE ?? '';

async function listYears(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  return entries
    .filter((e) => e.isDirectory() && /^\d{4}$/.test(e.name))
    .map((e) => e.name)
    .sort();
}

async function processYear(year) {
  const inDir = path.join(SRC_ROOT, year);
  const outDir = path.join(OUT_ROOT, year);
  await fs.mkdir(outDir, { recursive: true });

  const files = (await fs.readdir(inDir)).filter((name) =>
    /\.(jpe?g|png|webp|jpeg)$/i.test(name),
  );

  const photos = [];
  let i = 0;
  for (const file of files) {
    i += 1;
    const base = path.parse(file).name.replace(/[^a-zA-Z0-9_-]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '') || `img-${i}`;
    const input = path.join(inDir, file);
    const fullName = `${String(i).padStart(3, '0')}-${base}-full.webp`;
    const thumbName = `${String(i).padStart(3, '0')}-${base}-thumb.webp`;

    try {
      const full = await sharp(input)
        .rotate()
        .resize({ width: FULL_WIDTH, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(path.join(outDir, fullName));

      await sharp(input)
        .rotate()
        .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
        .webp({ quality: 72 })
        .toFile(path.join(outDir, thumbName));

      const prefix = PHOTO_BASE ? `${PHOTO_BASE}/photos/${year}` : `/photos/${year}`;
      photos.push({
        src: `${prefix}/${fullName}`,
        thumb: `${prefix}/${thumbName}`,
        alt: `${year} photo ${i}`,
        width: full.width,
        height: full.height,
      });
      if (i % 10 === 0 || i === files.length) {
        console.log(`  [${year}] ${i}/${files.length}`);
      }
    } catch (err) {
      console.warn(`  skip ${file}: ${err.message}`);
    }
  }
  return photos;
}

const years = await listYears(SRC_ROOT);
if (years.length === 0) {
  console.error('No year folders found in', SRC_ROOT);
  process.exit(1);
}

console.log('Years:', years.join(', '));
const albums = [];

for (const year of years) {
  console.log(`\nProcessing ${year}...`);
  const photos = await processYear(year);
  if (photos.length === 0) continue;
  albums.push({
    slug: `archive-${year}`,
    title: `${year}`,
    description: `Photos from the previous site archive (${year}).`,
    date: `${year}-01`,
    cover: photos[0].thumb,
    photos,
  });
}

const fileBody = `export type Photo = {
  /** Full / lightbox image URL (local path or external CDN) */
  src: string;
  /** Grid thumbnail; falls back to src if omitted */
  thumb?: string;
  alt: string;
  width: number;
  height: number;
};

export type Album = {
  slug: string;
  title: string;
  description: string;
  date: string;
  cover: string;
  photos: Photo[];
};

/**
 * Album catalog migrated from WordPress backup (2025-04-08).
 * Local preview uses /photos/... under public/.
 * After uploading public/photos to Aliyun OSS, rebuild with:
 *   PHOTO_BASE=https://your-bucket.oss-cn-hangzhou.aliyuncs.com npm run migrate:backup -- "<originals>"
 * or search-replace the /photos/ prefix with your OSS URL prefix.
 */
export const albums: Album[] = ${JSON.stringify(albums, null, 2)};

export function getAlbum(slug: string): Album | undefined {
  return albums.find((album) => album.slug === slug);
}
`;

await fs.writeFile(ALBUMS_FILE, fileBody, 'utf8');
console.log(`\nWrote ${ALBUMS_FILE}`);
console.log(`Albums: ${albums.map((a) => `${a.slug}(${a.photos.length})`).join(', ')}`);
