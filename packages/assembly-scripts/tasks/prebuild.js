const shell = require('shelljs');

module.exports = () => {
  const { code } = shell.rm('-rf', './lib');

  if (code !== 0) {
    shell.exit(code);
  }
};
