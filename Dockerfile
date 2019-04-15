# build
FROM node:9 AS build-env
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY yarn.lock /usr/src/app/
RUN yarn install

COPY . /usr/src/app/
RUN yarn build-storybook

# run
FROM nginx

COPY --from=build-env /usr/src/app/storybook-static /usr/share/nginx/html
