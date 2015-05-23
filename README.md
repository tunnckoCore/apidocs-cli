# apidocs-cli [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url]

> Async CLI for automatically generating API docs from code comments with `helper-apidocs`

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i apidocs-cli --save
npm test
apidocs --help
```


## Usage
> For more use-cases see the [tests](./test.js)

You can use it as helper `helper-apidocs` and as CLI tool if install it globally
```js
var handlebars = require('handlebars')
handlebars.registerHelper('apidocs', require('apidocs-cli'))

var verb = require('verb')
verb.helper('apidocs', require('apidocs-cli'))

verb.task('default', function() {
  verb.src('.verb*.md')
    .pipe(verb.dest('./'))
})
```


## CLI
> run `apidocs --help`

```
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
```


## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/apidocs-cli/issues/new).
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/apidocs-cli
[npmjs-img]: https://img.shields.io/npm/v/apidocs-cli.svg?label=apidocs-cli

[license-url]: https://github.com/tunnckoCore/apidocs-cli/blob/master/LICENSE.md
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

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/send%20me-message-green.svg
