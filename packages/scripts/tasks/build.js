const shell = require('shelljs');
const copy = require('recursive-copy');

const copyAssets = () => {
  copy('./src', './lib', {
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
    console.error(error);

    process.exit(1);
  });
};

module.exports = () => {
  const { code } = shell.exec(
    'babel ./src --out-dir ./lib --ignore "**/*.percy.jsx"',
  );

  if (code !== 0) {
    shell.exit(code);
  }

  copyAssets();
};
