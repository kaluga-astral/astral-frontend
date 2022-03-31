const fs = require('fs');
const path = require('path');

const appDir = fs.realpathSync(process.cwd());
const appSrc = path.resolve(appDir, 'src');
const CLIENT_ENTRIES = ['client.jsx', 'client.js', 'client.tsx', 'client.ts'];
const SERVER_ENTRIES = ['server.jsx', 'server.js', 'server.tsx', 'server.ts'];

const getClientEntry = () => {
  for (const entry of CLIENT_ENTRIES) {
    const entryPath = path.resolve(appSrc, entry);
    if (fs.existsSync(entryPath)) {
      return entryPath;
    }
  }

  throw new Error(
    `Client entry not found. You should create one of next files: ${CLIENT_ENTRIES.join(
      ', ',
    )}`,
  );
};

const getServerEntry = () => {
  for (const entry of SERVER_ENTRIES) {
    const entryPath = path.resolve(appSrc, entry);
    if (fs.existsSync(entryPath)) {
      return entryPath;
    }
  }

  throw new Error(
    `Server entry not found. You should create one of next files: ${SERVER_ENTRIES.join(
      ', ',
    )}`,
  );
};

module.exports = () => ({
  appDir,
  appSrc,
  appDist: path.resolve(appDir, 'dist'),
  appClientEntry: getClientEntry(),
  appServerEntry: getServerEntry(),
});
