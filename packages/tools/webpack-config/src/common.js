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
          require.resolve('thread-loader'),
          {
            loader: require.resolve('babel-loader'),
            options: {
              cacheDirectory: true,
              cacheCompression: false,
              presets: [
                require.resolve('@astral-frontend/babel-preset-react-app'),
              ],
            },
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          require.resolve('file-loader'),
          // {
          //   loader: require.resolve('image-webpack-loader'),
          // },
        ],
      },
      {
        test: /\.(pdf)$/,
        use: ['file-loader?minetype=application/pdf'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: require.resolve('url-loader'),
            options: {
              limit: 2048,
              name: 'fonts/[name].[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: require.resolve('graphql-tag/loader'),
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
