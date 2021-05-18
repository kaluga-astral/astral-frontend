const printBuildError = require('react-dev-utils/printBuildError');

const log = require('./log');

module.exports = buildResult => {
  buildResult.then(
    buildStats => {
      log.success('Compiled successfully');
      log.print(buildStats);
    },
    err => {
      log.error('Failed to compile');
      printBuildError(err);
      process.exit(1);
    },
  );
};
