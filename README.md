[npm]: https://img.shields.io/npm/v/rollup-plugin-gproto
[npm-url]: https://www.npmjs.com/package/rollup-plugin-gproto
[size]: https://packagephobia.now.sh/badge?p=rollup-plugin-gproto
[size-url]: https://packagephobia.now.sh/result?p=rollup-plugin-gproto

[![npm][npm]][npm-url]
[![size][size]][size-url]
[![libera manifesto](https://img.shields.io/badge/libera-manifesto-lightgrey.svg)](https://liberamanifesto.com)

# rollup-plugin-gproto

🍣 A Rollup plugin which Convert grpc .proto files to ES6 modules of loaded grpc object.

## Requirements

This plugin requires an [LTS](https://github.com/nodejs/Release) Node version (v8.0.0+) and Rollup v1.20.0+.

## Install

Using npm:

```console
npm install rollup-plugin-gproto --save-dev
```

## Usage

Create a `rollup.config.js` [configuration file](https://www.rollupjs.org/guide/en/#configuration-files) and import the plugin:

```js
import proto from 'rollup-plugin-gproto';

export default {
  input: 'src/index.js',
  output: {
    dir: 'output',
    format: 'cjs'
  },
  plugins: [proto()]
};
```

Then call `rollup` either via the [CLI](https://www.rollupjs.org/guide/en/#command-line-reference) or the [API](https://www.rollupjs.org/guide/en/#javascript-api).

With an accompanying file `src/index.js`, the local `package.json` file would now be importable as seen below:

```js
// src/index.js
import proto from './hello.proto';
console.log(proto);
```

## Options

### `compact`

Type: `Boolean`<br>
Default: `false`

If `true`, instructs the plugin to ignore `indent` and generates the smallest code.

### `exclude`

Type: `String` | `Array[...String]`<br>
Default: `null`

A [minimatch pattern](https://github.com/isaacs/minimatch), or array of patterns, which specifies the files in the build the plugin should _ignore_. By default no files are ignored.

### `include`

Type: `String` | `Array[...String]`<br>
Default: `null`

A [minimatch pattern](https://github.com/isaacs/minimatch), or array of patterns, which specifies the files in the build the plugin should operate on. By default all files are targeted.

### `indent`

Type: `String`<br>
Default: `'\t'`

Specifies the indentation for the generated default export.

### `namedExports`

Type: `Boolean`<br>
Default: `true`

If `true`, instructs the plugin to generate a named export for every property of the JSON object.

### `preferConst`

Type: `Boolean`<br>
Default: `false`

If `true`, instructs the plugin to declare properties as variables, using either `var` or `const`. This pertains to tree-shaking.

## Meta

[CONTRIBUTING](/.github/CONTRIBUTING.md)

[LICENSE (MIT)](/LICENSE)