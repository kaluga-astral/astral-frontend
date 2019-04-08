const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');

const getPaths = require('./utils/getPaths');
const commonConfig = require('./common');

const { appSrc } = getPaths();

module.exports = merge(commonConfig, {
  mode: 'production',

  devtool: 'hidden-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      cache: true,
      template: path.resolve(appSrc, 'index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new FaviconsWebpackPlugin({
      logo: path.resolve(appSrc, 'logo.svg'),
      background: 'transparent',
      persistentCache: false,
      icons: {
        android: false,
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false,
      },
    }),
    new CompressionPlugin({
      cache: true,
    }),
    new BrotliPlugin(),
  ],
});
