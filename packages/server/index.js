/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
const fs = require('fs');
const path = require('path');
const express = require('express');
const expressStaticGzip = require('express-static-gzip');
const logger = require('morgan');

const appDir = fs.realpathSync(process.cwd());
const appDist = path.resolve(appDir, 'dist');

const staticFilesMiddleware = expressStaticGzip(appDist, {
  index: false,
  enableBrotli: true,
  orderPreference: ['br', 'gz'],
  setHeaders(res) {
    res.setHeader('Cache-Control', 'public, max-age=31536000');
  },
});

const makeServer = () => {
  const server = express();

  server.disable('x-powered-by');

  server.use('/', staticFilesMiddleware);

  if (process.env.NODE_ENV === 'development') {
    const httpProxyMiddleware = require('http-proxy-middleware');
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const {
      development: webpackConfig,
      // devServer: webpackDevServerConfig,
    } = require('@astral-frontend/webpack-config');
    const compiler = webpack(webpackConfig);

    // TODO: вынести в аппликейшон
    server.use(
      '/api',
      httpProxyMiddleware({
        target: 'http://localhost:32777/',
      }),
    );

    server.use(
      '/api/notifications',
      httpProxyMiddleware({
        ws: true,
        target: 'ws://localhost:32777/',
      }),
    );

    server.use(
      webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        stats: 'minimal',
      }),
    );

    server.use('*', (req, res, next) => {
      const filename = path.join(compiler.outputPath, 'index.html');

      // eslint-disable-next-line consistent-return
      compiler.outputFileSystem.readFile(filename, (err, result) => {
        if (err) {
          return next(err);
        }
        res.set('content-type', 'text/html');
        res.send(result);
        res.end();
      });
    });
  }

  if (process.env.NODE_ENV === 'production') {
    server.use(logger('combined'));
  }

  return server;
};

module.exports = {
  makeServer,
};
