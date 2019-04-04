const chalk = require('chalk');
const getEnvVars = require('./getEnvVars');
const log = require('./log');
const BUILD_MODE_TYPES = require('../constants/buildModeTypes');

module.exports = ({ getBuildModeType }) => {
  const { RELEASE_STAGE } = getEnvVars();

  log.info('Application stage:', chalk.whiteBright(RELEASE_STAGE));
  log.info('Build mode:', chalk.whiteBright(getBuildModeType(BUILD_MODE_TYPES)));
};
