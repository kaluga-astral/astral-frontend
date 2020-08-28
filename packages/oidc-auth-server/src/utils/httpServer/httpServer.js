const { errorLogger, createMainErrorHandle } = require('../../middlewares');

const addErrorsHandlers = (app, params) => {
  const { internalErrorTemplatePath } = params;

  app.use(errorLogger);
  app.use(createMainErrorHandle({ internalErrorTemplatePath }));
};

const prepareForStartServer = (app, server, errorHandlersParams) => port => {
  // в самом конце должны быть обработчки ошибок, поэтому добавляем их перед запуском сервера
  addErrorsHandlers(app, errorHandlersParams);

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
    app.use(entry, oidcProtectedHttpProxyMiddleware({ target, changeOrigin }));
  });

module.exports = { prepareForStartServer, createHttpProxyPipelines };
