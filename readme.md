# m3u8-stream-list
[![travis](https://travis-ci.org/ReklatsMasters/m3u8-stream-list.svg)](https://travis-ci.org/ReklatsMasters/m3u8-stream-list)
[![npm](https://img.shields.io/npm/v/m3u8-stream-list.svg)](https://npmjs.org/package/m3u8-stream-list)
[![license](https://img.shields.io/npm/l/m3u8-stream-list.svg)](https://npmjs.org/package/m3u8-stream-list)
[![downloads](https://img.shields.io/npm/dm/m3u8-stream-list.svg)](https://npmjs.org/package/m3u8-stream-list)

Return all awailable streams from m3u8 playlist

## Example

#### input
```
#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3454382,RESOLUTION=1280x720,VIDEO="chunked"
http://1.example.com/index-live.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=1760000,RESOLUTION=1280x720,VIDEO="high"
http://2.example.com/index-live.m3u8
```

#### output
```json
[ 
  { "BANDWIDTH": "3454382",
    "RESOLUTION": "1280x720",
    "VIDEO": "chunked",
    "url": "http://1.example.com/index-live.m3u8" 
  },
  { "BANDWIDTH": "1760000",
    "RESOLUTION": "1280x720",
    "VIDEO": "high",
    "url": "http://2.example.com/index-live.m3u8"
  }
]
```

## Usage

```js
const m3u8 = require('m3u8-stream-list')
const fs = require('fs')
const playlist = fs.readdirSync('test.m3u8', 'utf8')

console.log(m3u8(playlist))
```

## API
#### **`module.exports = (data: String|Buffer): {url: string, ...}[]`**

## License
MIT, 2016 (c) Dmitry Tsvettsikh