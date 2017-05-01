#!/usr/bin/env node

var fs = require("fs");
var util = require('util');
var shell = require('shelljs');
var argv = require('yargs').argv;
var file = require('./fileSearcher');

var origin = "https://github.com/Donny2333/angular-seed.git";
var method = process.argv[2] || 'start';
var local = process.argv[3] || 'dufu';

if (!shell.which('git')) {
    shell.echo('Sorry, this script requires git');
    shell.exit(1);
}

switch (method) {
    case 'start':
        if (shell.exec(util.format("git clone %s %s", origin, local)).code === 0) {
            file.replace([__dirname, local].join('\\'), /(seed|angular seed|angular-seed)/ig, local);
            shell.cd(local);
            shell.exec('npm install');
            shell.exec('bower install');
        }
        break;

    case 'serve':
        // Todo: launch the web project
        break;

    case 'build':
        // Todo: build the project
        break;

    default:
        break;
}