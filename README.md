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

1. Put originals in `photos-src/<album-slug>/`.
2. Run:

```bash
npm run process-photos
```

3. Copy the printed JSON into `src/data/albums.ts` (edit title / description / date).
4. For production, upload the generated WebPs to R2 / OSS / Cloudinary and replace `src` / `thumb` with CDN URLs so Vercel bandwidth stays light.

Sample albums already use Unsplash URLs so you can preview without local files.

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
