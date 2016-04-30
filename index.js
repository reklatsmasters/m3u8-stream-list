'use strict'

const TAG_STREAM = "#EXT-X-STREAM-INF:"
const NON_QUOTED_COMMA = /,(?=(?:[^"]|"[^"]*")*$)/
const KV_SPLITTER = /="?([^"]*)/

module.exports = m3u8

/**
 * Parser
 * @param {String} playlist
 * @return {Array.<{url: string}>}
 */
function m3u8(playlist) {
  const lines = playlist.toString().split('\n')
  const stream_list = []

  for (const stream of split_streams(lines)) {
    if (is_url(stream.url)) {
      const params = parse_params(stream.line)
      params.url = stream.url

      stream_list.push(params)
    }
  }

  return stream_list
}

/**
 * @param {String[]} lines
 * @return {Array.<{url:string, line:string}>}
 */
function split_streams(lines) {
  if (!Array.isArray(lines)) {
    throw new TypeError('Expected array of lines')
  }

  return lines.reduce(function (streams, line, i, pl) {
    if (!line.startsWith(TAG_STREAM)) {
      return streams
    }

    if (i + 1 < pl.length) {
      streams.push({ line, url: pl[i + 1] })
      return streams
    }
  }, [])
}

/**
 * @param {string} url
 * @return {boolean}
 */
function is_url(url) {
  return url.startsWith('http://') || url.startsWith('https://')
}

/**
 * @param {string} line
 */
function parse_params(line) {
  if (!line.startsWith(TAG_STREAM)) {
    throw new Error('Expected stream line')
  }

  const pairs = line.slice(18).split(NON_QUOTED_COMMA)
  const attrs = {}

  for (const kv of pairs) {
    const kv_list = kv.split(KV_SPLITTER)

    attrs[ kv_list[0].trim() ] = kv_list[1].trim()
  }

  return attrs
}
