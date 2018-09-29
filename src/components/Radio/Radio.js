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
var Radio = /** @class */ (function(_super) {
  __extends(Radio, _super)
  function Radio(props) {
    var _this = _super.call(this, props) || this
    _this.state = {
      status: false
    }
    _this.state = {
      status: false
    }
    return _this
  }
  Radio.prototype.f = function() {
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
  Radio.prototype.render = function() {
    var _a = this.props,
      className = _a.className,
      value = _a.value,
      name = _a.name,
      children = _a.children
    return react_1.default.createElement(
      'div',
      null,
      react_1.default.createElement('input', {
        className: 'gerami-radio' + (className ? ' ' + className : '') + '  ',
        type: 'radio',
        name: name,
        value: value,
        checked: this.state.status,
        onClick: this.f.bind(this)
      }),
      name ? '' : null,
      children
    )
  }
  return Radio
})(react_1.Component)
exports.Radio = Radio
