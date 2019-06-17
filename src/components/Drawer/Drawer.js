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
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]]
      }
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
var react_1 = __importStar(require('react'))
var Content_js_1 = require('../Content/Content.js')
var sizeSpec = {
  XXS: 175,
  XS: 210,
  S: 245,
  M: 280,
  L: 315,
  XL: 350,
  XXL: 385,
  '3XL': 420,
  '4XL': 455,
  '5XL': 490,
  '6XL': 525,
  '7XL': 560,
  '8XL': 595,
  '9XL': 630
}
/**
 * A Drawer gerami components. (sometimes a.k.a side bar). It hides and shows.
 */
var Drawer = /** @class */ (function(_super) {
  __extends(Drawer, _super)
  function Drawer() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this
    _this.state = {
      closed: !_this.props.open
    }
    _this.drawerRef = react_1.createRef()
    _this.close = function() {
      var _a = _this.props,
        noClose = _a.noClose,
        onClose = _a.onClose
      if (!noClose) {
        _this.setState({ closed: false })
        if (typeof onClose === 'function') onClose()
      }
    }
    return _this
  }
  Drawer.prototype.componentDidUpdate = function() {
    if (this.state.closed !== (this.props.open === false))
      this.setState({ closed: this.props.open === false })
  }
  Drawer.prototype.render = function() {
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
    var maxWidth = size && (typeof size === 'string' ? sizeSpec[size] : size)
    if (rest) {
      delete rest.noClose
      delete rest.onClose
    }
    return !open || this.state.closed
      ? null
      : react_1.default.createElement(
          'div',
          { className: 'gerami-drawer-container', style: containerStyle },
          react_1.default.createElement('div', {
            className: 'gerami-drawer-background',
            onClick: this.close,
            style: backgroundStyle
          }),
          react_1.default.createElement(
            Content_js_1.Content,
            __assign({}, rest, {
              ref: this.drawerRef,
              className: 'gerami-drawer gerami-drawer-animate-' + align + ' ' + (className || ''),
              style: Object.assign(
                align === 'right' ? { right: 0 } : { left: 0 },
                { maxWidth: maxWidth },
                style
              )
            }),
            children
          )
        )
  }
  return Drawer
})(react_1.Component)
exports.Drawer = Drawer
