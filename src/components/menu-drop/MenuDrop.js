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
var React = __importStar(require('react'))
var react_1 = require('react')
require('./MenuDrop.scss')
var __1 = require('../..')
var sizeSpec = {
  XXS: 70,
  XS: 105,
  S: 140,
  M: 175,
  L: 210,
  XL: 245,
  XXL: 280,
  X3L: 315,
  X4L: 350,
  X5L: 385,
  X6L: 420,
  X7L: 455,
  X8L: 490,
  X9L: 525
}
var MenuDrop = /** @class */ (function(_super) {
  __extends(MenuDrop, _super)
  function MenuDrop(props) {
    var _this = _super.call(this, props) || this
    _this.state = {
      closed: _this.props.open === false
    }
    _this.close = _this.close.bind(_this)
    return _this
  }
  MenuDrop.prototype.componentDidUpdate = function() {
    if (this.state.closed !== (this.props.open === false))
      this.setState({ closed: this.props.open === false })
  }
  MenuDrop.prototype.render = function() {
    var _a = this.props,
      align = _a.align,
      anchorOffset = _a.anchorOffset,
      backgroundStyle = _a.backgroundStyle,
      children = _a.children,
      className = _a.className,
      containerStyle = _a.containerStyle,
      open = _a.open,
      size = _a.size,
      style = _a.style,
      rest = __rest(_a, [
        'align',
        'anchorOffset',
        'backgroundStyle',
        'children',
        'className',
        'containerStyle',
        'open',
        'size',
        'style'
      ])
    var width
    switch (typeof size) {
      case 'number':
        width = size
        break
      case 'string':
        width = sizeSpec[size.toUpperCase()]
        break
      default:
        width = undefined
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
          __assign({}, rest, {
            className: 'menu-drop' + (className ? ' ' + className : ''),
            //@ts-ignore
            style: Object.assign(
              {
                width: anchorOffset || 0
              },
              containerStyle
            )
          }),
          React.createElement('div', {
            className: 'background',
            onClick: this.close,
            style: backgroundStyle
          }),
          React.createElement(
            __1.Content,
            {
              className: 'menu',
              //@ts-ignore
              style: Object.assign(
                {
                  width: width,
                  float: align || 'left'
                },
                style
              )
            },
            children
          )
        )
  }
  MenuDrop.prototype.close = function() {
    var _a = this.props,
      noClose = _a.noClose,
      onClose = _a.onClose
    if (noClose !== true) {
      this.setState({ closed: false })
      if (typeof onClose === 'function') onClose()
    }
  }
  return MenuDrop
})(react_1.Component)
exports.MenuDrop = MenuDrop
