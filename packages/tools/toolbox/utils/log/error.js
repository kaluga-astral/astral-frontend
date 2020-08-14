/* eslint-disable no-console */
const chalk = require('chalk');

module.exports = (...msgs) => {
  console.error(chalk.red('error'), ...msgs);
};
