'use strict'
var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function(d, b) {
          d.__proto__ = b
        }) ||
      function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]
      }
    return function(d, b) {
      extendStatics(d, b)
      function __() {
        this.constructor = d
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __())
    }
  })()
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
Object.defineProperty(exports, '__esModule', { value: true })
var react_1 = require('react')
var React = require('react')
require('./TextArea.scss')
var default_1 = /** @class */ (function(_super) {
  __extends(default_1, _super)
  function default_1(props) {
    var _this = _super.call(this, props) || this
    _this.textarea = react_1.createRef()
    _this.placeholder = react_1.createRef()
    _this.updateFloat = _this.updateFloat.bind(_this)
    return _this
  }
  default_1.prototype.componentDidMount = function() {
    this.updateFloat()
  }
  default_1.prototype.render = function() {
    var _a = this.props,
      className = _a.className,
      label = _a.label,
      placeholder = _a.placeholder,
      rest = __rest(_a, ['className', 'label', 'placeholder'])
    return (
      <label className={'label' + (className ? ' ' + className : '')}>
        <textarea
          className={'textarea'}
          {...rest}
          onBlur={this.updateFloat}
          onChange={this.updateFloat}
          onFocus={this.updateFloat}
          onKeyDown={this.updateFloat}
          onKeyUp={this.updateFloat}
          placeholder={''}
          ref={this.textarea}
        />
        <div className={'placeholder'} ref={this.placeholder}>
          {placeholder || label}
        </div>
      </label>
    )
  }
  default_1.prototype.updateFloat = function() {
    this.placeholder.current.className =
      'placeholder' + (this.textarea.current.value ? ' float' : '')
  }
  Object.defineProperty(default_1.prototype, 'value', {
    get: function() {
      return this.textarea.current.value
    },
    enumerable: true,
    configurable: true
  })
  return default_1
})(react_1.Component)
exports.default = default_1
