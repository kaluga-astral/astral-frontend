const redis = require('redis');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

const connectStore = () => {
  const client = redis.createClient({ url: 'http://10.0.3.9:5703' });
  const store = new RedisStore({ client });

  return store;
};

module.exports = { connectStore };
