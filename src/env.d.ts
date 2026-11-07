/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_PHOTO_BASE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
