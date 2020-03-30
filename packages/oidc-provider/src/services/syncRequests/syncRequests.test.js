const {
  generateLockStoreKey,
  createUnlockResourceMessage,
  resourceIsUnlocked,
} = require('./syncRequests');

describe('generateLockStoreKey', () => {
  it('генерирует key для записи флага lock resource в store', () => {
    const resourceName = 'refresh_token';
    const sessionID = 'dsaasdf3dsa';

    expect(generateLockStoreKey(resourceName, sessionID)).toBe(
      'refresh_token-dsaasdf3dsa-lock',
    );
  });
});

describe('createUnlockResourceMessage', () => {
  it('генерирует JSON, который будет передан через канал для открытия ресурса', () => {
    const resourceName = 'refresh';
    const sessionID = 'sdase32fdas';

    expect(createUnlockResourceMessage(resourceName, sessionID)).toBe(
      '{"resourceName":"refresh","sessionID":"sdase32fdas","unlock":true}',
    );
  });
});

describe('resourceIsUnlocked', () => {
  it('если в канал пришло сообщение о разблокировке наблюдаемого ресурса и сессии вернет true', () => {
    const observableResourceName = 'refresh';
    const observableSessionID = 'sdase32fdas';
    const unlockObservableResourceMessage =
      '{"resourceName":"refresh","sessionID":"sdase32fdas","unlock":true}';

    expect(
      resourceIsUnlocked({
        channelMessage: unlockObservableResourceMessage,
        observableSessionID,
        observableResourceName,
      }),
    ).toBe(true);

    expect(
      resourceIsUnlocked({
        channelMessage:
          '{"resourceName":"no_observe","sessionID":"sdase32fdas","unlock":true}',
        observableSessionID,
        observableResourceName,
      }),
    ).toBe(false);
    expect(
      resourceIsUnlocked({
        channelMessage:
          '{"resourceName":"refresh","sessionID":"_","unlock":true}',
        observableSessionID,
        observableResourceName,
      }),
    ).toBe(false);
  });
});
