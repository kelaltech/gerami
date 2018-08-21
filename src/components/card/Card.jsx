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
require('./Card.scss')
var Content_1 = require('../content/Content')
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
    return (
      <Content_1.Content {...rest} className={'card' + (className ? ' ' + className : '')}>
        {imgSrc ? (
          <div
            className={'card-img'}
            //@ts-ignore
            style={Object.assign({ backgroundImage: 'url(' + imgSrc + ')' }, imgStyle)}
          />
        ) : null}

        {title || subtitle ? (
          <div className={'padding-big padding-bottom-none'}>
            {title ? (
              <div className={'font-L bold' + (subtitle ? ' padding-bottom-small' : '')}>
                {title}
              </div>
            ) : null}
            {subtitle ? <div className={'font-XS fg-blackish'}>{subtitle}</div> : null}
          </div>
        ) : null}

        {children ? (
          <div className={'padding-big'}>{children}</div>
        ) : (
          <div className={'padding-top-big'} />
        )}

        {actions ? (
          <div
            className={
              'flex padding-horizontal-big padding-vertical-normal font-S bg-whitish fg-blackish'
            }
          >
            {actions}
          </div>
        ) : null}
      </Content_1.Content>
    )
  }
  return Card
})(React.Component)
exports.Card = Card
