import fs from 'fs';
import path from 'path';

const brainDir = '/home/shameel/.gemini/antigravity-cli/brain/4288fbe4-f185-4f4e-b679-5451cb8fa600';
const targetDir = '/home/shameel/workspace/freelance/KAYS/public/images/products';

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const files = fs.readdirSync(brainDir);

const mappings = [
  { match: 'glass_edging_wheels', dest: 'glass-edging-wheels-studio.jpg' },
  { match: 'glass_core_drills', dest: 'glass-core-drills-studio.jpg' },
  { match: 'polishing_wheels_cup', dest: 'polishing-wheels-studio.jpg' },
  { match: 'semiconductor_ceramic_tools', dest: 'semiconductor-ceramic-tools.jpg' },
  { match: 'solar_glass_slitters', dest: 'solar-architectural-slitters.jpg' },
  { match: 'optical_watch_glass', dest: 'optical-watch-glass-tools.jpg' }
];

mappings.forEach(({ match, dest }) => {
  const found = files.find(f => f.startsWith(match) && f.endsWith('.jpg'));
  if (found) {
    fs.copyFileSync(path.join(brainDir, found), path.join(targetDir, dest));
    console.log(`Copied ${found} -> ${dest}`);
  }
});
