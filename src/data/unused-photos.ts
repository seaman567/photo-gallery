import { readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { albums } from './albums';

export type UnusedPhoto = {
  src: string;
  thumb: string;
  file: string;
  year: string;
  /** true = was removed from albums during review; false = never listed */
  wasRemoved: boolean;
};

/** Filenames (no -full.webp) we deliberately dropped from albums. */
const REMOVED_STEMS = new Set([
  '006-_20220101195250',
  '009-DSC09032',
  '011-_20220105163050',
  '012-DSC05494',
  '013-DSC07278',
  '015-DSC08304',
  '016-DSC08088',
  '017-DSC07950',
  '020-DSC08851',
  '026-_20220307162008',
  '027-_20220307162008-1',
  '029-PGH55456',
  '030-PGH55455-1',
  '031-PGH55456-1',
  '033-PGH55477',
  '036-PGH55477-1',
  '053-PGH55802',
  '054-PGH55490',
  '055-PGH55697',
  '056-PGH56270-1',
  '057-PGH55802-1',
  '059-PGH55647',
  '069-PGH56703',
]);

function listFullWebps(year: string): string[] {
  const dir = join(process.cwd(), 'public', 'photos', year);
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((n) => n.endsWith('-full.webp'))
    .map((n) => n.replace(/-full\.webp$/, ''));
}

/** Photos on disk that are not referenced by any album. */
export function getUnusedPhotos(): UnusedPhoto[] {
  const used = new Set(albums.flatMap((a) => a.photos.map((p) => p.src)));
  const out: UnusedPhoto[] = [];

  for (const year of ['2021', '2022']) {
    for (const stem of listFullWebps(year)) {
      const src = `/photos/${year}/${stem}-full.webp`;
      if (used.has(src)) continue;
      const thumbCandidate = `/photos/${year}/${stem}-thumb.webp`;
      const thumbPath = join(process.cwd(), 'public', 'photos', year, `${stem}-thumb.webp`);
      out.push({
        src,
        thumb: existsSync(thumbPath) ? thumbCandidate : src,
        file: stem,
        year,
        wasRemoved: REMOVED_STEMS.has(stem),
      });
    }
  }

  return out.sort((a, b) => a.src.localeCompare(b.src));
}
