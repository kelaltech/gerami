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
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
var React = __importStar(require('react'))
var _3_jpg_1 = __importDefault(require('./3.jpg'))
var ImageInput = /** @class */ (function(_super) {
  __extends(ImageInput, _super)
  function ImageInput() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this
    _this.state = {
      image: _this.props.image ? _this.props.image : _3_jpg_1.default
    }
    return _this
  }
  ImageInput.prototype.changeImg = function(e) {
    var _this = this
    var file = e.target.files[0]
    if (!file) {
      //this.setState({ image: this.props.image?this.props.image:icon})
      return
    }
    var reader = new FileReader()
    reader.onload = function(ev) {
      return _this.setState({ image: ev.target.result })
    }
    reader.readAsDataURL(file)
  }
  ImageInput.prototype.render = function() {
    var _this = this
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'Camera-Image' },
        React.createElement(
          'label',
          { htmlFor: 'Cover' },
          React.createElement('img', {
            className: this.props.circular ? 'image' : 'image-input',
            src: this.state.image,
            width: this.props.width ? this.props.width : '100px',
            height: this.props.width ? this.props.width : '100px',
            style: this.props.borderRadius ? { borderRadius: this.props.borderRadius } : {},
            alt: 'Insert image'
          })
        ),
        React.createElement('input', {
          className: 'File none',
          id: 'Cover',
          name: 'picture',
          onChange: function(e) {
            _this.changeImg(e)
          },
          type: 'file',
          required: true
        })
      )
    )
  }
  return ImageInput
})(React.Component)
exports.ImageInput = ImageInput
