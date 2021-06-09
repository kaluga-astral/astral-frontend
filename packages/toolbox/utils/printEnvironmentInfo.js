const chalk = require('chalk');

const BUILD_MODE_TYPES = require('../constants/buildModeTypes');

const log = require('./log');

module.exports = ({ getBuildModeType }) => {
  const { RELEASE_STAGE } = process.env;

  log.info('Application stage:', chalk.whiteBright(RELEASE_STAGE));
  log.info(
    'Build mode:',
    chalk.whiteBright(getBuildModeType(BUILD_MODE_TYPES)),
  );
};
