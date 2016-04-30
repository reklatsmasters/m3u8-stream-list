# m3u8-stream-list
[![travis](https://travis-ci.org/ReklatsMasters/m3u8-stream-list.svg)](https://travis-ci.org/ReklatsMasters/m3u8-stream-list)
[![npm](https://img.shields.io/npm/v/m3u8-stream-list.svg)](https://npmjs.org/package/m3u8-stream-list)
[![license](https://img.shields.io/npm/l/m3u8-stream-list.svg)](https://npmjs.org/package/m3u8-stream-list)
[![downloads](https://img.shields.io/npm/dm/m3u8-stream-list.svg)](https://npmjs.org/package/m3u8-stream-list)
[![Code Climate](https://codeclimate.com/github/ReklatsMasters/m3u8-stream-list/badges/gpa.svg)](https://codeclimate.com/github/ReklatsMasters/m3u8-stream-list)
[![Test Coverage](https://codeclimate.com/github/ReklatsMasters/m3u8-stream-list/badges/coverage.svg)](https://codeclimate.com/github/ReklatsMasters/m3u8-stream-list)

Return all awailable streams from m3u8 playlist

## Example

```js
const m3u8 = require('m3u8-stream-list')
const playlist // some m3u8 playlist

const stream_list = m3u8(playlist)
```

## API
#### **`module.exports = (data: String|Buffer): {url: string, ...}[]`**

## License
MIT, 2016 (c) Dmitry Tsvettsikh