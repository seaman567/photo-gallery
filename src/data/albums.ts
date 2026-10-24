export type Photo = {
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
 * Album catalog.
 * Prefer external image URLs (R2 / OSS / Cloudinary) for production.
 * Local `/photos/...` paths work for small samples under public/.
 */
export const albums: Album[] = [
  {
    slug: 'coastal-light',
    title: 'Coastal Light',
    description: 'Soft horizons and salt air — sample set using external images.',
    date: '2025-06',
    cover:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    photos: [
      {
        src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80',
        thumb:
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=75',
        alt: 'Turquoise shoreline under a clear sky',
        width: 2000,
        height: 1333,
      },
      {
        src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80',
        thumb:
          'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=75',
        alt: 'Mountain ridge in morning haze',
        width: 2000,
        height: 1333,
      },
      {
        src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=2000&q=80',
        thumb:
          'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=75',
        alt: 'Fog over a green hillside',
        width: 2000,
        height: 1333,
      },
      {
        src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2000&q=80',
        thumb:
          'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=75',
        alt: 'Sunlight through a forest canopy',
        width: 2000,
        height: 1333,
      },
    ],
  },
  {
    slug: 'city-grain',
    title: 'City Grain',
    description: 'Quiet corners and evening glass — another sample album.',
    date: '2025-09',
    cover:
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80',
    photos: [
      {
        src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=2000&q=80',
        thumb:
          'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=800&q=75',
        alt: 'City skyline at dusk',
        width: 2000,
        height: 1333,
      },
      {
        src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=2000&q=80',
        thumb:
          'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=75',
        alt: 'Wet street reflections at night',
        width: 2000,
        height: 1333,
      },
      {
        src: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=2000&q=80',
        thumb:
          'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=75',
        alt: 'Downtown towers in soft light',
        width: 2000,
        height: 1333,
      },
    ],
  },
];

export function getAlbum(slug: string): Album | undefined {
  return albums.find((album) => album.slug === slug);
}
