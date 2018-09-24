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
require('./Container.scss')
var Container = /** @class */ (function(_super) {
  __extends(Container, _super)
  function Container(props) {
    var _this = _super.call(this, props) || this
    _this.state = {
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      id: Math.random()
    }
    _this.setState({
      paddingTop: _this.props.top,
      paddingBottom: _this.props.bottom,
      paddingLeft: _this.props.left,
      paddingRight: _this.props.right
    })
    return _this
  }
  Container.prototype.render = function() {
    return react_1.default.createElement(
      'div',
      {
        className:
          this.props.className == undefined
            ? 'gerami-container'
            : this.props.className + ' gerami-container',
        style: Object.assign(
          {
            paddingTop: this.state.paddingTop,
            paddingBottom: this.state.paddingBottom,
            paddingLeft: this.state.paddingLeft,
            paddingRight: this.state.paddingRight
          },
          this.props.style
        )
      },
      this.props.children
    )
  }
  return Container
})(react_1.Component)
exports.Container = Container
