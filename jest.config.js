module.exports = {
  verbose: true,
  resetMocks: true,
  transform: {
    '\\.(js|jsx|ts|tsx)?$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!(lodash-es))'],
  setupFilesAfterEnv: ['<rootDir>/setupEnzyme.js'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
