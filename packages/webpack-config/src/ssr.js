// const path = require('path');
// const merge = require('webpack-merge');
// // const nodeExternals = require('webpack-node-externals');
// const TerserPlugin = require('terser-webpack-plugin');
// const ManifestPlugin = require('webpack-manifest-plugin');
// const AssetsPlugin = require('assets-webpack-plugin');

// // const { getPaths } = require('../utils');

// const {
//   appClientEntry,
//   // appServerEntry,
//   appDist,
// } = getPaths();

// const mode = 'development';

// const commonConfig = {
//   mode,
//   module: {
//     strictExportPresence: true,
//     rules: [
//       {
//         parser: {
//           requireEnsure: false,
//         },
//       },
//       {
//         // TODO: возможно имеет смысл разделить на серверный и клиентский loader
//         test: /\.jsx?$/,
//         exclude: /(node_modules)/,
//         use: [
//           'thread-loader',
//           {
//             loader: 'babel-loader',
//             options: {
//               // sourceType: 'unambiguous',
//               presets: ['@astral/babel-preset-react-app'],
//             },
//           },
//         ],
//       },
//       // {
//       //   test: /\.(png|jpe?g|gif)$/i,
//       //   use: [
//       //     'thread-loader',
//       //     // 'cache-loader',
//       //     {
//       //       loader: 'url-loader',
//       //       options: {
//       //         limit: 10 * 1024,
//       //       },
//       //     },
//       //   ],
//       // },
//       // {
//       //   test: /\.svg$/,
//       //   use: [
//       //     'thread-loader',
//       //     // 'cache-loader',
//       //     'svg-inline-loader',
//       //   ],
//       // },
//       // {
//       //   test: /\.(jpe?g|png|gif)$/,
//       //   use: [
//       //     'thread-loader',
//       //     // 'cache-loader',
//       //     'image-webpack-loader',
//       //   ],
//       //   enforce: 'pre',
//       // },
//       // {
//       //   test: /\.(woff|woff2|eot|ttf|otf)$/,
//       //   use: [
//       //     // 'thread-loader',
//       //     // 'cache-loader',
//       //     'file-loader',
//       //   ],
//       // },
//       // {
//       //   test: /\.(pdf)$/,
//       //   use: [
//       //     'thread-loader',
//       //     // 'cache-loader',
//       //     'file-loader?minetype=application/pdf',
//       //   ],
//       // },
//     ],
//   },
// };

// const clientConfig = merge(commonConfig, {
//   name: 'client',
//   target: 'web',
//   entry: appClientEntry,
//   output: {
//     path: path.resolve(appDist, 'client'),
//     publicPath: '/',
//     filename: '[name].[chunkhash].js',
//   },
//   resolve: {
//     extensions: ['.js', '.jsx'],
//   },
//   plugins: [
//     new ManifestPlugin(),
//     // TODO: keepInMemory=true for mode='development'
//     new AssetsPlugin({
//       entrypoints: true,
//       path: path.resolve(appDist),
//     }),
//   ],
//   optimization: {
//     minimizer: [
//       new TerserPlugin({
//         parallel: true,
//         cache: true,
//         // sourceMap: true,
//         terserOptions: {
//           parse: {
//             ecma: 8,
//           },
//           compress: {
//             ecma: 5,
//             warnings: false,
//             comparisons: false,
//             inline: 2,
//           },
//           mangle: {
//             safari10: true,
//           },
//           output: {
//             ecma: 5,
//             comments: false,
//             ascii_only: true,
//           },
//         },
//       }),
//     ],
//     splitChunks: {
//       chunks: 'all',
//     },
//     runtimeChunk: true,
//   },
// });

// // const serverConfig = merge(commonConfig, {
// //   name: 'server',
// //   target: 'node',
// //   externals: [
// //     nodeExternals({
// //       whitelist: [/^@astral/, /^lodash/],
// //     }),
// //     nodeExternals({
// //       // FIXME: modulesDir указывает на корневую папку node_modules
// //       // при использовании yarn workspaces все модули в корневой папке
// //       // это может не работать в случае использования npm пакета
// //       // но возможно в таком случае сработает первый инстанс nodeExternals()
// //       modulesDir: path.resolve(__dirname, '../../../../../node_modules'),
// //       whitelist: [/^@astral/, /^lodash/],
// //     }),
// //   ],
// //   entry: appServerEntry,
// //   output: {
// //     path: path.resolve(appDist, 'server'),
// //     filename: 'index.js',
// //   },
// //   resolve: {
// //     extensions: ['.js', '.jsx', '.json'],
// //   },
// // });

// // module.exports = [clientConfig, serverConfig];
// // module.exports = [serverConfig];
// // module.exports = [clientConfig];
