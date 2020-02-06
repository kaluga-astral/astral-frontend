module.exports = {
  plugins: ['prettier'],
  extends: ['airbnb-base', 'prettier'],
  parser: 'babel-eslint',
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    quotes: ['error', 'single'],
    'no-param-reassign': [2, { props: false }],
  },
  env: {
    node: true,
    jest: true,
  },
};
