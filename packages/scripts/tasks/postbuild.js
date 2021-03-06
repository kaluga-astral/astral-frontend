// const { resolve } = require('path');

const fs = require('fs');

// const npmrcPath = resolve(__dirname, '..', '..', '..', '.npmrc');

module.exports = () => {
  const { scripts, devDependencies, workspaces, ...packageData } = JSON.parse(
    fs.readFileSync('./package.json'),
  );

  fs.writeFileSync(
    './lib/package.json',
    JSON.stringify({ ...packageData, main: './src/index.js' }, null, 2),
  );

  // fs.createReadStream(npmrcPath).pipe(fs.createWriteStream('./lib/.npmrc'));
};
