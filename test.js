/*!
 * apidocs-cli <https://github.com/tunnckoCore/apidocs-cli>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var apidocsCli = require('./index')

test('should throw TypeError when no arguments (async)', function (done) {
  function fixture () {
    apidocsCli()
  }

  test.throws(fixture, TypeError)
  test.throws(fixture, /apidocs-cli: expect `files` to be string/)
  done()
})

test('should throw TypeError if invalid `files` (.sync)', function (done) {
  function fixture () {
    apidocsCli.sync()
  }

  test.throws(fixture, TypeError)
  test.throws(fixture, /apidocsCli.sync: expect `files` to be string/)
  done()
})

test('should throw Error if no callback', function (done) {
  function fixture () {
    apidocsCli('vez.js')
  }

  test.throws(fixture, TypeError)
  test.throws(fixture, /apidocs-cli: expect callback/)
  done()
})

test('should generate API docs from the given file:', function (done) {
  apidocsCli('./index.js', function (err, res) {
    test.ifError(err)
    test.equal(/### \[apidocsCli\]/.test(res), true)
    done()
  })
})

console.log(apidocsCli.sync('./index.js'))
