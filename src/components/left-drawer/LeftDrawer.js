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
var React = require('react')
var react_1 = require('react')
require('./LeftDrawer.scss')
var Content_1 = require('../content/Content')
var sizeSpec = {
  XXS: 175,
  XS: 210,
  S: 245,
  M: 280,
  L: 315,
  XL: 350,
  XXL: 385,
  X3L: 420,
  X4L: 455,
  X5L: 490,
  X6L: 525,
  X7L: 560,
  X8L: 595,
  X9L: 630
}
var LeftDrawer = /** @class */ (function(_super) {
  __extends(LeftDrawer, _super)
  function LeftDrawer(props) {
    var _this = _super.call(this, props) || this
    _this.leftDrawer = react_1.createRef()
    _this.state = {
      closed: _this.props.open === false
    }
    _this.close = _this.close.bind(_this)
    return _this
  }
  LeftDrawer.prototype.close = function() {
    var _a = this.props,
      noClose = _a.noClose,
      onClose = _a.onClose
    if (noClose !== true) {
      this.setState({ closed: false })
      if (typeof onClose === 'function') onClose()
    }
  }
  LeftDrawer.prototype.componentDidUpdate = function() {
    if (this.state.closed !== (this.props.open === false))
      this.setState({ closed: this.props.open === false })
  }
  LeftDrawer.prototype.render = function() {
    var _a = this.props,
      align = _a.align,
      backgroundStyle = _a.backgroundStyle,
      children = _a.children,
      className = _a.className,
      containerStyle = _a.containerStyle,
      open = _a.open,
      size = _a.size,
      style = _a.style,
      rest = __rest(_a, [
        'align',
        'backgroundStyle',
        'children',
        'className',
        'containerStyle',
        'open',
        'size',
        'style'
      ])
    var maxWidth
    switch (typeof size) {
      case 'number':
        maxWidth = size
        break
      case 'string':
        maxWidth = sizeSpec[size.toUpperCase()]
        break
      default:
        maxWidth = undefined
        break
    }
    if (rest) {
      //@ts-ignore
      delete rest.noClose
      //@ts-ignore
      delete rest.onClose
    }
    return open === false || this.state.closed
      ? null
      : React.createElement(
          'div',
          { className: 'left-drawer-container', style: containerStyle },
          React.createElement('div', {
            className: 'left-drawer-background',
            onClick: this.close,
            style: backgroundStyle
          }),
          React.createElement(
            Content_1.Content,
            __assign({}, rest, {
              ref: this.leftDrawer,
              className: 'left-drawer' + (className ? ' ' + className : ''),
              //@ts-ignore
              style: Object.assign(
                typeof align === 'string' && align.toLowerCase() === 'right'
                  ? { right: 0 }
                  : { left: 0 },
                { maxWidth: maxWidth },
                style
              )
            }),
            children
          )
        )
  }
  return LeftDrawer
})(react_1.Component)
exports.LeftDrawer = LeftDrawer
