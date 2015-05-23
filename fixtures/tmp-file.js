/*!
 * tmp-file <https://github.com/tunnckoCore/tmp-file>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict'

var gfs = require('graceful-fs')
var Vinyl = require('vinyl')
var through2 = require('through2')
var hybridify = require('hybridify')
var filepath = require('tmp-filepath')

module.exports = tmpFile

/**
 * > Creating temporary file and write to disk
 *
 * **Example**
 * ```js
 * var tmpFile = require('tmp-file')
 *
 * var file = tmpFile()
 * console.log(file)
 * //=> { path: '/tmp/cia11kqlt0009tfpvp07inq9f.js',
 * //  contents: <Buffer ...> }
 * ```
 *
 * @param  {Function} `[callback]` optionally pass callback, otherwise it is sync
 * @return {Object} with `.path` and `.contents` properties
 * @api public
 */
function tmpFile (callback) {
  var vinyl = tmpFile.generate('.js')

  if (typeof callback !== 'function') {
    gfs.writeFileSync(vinyl.path, vinyl.contents)
    return vinyl
  }

  gfs.writeFile(vinyl.path, vinyl.contents, function (err) {
    err ? callback(err) : callback(null, vinyl)
  })
  return vinyl
}

/**
 * > Generate virtual file object without writing to disk
 *
 * **Example**
 * ```js
 * var tmpFile = require('tmp-file')
 *
 * var file = tmpFile.generate()
 * console.log(file)
 * //=> { path: '/tmp/cia11kqlt0009tfpvp07inq9f.js',
 * //  contents: <Buffer ...> }
 * ```
 *
 * @param  {String} `[ext]` extension to append to filepath
 * @return {Object} with `.path` and `.contents` properties
 * @api public
 */
tmpFile.generate = function generate (ext) {
  var fp = filepath(ext)
  var data = 'module.exports = "' + fp + '"'

  return {path: fp, contents: new Buffer(data)}
}

/**
 * > Create Vinyl File object
 *
 * **Example**
 * ```js
 * var tmpFile = require('tmp-file')
 *
 * var file = tmpFile.vinyl()
 * console.log(file)
 * //=> <File "../../../../tmp/cia11zwn00000mjpvom4ioitr.js" <Buffer ... >>
 * ```
 *
 * @return {Object|Vinyl}
 * @api public
 */
tmpFile.vinyl = function tmpVinyl () {
  var vinyl = tmpFile.generate('.js')
  return new Vinyl(vinyl)
}

/**
 * > Create temp file as stream and write it to disk
 *
 * **Example**
 * ```js
 * var tmpFile = require('tmp-file')
 * var stream = tmpFile.stream()
 *
 * stream
 * .pipe(through2.obj(function (file, enc, next) {
 *   console.log(file)
 *   //=> { path: '/tmp/cia123v5d0004u7pvfa01sjq9.js',
 *   //  contents: <Buffer ...> }
 *   next()
 * })
 * ```
 *
 * @return {Stream} through2 stream in object mode, can be used in gulp
 * @api public
 */
tmpFile.stream = function tmpStream () {
  var vinyl = tmpFile()
  return gfs.createReadStream(vinyl.path)
  .pipe(through2.obj(function (buf, enc, next) {
    this.push(vinyl)
    next()
  }))
}

/**
 * > Create hybrid temp file with hybridify
 *
 * **Example**
 * ```js
 * var tmpFile = require('tmp-file')
 * var hybrid = tmpFile.promise()
 *
 * hybrid(function (err, file) {
 *   console.log(file)
 *   //=> { path: '/tmp/cia128gmg000721pvndiq2d53.js',
 *   //  contents: <Buffer ...> }
 * })
 * .then(function (file) {
 *   console.log(file)
 *   //=> { path: '/tmp/cia128gmg000721pvndiq2d53.js',
 *   //  contents: <Buffer ...> }
 * })
 * .catch(console.error)
 * ```
 *
 * @return {Promise} promise/hybrid
 * @api public
 */
tmpFile.promise = function tmpPromise () {
  return hybridify(tmpFile)
}
