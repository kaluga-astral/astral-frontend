const copy = require('recursive-copy');

const copyAssets = () => {
  copy('./src', './lib/src', {
    filter: [
      '**/*.woff2',
      '**/*.otf',
      '**/*.ttf',
      '**/*.woff',
      '**/*.css',
      '**/*.svg',
      '**/*.png',
      '**/*.jpg',
    ],
    overwrite: true,
    expand: true,
    dot: true,
    junk: true,
  }).catch(error => {
    // eslint-disable-next-line no-console
    console.error(error);

    process.exit(1);
  });
};

module.exports = { copyAssets };
