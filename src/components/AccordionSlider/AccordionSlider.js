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
var Anchor_js_1 = require('../Anchor/Anchor.js')
exports.imgLength = {
  length: 0
}
var AccordionSlider = /** @class */ (function(_super) {
  __extends(AccordionSlider, _super)
  function AccordionSlider() {
    return (_super !== null && _super.apply(this, arguments)) || this
  }
  AccordionSlider.prototype.render = function() {
    var _a = this.props,
      width = _a.width,
      height = _a.height,
      imgs = _a.imgs
    exports.imgLength.length = imgs.length // to divide the space equally bn images
    return react_1.default.createElement(
      'div',
      {
        style: {
          width: width ? width : '100%',
          height: height ? height : '300px'
        },
        className: 'gerami-accordion-container'
      },
      react_1.default.createElement(
        'div',
        { className: 'gerami-modal-container' },
        imgs.map(function(img, key) {
          return react_1.default.createElement(
            'div',
            {
              key: key,
              style: {
                backgroundImage: 'url(' + img.src + ')',
                width: 100 / imgs.length + '%'
              },
              className: 'gerami-modal-img'
            },
            img.caption
              ? react_1.default.createElement(
                  'div',
                  { className: 'gerami-modal-caption-container' },
                  react_1.default.createElement(
                    'div',
                    { className: 'gerami-modal-caption' },
                    react_1.default.createElement('p', null, img.caption)
                  ),
                  img.action
                    ? react_1.default.createElement(
                        'div',
                        { className: 'gerami-modal-action' },
                        react_1.default.createElement(
                          Anchor_js_1.Anchor,
                          { to: img.action.to },
                          img.action.headline
                        )
                      )
                    : null
                )
              : null
          )
        })
      )
    )
  }
  return AccordionSlider
})(react_1.Component)
exports.AccordionSlider = AccordionSlider
