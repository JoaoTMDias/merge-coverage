@jtmdias/merge-coverage
=================

Combines code coverage between jest, vitest and/or cypress.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@jtmdias/merge-coverage.svg)](https://www.npmjs.com/package/@jtmdias/merge-coverage)
[![CircleCI](https://github.com/JoaoTMDias/js-utilities/actions/workflows/publish.yml/badge.svg?branch=main)](https://github.com/JoaoTMDias/js-utilities/actions/workflows/publish.yml)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/joaotmdias/merge-coverage/blob/main/package.json)

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
@jtmdias/merge-coverage/1.0.1 darwin-x64 node-v16.19.1
$ merge-coverage --help [COMMAND]
USAGE
  $ merge-coverage COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`merge-coverage clear`](#merge-coverage-clear)
* [`merge-coverage combine`](#merge-coverage-combine)
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

## `merge-coverage clear`

Clears the coverage folder before running tests. This command is useful when it runs before executing the pipeline of tests. So, on a pre-hook script like 'pretest'

```
USAGE
  $ merge-coverage clear [-f <value>]

FLAGS
  -f, --folder=<value>  Custom reports folder

DESCRIPTION
  Clears the coverage folder before running tests. This command is useful when it runs before executing the pipeline of
  tests. So, on a pre-hook script like 'pretest'

EXAMPLES
  $ merge-coverage clear
  $ merge-coverage clear --folder custom-folder/reports
```

_See code: [dist/commands/clear/index.ts](https://github.com/JoaoTMDias/merge-coverage/blob/v1.0.1/dist/commands/clear/index.ts)_

## `merge-coverage combine`

Combines coverage from different test runner tools

```
USAGE
  $ merge-coverage combine [-f <value>] [-f <value>]

FLAGS
  -f, --folder=<value>  Custom reports folder
  -f, --tools=<value>   Test runner tools

DESCRIPTION
  Combines coverage from different test runner tools

EXAMPLES
  $ merge-coverage combine
  $ merge-coverage combine --tools vitest,cypress
```

_See code: [dist/commands/combine/index.ts](https://github.com/JoaoTMDias/merge-coverage/blob/v1.0.1/dist/commands/combine/index.ts)_

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

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/index.ts)_

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
