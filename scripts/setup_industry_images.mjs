import fs from 'fs';
import path from 'path';

const brainDir = '/home/shameel/.gemini/antigravity-cli/brain/4288fbe4-f185-4f4e-b679-5451cb8fa600';
const industriesDir = '/home/shameel/workspace/freelance/KAYS/public/images/industries';

if (!fs.existsSync(industriesDir)) {
  fs.mkdirSync(industriesDir, { recursive: true });
}

const files = fs.readdirSync(brainDir);

const map = {
  'architectural_facade_glass': 'architectural-glass.jpg',
  'automotive_glass_line': 'automotive-glass.jpg',
  'watch_sapphire_glass': 'watch-sapphire-glass.jpg',
  'solar_photovoltaic_glass': 'solar-photovoltaic-glass.jpg',
  'scientific_laboratory_glass': 'scientific-laboratory-glass.jpg',
};

for (const [prefix, targetName] of Object.entries(map)) {
  const found = files.find(f => f.startsWith(prefix) && f.endsWith('.jpg'));
  if (found) {
    fs.copyFileSync(path.join(brainDir, found), path.join(industriesDir, targetName));
    console.log(`Copied ${found} -> ${targetName}`);
  }
}

// Copy semiconductor ceramic image as well
const semiSrc = '/home/shameel/workspace/freelance/KAYS/public/images/products/semiconductor-ceramic-tools.jpg';
if (fs.existsSync(semiSrc)) {
  fs.copyFileSync(semiSrc, path.join(industriesDir, 'semiconductor-ceramics.jpg'));
  console.log('Copied semiconductor-ceramics.jpg');
}

// Copy optical watch glass as well
const optSrc = '/home/shameel/workspace/freelance/KAYS/public/images/products/optical-watch-glass-tools.jpg';
if (fs.existsSync(optSrc)) {
  fs.copyFileSync(optSrc, path.join(industriesDir, 'appliance-glass.jpg'));
}
