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
var __importStar =
  (this && this.__importStar) ||
  function(mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k]
    result['default'] = mod
    return result
  }
Object.defineProperty(exports, '__esModule', { value: true })
var react_1 = __importStar(require('react'))
require('./Image.scss')
var Anchor_1 = require('../Anchor/Anchor')
var sizeSpec = {
  XXS: 14,
  XS: 28,
  S: 42,
  M: 56,
  L: 70,
  XL: 84,
  XXL: 98,
  X3L: 112,
  X4L: 126,
  X5L: 140,
  X6L: 154,
  X7L: 168,
  X8L: 182,
  X9L: 196
}
var Image = /** @class */ (function(_super) {
  __extends(Image, _super)
  function Image() {
    return (_super !== null && _super.apply(this, arguments)) || this
  }
  Image.prototype.render = function() {
    var _a = this.props,
      className = _a.className,
      size = _a.size,
      style = _a.style,
      to = _a.to,
      src = _a.src,
      rest = __rest(_a, ['className', 'size', 'style', 'to', 'src'])
    var width, height
    if (size != undefined) {
      switch (typeof size) {
        case 'number':
          width = size
          height = size
          break
        case 'string':
          width = sizeSpec[size.toString().toUpperCase()]
          height = sizeSpec[size.toString().toUpperCase()]
          break
        default:
          width = undefined
          height = undefined
          break
      }
    }
    if (to === true) to = '/'
    return typeof to === 'string'
      ? react_1.default.createElement(
          Anchor_1.Anchor,
          __assign({ to: to }, rest, {
            className: 'image' + (className ? ' ' + className : ''),
            //@ts-ignore
            style: Object.assign(
              {
                width: width,
                height: height,
                backgroundImage: "url('" + src + "')"
              },
              style
            )
          })
        )
      : react_1.default.createElement(
          'div',
          __assign({}, rest, {
            className: 'gerami-image' + (className ? ' ' + className : ''),
            //@ts-ignore
            style: Object.assign(
              {
                width: width,
                height: height,
                backgroundImage: "url('" + src + "')"
              },
              style
            )
          })
        )
  }
  return Image
})(react_1.Component)
exports.Image = Image