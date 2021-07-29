const webpack = require('webpack');
const {
  production: webpackConfig,
} = require('@astral-frontend/webpack-config');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');

const { printEnvironmentInfo } = require('../../utils');
const log = require('../../utils/log');

module.exports = () => {
  process.env.BABEL_ENV = 'production';
  process.env.NODE_ENV = 'production';
  log.info('Creating an optimized production build...');
  printEnvironmentInfo({
    getBuildModeType: BUILD_MODE_TYPES => BUILD_MODE_TYPES.production,
  });

  const compiler = webpack(webpackConfig);

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      let messages;

      if (err) {
        if (!err.message) {
          return reject(err);
        }

        messages = formatWebpackMessages({
          errors: [err.message],
          warnings: [],
        });
      } else {
        const rawMessages = stats.toJson({ moduleTrace: false }, true);

        messages = formatWebpackMessages({
          errors: rawMessages.errors.map(e => e.message),
          warnings: rawMessages.warnings.map(e => e.message),
        });
      }
      if (messages.errors.length) {
        if (messages.errors.length > 1) {
          messages.errors.length = 1;
        }

        return reject(new Error(messages.errors.join('\n\n')));
      }

      return resolve({
        stats,
        warnings: messages.warnings,
      });
    });
  });
};
