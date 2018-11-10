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
/**
 * @deprecated Will be replaced by Page.Anti
 */
var Container = /** @class */ (function(_super) {
  __extends(Container, _super)
  function Container() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this
    _this.state = {}
    return _this
  }
  Container.prototype.render = function() {
    var _a = this.props,
      className = _a.className,
      top = _a.top,
      right = _a.right,
      bottom = _a.bottom,
      left = _a.left,
      style = _a.style
    return react_1.default.createElement(
      'div',
      {
        className: 'gerami-container ' + (className || ''),
        style: Object.assign(
          {
            paddingTop: top,
            paddingRight: right,
            paddingBottom: bottom,
            paddingLeft: left
          },
          style
        )
      },
      this.props.children
    )
  }
  return Container
})(react_1.Component)
exports.Container = Container
