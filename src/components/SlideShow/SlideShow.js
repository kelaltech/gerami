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
var React = __importStar(require('react'))
require('./SlideShow.scss')
var SlideShow = /** @class */ (function(_super) {
  __extends(SlideShow, _super)
  function SlideShow() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this
    _this.slideIndex = 0
    _this.movement = function(n) {
      _this.slides((_this.slideIndex += n))
    }
    _this.currentSlide = function(n) {
      _this.slides((_this.slideIndex = n))
    }
    _this.automatic = function() {
      var x = document.getElementsByClassName('slides')
      var dots = document.getElementsByClassName('dot')
      for (var i = 0; i < x.length; i++) {
        x[i].style.display = 'none'
      }
      for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '')
      }
      _this.slideIndex++
      if (_this.slideIndex > x.length) {
        _this.slideIndex = 1
      }
      x[_this.slideIndex - 1].style.display = 'block'
      dots[_this.slideIndex - 1].className += ' active'
      if (_this.props.interval != undefined) setTimeout(_this.automatic, _this.props.interval)
      else setTimeout(_this.automatic, 2000)
    }
    _this.slides = function(n) {
      var slides = document.getElementsByClassName('slides')
      var dots = document.getElementsByClassName('dot')
      if (n > slides.length) {
        _this.slideIndex = 1
      }
      if (n < 1) {
        _this.slideIndex = slides.length
      }
      for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
      }
      for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '')
      }
      slides[_this.slideIndex - 1].style.display = 'block'
      dots[_this.slideIndex - 1].className += ' active'
    }
    return _this
  }
  SlideShow.prototype.componentDidMount = function() {
    if (this.props.autoplay != undefined) {
      this.automatic()
    } else this.slides(this.slideIndex)
  }
  SlideShow.prototype.render = function() {
    var _this = this
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'SlideShowContainer' },
        this.props.Images
          ? React.createElement(
              'div',
              null,
              this.props.Images.map(function(Image) {
                return React.createElement(
                  'div',
                  { className: 'slides ' + _this.props.animation },
                  React.createElement('img', {
                    src: Image.Image,
                    style: { width: '100%' },
                    height: _this.props.height ? _this.props.height : ''
                  }),
                  React.createElement('div', { className: 'text' }, Image.Caption)
                )
              })
            )
          : '',
        this.props.Data
          ? React.createElement(
              'div',
              null,
              this.props.Data.map(function(Data) {
                return React.createElement(
                  'div',
                  { ref: 'slides', className: 'mySlides fade' },
                  React.createElement('div', { style: { width: '100%' } }, Data)
                )
              })
            )
          : '',
        this.props.showControls
          ? React.createElement(
              'span',
              null,
              React.createElement(
                'a',
                {
                  className: 'prev',
                  onClick: function() {
                    return _this.movement(-1)
                  }
                },
                ' ',
                '\u276E',
                ' '
              ),
              React.createElement(
                'a',
                {
                  className: 'next',
                  onClick: function() {
                    return _this.movement(1)
                  }
                },
                ' ',
                '\u276F'
              )
            )
          : '',
        this.props.showControls
          ? React.createElement(
              'div',
              { className: 'dot-style', style: { textAlign: 'center' } },
              this.props.Images
                ? React.createElement(
                    'div',
                    null,
                    this.props.Images.map(function(Image, index) {
                      return React.createElement(
                        'span',
                        null,
                        React.createElement(
                          'span',
                          { style: { display: 'none' } },
                          ' ',
                          React.createElement('img', { src: Image.Image })
                        ),
                        React.createElement(
                          'span',
                          {
                            className: 'dot',
                            onClick: function() {
                              return _this.currentSlide(index + 1)
                            }
                          },
                          ' '
                        )
                      )
                    })
                  )
                : ''
            )
          : React.createElement(
              'div',
              { className: 'dot-style', style: { textAlign: 'center' } },
              this.props.Data
                ? React.createElement(
                    'div',
                    null,
                    this.props.Data.map(function(Image, index) {
                      return React.createElement(
                        'span',
                        null,
                        React.createElement(
                          'span',
                          { style: { display: 'none' } },
                          ' ',
                          React.createElement('img', { src: Image.Image })
                        ),
                        React.createElement(
                          'span',
                          {
                            className: 'dot',
                            onClick: function() {
                              return _this.currentSlide(index + 1)
                            }
                          },
                          ' '
                        )
                      )
                    })
                  )
                : ''
            )
      ),
      React.createElement('br', null)
    )
  }
  return SlideShow
})(React.Component)
exports.SlideShow = SlideShow
