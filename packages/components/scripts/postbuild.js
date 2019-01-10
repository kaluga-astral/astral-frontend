const fs = require('fs');

const {
  scripts, devDependencies, workspaces, ...packageData
} = JSON.parse(
  fs.readFileSync('./package.json'),
);

fs.writeFileSync('./lib/package.json', JSON.stringify(packageData, null, 2));
