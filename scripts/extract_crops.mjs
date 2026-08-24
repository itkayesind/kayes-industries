import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const outDir = 'public/images/products';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const crops = [
  // Page 2
  {
    src: 'public/images/catalog/page_2.jpg',
    dest: 'kamal-nathan-chief-executive.jpg',
    box: { left: 95, top: 155, width: 390, height: 710 }
  },
  // Page 3
  {
    src: 'public/images/catalog/page_3.jpg',
    dest: 'glass-cutoff-wheels.jpg',
    box: { left: 1180, top: 70, width: 375, height: 365 }
  },
  {
    src: 'public/images/catalog/page_3.jpg',
    dest: 'pencil-edging-bevelling-wheels.jpg',
    box: { left: 65, top: 455, width: 365, height: 365 }
  },
  {
    src: 'public/images/catalog/page_3.jpg',
    dest: 'sintered-glass-drill-bits.jpg',
    box: { left: 1175, top: 860, width: 375, height: 365 }
  },
  {
    src: 'public/images/catalog/page_3.jpg',
    dest: 'metal-bonded-edging-wheels.jpg',
    box: { left: 60, top: 1260, width: 370, height: 365 }
  },
  {
    src: 'public/images/catalog/page_3.jpg',
    dest: 'optical-diamond-generators.jpg',
    box: { left: 1170, top: 1700, width: 375, height: 365 }
  },

  // Page 4
  {
    src: 'public/images/catalog/page_4.jpg',
    dest: 'resin-bonded-grinding-wheels.jpg',
    box: { left: 1175, top: 60, width: 375, height: 365 }
  },
  {
    src: 'public/images/catalog/page_4.jpg',
    dest: 'cbn-diamond-mounted-points.jpg',
    box: { left: 65, top: 475, width: 370, height: 365 }
  },
  {
    src: 'public/images/catalog/page_4.jpg',
    dest: 'diamond-hand-files-lapping.jpg',
    box: { left: 1175, top: 870, width: 375, height: 365 }
  },
  {
    src: 'public/images/catalog/page_4.jpg',
    dest: 'pcd-cbn-turning-tools.jpg',
    box: { left: 70, top: 1275, width: 370, height: 365 }
  },
  {
    src: 'public/images/catalog/page_4.jpg',
    dest: 'diamond-dressing-tools.jpg',
    box: { left: 1180, top: 1675, width: 375, height: 365 }
  },

  // Page 6
  {
    src: 'public/images/catalog/page_6.jpg',
    dest: 'diamond-saws-spare-segments.jpg',
    box: { left: 1175, top: 70, width: 375, height: 365 }
  },
  {
    src: 'public/images/catalog/page_6.jpg',
    dest: 'dry-cutters-turbo-blades.jpg',
    box: { left: 65, top: 480, width: 365, height: 365 }
  },
  {
    src: 'public/images/catalog/page_6.jpg',
    dest: 'flexible-diamond-polishing-pads.jpg',
    box: { left: 1175, top: 880, width: 365, height: 365 }
  },
  {
    src: 'public/images/catalog/page_6.jpg',
    dest: 'cnc-stone-profile-wheels.jpg',
    box: { left: 65, top: 1290, width: 365, height: 365 }
  },
  {
    src: 'public/images/catalog/page_6.jpg',
    dest: 'general-purpose-core-drills.jpg',
    box: { left: 1175, top: 1690, width: 365, height: 365 }
  },

  // Page 7
  {
    src: 'public/images/catalog/page_7.jpg',
    dest: 'superabrasive-diamond-powders.jpg',
    box: { left: 160, top: 85, width: 1290, height: 870 }
  },

  // Page 8
  {
    src: 'public/images/catalog/page_8.jpg',
    dest: 'kayes-superabrasives-full-showcase.jpg',
    box: { left: 70, top: 70, width: 1510, height: 1580 }
  },

  // Flyer
  {
    src: 'public/images/brand/kays-flyer.jpg',
    dest: 'flyer-glass-core-drills.jpg',
    box: { left: 45, top: 500, width: 520, height: 350 }
  },
  {
    src: 'public/images/brand/kays-flyer.jpg',
    dest: 'flyer-glass-wheels-array.jpg',
    box: { left: 540, top: 100, width: 420, height: 1050 }
  }
];

async function extract() {
  for (const item of crops) {
    try {
      await sharp(item.src)
        .extract(item.box)
        .jpeg({ quality: 95 })
        .toFile(path.join(outDir, item.dest));
      console.log(`Cropped: ${item.dest}`);
    } catch (e) {
      console.error(`Error cropping ${item.dest}:`, e.message);
    }
  }
}

extract();
