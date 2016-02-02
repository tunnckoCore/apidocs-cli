# [apidocs-cli][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Command-line app for generating API docs from code comments. Can be used as API of helper-apidocs package.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install

```
npm i apidocs-cli --global
```

or use it as module, not as cli

```
npm i apidocs-cli --save
```

## Usage
> For more use-cases see the [tests](./test.js)

### [apidocsCli](index.js#L39)
> Generate API docs from code comments in the JavaScript files that match the given `patterns`. Only code comments with `@api public` are rendered.

**Params**

- `<files>` **{String}** filepath(s) or glob pattern(s)    
- `[options]` **{Object}** options to pass to [helper-apidocs][apidocs] or `callback`    
- `<callback>` **{Function}** node-style callback function `(err, res)`    

**Example**

```js
const apidocsCli = require('apidocs-cli')

apidocsCli('./*.js', function (err, res) {
  if (err) {
    console.error(err.message)
    return
  }
  console.log(res)
  //=> markdown formatted documentation of
  // all .js files in repo root (index.js and test.js)
})
```

### [.sync](index.js#L79)
> Synchronous generating API Docs.

**Params**

- `<files>` **{String}** filepath(s) or glob pattern(s)    
- `[options]` **{Object}** options to pass to [helper-apidocs][apidocs]    

**Example**

```js
const apidocsCli = require('apidocs-cli')
const docs = apidocsCli.sync('./*.js')

console.log(docs)
//=> markdown formatted documentation of
// all .js files in repo root (index.js and test.js)
```


## CLI
> run `apidocs --help`

```
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
```


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/apidocs-cli/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/apidocs-cli
[npmjs-img]: https://img.shields.io/npm/v/apidocs-cli.svg?label=apidocs-cli

[license-url]: https://github.com/tunnckoCore/apidocs-cli/blob/master/LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/apidocs-cli
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/apidocs-cli.svg

[travis-url]: https://travis-ci.org/tunnckoCore/apidocs-cli
[travis-img]: https://img.shields.io/travis/tunnckoCore/apidocs-cli.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/apidocs-cli
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/apidocs-cli.svg

[david-url]: https://david-dm.org/tunnckoCore/apidocs-cli
[david-img]: https://img.shields.io/david/tunnckoCore/apidocs-cli.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg