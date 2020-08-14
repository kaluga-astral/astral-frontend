// const fs = require('fs');
// const path = require('path');

const { printEnvironmentInfo } = require('../../utils');

module.exports = () => {
  process.env.BABEL_ENV = 'development';
  process.env.NODE_ENV = 'development';

  printEnvironmentInfo({
    getBuildModeType: BUILD_MODE_TYPES => BUILD_MODE_TYPES.development,
  });

  // node ./src/server.js
};
