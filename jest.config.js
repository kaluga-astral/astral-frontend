module.exports = {
  verbose: true,
  transform: {
    '\\.(js|jsx)?$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!(lodash-es)/)'],
  moduleFileExtensions: ['js', 'jsx'],
};
