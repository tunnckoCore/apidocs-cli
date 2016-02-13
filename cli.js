#!/usr/bin/env node
/*!
 * apidocs-cli <https://github.com/tunnckoCore/apidocs-cli>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var exit = process.exit
var red = require('ansi-red')
var gray = require('ansi-gray')
var error = require('error-symbol')
var apidocs = require('./index')
var minimist = require('minimist')
var multiline = require('multiline')

var cli = minimist(process.argv.slice(2), {
  alias: {
    help: 'h',
    version: 'v'
  }
})

if (cli.help) {
  console.log(gray(multiline.stripIndent(function () { /*

    Command-line app for generating API docs from code comments.
    Can be used as API of `helper-apidocs` package.

      Options (plus any options introduced in helper-apidocs)
        --help        show this help
        --version     current version

      Usage
        apidocs <FILES...> [flags]

      Example
        apidocs index.js
        apidocs ./lib/*.js

      Issues: https://github.com/tunnckoCore/apidocs-cli/issues
      Readme: https://github.com/tunnckoCore/apidocs-cli
      Helper: https://github.com/helpers/helper-apidocs

  */ })))
  exit(0)
}

if (cli.version) {
  console.log(require('./package.json').version)
  exit(0)
}

// tweaks
var files = cli._ && cli._.length && cli._[0] || 'index.js'
var opts = cli
delete opts._

apidocs(files, opts, function _cb (err, res) {
  if (err || !res.length) {
    var msg = red(error + ' some error or no code comments')

    console.error('\n  %s', msg)
    err ? console.error('\n  error: %s', red(err.message)) : null
    console.log()

    exit(1)
    return
  }

  console.log(res)
  exit(0)
})
