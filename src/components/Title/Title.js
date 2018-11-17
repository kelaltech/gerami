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
var Title = /** @class */ (function(_super) {
  __extends(Title, _super)
  function Title() {
    return (_super !== null && _super.apply(this, arguments)) || this
  }
  Title.prototype.render = function() {
    var _a = this.props,
      size = _a.size,
      fontS = _a.fontS,
      className = _a.className,
      children = _a.children
    var header = size && (typeof size === 'string' ? sizeSpec[size] : size)
    var font = fontS && (typeof fontS === 'string' ? fontS : '')
    return react_1.default.createElement(
      'div',
      {
        className: 'gerami-title\n        ' + (className ? ' ' + className : '') + '  ',
        style: { fontSize: header, fontStyle: font }
      },
      size ? '' : null,
      fontS ? '' : null,
      children
    )
  }
  return Title
})(react_1.Component)
exports.Title = Title
