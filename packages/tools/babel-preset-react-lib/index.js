module.exports = () => ({
  presets: [
    '@babel/react',
    [
      '@babel/preset-env',
      {
        modules: 'cjs',
        useBuiltIns: 'usage',
        loose: true,
      },
    ],
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
  ],
});
