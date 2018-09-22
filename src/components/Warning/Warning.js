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
var react_1 = __importStar(require('react'))
var Content_js_1 = require('../Content/Content.js')
var Block_js_1 = require('../Block/Block.js')
var Warning = /** @class */ (function(_super) {
  __extends(Warning, _super)
  function Warning(props) {
    var _this = _super.call(this, props) || this
    _this.dead = false
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
    return this.dead || this.state.hidden
      ? null
      : react_1.default.createElement(
          Content_js_1.Content,
          // @ts-ignore
          __assign(
            {
              // @ts-ignore
              title: shy ? 'Double click to hide Warning' : undefined
            },
            rest,
            {
              className: 'gerami-warning' + (className ? ' ' + className : ''),
              onDoubleClick: function(e) {
                _this.shyAway()
                //@ts-ignore
                if (typeof rest.onDoubleClick === 'function') rest.onClick(e)
              }
            }
          ),
          react_1.default.createElement(
            Block_js_1.Block,
            null,
            children ||
              (problem
                ? react_1.default.createElement(
                    'div',
                    { className: 'font-S center' },
                    problem.code ? problem.code + ': ' : null,
                    problem.message || (typeof problem === 'string' ? problem : null)
                  )
                : null)
          )
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
})(react_1.Component)
exports.Warning = Warning
