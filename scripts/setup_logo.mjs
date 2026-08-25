import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const brainDir = '/home/shameel/.gemini/antigravity-cli/brain/4288fbe4-f185-4f4e-b679-5451cb8fa600';
const brandDir = '/home/shameel/workspace/freelance/KAYS/public/images/brand';

if (!fs.existsSync(brandDir)) {
  fs.mkdirSync(brandDir, { recursive: true });
}

const files = fs.readdirSync(brainDir);
const logoFile = files.find(f => f.startsWith('brand_logo_emblem') && f.endsWith('.jpg'));

if (logoFile) {
  const fullPath = path.join(brainDir, logoFile);
  fs.copyFileSync(fullPath, path.join(brandDir, 'kayes-brand-logo.jpg'));
  console.log(`Copied logo: ${logoFile} -> kayes-brand-logo.jpg`);

  // Extract the circular emblem only (top 70% of the image)
  sharp(fullPath)
    .extract({ left: 180, top: 120, width: 664, height: 664 })
    .resize(512, 512)
    .toFile(path.join(brandDir, 'kayes-emblem-isolated.png'))
    .then(() => console.log('Created isolated emblem PNG'))
    .catch(err => console.error(err));
}
