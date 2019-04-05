const { Transform } = require('stream');
const fs = require('fs');
const path = require('path');
const cacheManager = require('cache-manager');
const express = require('express');
const expressStaticGzip = require('express-static-gzip');
// const logger = require('morgan');

// const isDevelopment = process.env.NODE_ENV === 'development';

const cache = cacheManager.caching({ store: 'memory', max: 100, ttl: 10 });
const createCacheStream = (key) => {
  const bufferedChunks = [];
  return new Transform({
    transform(data, enc, cb) {
      bufferedChunks.push(data);
      cb(null, data);
    },
    flush(cb) {
      cache.set(key, Buffer.concat(bufferedChunks));
      cb();
    },
  });
};
const getStaticAssets = () => {
  const mapStaticAssetURIsToTagProps = jsAssetsURI => ({
    src: jsAssetsURI,
  });
  const {
    main: { js: jsAssetURIs },
  } = JSON.parse(
    fs.readFileSync(
      path.resolve(
        fs.realpathSync(process.cwd()),
        'dist',
        'webpack-assets.json',
      ),
    ),
  );
  const js = jsAssetURIs.map(mapStaticAssetURIsToTagProps);

  return {
    js,
  };
};
const staticFilesMiddleware = expressStaticGzip(
  path.resolve(fs.realpathSync(process.cwd()), 'dist', 'client'),
  {
    index: false,
    enableBrotli: true,
    orderPreference: ['br', 'gz'],
    setHeaders(res) {
      res.setHeader('Cache-Control', 'public, max-age=31536000');
    },
  },
);

const makeServer = ({ renderDocumentToStream }) => {
  const app = express();

  // app.use(logger('combined'));

  app.use('/', staticFilesMiddleware);

  // if (isDevelopment) {
  //   const webpack = require('webpack');
  //   const webpackDevMiddleware = require('webpack-dev-middleware');
  //   const webpackHotMiddleware = require('webpack-hot-middleware');
  //   const webpackConfig = require('@astral-frontend/webpack-config');

  //   const webpackInstance = webpack(webpackConfig);
  //   const clientCompiler = webpackInstance.compilers.find(
  //     cmpl => cmpl.name === 'client',
  //   );
  //   // const serverCompiler = webpackInstance.compilers.find(cmpl => cmpl.name === 'server');

  //   app.use(
  //     webpackDevMiddleware(clientCompiler, {
  //       hot: true,
  //       stats: 'errors-only',
  //     }),
  //   );
  //   app.use(webpackHotMiddleware(clientCompiler));
  // }

  app.get('*', (request, response) => {
    const staticAssets = getStaticAssets();
    const routerContext = {};
    const renderStream = renderDocumentToStream({
      staticAssets,
      request,
      routerContext,
    });
    const cacheStream = createCacheStream(request.path);

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('<!DOCTYPE html>');

    cacheStream.pipe(response);
    renderStream.pipe(cacheStream);
  });

  return app;
};

module.exports = {
  makeServer,
};
