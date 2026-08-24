import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const brainDir = '/home/shameel/.gemini/antigravity-cli/brain/4288fbe4-f185-4f4e-b679-5451cb8fa600';
const brandDir = '/home/shameel/workspace/freelance/KAYS/public/images/brand';

const files = fs.readdirSync(brainDir);
const diamondFile = files.find(f => f.startsWith('diamond_logo_icon') && f.endsWith('.jpg'));

if (diamondFile) {
  const src = path.join(brainDir, diamondFile);
  fs.copyFileSync(src, path.join(brandDir, 'kays-diamond-raw.jpg'));
  console.log(`Copied ${diamondFile}`);

  // Crop tightly around the diamond and create high-res 512x512 PNG
  sharp(src)
    .trim({ background: '#ffffff', threshold: 15 })
    .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .toFile(path.join(brandDir, 'kays-diamond-icon.png'))
    .then(() => {
      console.log('Saved kays-diamond-icon.png');
      // Also overwrite kays-emblem-isolated.png
      fs.copyFileSync(path.join(brandDir, 'kays-diamond-icon.png'), path.join(brandDir, 'kays-emblem-isolated.png'));
      console.log('Updated kays-emblem-isolated.png');
    })
    .catch(err => console.error(err));
}
