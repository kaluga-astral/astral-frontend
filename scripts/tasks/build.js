const shell = require('shelljs');

module.exports = () => {
  const { code } = shell.exec('printenv && babel ./src --out-dir ./lib --ignore "**/*.percy.jsx"');

  if (code !== 0) {
    shell.exit(code);
  }
};
