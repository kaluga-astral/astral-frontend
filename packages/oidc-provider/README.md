# OIDC-provider
Предназначен для работы с OIDC авторизацией и работой с токенами Identity.
В данной реализации поддерживает только code flow.

## Интеграция
Пример интеграции находится в директории ```./example```.

Для интегрирования OIDC-provider в Express сервер необходимо проиницализировать cookieParser, а затем oidcProvider (все есть в example).

## API
### initializeOidcProvider
```js
const { initializeOidcProvider } = require('@astral-frontend/oidc-provider');

const main = async () => {
 const { oidcProtected, logout, getProfile, storeClient } = await initializeOidcProvider(params);
}
```

Метод initializeOidcProvider необходим для инициализации oidc-provider. При инициализации будет создана express-session и зарегестрированы passport старатегии для авторизации и refresh token.
Также будет установлена связь с Identity.
initializeOidcProvider возвращает Promise, необходимо дождаться его выполнения.

#### Входные параметры initializeOidcProvider
Входные параметры initializeOidcProvider обязательны и являются объектом.

```params```: ```required <Object>```
* ```app```: ```required <Object>```. Express app;
* ```storeConnectUrl```: ```required <String>```. Путь для подключения к хранилищу (Redis);

* ```oidcParams```: ```required <Object>```
    * ```identityUrl```: ```required <String>```. Путь до instance identity ('https://identity.astral-dev.ru');
    * ```clientId```: ```required <String>```. client_id для oidc;
    * ```clientSecret```: ```required <String>```. client_secret для oidc;
    * ```redirectUri```: ```required <String>```. Указывается один uri, на него пользователь будет возвращен после успешной авторизации для получения токенов. После успешного получения токенов пользователь будет возвращен на тот route, на который он хотел попасть перед редиректом на Identity;
    * ```postLogoutRedirectUri```: ```required <String>```. Указывается один uri, на который пользователь будет перенаправлен после выхода;
    * ```scope```: ```required <String>```. scope для oidc (переданное значение будет приклеяно к 'openid offline_access') - определяет границы доступа к пользовательской информации.Значения отделяются друг от друга пробелом (пример, ```email profile```);
    * ```refreshTokenMaxAge```: ```required <Number>```. время жизни refresh токена в секундах;

* ```sessionParams```: ```required <Object>```
    * ```sessionSecret```: ```required <String>```. Любая строка. Необходима для инициализации сессии;
    * ```allowSubdomains```: ```<String>```. если необходима поддержка поддоменов, то необходимо указать этот параметр (пример, ```.astral.ru```);
    * ```allowOrigin```: ```<String>```. если необходима поддержка поддоменов, то необходимо указать эту переменную (пример, https://astral.ru). Она будет подставлена в заголовок Access-control-allow-origin при ответе OIDC Provider;

#### Выходные значения initializeOidcProvider
После успешной авторизации initializeOidcProvider вернет объект со следующими middleware:
- oidcProtected. Middleware, который необходимо добавлять к роутам, для которых необходима авторизация;
- logout. Middleware для выхода из текущего клиента;
- getProfile. Middleware для получения информации о пользователе;
- storeClient - redis client

## Принцип работы
В процессе обработки запроса middleware проверит наличие в coockie SessionID и если его там нет, то произведет редирект на Identity.

После успешной авторизации в cookie браузера появится connect.sid (session id). При всех последующий запросах id_token будет помещаться в headers request.

Middleware в ответ отсылает редирект только при получении html, в других случаях в ответ отсылается 401 с redirectUrl (отвественность за редирект перекладывается на клиента).

### Code flow
После авторизации на Identity пользователь получит code, затем для получения данных он пришлет его на сервер, на котором установлен OIDC-provider.
Middleware с помощью code сделает запрос на Identity и получит set tokens, на основе них проинициализируется сессия в Redis.

## Требование к клиенту
Необходимо обрабатывать все 401 ошибки на клиенте и делать редирект страницы на redirectUrl, который всегда будет находиться в теле ответа.

Если пользователь получил html, то он считается авторизованным (аккуратней с кэшированием html в браузере).
