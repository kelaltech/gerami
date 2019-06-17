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
var sizeSpec = {
  XXS: 140,
  XS: 280,
  S: 420,
  M: 560,
  L: 700,
  XL: 840,
  XXL: 980,
  '3XL': 1120,
  '4XL': 1260,
  '5XL': 1400,
  '6XL': 1540,
  '7XL': 1680,
  '8XL': 1820,
  '9XL': 1960
}
/**
 * A responsive container that does not stretch its child elements to fill vacant spaces.
 */
var Yoga = /** @class */ (function(_super) {
  __extends(Yoga, _super)
  function Yoga() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this
    _this.state = {}
    return _this
  }
  Yoga.prototype.render = function() {
    var _a = this.props,
      children = _a.children,
      maxCol = _a.maxCol,
      size = _a.size,
      style = _a.style,
      rest = __rest(_a, ['children', 'maxCol', 'size', 'style'])
    var content = react_1.default.createElement(
      'div',
      { className: 'gerami-yoga-' + maxCol },
      children
    )
    if (Array.isArray(children)) {
      content = []
      var i = 0
      for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
        var child = children_1[_i]
        content.push(
          react_1.default.createElement(
            'div',
            { key: i++, className: 'gerami-yoga-' + maxCol },
            child
          )
        )
      }
    }
    var maxWidth = size && (typeof size === 'string' ? sizeSpec[size] : size)
    return react_1.default.createElement(
      'div',
      __assign({}, rest, {
        style: Object.assign({ marginLeft: 'auto', marginRight: 'auto', maxWidth: maxWidth }, style)
      }),
      content
    )
  }
  return Yoga
})(react_1.Component)
exports.Yoga = Yoga
