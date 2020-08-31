const logger = require('../logger');

const { SYNC_REQUESTS_CHANNEL_NAME } = require('../../config/syncRequests');

const createUnlockResourceMessage = (resourceName, sessionID) =>
  JSON.stringify({ resourceName, sessionID, unlock: true });

const isUnlockedResource = ({
  channelMessage,
  observableSessionID,
  observableResourceName,
}) => {
  const { resourceName, sessionID, unlock } = JSON.parse(channelMessage);
  const isObservableResource = resourceName === observableResourceName;
  const isObservableSession = sessionID === observableSessionID;

  return unlock && isObservableResource && isObservableSession ? unlock : false;
};

const generateLockStoreKey = (resourceName, sessionID) =>
  `${resourceName}-${sessionID}-lock`;

const waitForUnlockResource = (storeSubscriber, resourceName, req) =>
  new Promise(resolve => {
    storeSubscriber.on('message', (channelName, message) => {
      const { sessionID } = req;
      const isSyncReqChannel = channelName === SYNC_REQUESTS_CHANNEL_NAME;
      const resourceIsUnlocked = isUnlockedResource({
        channelMessage: message,
        observableResourceName: resourceName,
        observableSessionID: sessionID,
      });

      if (isSyncReqChannel && resourceIsUnlocked) {
        resolve();
      }
    });
  });

const lockResource = (storeClient, resourceName, req) => {
  const { sessionID } = req;

  storeClient.set(generateLockStoreKey(resourceName, sessionID), 'true');
};

const unlockResource = async ({
  storeClient,
  storePublisher,
  resourceName,
  req,
}) => {
  const { sessionID } = req;

  storeClient.set(generateLockStoreKey(resourceName, sessionID), 'false');

  // оповещаем всех подписчиков, что ресурс открыт
  storePublisher.publish(
    SYNC_REQUESTS_CHANNEL_NAME,
    createUnlockResourceMessage({ resourceName, sessionID }),
  );

  return Promise.resolve();
};

const subscribeToSyncReqChannel = storeSubscriber =>
  new Promise(resolve => {
    storeSubscriber.subscribe(SYNC_REQUESTS_CHANNEL_NAME);

    storeSubscriber.on('subscribe', channelName => {
      if (channelName === SYNC_REQUESTS_CHANNEL_NAME) resolve();
    });
  });

const checkLockResource = async (storeClient, resourceName, req) => {
  const isUnlockedStoreRes = await storeClient.getAsync(
    generateLockStoreKey(resourceName, req.sessionID),
  );

  return JSON.parse(isUnlockedStoreRes);
};

const pauseReqLockedResource = async (
  storeClient,
  storeSubscriber,
  syncResourceName,
  req,
) => {
  // проверяем заблокирован ли ресурс
  const resourceIsLocked = await checkLockResource(
    storeClient,
    syncResourceName,
    req,
  );

  if (resourceIsLocked) {
    logger.info(
      req,
      `Ресурс "${syncResourceName}" заблокирован, ожидание разблокировки`,
    );

    // если ресурс заблокирован - ждем его разблокировки
    await waitForUnlockResource(storeSubscriber, syncResourceName, req);

    logger.info(req, `Ресурс "${syncResourceName}" разблокирован`);
  }
};

module.exports = {
  waitForUnlockResource,
  generateLockStoreKey,
  subscribeToSyncReqChannel,
  lockResource,
  unlockResource,
  checkLockResource,
  pauseReqLockedResource,
  createUnlockResourceMessage,
  isUnlockedResource,
};
