// eslint-disable-next-line import/no-extraneous-dependencies
import babelPresetReactApp from '@astral-frontend/babel-preset-react-app';

export default {
  title: 'Astral UI-Kit',
  description: 'Документация к UI-Kit',
  wrapper: 'docz/Wrapper.jsx',
  modifyBabelRc: () => ({
    babelrc: false,
    ...babelPresetReactApp(),
  }),
  modifyBundlerConfig: (config) => {
    config.resolve.extensions.push('.css');
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    });

    return config;
  },
};
