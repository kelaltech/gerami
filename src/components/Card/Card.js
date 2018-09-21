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
require('./Card.scss')
var Content_1 = require('../Content/Content')
var Card = /** @class */ (function(_super) {
  __extends(Card, _super)
  function Card(props) {
    return _super.call(this, props) || this
  }
  Card.prototype.render = function() {
    var _a = this.props,
      actions = _a.actions,
      children = _a.children,
      className = _a.className,
      imgSrc = _a.imgSrc,
      imgStyle = _a.imgStyle,
      subtitle = _a.subtitle,
      title = _a.title,
      rest = __rest(_a, [
        'actions',
        'children',
        'className',
        'imgSrc',
        'imgStyle',
        'subtitle',
        'title'
      ])
    return react_1.default.createElement(
      Content_1.Content,
      __assign({}, rest, { className: 'gerami-card' + (className ? ' ' + className : '') }),
      imgSrc
        ? react_1.default.createElement('div', {
            className: 'gerami-card-img',
            //@ts-ignore
            style: Object.assign({ backgroundImage: 'url(' + imgSrc + ')' }, imgStyle)
          })
        : null,
      title || subtitle
        ? react_1.default.createElement(
            'div',
            { className: 'padding-big padding-bottom-none' },
            title
              ? react_1.default.createElement(
                  'div',
                  { className: 'font-L bold' + (subtitle ? ' padding-bottom-small' : '') },
                  title
                )
              : null,
            subtitle
              ? react_1.default.createElement('div', { className: 'font-XS fg-blackish' }, subtitle)
              : null
          )
        : null,
      children
        ? react_1.default.createElement('div', { className: 'padding-big' }, children)
        : react_1.default.createElement('div', { className: 'padding-top-big' }),
      actions
        ? react_1.default.createElement(
            'div',
            {
              className:
                'flex padding-horizontal-big padding-vertical-normal font-S bg-whitish fg-blackish'
            },
            actions
          )
        : null
    )
  }
  return Card
})(react_1.Component)
exports.Card = Card
