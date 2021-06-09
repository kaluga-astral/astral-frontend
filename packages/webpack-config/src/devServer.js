const { getPaths } = require('./utils');

const { appDist } = getPaths();

module.exports = {
  compress: true,
  historyApiFallback: true,
  stats: 'minimal',
  contentBase: appDist,
  proxy: {
    '/api': {
      target: 'http://localhost:32777',
      // pathRewrite: { '^/api': '' },
    },
    '/api/notifications': {
      ws: true,
      target: 'ws://localhost:32777/',
    },
  },
};
