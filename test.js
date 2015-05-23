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
      if (err) {
        return done(err)
      }
      test.ok(/### \[\.aaa\]/.test(docs))
      done()
    })
  })

  test('should generate API docs from a glob of files:', function (done) {
    apidocs('fixtures/*.js', function (err, docs) {
      if (err) {
        return done(err)
      }
      test.ok(/### \[\.aaa\]/.test(docs))
      test.ok(/### \[\.ddd\]/.test(docs))
      done()
    })
  })
})
