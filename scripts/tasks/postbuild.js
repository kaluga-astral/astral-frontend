const fs = require('fs');

module.exports = () => {
  const {
    scripts, devDependencies, workspaces, ...packageData
  } = JSON.parse(
    fs.readFileSync('./package.json'),
  );

  fs.writeFileSync(
    './lib/package.json',
    JSON.stringify({ ...packageData, main: './index.js' }, null, 2),
  );
};
