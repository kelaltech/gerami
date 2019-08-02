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
var TextArea = /** @class */ (function(_super) {
  __extends(TextArea, _super)
  function TextArea() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this
    _this.state = {}
    _this.textarea = _this.props.innerRef || react_1.createRef()
    _this.placeholder = react_1.createRef()
    _this.updateFloat = function() {
      _this.placeholder.current &&
        (_this.placeholder.current.className =
          'gerami-textarea-placeholder ' + (_this.value && 'gerami-textarea-float'))
    }
    return _this
  }
  Object.defineProperty(TextArea.prototype, 'value', {
    get: function() {
      return this.textarea.current && this.textarea.current.value
    },
    enumerable: true,
    configurable: true
  })
  TextArea.prototype.componentDidMount = function() {
    this.updateFloat()
  }
  TextArea.prototype.render = function() {
    var _this = this
    var _a = this.props,
      className = _a.className,
      label = _a.label,
      onBlur = _a.onBlur,
      onChange = _a.onChange,
      onFocus = _a.onFocus,
      onKeyDown = _a.onKeyDown,
      onKeyUp = _a.onKeyUp,
      placeholder = _a.placeholder,
      rest = __rest(_a, [
        'className',
        'label',
        'onBlur',
        'onChange',
        'onFocus',
        'onKeyDown',
        'onKeyUp',
        'placeholder'
      ])
    delete rest.innerRef
    return react_1.default.createElement(
      'label',
      { className: 'gerami-textarea-label' + (className ? ' ' + className : '') },
      react_1.default.createElement(
        'textarea',
        __assign({ className: 'gerami-textarea' }, rest, {
          onBlur: function(e) {
            _this.updateFloat()
            !(typeof onBlur === 'function') || onBlur(e)
          },
          onChange: function(e) {
            _this.updateFloat()
            !(typeof onChange === 'function') || onChange(e)
          },
          onFocus: function(e) {
            _this.updateFloat()
            !(typeof onFocus === 'function') || onFocus(e)
          },
          onKeyDown: function(e) {
            _this.updateFloat()
            !(typeof onKeyDown === 'function') || onKeyDown(e)
          },
          onKeyUp: function(e) {
            _this.updateFloat()
            !(typeof onKeyUp === 'function') || onKeyUp(e)
          },
          placeholder: '',
          ref: this.textarea
        })
      ),
      react_1.default.createElement(
        'div',
        { className: 'gerami-textarea-placeholder', ref: this.placeholder },
        placeholder || label
      )
    )
  }
  return TextArea
})(react_1.Component)
exports.TextArea = TextArea
