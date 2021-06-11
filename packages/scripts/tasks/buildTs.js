const shell = require('shelljs');

const { copyAssets } = require('./copyAssets');

module.exports = () => {
  const babelResult = shell.exec(
    'babel ./src --out-dir ./lib/src --extensions ".ts,.tsx,.js,.jsx" --ignore "**/*.percy.jsx"',
  );
  const tsResult = shell.exec('tsc -p ./tsconfig.json --emitDeclarationOnly');

  if (babelResult.code !== 0 || tsResult.code !== 0) {
    shell.exit(babelResult.code || tsResult.code);
  }

  copyAssets();
};
