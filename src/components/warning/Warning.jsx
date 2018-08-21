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
require('./Warning.scss')
var Content_1 = require('../content/Content')
var Block_1 = require('../block/Block')
var Warning = /** @class */ (function(_super) {
  __extends(Warning, _super)
  function Warning(props) {
    var _this = _super.call(this, props) || this
    _this.state = {
      hidden: false
    }
    _this.shyAway = _this.shyAway.bind(_this)
    return _this
  }
  Warning.prototype.componentDidMount = function() {
    var bomb = this.props.bomb
    if (bomb) window.setTimeout(this.shyAway, typeof bomb === 'number' ? bomb : 7000)
  }
  Warning.prototype.componentWillUnmount = function() {
    this.dead = true
  }
  Warning.prototype.render = function() {
    var _this = this
    var _a = this.props,
      children = _a.children,
      className = _a.className,
      problem = _a.problem,
      shy = _a.shy,
      rest = __rest(_a, ['children', 'className', 'problem', 'shy'])
    //@ts-ignore
    !rest || delete rest.bomb
    return this.dead || this.state.hidden ? null : (
      <Content_1.Content
        title={shy ? 'Double click to hide warning' : undefined}
        {...rest}
        className={'warning' + (className ? ' ' + className : '')}
        onDoubleClick={function(e) {
          _this.shyAway()
          if (typeof rest.onDoubleClick === 'function') rest.onClick(e)
        }}
      >
        <Block_1.Block>
          {children ||
            (problem ? (
              <div className={'font-S center'}>
                {problem.code ? problem.code + ': ' : null}
                {problem.message || (typeof problem === 'string' ? problem : null)}
              </div>
            ) : null)}
        </Block_1.Block>
      </Content_1.Content>
    )
  }
  Warning.prototype.shyAway = function() {
    var shy = this.props.shy
    if (shy && !this.dead) {
      this.setState({ hidden: true })
      if (typeof shy === 'function') shy()
    }
  }
  return Warning
})(React.Component)
exports.Warning = Warning
