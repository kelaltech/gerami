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
var Dialog = /** @class */ (function(_super) {
  __extends(Dialog, _super)
  function Dialog(props) {
    var _this = _super.call(this, props) || this
    _this.handleDialogContainer = function() {
      var container = document.getElementById('gerami-dialog-container')
      container.style.display = 'none'
    }
    return _this
  }
  Dialog.prototype.componentDidUpdate = function(props) {
    console.log('component did update fired')
    var modal = document.getElementById('gerami-dialog-box')
    if (props.bottom) {
      modal.classList.add('anime-bottom')
    } else if (props.left) {
      modal.classList.add('anime-left')
    } else if (props.right) {
      modal.classList.add('anime-right')
    } else if (props.top) {
      modal.classList.add('anime-top')
    } else {
      modal.classList.remove('anime-right', 'anime-left', 'anime-top', 'anime-bottom')
    }
  }
  Dialog.prototype.render = function() {
    var _a = this.props,
      open = _a.open,
      children = _a.children,
      style = _a.style,
      className = _a.className
    return react_1.default.createElement(
      'div',
      {
        className: 'gerami-dialog-container',
        id: 'gerami-dialog-container',
        style: { display: open ? 'block' : 'none' },
        onClick: this.handleDialogContainer
      },
      react_1.default.createElement(
        'div',
        {
          style: style,
          id: 'gerami-dialog-box',
          className: 'gerami-dialog-box ' + (className ? className : '')
        },
        children
      )
    )
  }
  return Dialog
})(react_1.Component)
exports.Dialog = Dialog
