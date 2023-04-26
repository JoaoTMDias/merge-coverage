oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @jtmdias/merge-coverage
$ merge-coverage COMMAND
running command...
$ merge-coverage (--version)
@jtmdias/merge-coverage/0.0.0 linux-x64 node-v18.13.0
$ merge-coverage --help [COMMAND]
USAGE
  $ merge-coverage COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`merge-coverage hello PERSON`](#merge-coverage-hello-person)
* [`merge-coverage hello world`](#merge-coverage-hello-world)
* [`merge-coverage help [COMMANDS]`](#merge-coverage-help-commands)
* [`merge-coverage plugins`](#merge-coverage-plugins)
* [`merge-coverage plugins:install PLUGIN...`](#merge-coverage-pluginsinstall-plugin)
* [`merge-coverage plugins:inspect PLUGIN...`](#merge-coverage-pluginsinspect-plugin)
* [`merge-coverage plugins:install PLUGIN...`](#merge-coverage-pluginsinstall-plugin-1)
* [`merge-coverage plugins:link PLUGIN`](#merge-coverage-pluginslink-plugin)
* [`merge-coverage plugins:uninstall PLUGIN...`](#merge-coverage-pluginsuninstall-plugin)
* [`merge-coverage plugins:uninstall PLUGIN...`](#merge-coverage-pluginsuninstall-plugin-1)
* [`merge-coverage plugins:uninstall PLUGIN...`](#merge-coverage-pluginsuninstall-plugin-2)
* [`merge-coverage plugins update`](#merge-coverage-plugins-update)

## `merge-coverage hello PERSON`

Say hello

```
USAGE
  $ merge-coverage hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/JoaoTMDias/merge-coverage/blob/v0.0.0/dist/commands/hello/index.ts)_

## `merge-coverage hello world`

Say hello world

```
USAGE
  $ merge-coverage hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ merge-coverage hello world
  hello world! (./src/commands/hello/world.ts)
```

## `merge-coverage help [COMMANDS]`

Display help for merge-coverage.

```
USAGE
  $ merge-coverage help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for merge-coverage.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.9/src/commands/help.ts)_

## `merge-coverage plugins`

List installed plugins.

```
USAGE
  $ merge-coverage plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ merge-coverage plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.6/src/commands/plugins/index.ts)_

## `merge-coverage plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ merge-coverage plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ merge-coverage plugins add

EXAMPLES
  $ merge-coverage plugins:install myplugin 

  $ merge-coverage plugins:install https://github.com/someuser/someplugin

  $ merge-coverage plugins:install someuser/someplugin
```

## `merge-coverage plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ merge-coverage plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ merge-coverage plugins:inspect myplugin
```

## `merge-coverage plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ merge-coverage plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ merge-coverage plugins add

EXAMPLES
  $ merge-coverage plugins:install myplugin 

  $ merge-coverage plugins:install https://github.com/someuser/someplugin

  $ merge-coverage plugins:install someuser/someplugin
```

## `merge-coverage plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ merge-coverage plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ merge-coverage plugins:link myplugin
```

## `merge-coverage plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ merge-coverage plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ merge-coverage plugins unlink
  $ merge-coverage plugins remove
```

## `merge-coverage plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ merge-coverage plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ merge-coverage plugins unlink
  $ merge-coverage plugins remove
```

## `merge-coverage plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ merge-coverage plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ merge-coverage plugins unlink
  $ merge-coverage plugins remove
```

## `merge-coverage plugins update`

Update installed plugins.

```
USAGE
  $ merge-coverage plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
