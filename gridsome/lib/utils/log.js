const chalk = require('chalk')

exports.log = function (message, tag) {
  log('log', null, message, tag)
}

exports.warn = function (message, tag) {
  log('warn', 'yellow', message, tag)
}

exports.error = function (message, tag) {
  log('error', 'red', message, tag)
}


function log (type, color, message, tag) {
  const formatted = color ? chalk[color](message) : message
  const fn = console[type]
  
  tag ? fn(tag, '>', formatted) : fn(formatted)
}
