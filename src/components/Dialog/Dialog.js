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
Object.defineProperty(exports, '__esModule', { value: true })
var React = require('react')
require('./Dialog.scss')
var Dialog = /** @class */ (function(_super) {
  __extends(Dialog, _super)
  function Dialog(props) {
    var _this = _super.call(this, props) || this
    _this.state = {
      open: false
    }
    return _this
  }
  Dialog.prototype.render = function() {
    return React.createElement(
      'div',
      { className: 'gerami-modal center', style: { display: this.props.open ? 'block' : 'none' } },
      React.createElement(
        'div',
        { className: 'gerami-modal-content', style: { width: this.props.width } },
        this.props.children
      )
    )
  }
  return Dialog
})(React.Component)
exports.Dialog = Dialog
