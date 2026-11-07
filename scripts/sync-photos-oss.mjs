/**
 * Sync local public/photos → oss://seaman667-photos/photos
 *
 * Credentials (any one):
 *   - env ALIBABA_CLOUD_ACCESS_KEY_ID + ALIBABA_CLOUD_ACCESS_KEY_SECRET
 *   - env OSS_ACCESS_KEY_ID + OSS_ACCESS_KEY_SECRET
 *   - file .ossutilconfig in home or project (ini)
 *
 * Usage: node scripts/sync-photos-oss.mjs
 */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import os from 'node:os';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const photosDir = path.join(root, 'public', 'photos');
const ossutil = path.join(root, 'tools', 'ossutil.exe');
const bucket = 'seaman667-photos';
const endpoint = 'oss-cn-guangzhou.aliyuncs.com';
const dest = `oss://${bucket}/photos`;

function readIniKeys(file) {
  if (!fs.existsSync(file)) return null;
  const text = fs.readFileSync(file, 'utf8');
  const id = text.match(/accessKeyID\s*=\s*(\S+)/i)?.[1];
  const secret = text.match(/accessKeySecret\s*=\s*(\S+)/i)?.[1];
  if (id && secret) return { id, secret };
  return null;
}

const id =
  process.env.ALIBABA_CLOUD_ACCESS_KEY_ID ||
  process.env.OSS_ACCESS_KEY_ID ||
  process.env.ALIYUN_ACCESS_KEY_ID;
const secret =
  process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET ||
  process.env.OSS_ACCESS_KEY_SECRET ||
  process.env.ALIYUN_ACCESS_KEY_SECRET;

const fromIni =
  (!id || !secret) &&
  (readIniKeys(path.join(os.homedir(), '.ossutilconfig')) ||
    readIniKeys(path.join(root, '.ossutilconfig')));

const ak = id || fromIni?.id;
const sk = secret || fromIni?.secret;

if (!fs.existsSync(photosDir)) {
  console.error('Missing', photosDir);
  process.exit(1);
}
if (!fs.existsSync(ossutil)) {
  console.error('Missing tools/ossutil.exe — download ossutil first');
  process.exit(1);
}
if (!ak || !sk) {
  console.error(
    'No OSS AccessKey found. Set ALIBABA_CLOUD_ACCESS_KEY_ID / ALIBABA_CLOUD_ACCESS_KEY_SECRET, or create ~/.ossutilconfig',
  );
  process.exit(2);
}

const args = [
  'cp',
  '-r',
  '-f',
  '-u',
  photosDir,
  dest,
  '-e',
  endpoint,
  '-i',
  ak,
  '-k',
  sk,
];

console.log(`Syncing ${photosDir} → ${dest} (${endpoint})`);
const result = spawnSync(ossutil, args, { stdio: 'inherit', shell: false });
process.exit(result.status ?? 1);
