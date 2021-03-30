const fs = require('fs');
const rimraf = require("rimraf");
const { default: babel } = require('@babel/cli/lib/babel/dir');

async function transform() {
  await babel({
    babelOptions: {},
    cliOptions: {
      filenames: ['./src'],
      outDir: './lib',
    },
  });
}

async function addPackageJSON() {
  const { scripts, devDependencies, workspaces, ...packageData } = JSON.parse(
    fs.readFileSync('./package.json'),
  );

  fs.writeFileSync(
    './lib/package.json',
    JSON.stringify({ ...packageData, main: './index.js' }, null, 2),
  );
}


module.exports = async () => {
  rimraf.sync("./lib");
  await transform('./src', './lib')
  addPackageJSON()
}
