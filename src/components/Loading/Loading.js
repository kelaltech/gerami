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
var Warning_js_1 = require('../Warning/Warning.js')
var Loading = /** @class */ (function(_super) {
  __extends(Loading, _super)
  function Loading(props) {
    var _this = _super.call(this, props) || this
    _this.state = {
      pastCustomDelay: !!_this.props.delay ? !_this.props.delay : true
    }
    _this.dead = null
    if (props.delay)
      setTimeout(
        function() {
          !(_this.dead === false) || _this.setState({ pastCustomDelay: true })
        },
        typeof props.delay === 'number' ? props.delay : 200
      )
    return _this
  }
  Loading.prototype.componentDidMount = function() {
    this.dead = false
  }
  Loading.prototype.componentWillUnmount = function() {
    this.dead = true
  }
  Loading.prototype.render = function() {
    var _a = this.props,
      className = _a.className,
      error = _a.error,
      pastDelay = _a.pastDelay,
      problem = _a.problem,
      timedOut = _a.timedOut,
      rest = __rest(_a, ['className', 'error', 'pastDelay', 'problem', 'timedOut'])
    if (rest) {
      delete rest.delay
      delete rest.isLoading
    }
    return problem
      ? react_1.default.createElement(
          Warning_js_1.Warning,
          __assign({}, rest, { className: className }),
          react_1.default.createElement(
            'div',
            { className: 'bold padding-bottom-normal' },
            'Ohh, no! We have a problem.'
          ),
          react_1.default.createElement(
            'div',
            null,
            react_1.default.createElement('span', { className: 'italic' }, 'Code'),
            ':',
            ' ',
            (typeof problem != 'string' && problem.code) || '[N/A]'
          ),
          react_1.default.createElement(
            'div',
            null,
            react_1.default.createElement('span', { className: 'italic' }, 'Message'),
            ':',
            ' ',
            (typeof problem != 'string' && problem.message) ||
              (typeof problem === 'string' ? problem : '[N/A]')
          )
        )
      : error
      ? react_1.default.createElement(
          Warning_js_1.Warning,
          __assign({}, rest, { className: className }),
          'Sorry, an unexpected error occurred.\u00A0\u00A0\u00A0\u00A0:('
        )
      : timedOut
      ? react_1.default.createElement(
          Warning_js_1.Warning,
          __assign({}, rest, { className: className }),
          'Sorry, the request timed out.\u00A0\u00A0\u00A0\u00A0:('
        )
      : pastDelay === false || !this.state.pastCustomDelay
      ? null
      : react_1.default.createElement(
          'div',
          __assign({}, rest, { className: 'gerami-loading' + (className ? ' ' + className : '') }),
          react_1.default.createElement(
            'svg',
            { className: 'gerami-svg', width: 50, height: 50 },
            react_1.default.createElement('circle', {
              className: 'gerami-big-circle',
              cx: 25,
              cy: 25,
              r: 18,
              strokeWidth: 4
            }),
            react_1.default.createElement('circle', {
              className: 'gerami-small-circle',
              cx: 25,
              cy: 8,
              r: 4,
              strokeWidth: 8
            })
          )
        )
  }
  return Loading
})(react_1.Component)
exports.Loading = Loading
