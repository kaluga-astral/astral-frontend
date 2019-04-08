const webpack = require('webpack');
const { profile: webpackConfig } = require('@astral-frontend/webpack-config');

const {
  printEnvironmentInfo,
  getBuildResult,
  printBuildSummary,
} = require('../../utils');

module.exports = () => {
  process.env.BABEL_ENV = 'production';
  process.env.NODE_ENV = 'production';

  const compiler = webpack(webpackConfig);

  printEnvironmentInfo({ getBuildModeType: BUILD_MODE_TYPES => BUILD_MODE_TYPES.production });
  compiler.run((err, stats) => {
    const buildResult = getBuildResult(err, stats);

    printBuildSummary(buildResult);
  });
};
