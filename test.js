'use strict'

const fs = require('fs')
const m3u8 = require('./')
const test = require('tape')

const playlist = fs.readFileSync('test.m3u8', 'utf8')
const template = [ { 'PROGRAM-ID': '1',
    BANDWIDTH: '3454382',
    RESOLUTION: '1280x720',
    VIDEO: 'chunked',
    url: 'http://v.hls.ttvnw.net/index-live.m3u8' },
  { 'PROGRAM-ID': '1',
    BANDWIDTH: '1760000',
    RESOLUTION: '1280x720',
    VIDEO: 'high',
    CODECS: 'avc1.42C01E,mp4a.40.2',
    url: 'http://w.hls.ttvnw.net/index-live.m3u8'
  }
]

test('m3u8', function (t) {
  const parsed = m3u8(playlist)

  t.deepEqual(parsed, template)
  t.end()
})
