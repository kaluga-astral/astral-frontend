#!/usr/bin/env node

const build = require('./tasks/build');
const postbuild = require('./tasks/postbuild');

const [, , task] = process.argv;

switch (task) {
  case 'build':
    build();
    break;
  case 'postbuild':
    postbuild();
    break;
  default:
    console.log('Task not found');
    process.exit(1);
    break;
}
