/*!
 * apidocs-cli <https://github.com/tunnckoCore/apidocs-cli>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var apidocs = require('./index')

test('apidocs-cli:', function () {
  test('should generate API docs from the given file:', function (done) {
    apidocs('fixtures/a.js', function (err, docs) {
      test.ifError(err, 'should not have error')
      test.ok(/### \[\.aaa\]/.test(docs), 'should have ### aaa heading')
      done()
    })
  })

  test('should generate API docs from a glob of files:', function (done) {
    apidocs('fixtures/*.js', function (err, docs) {
      test.ifError(err, 'should not have error')
      test.ok(/### \[\.aaa\]/.test(docs), 'should have ### aaa heading')
      test.ok(/### \[\.ddd\]/.test(docs), 'should have ### ddd heading')
      done()
    })
  })

  test('should be able to pass options to `helper-apidocs`:', function (done) {
    apidocs('fixtures/tmp-file.js', {sep: '\n'}, function (err, docs) {
      test.ifError(err, 'should not have error')
      test.ok(/### \[\.generate\]/.test(docs), 'should have ### generate heading')
      test.ok(/### \[\.vinyl\]/.test(docs), 'should have ### vinyl heading')
      done()
    })
  })
})
