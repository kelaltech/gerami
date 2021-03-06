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
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]]
      }
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
var Anchor_js_1 = require('../Anchor/Anchor.js')
var sizeSpec = {
  XXS: 14,
  XS: 28,
  S: 42,
  M: 56,
  L: 70,
  XL: 84,
  XXL: 98,
  '3XL': 112,
  '4XL': 126,
  '5XL': 140,
  '6XL': 154,
  '7XL': 168,
  '8XL': 182,
  '9XL': 196
}
var Image = /** @class */ (function(_super) {
  __extends(Image, _super)
  function Image() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this
    _this.state = {}
    return _this
  }
  Image.prototype.render = function() {
    var _a = this.props,
      className = _a.className,
      size = _a.size,
      style = _a.style,
      to = _a.to,
      src = _a.src,
      w = _a.width,
      h = _a.height,
      backgroundSize = _a.backgroundSize,
      rest = __rest(_a, [
        'className',
        'size',
        'style',
        'to',
        'src',
        'width',
        'height',
        'backgroundSize'
      ])
    var width =
      (w && (typeof w === 'string' ? sizeSpec[w] : w)) ||
      (size && (typeof size === 'string' ? sizeSpec[size] : size))
    var height =
      (h && (typeof h === 'string' ? sizeSpec[h] : h)) ||
      (size && (typeof size === 'string' ? sizeSpec[size] : size))
    if (to === true) to = '/'
    // todo: receive these styles as props: backgroundSize
    return to || rest.href != undefined
      ? react_1.default.createElement(
          Anchor_js_1.Anchor,
          __assign({ to: to }, rest, {
            className: 'gerami-image ' + (className || ''),
            style: __assign(
              {
                width: width,
                height: height,
                backgroundImage: "url('" + src + "')",
                backgroundSize: backgroundSize
              },
              style
            )
          })
        )
      : react_1.default.createElement(
          'div',
          __assign({}, rest, {
            className: 'gerami-image ' + (className || ''),
            style: __assign(
              {
                width: width,
                height: height,
                backgroundImage: "url('" + src + "')",
                backgroundSize: backgroundSize
              },
              style
            )
          })
        )
  }
  return Image
})(react_1.Component)
exports.Image = Image
