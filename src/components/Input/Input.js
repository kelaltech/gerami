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
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]]
    return t
  }
Object.defineProperty(exports, '__esModule', { value: true })
var react_1 = require('react')
var React = require('react')
require('./Input.scss')
var Input = /** @class */ (function(_super) {
  __extends(Input, _super)
  function Input(props) {
    var _this = _super.call(this, props) || this
    _this.input = _this.props.inputRef || react_1.createRef()
    _this.placeholder = react_1.createRef()
    _this.updateFloat = _this.updateFloat.bind(_this)
    return _this
  }
  Input.prototype.componentDidMount = function() {
    this.updateFloat()
  }
  Input.prototype.render = function() {
    var _this = this
    var _a = this.props,
      className = _a.className,
      label = _a.label,
      onBlur = _a.onBlur,
      onChange = _a.onChange,
      onFocus = _a.onFocus,
      onKeyDown = _a.onKeyDown,
      onKeyUp = _a.onKeyUp,
      placeholder = _a.placeholder,
      rest = __rest(_a, [
        'className',
        'label',
        'onBlur',
        'onChange',
        'onFocus',
        'onKeyDown',
        'onKeyUp',
        'placeholder'
      ])
    //@ts-ignore
    !rest || delete rest.inputRef
    return React.createElement(
      'label',
      { className: 'gerami-label' + (className ? ' ' + className : '') },
      React.createElement(
        'input',
        __assign({ type: 'text', className: 'gerami-Input' }, rest, {
          onBlur: function(e) {
            _this.updateFloat()
            !(typeof onBlur === 'function') || onBlur(e)
          },
          onChange: function(e) {
            _this.updateFloat()
            !(typeof onChange === 'function') || onChange(e)
          },
          onFocus: function(e) {
            _this.updateFloat()
            !(typeof onFocus === 'function') || onFocus(e)
          },
          onKeyDown: function(e) {
            _this.updateFloat()
            !(typeof onKeyDown === 'function') || onKeyDown(e)
          },
          onKeyUp: function(e) {
            _this.updateFloat()
            !(typeof onKeyUp === 'function') || onKeyUp(e)
          },
          placeholder: '',
          ref: this.input
        })
      ),
      React.createElement(
        'div',
        { className: 'gerami-placeholder', ref: this.placeholder },
        placeholder || label
      )
    )
  }
  Input.prototype.updateFloat = function() {
    this.placeholder.current.className =
      'gerami-placeholder' + (this.input.current.value ? ' gerami-float' : '')
  }
  Object.defineProperty(Input.prototype, 'value', {
    get: function() {
      return this.input.current.value
    },
    enumerable: true,
    configurable: true
  })
  return Input
})(react_1.Component)
exports.Input = Input
