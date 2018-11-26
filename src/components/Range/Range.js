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
var Button_js_1 = require('../Button/Button.js')
/**
 * A gerami form control element that receives absolute minimum and maximum
 * numbers (optionally, with a unit) and allows the user to select a range of
 * number values within the provided scale.
 */
var Range = /** @class */ (function(_super) {
  __extends(Range, _super)
  function Range() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this
    _this.state = {
      checked: false,
      currentMin:
        (_this.props.roundValues && Math.round(_this.props.inputMin || _this.props.absoluteMin)) ||
        _this.props.inputMin ||
        _this.props.absoluteMin,
      currentMax:
        (_this.props.roundValues && Math.round(_this.props.inputMax || _this.props.absoluteMax)) ||
        _this.props.inputMax ||
        _this.props.absoluteMax,
      minMoving: false,
      maxMoving: false
    }
    _this.topEle = react_1.createRef()
    _this.doChecks = function() {
      var _a = _this.props,
        absoluteMin = _a.absoluteMin,
        absoluteMax = _a.absoluteMax,
        inputMin = _a.inputMin,
        inputMax = _a.inputMax
      if (absoluteMin >= absoluteMax)
        throw Error(
          "gerami component error: in Range: 'absoluteMin' value " +
            absoluteMin +
            " cannot be greater than or equal to 'absoluteMax' value " +
            absoluteMax +
            '.'
        )
      if (inputMin != undefined && (inputMin < absoluteMin || inputMin > absoluteMax))
        throw Error(
          "gerami component error: in Range: 'inputMin' value " +
            inputMin +
            ' is out of the absolute range of values ' +
            absoluteMin +
            ' - ' +
            absoluteMax +
            '.'
        )
      if (inputMax != undefined && (inputMax < absoluteMin || inputMax > absoluteMax))
        throw Error(
          "gerami component error: in Range: 'inputMax' value " +
            inputMax +
            ' is out of the absolute range of values ' +
            absoluteMin +
            ' - ' +
            absoluteMax +
            '.'
        )
      if (inputMin != undefined && inputMax != undefined && inputMin >= inputMax) {
        throw Error(
          "gerami component error: in Range: 'inputMin' value " +
            inputMin +
            " cannot be greater than or equal to 'inputMax' value " +
            inputMax +
            '.'
        )
      }
      _this.setState({ checked: true })
    }
    _this.dragMin = function(clientX) {
      var currentMax = _this.state.currentMax
      var currentMin = _this._calcDrag(clientX)
      if (currentMin != null && currentMin < currentMax) _this.setState({ currentMin: currentMin })
    }
    _this.dragMax = function(clientX) {
      var currentMin = _this.state.currentMin
      var currentMax = _this._calcDrag(clientX)
      if (currentMax != null && currentMin < currentMax) _this.setState({ currentMax: currentMax })
    }
    _this._calcDrag = function(clientX) {
      if (!_this.topEle.current) return null
      var _a = _this.props,
        absoluteMin = _a.absoluteMin,
        absoluteMax = _a.absoluteMax,
        roundValues = _a.roundValues
      var absoluteDiff = absoluteMax - absoluteMin
      var eleLeftPx = _this.topEle.current.offsetLeft
      var eleWidthPx = _this.topEle.current.scrollWidth
      var pxPercent = (clientX - eleLeftPx) / eleWidthPx
      var ret = absoluteMin + absoluteDiff * pxPercent
      if (roundValues) ret = Math.round(ret)
      return ret >= absoluteMin && ret <= absoluteMax ? ret : null
    }
    _this.stopDrag = function(dragFunc, clientX) {
      var onMoved = _this.props.onMoved
      var _a = _this.state,
        min = _a.currentMin,
        max = _a.currentMax
      dragFunc(clientX)
      _this.setState({
        minMoving: false,
        maxMoving: false
      })
      onMoved &&
        setTimeout(function() {
          return onMoved({ min: min, max: max })
        }, 0)
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
  Range.prototype.componentDidMount = function() {
    this.doChecks()
  }
  Range.prototype.render = function() {
    var _this = this
    var _a = this.props,
      absoluteMin = _a.absoluteMin,
      absoluteMax = _a.absoluteMax,
      className = _a.className,
      name = _a.name,
      rest = __rest(_a, ['absoluteMin', 'absoluteMax', 'className', 'name'])
    var _b = this.state,
      checked = _b.checked,
      currentMin = _b.currentMin,
      currentMax = _b.currentMax,
      minMoving = _b.minMoving,
      maxMoving = _b.maxMoving
    if (!checked) return null
    var leftPercent = (currentMin - absoluteMin) / (absoluteMax - absoluteMin)
    var widthPercent = (currentMax - currentMin) / (absoluteMax - absoluteMin)
    var selectedLineStyle = {
      width: widthPercent * 100 + '%',
      marginLeft: leftPercent * 100 + '%'
    }
    var minBtnVaultStyle = { marginLeft: leftPercent * 100 + '%' }
    var maxBtnVaultStyle = { marginLeft: (leftPercent + widthPercent) * 100 + '%' }
    delete rest.inputMin
    delete rest.inputMax
    delete rest.roundValues
    delete rest.showNumbers
    delete rest.showUnit
    delete rest.unit
    delete rest.unitPosition
    delete rest.onMoved
    return react_1.default.createElement(
      'div',
      __assign({}, rest, { className: 'gerami-range ' + (className || ''), ref: this.topEle }),
      react_1.default.createElement('input', {
        type: 'hidden',
        name: name,
        value: currentMin + ',' + currentMax
      }),
      react_1.default.createElement('div', { className: 'gerami-range-background-line' }),
      react_1.default.createElement('div', {
        className: 'gerami-range-selected-line',
        style: selectedLineStyle
      }),
      react_1.default.createElement(
        'div',
        { className: 'gerami-range-btn-vault', style: minBtnVaultStyle },
        react_1.default.createElement(Button_js_1.Button, {
          className: 'gerami-range-btn',
          draggable: false,
          onClick: function(e) {
            return e.preventDefault()
          },
          onTouchMove: function(e) {
            return _this.dragMin(e.touches[0].clientX)
          },
          onTouchEnd: function(e) {
            return _this.stopDrag(_this.dragMin, e.touches[0].clientX)
          },
          onMouseDown: function(e) {
            e.preventDefault()
            _this.setState({ minMoving: true })
          }
        }),
        minMoving &&
          react_1.default.createElement('div', {
            className: 'gerami-range-full-filled-ghost',
            onMouseMove: function(e) {
              return _this.dragMin(e.clientX)
            },
            onMouseUp: function(e) {
              return _this.stopDrag(_this.dragMin, e.clientX)
            }
          })
      ),
      react_1.default.createElement(
        'div',
        { className: 'gerami-range-btn-vault', style: maxBtnVaultStyle },
        react_1.default.createElement(Button_js_1.Button, {
          className: 'gerami-range-btn',
          draggable: false,
          onClick: function(e) {
            return e.preventDefault()
          },
          onTouchMove: function(e) {
            return _this.dragMax(e.touches[0].clientX)
          },
          onTouchEnd: function(e) {
            return _this.stopDrag(_this.dragMax, e.touches[0].clientX)
          },
          onMouseDown: function(e) {
            e.preventDefault()
            _this.setState({ maxMoving: true })
          }
        }),
        maxMoving &&
          react_1.default.createElement('div', {
            className: 'gerami-range-full-filled-ghost',
            onMouseMove: function(e) {
              return _this.dragMax(e.clientX)
            },
            onMouseUp: function(e) {
              return _this.stopDrag(_this.dragMax, e.clientX)
            }
          })
      )
    )
  }
  return Range
})(react_1.Component)
exports.Range = Range
