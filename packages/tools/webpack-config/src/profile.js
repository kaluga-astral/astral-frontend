const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');

const productionConfig = require('./production');

module.exports = merge(productionConfig, {
  plugins: [new DuplicatePackageCheckerPlugin(), new BundleAnalyzerPlugin()],
});
