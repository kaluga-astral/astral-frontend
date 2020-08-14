# build
FROM node:10.15.1 AS build

WORKDIR /usr/src/app/astral-frontend

COPY ./ ./

RUN yarn

RUN yarn run docz:build

# run
FROM nginx
COPY --from=build /usr/src/app/astral-frontend/.docz/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
