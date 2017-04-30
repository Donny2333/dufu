#!/usr/bin/env node

var shell = require('shelljs');
var argv = require('yargs').argv;
var Git = require('nodegit');
var repository = "https://github.com/Donny2333/angular-seed.git";
var method = process.argv[2];
var local = process.argv[3] || 'dufu';

if (!shell.which('git')) {
    shell.echo('Sorry, this script requires git');
    shell.exit(1);
}

switch (method) {
    case 'start':
        Git.Clone(repository, local).then(function (repository) {
            shell.echo(local + ' has done!');
        }, function (err) {
            shell.echo(err);
        });
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

