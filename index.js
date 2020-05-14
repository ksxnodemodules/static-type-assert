'use strict'
const assert = () => assert

module.exports = Object.assign(assert, {
  isTrue: assert,
  isFalse: assert,
  extension: assert,
  compare: assert,
  strictCompare: assert,
  equality: assert,
  inequality: assert,
  default: assert,
})

Object.defineProperty(assert, '__esModule', { value: true })
