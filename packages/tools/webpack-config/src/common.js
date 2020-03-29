const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const getPaths = require('./utils/getPaths');

const { appClientEntry, appDist } = getPaths();

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
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
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
        use: ['file-loader', 'image-webpack-loader'],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: ['image-webpack-loader'],
        enforce: 'pre',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 2048,
              name: 'fonts/[name].[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(pdf)$/,
        use: ['file-loader?minetype=application/pdf'],
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: ['graphql-tag/loader'],
      },
    ],
  },

  plugins: [
    new webpack.EnvironmentPlugin(process.env),
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css',
      chunkFilename: '[id].[chunkhash].css',
      ignoreOrder: false,
    }),
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },

  optimization: {
    namedModules: true,
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
