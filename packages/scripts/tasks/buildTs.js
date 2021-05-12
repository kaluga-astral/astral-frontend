const shell = require('shelljs');

const { copyAssets } = require('./copyAssets');

module.exports = () => {
  const { code } = shell.exec('tsc -p ./tsconfig.json');

  if (code !== 0) {
    shell.exit(code);
  }

  copyAssets();
};
