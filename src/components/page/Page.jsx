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
require('./Page.scss')
var Page = /** @class */ (function(_super) {
  __extends(Page, _super)
  function Page(props) {
    return _super.call(this, props) || this
  }
  Page.prototype.render = function() {
    var _a = this.props,
      bottom = _a.bottom,
      children = _a.children,
      className = _a.className,
      top = _a.top,
      style = _a.style,
      rest = __rest(_a, ['bottom', 'children', 'className', 'top', 'style'])
    var paddingTop =
      top === true ||
      (typeof top === 'string' &&
        (top.toLowerCase() === 'auto' || top.toLowerCase() === 'adaptive'))
        ? '7%'
        : typeof top === 'number' || typeof top === 'string'
          ? top
          : 20
    var paddingBottom =
      bottom === true ||
      (typeof bottom === 'string' &&
        (bottom.toLowerCase() === 'auto' || bottom.toLowerCase() === 'adaptive'))
        ? '7%'
        : typeof bottom === 'number' || typeof bottom === 'string'
          ? bottom
          : 20
    return (
      <div
        {...rest}
        className={'page' + (className ? ' ' + className : '')}
        //@ts-ignore
        style={Object.assign(
          {
            paddingTop: paddingTop,
            paddingBottom: paddingBottom
          },
          style
        )}
      >
        {children}
      </div>
    )
  }
  return Page
})(React.Component)
exports.Page = Page
