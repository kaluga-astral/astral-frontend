module.exports = {
  presets: [
    "@babel/react",
    [
      "@babel/preset-env",
      {
        modules: "cjs",
        loose: true
      }
    ]
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-transform-runtime"
  ]
};
