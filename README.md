# Photo Gallery

Personal photo showcase: **Astro 4 static site** → deploy on **Vercel**, with **external image URLs** for production photos.

> Note: Astro 5/7’s native Windows compiler may be blocked by Application Control on some PCs; this project is pinned to Astro 4 so `npm run build` works locally.

## Local

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## Add your photos

### Migrated from old WordPress site

Old backup photos were processed into `public/photos/{2021,2022,2023,2024}/` (~73MB WebP) and listed in `src/data/albums.ts`.

- **Local preview:** `npm run dev` (images load from `/photos/...`)
- **Production (Vercel):** upload the whole `public/photos` folder to **Aliyun OSS** (keep the year subfolders), then replace every `/photos/` prefix in `albums.ts` with your OSS base, e.g. `https://your-bucket.oss-cn-hangzhou.aliyuncs.com/photos/`, then `git push`.

`public/photos` is gitignored on purpose (too large for GitHub).

Re-run migration from extracted originals:

```bash
npm run migrate:backup -- "E:\\网站备份 2025. 4.8\\_extracted\\originals"
```

With OSS base baked in:

```bash
set PHOTO_BASE=https://your-bucket.oss-cn-hangzhou.aliyuncs.com
npm run migrate:backup -- "E:\\网站备份 2025. 4.8\\_extracted\\originals"
```

### New photos later

1. Put originals in `photos-src/<album-slug>/`.
2. Run `npm run process-photos`, paste JSON into `albums.ts`.
3. Prefer OSS URLs in production.

## Deploy on Vercel

1. Install [Git](https://git-scm.com/) if needed, then push this folder to GitHub/GitLab.
2. In [Vercel](https://vercel.com): **Add New Project** → import the repo.
3. Framework: Astro (auto). Build: `npm run build`, output: `dist`.
4. **Settings → Domains**: add your domain and follow the DNS records Vercel shows.

Mainland China access via Vercel is often slow; for better CN performance later, host the same `dist` + images on Aliyun OSS + CDN after ICP filing.

## Project layout

- `src/pages/` — home, album pages, about
- `src/data/albums.ts` — album catalog
- `src/components/PhotoGrid.astro` — grid + PhotoSwipe lightbox
- `scripts/process-photos.mjs` — local WebP pipeline
