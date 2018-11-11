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
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
var React = __importStar(require('react'))
var _3_jpg_1 = __importDefault(require('./3.jpg'))
var react_1 = require('react')
var ImageInput = /** @class */ (function(_super) {
  __extends(ImageInput, _super)
  function ImageInput() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this
    _this.state = {
      image: undefined
    }
    _this.innerRef = _this.props.innerRef || react_1.createRef()
    _this.changeImg = function(e) {
      var file = e.target.files[0]
      if (!file) {
        _this.setState({ image: undefined })
        return
      }
      var reader = new FileReader()
      reader.onload = function(ev) {
        return _this.setState({
          image: ev.target.result
        })
      }
      reader.readAsDataURL(file)
    }
    return _this
  }
  Object.defineProperty(ImageInput.prototype, 'imageUrl', {
    get: function() {
      return this.state.image || null
    },
    enumerable: true,
    configurable: true
  })
  ImageInput.prototype.render = function() {
    var _this = this
    var _a = this.props,
      circular = _a.circular,
      placeholderSrc = _a.placeholderSrc,
      width = _a.width,
      borderRadius = _a.borderRadius,
      className = _a.className,
      onChange = _a.onChange,
      rest = __rest(_a, [
        'circular',
        'placeholderSrc',
        'width',
        'borderRadius',
        'className',
        'onChange'
      ])
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'gerami-imageInput-Camera-Image' },
        React.createElement(
          'label',
          { htmlFor: 'Cover' },
          React.createElement('img', {
            className: circular ? 'gerami-imageInput-image' : 'gerami-imageInput-image-input',
            src: this.imageUrl || placeholderSrc || _3_jpg_1.default,
            width: width || '80px',
            height: width || '60px',
            style: borderRadius ? { borderRadius: borderRadius } : {},
            alt: 'Choose Image'
          })
        ),
        React.createElement(
          'input',
          __assign({ name: 'image' }, rest, {
            ref: this.innerRef,
            className: 'gerami-imageInput-File gerami-imageInput-none ' + (className || ''),
            onChange: function(e) {
              _this.changeImg(e)
              onChange && onChange(e)
            },
            type: 'file',
            id: 'Cover'
          })
        )
      )
    )
  }
  return ImageInput
})(react_1.Component)
exports.ImageInput = ImageInput
