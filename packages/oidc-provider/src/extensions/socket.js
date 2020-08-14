const cookieParser = require('cookie-parser');
const { compose } = require('compose-middleware');

const { refreshToken, customizationRequest } = require('../middlewares');

const { authStrategyService } = require('../services/authStrategy');

const { skipIfAuthorized } = require('../utils/auth');

const listenerSocketError = socket => {
  socket.on('error', err => {
    console.error(err.message);
  });
};

// данная функция является обработчиком события upgrade - server.on('upgrade', oidcSocketConnectProtected())
const createSocketConnectOidcProtected = sessionHttpMiddleware => done => (
  req,
  socket,
  head,
) => {
  // необходимо обрабатывать событие error, иначе exception при destroy будет не перехвачен и сервер обвалится
  listenerSocketError(socket);

  // для сокетов нет res, поэтому для совместимости с express middlewares необходимо его замокать
  const resMock = {};

  const destroySocket = () => {
    socket.destroy(
      new Error('User is not authorized. Socket Connection broken'),
    );
  };

  const socketProtectedPipeline = compose([
    cookieParser(),

    sessionHttpMiddleware,

    authStrategyService.initialize(),
    authStrategyService.session(),

    // если пользователь не авторизован, то необходимо сразу разорвать socket соединение
    skipIfAuthorized(destroySocket),

    // если не удалось рефрешнуть токен, то необходимо закрыть socket соединение - destroySocket
    // TODO: может возникнуть ситуация, когда по случайности в refreshToken добавятся какие-то операции с res, тогда все обвалится
    refreshToken(destroySocket),

    // добавляет в хедеры токен
    customizationRequest,
  ]);

  const handleEndingProtectedPipeline = () => {
    done(req, socket, head);
  };

  socketProtectedPipeline(req, resMock, handleEndingProtectedPipeline);
};

module.exports = {
  createSocketConnectOidcProtected,
};
