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

test('apidocs-cli:', function () {
  test('should throw TypeError when no arguments', function (done) {
    function fixture () {
      apidocsCli()
    }

    test.throws(fixture, TypeError)
    test.throws(fixture, /apidocs-cli: expect `files` to be string or array/)
    done()
  })
  test('should throw Error if no callback', function (done) {
    function fixture () {
      apidocsCli(['vez.js', 'file/path.js', 'foo/*.css'])
    }

    test.throws(fixture, TypeError)
    test.throws(fixture, /apidocs-cli: expect callback/)
    done()
  })
  test('should generate API docs from the given file:', function (done) {
    apidocsCli('./index.js', function (err, res) {
      test.ifError(err)
      test.equal(/### \[\.apidocsCli\]/.test(res), true)
      done()
    })
  })
})
