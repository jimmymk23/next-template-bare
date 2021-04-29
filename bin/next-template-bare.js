#! /usr/bin/env node
'use strict';

const appName = process.argv[2];
const { spawnSync } = require('child_process');
const url = 'https://github.com/jimmymk23/next-starter.git';

spawnSync('git', ['clone', url, `${process.cwd()}/${appName}`]);
spawnSync('npm', ['install', '--prefix', `${process.cwd()}/${appName}`]);

console.log(
	`\n\nYour bare-bones Next.js starter template has been successfully installed!\n\n
    $ cd ${appName}\n
    $ npm start\n\n`
);
