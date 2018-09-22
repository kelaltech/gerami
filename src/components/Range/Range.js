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
var Anchor_js_1 = require('../Anchor/Anchor.js')
var Range = /** @class */ (function(_super) {
  __extends(Range, _super)
  function Range() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this
    _this.state = {
      currentMin: _this.props.inputMin || _this.props.absoluteMin,
      currentMax: _this.props.inputMax || _this.props.absoluteMax
    }
    _this.topEle = react_1.createRef()
    _this.startDrag = function(e) {
      var dragIcon = document.createElement('img')
      dragIcon.style.display = 'none'
      e.dataTransfer.setDragImage(dragIcon, 0, 0)
    }
    _this.dragMin = function(e) {
      if (_this.topEle.current) {
        var _a = _this.props,
          absoluteMin = _a.absoluteMin,
          absoluteMax = _a.absoluteMax
        var absoluteDiff = absoluteMax - absoluteMin
        var eleLeftPx = _this.topEle.current.offsetLeft
        var eleWidthPx = _this.topEle.current.scrollWidth
        var pxPercent = (e.pageX - eleLeftPx) / eleWidthPx
        var currentMin = absoluteMin + absoluteDiff * pxPercent
        if (currentMin >= absoluteMin && currentMin <= absoluteMax)
          _this.setState({ currentMin: currentMin })
      }
    }
    _this.dragMax = function(e) {
      if (_this.topEle.current) {
        var _a = _this.props,
          absoluteMin = _a.absoluteMin,
          absoluteMax = _a.absoluteMax
        var absoluteDiff = absoluteMax - absoluteMin
        var eleLeftPx = _this.topEle.current.offsetLeft
        var eleWidthPx = _this.topEle.current.scrollWidth
        var pxPercent = (e.pageX - eleLeftPx) / eleWidthPx
        var currentMax = absoluteMin + absoluteDiff * pxPercent
        if (currentMax >= absoluteMin && currentMax <= absoluteMax)
          _this.setState({ currentMax: currentMax })
      }
    }
    return _this
  }
  Object.defineProperty(Range.prototype, 'min', {
    get: function() {
      return this.state.currentMin
    },
    enumerable: true,
    configurable: true
  })
  Object.defineProperty(Range.prototype, 'max', {
    get: function() {
      return this.state.currentMax
    },
    enumerable: true,
    configurable: true
  })
  Range.prototype.render = function() {
    var _a = this.props,
      absoluteMin = _a.absoluteMin,
      absoluteMax = _a.absoluteMax,
      className = _a.className,
      rest = __rest(_a, ['absoluteMin', 'absoluteMax', 'className'])
    var _b = this.state,
      currentMin = _b.currentMin,
      currentMax = _b.currentMax
    var leftPercent = (currentMin - absoluteMin) / (absoluteMax - absoluteMin)
    var widthPercent = (currentMax - currentMin) / (absoluteMax - absoluteMin)
    var selectedLineStyle = {
      width: widthPercent * 100 + '%',
      marginLeft: leftPercent * 100 + '%'
    }
    var minBtnVaultStyle = { marginLeft: leftPercent * 100 + '%' }
    var maxBtnVaultStyle = { marginLeft: (leftPercent + widthPercent) * 100 + '%' }
    return react_1.default.createElement(
      'div',
      __assign({}, rest, { className: 'gerami-range ' + (className || ''), ref: this.topEle }),
      react_1.default.createElement('div', { className: 'gerami-range-background-line' }),
      react_1.default.createElement('div', {
        className: 'gerami-range-selected-line',
        style: selectedLineStyle
      }),
      react_1.default.createElement(
        'div',
        { className: 'gerami-range-btn-vault', style: minBtnVaultStyle },
        react_1.default.createElement(Anchor_js_1.Anchor, {
          className: 'gerami-range-btn',
          draggable: true,
          onDragStart: this.startDrag,
          onDragCapture: this.dragMin,
          onDragOver: this.dragMin,
          onDragEnd: this.dragMin
        })
      ),
      react_1.default.createElement(
        'div',
        { className: 'gerami-range-btn-vault', style: maxBtnVaultStyle },
        react_1.default.createElement(Anchor_js_1.Anchor, {
          className: 'gerami-range-btn',
          draggable: true,
          onDragStart: this.startDrag,
          onDragCapture: this.dragMax,
          onDragOver: this.dragMax,
          onDragEnd: this.dragMax
        })
      )
    )
  }
  return Range
})(react_1.Component)
exports.Range = Range
