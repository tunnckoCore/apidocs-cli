#!/usr/bin/env node
/**
 * apidocs-cli <https://github.com/tunnckoCore/apidocs-cli>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict'

var apidocs = require('./index')
var meow = require('meow')
var chalk = require('chalk')
var symbols = require('log-symbols')
var exit = process.exit

var cli = meow({
  help: chalk.gray(function () {
  /*
  apidocs-cli - Async CLI for automatically generating API docs from code comments

  Usage:
      apidocs <FILES...> [flags]

  Flags:
      -v, --version   Show current version.
      -h, --help      Show usage information.
      and any other `helper-apidocs` option

  Readme:  https://github.com/tunnckoCore/apidocs-cli
  Report bugs:  https://github.com/tunnckoCore/apidocs-cli
  helper-apidocs: https://github.com/helpers/helper-apidocs
  */
  }.toString().split(/\n/).slice(2, -2).join('\n'))
})

if (Array.isArray(cli.input) && !cli.input.length) {
  var msg = chalk.red('should provide file (or glob pattern), try run')
  console.error('\n  %s %s', symbols.error, msg)
  console.error('  %s %s\n', symbols.error, chalk.blue('apidocs --help'))
  exit(1)
}

apidocs(cli.input, cli.flags, function (err, data) {
  if (err || !data.length) {
    var msg = chalk.red('some error or no code comments')
    console.error('\n  %s %s', symbols.error, msg)
    err ? console.error('\n  error: %s', err.message) : null
    console.log()
    exit(1)
    return
  }

  console.log(data)
  exit(0)
})
