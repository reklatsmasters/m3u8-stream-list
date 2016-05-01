'use strict'

const reader = require('m3u8-reader')

const TAG_STREAM = "STREAM-INF"

module.exports = m3u8

/**
 * Parser
 * @param {String} playlist
 * @return {Array.<{url: string}>}
 */
function m3u8(playlist) {
  return split_streams(reader(playlist))
}

/**
 * @param {String[]} lines
 * @return {Array.<{url:string, line:string}>}
 */
function split_streams(lines) {
  return lines.reduce(function (streams, url, i, pl) {
    if (is_url(url)) {
      const stream = pl[i - 1]

      if ( typeof stream == 'object' && stream[TAG_STREAM] && typeof stream[TAG_STREAM] == 'object' ) {
        streams.push( Object.assign({url}, stream[TAG_STREAM]) )
      }
    }

    return streams
  }, [])
}

/**
 * @param {string} url
 * @return {boolean}
 */
function is_url(url) {
  return (typeof url == 'string') && (url.startsWith('http://') || url.startsWith('https://'))
}
