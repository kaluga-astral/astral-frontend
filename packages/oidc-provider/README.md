# OIDC-provider
Предназначен для работы с OIDC авторизацией и работой с токенами Identity.

## Интеграция
Пример интеграции находится в директории ```example```.

Для интегрирования OIDC-provider в Express сервер необходимо:


При развертывании необходимо указать следующие ENV переменные:
- **SERVER_PORT** - на каком порту будет запускаться прокси (required);
- **PROXY_URL** - проксируемый url (required);
- **SESSION_SECRET** - любая строка (required);
- **REDIS_URL** - путь до Redis (required);
- **IDENTITY_URL** - путь до instance identity (required);
- **CLIENT_ID** - client_id для oidc (required);
- **CLIENT_SECRET** - client_secret для oidc (required);
- **REDIRECT_URIS** - redirect_uris для oidc, значения отделяются друг от друга пробелом (пример, ```https://google.com https://yandex.com```) (required);
- **POST_LOGOUT_REDIRECT_URIS** - post_logout_redirect_uris для oidc - разрешенные редиректы после logout. Значения отделяются друг от друга пробелом (пример, ```https://google.com https://yandex.com```) (required);
- **SCOPE** - scope для oidc (default - 'openid offline_access') - определяет границы доступа к пользовательской информации.Значения отделяются друг от друга пробелом (пример, ```openid email profile```) (required)
- **REFRESH_TOKEN_MAX_AGE** - время жизни refresh токена в секундах (required)
- **ALLOW_SUBDOMAINS** - если необходима поддержка поддоменов, то необходимо указать эту переменную (пример, ```.astral.ru```)
- **ALLOW_ORIGIN** - если необходима поддержка поддоменов, то необходимо указать эту переменную (пример, ```https://astral.ru```). Она будет подставлена в заголовок Access-control-allow-origin при ответе данного сервера 401 ошибкой

## Принцип работы
Все запросы для которых надо получить защищенные данные должны проходить через данный прокси.
В процессе обработки запроса middleware проверит наличие в coockie SessionID и если его там нет, то произведет редирект на Identity.

После успешной авторизации в cookie браузера появится connect.sid (session id). При всех последующий запросах id_token будет помещаться в headers request.

Middleware в ответ отсылает редирект только при получении html, в других случаях в ответ отсылается 401 с redirectUrl (отвественность за редирект перекладывается на клиента).

### Code flow
После авторизации на Identity пользователь получит code, затем для получения данных он пришлет его на сервер, на котором установлен OIDC-provider-middleware.
Middleware с помощью code сделает запрос на Identity и получит set tokens, на основе них проинициализируется сессия в Redis.

## Требование к клиенту

Необходимо обрабатывать все 401 ошибки на клиенте и делать редирект страницы на redirectUrl, который всегда будет находиться в теле ответа.

Если пользователь получил html, то он считается авторизованным (аккуратней с кэшированием html в браузере).
