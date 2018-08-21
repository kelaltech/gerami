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
var React = require('react')
var react_router_dom_1 = require('react-router-dom')
var Button_1 = require('../button/Button')
var Anchor = /** @class */ (function(_super) {
  __extends(Anchor, _super)
  function Anchor(props) {
    return _super.call(this, props) || this
  }
  Anchor.prototype.render = function() {
    var _a = this.props,
      button = _a.button,
      children = _a.children,
      className = _a.className,
      to = _a.to,
      rest = __rest(_a, ['button', 'children', 'className', 'to'])
    var child = button ? <Button_1.Button>{children}</Button_1.Button> : children
    return typeof to === 'string' ? (
      <react_router_dom_1.Link
        to={to}
        {...rest}
        className={'a' + (className ? ' ' + className : '')}
      >
        {child}
      </react_router_dom_1.Link>
    ) : (
      <a {...rest} className={'a' + (className ? ' ' + className : '')}>
        {child}
      </a>
    )
  }
  return Anchor
})(React.Component)
exports.Anchor = Anchor
