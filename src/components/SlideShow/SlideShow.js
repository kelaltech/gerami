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
var SlideShow = /** @class */ (function(_super) {
  __extends(SlideShow, _super)
  function SlideShow() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this
    _this.state = {}
    _this.slideIndex = 0
    _this.movement = function(n) {
      _this.slides((_this.slideIndex += n))
    }
    _this.currentSlide = function(n) {
      _this.slides((_this.slideIndex = n))
    }
    _this.automatic = function() {
      var x = document.getElementsByClassName('gerami-slideShow-slides')
      var dots = document.getElementsByClassName('gerami-slideShow-dot')
      for (var i = 0; i < x.length; i++) {
        x[i].style.display = 'none'
      }
      for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace('gerami-slideShow-active', '')
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
      var slides = document.getElementsByClassName('gerami-slideShow-slides')
      var dots = document.getElementsByClassName('gerami-slideShow-dot')
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
        dots[i].className = dots[i].className.replace('gerami-slideShow-active', '')
      }
      slides[_this.slideIndex - 1].style.display = 'block'
      dots[_this.slideIndex - 1].className += ' active'
    }
    return _this
  }
  SlideShow.prototype.componentDidMount = function() {
    if (this.props.autoPlay != undefined) this.automatic()
    else this.slides(this.slideIndex)
  }
  SlideShow.prototype.render = function() {
    var _this = this
    var _a = this.props,
      height = _a.height,
      images = _a.images,
      data = _a.data,
      showControls = _a.showControls,
      animation = _a.animation,
      rest = __rest(_a, ['height', 'images', 'data', 'showControls', 'animation'])
    delete rest.inlist
    delete rest.autoPlay
    return react_1.default.createElement(
      'div',
      __assign({}, rest),
      react_1.default.createElement(
        'div',
        { className: 'gerami-slideShow-SlideShowContainer' },
        images
          ? react_1.default.createElement(
              'div',
              null,
              images.map(function(Image, i) {
                return react_1.default.createElement(
                  'div',
                  { key: i, className: 'gerami-slideShow-slides ' + animation },
                  react_1.default.createElement('img', {
                    src: Image.image,
                    style: { width: '100%' },
                    height: height || ''
                  }),
                  react_1.default.createElement(
                    'div',
                    { className: 'gerami-slideShow-text' },
                    Image.caption
                  )
                )
              })
            )
          : '',
        data
          ? react_1.default.createElement(
              'div',
              null,
              data.map(function(Data, i) {
                return react_1.default.createElement(
                  'div',
                  {
                    key: i,
                    ref: 'gerami-slideShow-slides',
                    className: 'gerami-slideShow-mySlides gerami-slideShow-fade'
                  },
                  react_1.default.createElement('div', { style: { width: '100%' } }, Data)
                )
              })
            )
          : '',
        showControls
          ? react_1.default.createElement(
              'span',
              null,
              react_1.default.createElement(
                'a',
                {
                  className: 'gerami-slideShow-prev',
                  onClick: function() {
                    return _this.movement(-1)
                  }
                },
                ' ',
                '\u276E',
                ' '
              ),
              react_1.default.createElement(
                'a',
                {
                  className: 'gerami-slideShow-next',
                  onClick: function() {
                    return _this.movement(1)
                  }
                },
                ' ',
                '\u276F'
              )
            )
          : '',
        showControls
          ? react_1.default.createElement(
              'div',
              { className: 'gerami-slideShow-dot-style', style: { textAlign: 'center' } },
              images
                ? react_1.default.createElement(
                    'div',
                    null,
                    images.map(function(Image, i) {
                      return react_1.default.createElement(
                        'span',
                        { key: i },
                        react_1.default.createElement(
                          'span',
                          { style: { display: 'none' } },
                          ' ',
                          react_1.default.createElement('img', { src: Image.image })
                        ),
                        react_1.default.createElement(
                          'span',
                          {
                            className: 'gerami-slideShow-dot',
                            onClick: function() {
                              return _this.currentSlide(i + 1)
                            }
                          },
                          ' '
                        )
                      )
                    })
                  )
                : ''
            )
          : react_1.default.createElement(
              'div',
              { className: 'gerami-slideShow-dot-style', style: { textAlign: 'center' } },
              data
                ? react_1.default.createElement(
                    'div',
                    null,
                    data.map(function(Image, i) {
                      return react_1.default.createElement(
                        'span',
                        { key: i },
                        react_1.default.createElement(
                          'span',
                          { style: { display: 'none' } },
                          ' ',
                          react_1.default.createElement('img', { src: Image.image }),
                          ' '
                        ),
                        react_1.default.createElement(
                          'span',
                          {
                            className: 'gerami-slideShow-dot',
                            onClick: function() {
                              return _this.currentSlide(i + 1)
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
      react_1.default.createElement('br', null)
    )
  }
  return SlideShow
})(react_1.Component)
exports.SlideShow = SlideShow
