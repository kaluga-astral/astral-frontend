#!/usr/bin/env node

const build = require('./tasks/build');
const postbuild = require('./tasks/postbuild');
const release = require('./tasks/release');

const [, , task] = process.argv;

switch (task) {
  case 'build':
    build();
    break;
  case 'postbuild':
    postbuild();
    break;
  case 'release':
    release();
    break;
  default:
    // eslint-disable-next-line no-console
    console.error('Task not found');
    process.exit(1);
    break;
}
