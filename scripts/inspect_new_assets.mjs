import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const dir = 'assets/new';
const files = fs.readdirSync(dir).filter(f => !f.includes(':Zone.Identifier'));
console.log('Total valid images:', files.length);

const hashes = {};
for (const f of files) {
  const buf = fs.readFileSync(path.join(dir, f));
  const hash = crypto.createHash('md5').update(buf).digest('hex');
  if (!hashes[hash]) {
    hashes[hash] = [];
  }
  hashes[hash].push(f);
}

const uniqueHashes = Object.keys(hashes);
console.log('Unique images count:', uniqueHashes.length);
uniqueHashes.forEach((h, idx) => {
  console.log(`Unique #${idx + 1} (${hashes[h].length} copies): ${hashes[h][0]}`);
});
