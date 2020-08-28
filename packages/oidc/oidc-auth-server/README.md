# Oidc auth server
Готовая часть сервера для произведения oidc авторизации и проксирования всех клиентских запросов (http и socket).

Сервер написан с использованием express. Данный сервер можно расширять через app из возвращаемого значения ```initializeServer```.

# Состав
Сервер по дефолту содержит следующие фукнции:
- Логирование запросов
- Обработка ошибок (если возникла ошибка при запросе html, то вернется теемплейт ошибки)
- Инициализация роута для logout
- Инициализация роута для получения пользовательских данных
- Инициализация путей, защищенных авторизацией с проксированием
- Проксирование socket, защищенное авторизацией
- Поддержка горизонтального масштабирования
- Сжатие ответов в gzip
- Отключение x-powered-by заголовка

# Пример использования
Пример использования находится в ```./example```.

# API

## initializeServer
```js
  const {
    app,
    startServer,
    oidcProtectedHttpProxy,
    oidcProtected,
    createProxyMiddleware,
    storeClient
  } = await initializeServer({
    oidcParams: OIDC_PARAMS,
    sessionParams: SESSION_PARAMS,
    storeConnectUrl: 'http://10.0.3.9:5703',
    logoutRoutePath: '/account/logout',
    getProfileRoutePath: '/account/profile',
    socketProtectedProxyTarget: PROXY_URL,
    httpProtectedProxyConfigs: [
      { entry: ['/main'], target: PROXY_URL },
      { entry: ['/contacts'], target: PROXY_URL, changeOrigin: true },
    ],
    internalErrorTemplatePath: path.resolve(__dirname, 'static', 'error.html'),
  });
```

### Входные параметры

* ```storeConnectUrl```: ```required <String>```. Путь для подключения к хранилищу (Redis);

* ```oidcParams```: ```required <Object>```
    * ```identityUrl```: ```required <String>```. Путь до instance identity ('https://identity.astral-dev.ru');
    * ```clientId```: ```required <String>```. client_id для oidc;
    * ```clientSecret```: ```required <String>```. client_secret для oidc;
    * ```redirectUri```: ```required <String>```. Pathname должен быть отличным от '/', так как данный pathname будет автоматически защищен авторизацией (пример, ```http://localhost:3000/auth/cb```). Данный route являются служебным и служит для парсинга параметров identity (использовать его для своих целей не рекомендуется). Указывается один uri, на него пользователь будет возвращен после успешной авторизации для получения токенов. После успешного получения токенов пользователь будет возвращен на тот route, на который он хотел попасть перед редиректом на Identity;
    * ```postLogoutRedirectUri```: ```required <String>```. Указывается один uri, на который пользователь будет перенаправлен после выхода;
    * ```scope```: ```required <String>```. scope для oidc (переданное значение будет приклеяно к 'openid offline_access') - определяет границы доступа к пользовательской информации.Значения отделяются друг от друга пробелом (пример, ```email profile```);
    * ```refreshTokenMaxAge```: ```required <Number>```. время жизни refresh токена в секундах;
    * ```fallbackDesiredReference```: ```<String>```. Путь, на который пользователь будет перенаправлен после авторизации в случае, если не удалось заранее сохранить путь, на который он хотел попасть перед редиректом. (По дефолту - ```'/'```)

* ```sessionParams```: ```required <Object>```
    * ```sessionSecret```: ```required <String>```. Любая строка. Необходима для инициализации сессии;
    * ```allowSubdomains```: ```<String>```. если необходима поддержка поддоменов, то необходимо указать этот параметр (пример, ```.astral.ru```);
    * ```allowOrigin```: ```<String>```. если необходима поддержка поддоменов, то необходимо указать эту переменную (пример, https://astral.ru). Она будет подставлена в заголовок Access-control-allow-origin при ответе OIDC Provider;

* ```logoutRoutePath```: ```required <String>```. Route, по которому будет осущеcтвляться logout.
* ```getProfileRoutePath```: ```required <String>```. Route, по которому можно будет получить данные пользователя (наличие каких либо данных декларируются scope).

* ```internalErrorTemplatePath```: ```required <String>```. Path до темплейта ошибки. Данный темплейт будет возвращаться, если на сервере произойдет непредвиденная ошибка при запросе html.

* ```socketProtectedProxyTarget```: ```<String>```. Url, на который будут проксироваться (с авторизацией) все socket запросы.

* ```httpProtectedProxyConfigs```: ```<Array<{ entry: String, target: String, changeOrigin: Boolean }>>```. Список конфигураций для защищенных routes.
  * ```entry```: ```required <Array<String>>```. Входные routes. На список переданных routes будет утсановлена защита авторизацией.
  * ```target```: ```required <String>```. Url, на который будут проксироваться все запросы с entry.
  * ```changeOrigin```: ```<Boolean>```

### Выходные значения

* ```startServer```: ```<Port => undefined>```. Функция, с помощью которой необходимо запускать сервер. При вызове функции перед запуском сервера просходит добавление обработчиков ошибок.
  * ```Port```: ```required <Number>```. Порт, на котором будет запущен сервер.

* ```app```: ```<Object>```. Express app. Можно использовать как обычный express app, за исключением того, что запуск должен происходить с помощью функции ```startServer```.

* ```oidcProtectedHttpProxy```: ```<ProxyParams => undefined>```. Middleware, который защищает route авторизацией и проксирует http запросы на указанный target.
  * ```ProxyParams```: ```required <Object>```. Параметры для http-proxy.
    * ```target```: ```required <String>```. Url, на который будут проксироваться все запросы, если пользователь авторизован.
    * ```changeOrigin```: ```<Boolean>```

* ```oidcProtected``` - Middleware, который необходимо добавлять к роутам, для которых необходима авторизация;

* ```createProxyMiddleware``` - функция из пакета http-proxy-middleware

* ```storeClient``` - RedisClient
