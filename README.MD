# Dufu-Cli

The Dufu Framework command line utility makes it easy to create and develop GIS web apps.

Use the `dufu --help` command for more detailed task information.

## Installing

```bash
$ npm install -g dufu
```

*Note: For a global install of `-g dufu`, OSX/Linux users may need to prefix the command with `sudo` or can setup [proper file permissions on OSX for npm](http://www.johnpapa.net/how-to-use-npm-global-without-sudo-on-osx/) to install without `sudo`.*


Minimal node requirements:

- NodeLTS or greater
- NPM 3x

## Starting an Dufu App

To start a Dufu app, run:

```bash
$ dufu start myapp [template]
```

__Named template starters:__

* navigation
* sidemenu
* maps
* blank