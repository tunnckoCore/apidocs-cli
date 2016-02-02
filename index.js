/*!
 * apidocs-cli <https://github.com/tunnckoCore/apidocs-cli>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var apidocs = require('helper-apidocs')()

/**
 * Generate API docs from code comments in the JavaScript
 * files that match the given `patterns`. Only code comments
 * with `@api public` are rendered.
 *
 * **Example**
 *
 * ```js
 * const apidocsCli = require('apidocs-cli')
 *
 * apidocsCli('./*.js', function (err, res) {
 *   if (err) {
 *     console.error(err.message)
 *     return
 *   }
 *   console.log(res)
 *   //=> markdown formatted documentation of
 *   // all .js files in repo root (index.js and test.js)
 * })
 * ```
 *
 * @name   apidocsCli
 * @param  {String} `<files>` filepath(s) or glob pattern(s)
 * @param  {Object} `[options]` options to pass to [helper-apidocs][apidocs] or `callback`
 * @param  {Function} `<callback>` node-style callback function `(err, res)`
 * @api public
 */
module.exports = function apidocsCli (files, options, callback) {
  if (typeof files !== 'string') {
    throw new TypeError('apidocs-cli: expect `files` to be string')
  }
  callback = typeof options === 'function' ? options : callback
  options = typeof options === 'object' ? options : {}

  if (typeof callback !== 'function') {
    throw new TypeError('apidocs-cli: expect callback')
  }

  var res = null
  try {
    res = apidocs(files, options)
  } catch (err) {
    callback(err)
    return
  }
  callback(null, res)
}

/**
 * Synchronous generating API Docs.
 *
 * **Example**
 *
 * ```js
 * const apidocsCli = require('apidocs-cli')
 * const docs = apidocsCli.sync('./*.js')
 *
 * console.log(docs)
 * //=> markdown formatted documentation of
 * // all .js files in repo root (index.js and test.js)
 * ```
 *
 * @name   .sync
 * @param  {String} `<files>` filepath(s) or glob pattern(s)
 * @param  {Object} `[options]` options to pass to [helper-apidocs][apidocs]
 * @api public
 */
module.exports.sync = function apidocsCliSync (files, options) {
  if (typeof files !== 'string') {
    throw new TypeError('apidocsCli.sync: expect `files` to be string')
  }
  return apidocs(files, options)
}
