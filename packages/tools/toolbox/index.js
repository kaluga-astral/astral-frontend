#!/usr/bin/env node

const build = require('./tasks/build');

const [, , task] = process.argv;

switch (task) {
  case 'build':
    build();
    break;
  default:
    console.log(`Task "${task}" not found`);
    process.exit(1);
    break;
}
