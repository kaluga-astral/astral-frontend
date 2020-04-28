const { errorLogger, mainErrorHandle } = require('../../middlewares');

const addErrorsHandlers = app => {
  app.use(errorLogger);
  app.use(mainErrorHandle);
};

const prepareForStartServer = (app, server) => port => {
  // в самом конце должны быть обработчки ошибок, поэтому добавляем их перед запуском сервера
  addErrorsHandlers(app);

  server.listen(port, () => {
    console.info(`Server listening on localhost:${port}`);
  });
};

const createHttpProxyPipelines = (
  app,
  oidcProtectedHttpProxyMiddleware,
  httpProxyConfigs,
) =>
  httpProxyConfigs.forEach(({ entry, target, changeOrigin }) => {
    entry.forEach(entryRoute => {
      app.use(
        entryRoute,
        oidcProtectedHttpProxyMiddleware({ target, changeOrigin }),
      );
    });
  });

module.exports = { prepareForStartServer, createHttpProxyPipelines };
