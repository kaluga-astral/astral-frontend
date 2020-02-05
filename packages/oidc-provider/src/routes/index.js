const router = require('express').Router();

const { initializeLogoutRouter } = require('./logout');
const { initializeProfileRouter } = require('./profile');

const initializeRouter = ({ oidcClient }) => {
  router.use('/logout', initializeLogoutRouter(oidcClient));
  router.use('/profile', initializeProfileRouter(oidcClient));

  return router;
};

module.exports = { initializeRouter };
