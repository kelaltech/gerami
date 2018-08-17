'use strict'
var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics = function(d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(d, b) {
            d.__proto__ = b
          }) ||
        function(d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]
        }
      return extendStatics(d, b)
    }
    return function(d, b) {
      extendStatics(d, b)
      function __() {
        this.constructor = d
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __())
    }
  })()
var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
var __rest =
  (this && this.__rest) ||
  function(s, e) {
    var t = {}
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p]
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]]
    return t
  }
Object.defineProperty(exports, '__esModule', { value: true })
var React = require('react')
require('./Content.scss')
var sizeSpec = {
  XXS: 140,
  XS: 280,
  S: 420,
  M: 560,
  L: 700,
  XL: 840,
  XXL: 980,
  X3L: 1120,
  X4L: 1260,
  X5L: 1400,
  X6L: 1540,
  X7L: 1680,
  X8L: 1820,
  X9L: 1960
}
var Content = /** @class */ (function(_super) {
  __extends(Content, _super)
  function Content(props) {
    return _super.call(this, props) || this
  }
  Content.prototype.render = function() {
    var _a = this.props,
      children = _a.children,
      className = _a.className,
      size = _a.size,
      style = _a.style,
      transparent = _a.transparent,
      rest = __rest(_a, ['children', 'className', 'size', 'style', 'transparent'])
    var maxWidth
    switch (typeof size) {
      case 'number':
        maxWidth = size
        break
      case 'string':
        maxWidth = sizeSpec[size.toUpperCase()]
        break
      default:
        maxWidth = undefined
        break
    }
    return React.createElement(
      'div',
      __assign({}, rest, {
        className:
          'content' + (!transparent ? ' content-card' : '') + (className ? ' ' + className : ''),
        //@ts-ignore
        style: Object.assign({ maxWidth: maxWidth }, style)
      }),
      children
    )
  }
  return Content
})(React.Component)
exports.Content = Content
