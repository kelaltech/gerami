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
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
var react_1 = __importDefault(require('react'))
require('./CheckBox.scss')
var CheckBox = /** @class */ (function(_super) {
  __extends(CheckBox, _super)
  function CheckBox(props) {
    var _this = _super.call(this, props) || this
    _this.state = {
      status: false,
      checkMark: null
    }
    _this.state = {
      status: false,
      checkMark: null
    }
    _this.toggleCheckbox = _this.toggleCheckbox.bind(_this)
    var checked = _this.props.checked
    var status
    switch (typeof checked) {
      case 'number':
        if (checked === 0) status = true
        else status = true
        break
      case 'string':
        if (checked === 'true') status = true
        else if (checked === 'false') status = false
        break
      case 'boolean':
        status = checked
        break
      default:
        status = false
        break
    }
    _this.setState({
      status: status
    })
    console.log(_this.props.checked)
    return _this
  }
  CheckBox.prototype.componentDidMount = function() {
    this.setState({
      status: this.props.checked,
      checkMark: document.getElementById(this.props.className + 'check-mark')
    })
  }
  CheckBox.prototype.toggleCheckbox = function() {
    var checkMark = this.state.checkMark
    if (!this.state.status) {
      checkMark.style.backgroundColor = 'rgb(0, 180, 120)'
      this.setState({
        status: true
      })
    } else {
      this.setState({
        status: false
      })
      checkMark.style.backgroundColor = '#eee'
    }
  }
  CheckBox.prototype.render = function() {
    return react_1.default.createElement(
      'div',
      {
        className:
          this.props.className == undefined
            ? 'gerami-checkbox'
            : this.props.className + ' gerami-checkbox'
      },
      react_1.default.createElement('input', {
        type: 'checkbox',
        checked: this.state.status,
        onClick: this.toggleCheckbox.bind(this),
        className: 'input-element'
      }),
      react_1.default.createElement('span', {
        className: 'check-mark',
        id: this.props.className + 'check-mark',
        onClick: this.toggleCheckbox
      })
    )
  }
  return CheckBox
})(react_1.default.Component)
exports.CheckBox = CheckBox
