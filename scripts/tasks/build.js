const shell = require('shelljs');
const copy = require('recursive-copy');

const copyFonts = () => {
  copy('./src', './lib', {
    filter: ['**/*.woff2', '**/*.otf', '**/*.ttf', '**/*.woff'],
    overwrite: true,
    expand: true,
    dot: true,
    junk: true,
  }).catch((error) => {
    console.error(error);

    process.exit(1);
  });
};

module.exports = () => {
  const { code } = shell.exec('babel ./src --out-dir ./lib --ignore "**/*.percy.jsx"');

  if (code !== 0) {
    shell.exit(code);
  }

  copyFonts();
};
