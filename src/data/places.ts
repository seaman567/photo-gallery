import { albums, type Photo } from './albums';
import { photoUrl } from './photoUrl';

export type Place = {
  id: string;
  title: string;
  lat: number;
  lon: number;
  /** Preview / cover thumb */
  thumb: string;
  href: string;
  photos: Photo[];
};

/** Infer year from asset path (`/photos/2021/...`). */
export function photoYear(photo: Photo): string | null {
  const m = photo.src.match(/\/photos\/(\d{4})\//);
  return m ? m[1] : null;
}

/** Group place photos by year for the map preview page. */
export function groupPhotosByYear(photos: Photo[]): { year: string; photos: Photo[] }[] {
  const buckets = new Map<string, Photo[]>();
  for (const photo of photos) {
    const year = photoYear(photo) ?? '未标注';
    const list = buckets.get(year) ?? [];
    list.push(photo);
    buckets.set(year, list);
  }
  return [...buckets.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([year, list]) => ({ year, photos: list }));
}

/**
 * Whole album → one city (when every photo in the set shares a place).
 */
const albumPlaceId: Record<string, string> = {
  'no-big-deal': 'hangzhou',
  'night-wanderer': 'suzhou',
  'renai-road': 'suzhou',
  westbound: 'huzhou',
  'dusk-red': 'suzhou',
  aerial: 'suzhou',
  'tears-in-the-sea': 'wenling',
  shanghai: 'shanghai',
};

/**
 * 遨游记本记 — per photo, left→right / top→bottom:
 * 自贡, 成都, 自贡, 成都, 深圳, 自贡, 自贡, 深圳
 */
const traveloguePlaceByIndex = [
  'zigong',
  'chengdu',
  'zigong',
  'chengdu',
  'shenzhen',
  'zigong',
  'zigong',
  'shenzhen',
] as const;

/**
 * archive-2021 — per photo index:
 * 湖州, 苏州×2, 温岭, 苏州×2, +048/051 苏州, +111 深圳
 */
const archive2021PlaceByIndex = [
  'huzhou',
  'suzhou',
  'suzhou',
  'wenling',
  'suzhou',
  'suzhou',
  'suzhou', // 048
  'suzhou', // 051
  'shenzhen', // 111
] as const;

/**
 * archive-2022 — per photo index (full coverage).
 */
const archive2022PlaceByIndex = [
  'huzhou',
  'huzhou',
  'huzhou',
  'huzhou',
  'huzhou',
  'huzhou',
  'suzhou', // 010
  'suzhou',
  'suzhou',
  'suzhou',
  'suzhou',
  'suzhou',
  'suzhou',
  'suzhou',
  'chengdu',
  'chengdu',
  'chengdu', // 034
  'chengdu', // 035
  'chengdu', // 037
  'chongqing', // 038
  'chongqing', // 039
  'chengdu', // 040
  'chengdu', // 041
  'chongqing', // 042
  'zigong', // 043
  'suzhou', // 045
  'suzhou', // 046
  'suzhou', // 047
  'suzhou', // 048
  'suzhou', // 051
  'chengdu', // 052
  'chengdu', // 058
  'zigong', // 060
  'yangrong-hade', // 061
  'yangrong-hade', // 062
  'yangrong-hade', // 063
  'yangrong-hade', // 064
  'yangrong-hade', // 065
  'nantong', // 066
  'nantong', // 067
  'nantong', // 068
  'nantong', // 070
  'nantong', // 071
  'yangrong-hade', // 072
  'yangrong-hade', // 073
  // inbox-2022
  'suzhou',
  'suzhou',
  'suzhou',
  'suzhou',
  'suzhou',
  'suzhou',
  'suzhou',
  'suzhou',
  'nantong',
  'suzhou',
  'suzhou',
  'suzhou',
  'suzhou',
  'suzhou',
  'suzhou',
  'suzhou',
  'suzhou', // SAVE mirror
  'suzhou', // 090 water
  'suzhou', // 092 sunset
] as const;

const archive2023PlaceByIndex = [
  'suzhou',
  'xian',
  'xian',
  'xian',
  'xian',
  'xian',
  'suzhou',
  'suzhou',
  'suzhou',
  'suzhou',
  'suzhou',
  'suzhou',
  'suzhou',
  'suzhou',
  'suzhou',
  'hangzhou',
  'hangzhou',
  'hangzhou',
  'shanghai',
  'shanghai',
  'shanghai',
  'suzhou',
  'suzhou',
  'qingdao',
  'wenzhou',
] as const;

const archive2024PlaceByIndex = [
  'estes-park',
  'estes-park',
  'estes-park',
  'estes-park',
  'estes-park',
  'estes-park', // 046 night street / car
  'jackson',
  'jackson',
  'yellowstone',
  'yellowstone',
  'jackson',
  'yellowstone',
  'jackson',
  'yellowstone',
  'jackson',
  'jackson',
  'yellowstone',
  'yellowstone',
  'yellowstone',
  'suzhou', // 091 station
  'jackson',
  'jackson',
  'jackson',
] as const;

const archive2025PlaceByIndex = [
  'new-york',
  'new-york',
  'new-york',
  'death-valley',
  'death-valley',
  'death-valley',
  'death-valley',
  'los-angeles',
  'los-angeles',
  'los-angeles',
  'los-angeles',
  'los-angeles',
  'los-angeles',
  'los-angeles',
  'los-angeles',
  'death-valley',
  'san-francisco',
  'san-francisco',
  'san-francisco',
  'big-sur',
  'big-sur',
  'big-sur',
  'new-york',
  'new-york',
  'new-york',
  'champaign',
  'chicago',
  'guilin',
  'hong-kong',
  'shenzhen',
  'shenzhen',
  'shenzhen',
  'shenzhen',
  'shenzhen',
  'xiamen',
  'xiamen',
  'xiamen',
  'xiamen',
  'xiamen',
  'xiamen',
  'xiamen',
  'xiamen',
  'las-vegas',
] as const;

const archive2026PlaceByIndex = [
  'zhuhai',
  'jiangmen',
] as const;

/** Albums whose photos are assigned place-by-place (index order). */
const albumPhotoPlaces: Record<string, readonly string[]> = {
  travelogue: traveloguePlaceByIndex,
  'archive-2021': archive2021PlaceByIndex,
  'archive-2022': archive2022PlaceByIndex,
  'archive-2023': archive2023PlaceByIndex,
  'archive-2024': archive2024PlaceByIndex,
  'archive-2025': archive2025PlaceByIndex,
  'archive-2026': archive2026PlaceByIndex,
};

/** Map pins use 市-level names; 苏州市 / 湖州市 are separate pins around Taihu. */
const placeMeta: Record<string, { title: string; lat: number; lon: number }> = {
  hangzhou: { title: '杭州市', lat: 30.2741, lon: 120.1551 },
  suzhou: { title: '苏州市', lat: 31.2989, lon: 120.5853 },
  huzhou: { title: '湖州市', lat: 30.8672, lon: 120.102 },
  wenling: { title: '温岭市', lat: 28.3728, lon: 121.3852 },
  shanghai: { title: '上海市', lat: 31.2304, lon: 121.4737 },
  zigong: { title: '自贡市', lat: 29.3392, lon: 104.7784 },
  chengdu: { title: '成都市', lat: 30.5728, lon: 104.0668 },
  chongqing: { title: '重庆市', lat: 29.563, lon: 106.5516 },
  'yangrong-hade': { title: '羊茸哈德', lat: 32.02, lon: 103.02 },
  nantong: { title: '南通市', lat: 32.0147, lon: 120.8647 },
  shenzhen: { title: '深圳市', lat: 22.5431, lon: 114.0579 },
  'xian': { title: "西安市", lat: 34.3416, lon: 108.9398 },
  'estes-park': { title: "Estes Park", lat: 40.3772, lon: -105.5217 },
  'jackson': { title: "Jackson", lat: 43.4799, lon: -110.7624 },
  'yellowstone': { title: "Yellowstone National Park", lat: 44.428, lon: -110.5885 },
  'new-york': { title: "New York City", lat: 40.7128, lon: -74.006 },
  'death-valley': { title: "Death Valley", lat: 36.5054, lon: -117.0794 },
  'los-angeles': { title: "Los Angeles", lat: 34.0522, lon: -118.2437 },
  'las-vegas': { title: 'Las Vegas', lat: 36.1699, lon: -115.1398 },
  'san-francisco': { title: "San Francisco", lat: 37.7749, lon: -122.4194 },
  'big-sur': { title: "Big Sur", lat: 36.2704, lon: -121.8081 },
  'qingdao': { title: "青岛市", lat: 36.0671, lon: 120.3826 },
  'wenzhou': { title: "温州市", lat: 27.9943, lon: 120.6994 },
  'champaign': { title: "Champaign", lat: 40.1164, lon: -88.2434 },
  'chicago': { title: "Chicago", lat: 41.8781, lon: -87.6298 },
  'guilin': { title: "桂林市", lat: 25.2736, lon: 110.29 },
  'hong-kong': { title: '香港', lat: 22.3193, lon: 114.1694 },
  'xiamen': { title: "厦门市", lat: 24.4798, lon: 118.0894 },
  'zhuhai': { title: "珠海市", lat: 22.2707, lon: 113.5767 },
  'jiangmen': { title: "江门市", lat: 22.5787, lon: 113.0815 },
};

function addPhoto(buckets: Map<string, Photo[]>, placeId: string, photo: Photo) {
  const list = buckets.get(placeId) ?? [];
  if (!list.some((p) => p.src === photo.src)) list.push(photo);
  buckets.set(placeId, list);
}

/** Resolve place id for one photo inside an album (index-aware). */
export function placeIdForAlbumPhoto(albumSlug: string, index: number): string | null {
  const byIndex = albumPhotoPlaces[albumSlug];
  if (byIndex) return byIndex[index] || null;
  return albumPlaceId[albumSlug] ?? null;
}

function buildPlaces(): Place[] {
  const buckets = new Map<string, Photo[]>();

  for (const album of albums) {
    album.photos.forEach((photo, i) => {
      const placeId = placeIdForAlbumPhoto(album.slug, i);
      if (placeId) addPhoto(buckets, placeId, photo);
    });
  }

  return Object.keys(placeMeta)
    .map((id) => {
      const meta = placeMeta[id];
      const photos = buckets.get(id) ?? [];
      if (!photos.length || !meta) return null;
      return {
        id,
        title: meta.title,
        lat: meta.lat,
        lon: meta.lon,
        thumb: photos[0].thumb ?? photos[0].src,
        href: `/places/${id}/`,
        photos,
      } satisfies Place;
    })
    .filter((p): p is Place => p !== null);
}

export type YearPlaceGroup = {
  placeId: string | null;
  title: string;
  href?: string;
  photos: Photo[];
};

/** All photos for a calendar year, grouped by assigned city. */
export function groupYearPhotosByPlace(year: string): YearPlaceGroup[] {
  const byPlace = new Map<string, Photo[]>();
  const unplaced: Photo[] = [];
  const seen = new Set<string>();

  for (const album of albums) {
    album.photos.forEach((photo, i) => {
      if (photoYear(photo) !== year) return;
      if (seen.has(photo.src)) return;
      seen.add(photo.src);

      const placeId = placeIdForAlbumPhoto(album.slug, i);
      if (!placeId || !placeMeta[placeId]) {
        unplaced.push(photo);
        return;
      }
      addPhoto(byPlace, placeId, photo);
    });
  }

  const placeOrder = Object.keys(placeMeta);
  const groups: YearPlaceGroup[] = placeOrder
    .filter((id) => (byPlace.get(id)?.length ?? 0) > 0)
    .map((id) => ({
      placeId: id,
      title: placeMeta[id].title,
      href: `/places/${id}/`,
      photos: byPlace.get(id)!,
    }));

  if (unplaced.length) {
    groups.push({ placeId: null, title: '未标注地点', photos: unplaced });
  }

  return groups;
}

export function countPhotosForYear(year: string): number {
  return groupYearPhotosByPlace(year).reduce((n, g) => n + g.photos.length, 0);
}

export const places: Place[] = buildPlaces();

export function getPlace(id: string): Place | undefined {
  return places.find((p) => p.id === id);
}

/** Map pins: city name + link to place photo grid */
export const mapPins = places.map((p) => ({
  id: p.id,
  title: p.title,
  lat: p.lat,
  lon: p.lon,
  thumb: photoUrl(p.thumb),
  href: p.href,
  count: p.photos.length,
}));
