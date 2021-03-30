module.exports = () => {
  return {
    presets: [
      require('@babel/preset-react').default,
      [
        require('@babel/preset-env').default,
        {
          modules: false,
          useBuiltIns: 'usage',
          loose: true,
          corejs: 3,
        },
      ],
    ],
    plugins: [
      require('@babel/plugin-transform-runtime').default,
      require('@babel/plugin-proposal-class-properties').default,
      require('@babel/plugin-proposal-object-rest-spread').default,
      require('@babel/plugin-proposal-optional-chaining').default,
      require('@babel/plugin-proposal-nullish-coalescing-operator').default,
      require('@babel/plugin-syntax-dynamic-import').default,
    ],
    env: {
      test: {
        presets: [
          [require('@babel/preset-env').default, { targets: { node: 'current' } }],
          require('@babel/preset-react').default,
        ],
      },
    },
  }
};
