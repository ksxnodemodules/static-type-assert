'use strict'
const assert = () => assert

module.exports = Object.assign(assert, {
  isTrue: assert,
  isFalse: assert,
  extension: assert,
  compare: assert,
  equality: assert,
  inequality: assert
})
