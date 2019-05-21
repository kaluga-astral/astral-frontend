module.exports = () => ({
  presets: [
    '@babel/react',
    [
      '@babel/preset-env',
      {
        modules: false,
        useBuiltIns: 'usage',
      },
    ],
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-syntax-dynamic-import',
  ],
});
