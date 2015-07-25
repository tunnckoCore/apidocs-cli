# [apidocs-cli][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Command-line app for generating API docs from code comments. Can be used as API of `helper-apidocs` package.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i apidocs-cli --save
npm test
apidocs --help
```


## API
> For more use-cases see the [tests](./test.js)

### [apidocsCli](./index.js#L24)
> Generate API docs from code comments in the JavaScript
files that match the given `patterns`. Only code comments
with `@api public` are rendered.

* `<files>` **{Array|String}**: filepaths or glob patterns    
* `[options]` **{Object}**: options to pass to [helper-apidocs][apidocs] or `callback`    
* `<callback>` **{Function}**: node-style callback function `(err, res)`    

**Example**  

```js
var apidocsCli = require('apidocs-cli')

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


## See also
- [helper-apidocs](https://github.com/jonschlinkert/helper-apidocs): Template helper for automatically generating API docs from code… [more](https://github.com/jonschlinkert/helper-apidocs)
- [helper-related](https://github.com/helpers/helper-related): Template helper for generating a list of links to the homepages of… [more](https://github.com/helpers/helper-related)
- [koa-ip-filter](https://github.com/tunnckocore/koa-ip-filter): Filter IPs with a glob pattern, regex, string, array or matcher function.… [more](https://github.com/tunnckocore/koa-ip-filter)
- [npm-related](https://github.com/tunnckocore/npm-related): Thin wrapper on top of `helper-related` for generating a list of links… [more](https://github.com/tunnckocore/npm-related)
- [tmp-file](https://github.com/tunnckocore/tmp-file): Create actual and temporary file on disk - support stream, async, vinyl,… [more](https://github.com/tunnckocore/tmp-file)


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

[apidocs]: https://github.com/helpers/helper-apidocs