#!/usr/bin/env node

var shell = require('shelljs');
var argv = require('yargs').argv;
var Git = require('nodegit');
var repository = "https://github.com/Donny2333/angular-seed.git";
var local = process.argv || 'dufu';

if (!shell.which('git')) {
    shell.echo('Sorry, this script requires git');
    shell.exit(1);
}

shell.echo('Start Clone.');

Git.Clone(repository, local).then(function(repository) {
    shell.echo(local + ' has done!');
}, function(err) {
    shell.echo(err);
});
