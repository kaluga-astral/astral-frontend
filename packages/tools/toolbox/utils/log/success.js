/* eslint-disable no-console */
const chalk = require('chalk');

module.exports = (...msgs) => {
  console.log(chalk.green('success'), ...msgs);
};
