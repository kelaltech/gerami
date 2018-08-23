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
require('./Block.scss')
var Block = /** @class */ (function(_super) {
  __extends(Block, _super)
  function Block(props) {
    return _super.call(this, props) || this
  }
  Block.prototype.render = function() {
    var _a = this.props,
      children = _a.children,
      className = _a.className,
      first = _a.first,
      last = _a.last,
      rest = __rest(_a, ['children', 'className', 'first', 'last'])
    return (
      <div
        style={{
          paddingTop: first ? 30 : 10,
          paddingBottom: last ? 30 : 10
        }}
        {...rest}
        className={'block' + (className ? ' ' + className : '')}
      >
        {children}
      </div>
    )
  }
  return Block
})(React.Component)
exports.Block = Block
