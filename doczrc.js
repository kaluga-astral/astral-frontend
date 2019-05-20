// eslint-disable-next-line import/no-extraneous-dependencies
import babelPresetReactApp from '@astral-frontend/babel-preset-react-app';

export default {
  title: 'Astral UI-Kit',
  description: 'Документация к UI-Kit',
  modifyBabelRc: () => ({
    babelrc: false,
    presets: [babelPresetReactApp],
    plugins: ['@babel/plugin-proposal-export-default-from'],
  }),
};
