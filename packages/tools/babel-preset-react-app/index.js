module.exports = () => ({
  presets: [
    '@babel/react',
    [
      '@babel/preset-env',
      {
        modules: false,
        useBuiltIns: 'usage',
        loose: true,
        corejs: 3,
      },
    ],
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-syntax-dynamic-import',
    ['@babel/plugin-proposal-private-methods', { loose: true }],
  ],
  env: {
    test: {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        '@babel/preset-react',
      ],
    },
  },
});
