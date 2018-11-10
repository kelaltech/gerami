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
var Title = /** @class */ (function(_super) {
  __extends(Title, _super)
  function Title() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this
    _this.state = {}
    return _this
  }
  Title.prototype.render = function() {
    var _a = this.props,
      size = _a.size,
      color = _a.color,
      className = _a.className,
      children = _a.children
    var header = size && (typeof size === 'string' ? sizeSpec[size] : size)
    return react_1.default.createElement(
      'div',
      {
        className:
          'gerami-title\n        ' +
          (typeof color === 'string' && color.toLocaleLowerCase() === 'green'
            ? 'gerami-title-green'
            : '') +
          '\n        ' +
          (className ? ' ' + className : '') +
          '  ',
        color: color,
        style: { fontSize: header }
      },
      size ? '' : null,
      children
    )
  }
  return Title
})(react_1.Component)
exports.Title = Title
