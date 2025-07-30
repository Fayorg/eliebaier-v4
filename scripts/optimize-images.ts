const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [320, 640, 1024, 1600];
const formats = ['webp', 'avif', 'jpeg'];
const inputDir = './images/base';
const outputDir = './images/optimized';

fs.readdirSync(inputDir).forEach(async (file: File) => {
  const inputFile = path.join(inputDir, file);
  const basename = path.parse(file).name;

  sizes.forEach((size) => {
    formats.forEach(async (format) => {
      const outputFile = path.join(
        outputDir,
        `${basename}-${size}w.${format}`
      );
      await sharp(inputFile)
        .resize({ width: size })
        .toFormat(format)
        .toFile(outputFile);
    });
  });
});