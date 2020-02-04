const path = require('path');

const { IS_DEVELOPMENT = false } = process.env;

const ENV_DEV_FILE_PATH = path.resolve(__dirname, '..', '..', '.env.test');

module.exports = { IS_DEVELOPMENT, ENV_DEV_FILE_PATH };
