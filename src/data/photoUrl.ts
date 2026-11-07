/** Prefix local `/photos/...` paths with OSS base in production. */
export function photoUrl(path: string): string {
  if (!path || path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const base = (import.meta.env.PUBLIC_PHOTO_BASE as string | undefined)?.replace(/\/$/, '') ?? '';
  if (!base) return path;
  return path.startsWith('/') ? `${base}${path}` : `${base}/${path}`;
}
