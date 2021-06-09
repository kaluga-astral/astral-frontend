const fs = require('fs');
const path = require('path');

const appDir = fs.realpathSync(process.cwd());
const appSrc = path.resolve(appDir, 'src');

module.exports = () => ({
  appDir,
  appSrc,
  appDist: path.resolve(appDir, 'dist'),
  appClientEntry: path.resolve(appSrc, 'client.jsx'),
  appServerEntry: path.resolve(appSrc, 'server.jsx'),
});
