#!/usr/bin/env node

const prebuild = require('./tasks/prebuild');
const build = require('./tasks/build');
const buildTs = require('./tasks/buildTs');
const postbuild = require('./tasks/postbuild');
const release = require('./tasks/release');

const [, , task] = process.argv;

switch (task) {
  case 'prebuild':
    prebuild();
    break;
  case 'build':
    build();
    break;
  case 'build-ts':
    buildTs();
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
