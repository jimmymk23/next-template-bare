#! /usr/bin/env node
'use strict';

const appName = process.argv[2];
const { spawnSync } = require('child_process');
const url = 'https://github.com/jimmymk23/nextjs-starter.git';

spawnSync('git', ['clone', url, `${process.cwd()}/${appName}`]);
spawnSync('npm', ['install', '--prefix', `${process.cwd()}/${appName}`]);

console.log(
	'\n\n\n\nYour bare-bones Next.js starter template has been successfully installed!\n\n'
);
console.log(`$ cd ${appName}`);
console.log('$ npm start\n\n');
