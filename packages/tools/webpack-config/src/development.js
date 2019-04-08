const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const getPaths = require('./utils/getPaths');

const commonConfig = require('./common');

const { appSrc } = getPaths();

module.exports = merge(commonConfig, {
  mode: 'development',

  devtool: 'cheap-module-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      cache: true,
      inject: false,
      template: path.resolve(appSrc, 'index.html'),
    }),
  ],
});
