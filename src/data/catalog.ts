import { albums, type Album } from './albums';
import { countPhotosForYear } from './places';

export function isYearArchive(album: Album): boolean {
  return /^archive-\d{4}$/.test(album.slug);
}

/** Thematic portfolios (作品集) */
export const collections: Album[] = albums.filter((a) => !isYearArchive(a));

/** Time-based year archives (按时间) */
export const yearArchives: Album[] = albums
  .filter(isYearArchive)
  .sort((a, b) => a.slug.localeCompare(b.slug));

export function yearLabel(album: Album): string {
  const m = album.slug.match(/^archive-(\d{4})$/);
  return m ? m[1] : album.title;
}

/** Total photos under /photos/{year}/ across all albums. */
export function yearPhotoCount(album: Album): number {
  const year = yearLabel(album);
  return /^\d{4}$/.test(year) ? countPhotosForYear(year) : album.photos.length;
}
