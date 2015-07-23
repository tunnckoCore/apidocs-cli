/*!
 * apidocs-cli <https://github.com/tunnckoCore/apidocs-cli>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var apidocs = require('helper-apidocs')

/**
 * Generate API docs from code comments in the JavaScript
 * files that match the given `patterns`. Only code comments
 * with `@api public` are rendered.
 *
 * @name   apidocsCli
 * @param  {Array|String} `<files>` filepaths or glob patterns
 * @param  {Object} `[options]` options to pass to [helper-apidocs][apidocs] or `callback`
 * @param  {Function} `<callback>` node-style callback function `(err, res)`
 * @api public
 */

module.exports = function apidocsCli (files, options, callback) {
  if (!Array.isArray(files) && typeof files !== 'string') {
    throw new TypeError('apidocs-cli: expect `files` to be string or array')
  }
  callback = typeof options === 'function' ? options : callback
  options = typeof options === 'object' ? options : {}

  if (typeof callback !== 'function') {
    throw new TypeError('apidocs-cli: expect callback')
  }

  return apidocs(files, options, function (err, res) {
    callback(err, res)
  })
}
