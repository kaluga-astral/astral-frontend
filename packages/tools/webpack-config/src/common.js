const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

const getPaths = require('./utils/getPaths');

const { appClientEntry, appDist } = getPaths();
const { RELEASE_STAGE } = process.env;

module.exports = {
  target: 'web',

  entry: appClientEntry,

  output: {
    path: appDist,
    publicPath: '/',
    filename: '[name].[chunkhash].js',
  },

  module: {
    strictExportPresence: true,
    rules: [
      {
        parser: {
          requireEnsure: false,
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: [
          'thread-loader',
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: ['@astral-frontend/babel-preset-react-app'],
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          'thread-loader',
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          'thread-loader',
          {
            loader: 'svg-inline-loader',
            options: {
              extract: true,
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: ['thread-loader', 'image-webpack-loader'],
        enforce: 'pre',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['thread-loader', 'url-loader'], // хз почему file-loader не работает
      },
      {
        test: /\.(pdf)$/,
        use: ['thread-loader', 'file-loader?minetype=application/pdf'],
      },
    ],
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      RELEASE_STAGE,
    }),
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },

  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        cache: true,
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
      }),
    ],
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: true,
  },
};
