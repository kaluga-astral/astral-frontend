const shell = require('shelljs');

const { copyAssets } = require('./copyAssets');

module.exports = () => {
  const { code } = shell.exec(
    'babel ./src --out-dir ./lib --extensions ".ts,.tsx,.js,.jsx" --ignore "**/*.percy.jsx"',
  );

  if (code !== 0) {
    shell.exit(code);
  }

  copyAssets();
};
