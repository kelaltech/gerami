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
require('./Button.scss')
var Button = /** @class */ (function(_super) {
  __extends(Button, _super)
  function Button(props) {
    return _super.call(this, props) || this
  }
  Button.prototype.render = function() {
    var _a = this.props,
      children = _a.children,
      className = _a.className,
      primary = _a.primary,
      to = _a.to,
      type = _a.type,
      rest = __rest(_a, ['children', 'className', 'primary', 'to', 'type'])
    var button = (
      <button
        {...rest}
        className={
          'button ' +
          (primary || (typeof type === 'string' && type.toLowerCase() === 'submit')
            ? 'button-primary'
            : '') +
          (className ? ' ' + className : '')
        }
        type={type || 'button'}
      >
        {children}
      </button>
    )
    return to ? <react_router_dom_1.Link to={to}>{button}</react_router_dom_1.Link> : button
  }
  return Button
})(React.Component)
exports.Button = Button
