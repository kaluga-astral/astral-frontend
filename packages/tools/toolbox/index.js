#!/usr/bin/env node

const build = require('./tasks/build');
const dev = require('./tasks/dev');
const profile = require('./tasks/profile');
// const start = require('./tasks/start');
// const test = require('./tasks/test');

const [, , task] = process.argv;

switch (task) {
  case 'build':
    build();
    break;
  case 'dev':
    dev();
    break;
  case 'profile':
    profile();
    break;
  // case 'start':
  //   start();
  //   break;
  // case 'test':
  //   test();
  //   break;
  default:
    // eslint-disable-next-line no-console
    console.log('Task not found');
    process.exit(1);
    break;
}
