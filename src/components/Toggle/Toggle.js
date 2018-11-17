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
var Toggle = /** @class */ (function(_super) {
  __extends(Toggle, _super)
  function Toggle(props) {
    var _this = _super.call(this, props) || this
    _this.state = {
      status: false
    }
    _this.state = {
      status: false
    }
    return _this
  }
  Toggle.prototype.f = function() {
    if (!this.state.status) {
      this.setState({
        status: true
      })
    } else {
      this.setState({
        status: false
      })
    }
  }
  Toggle.prototype.render = function() {
    var _a = this.props,
      className = _a.className,
      children = _a.children
    return react_1.default.createElement(
      'label',
      { className: 'switch' },
      react_1.default.createElement('input', {
        type: 'checkbox',
        onClick: this.f.bind(this),
        checked: this.state.status
      }),
      react_1.default.createElement('span', {
        className: 'gerami-toggle ' + (className ? ' ' + className : '') + '  '
      }),
      children
    )
  }
  return Toggle
})(react_1.Component)
exports.Toggle = Toggle
