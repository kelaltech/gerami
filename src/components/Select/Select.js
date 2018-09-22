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
var Select = /** @class */ (function(_super) {
  __extends(Select, _super)
  function Select(props) {
    var _this = _super.call(this, props) || this
    _this.state = {
      options: _this.props.options || [],
      showOptions: false,
      multipleSelectedItems: [],
      singleSelectedItem: _this.props.placeholder || 'select any thing'
    }
    _this.handleShow = function() {
      _this.setState({
        showOptions: true
      })
    }
    _this.dropDown = function() {
      _this.setState(function(prevState) {
        return {
          showOptions: !prevState.showOptions
        }
      })
    }
    _this.handleSelectedOption = function(option) {
      _this.props.multiple
        ? _this.setState({
            multipleSelectedItems: _this.state.multipleSelectedItems.concat(option)
          })
        : _this.setState({
            singleSelectedItem: option
          })
    }
    _this.handleDisSelect = function(option) {
      _this.setState({
        multipleSelectedItems: _this.state.multipleSelectedItems.filter(function(item) {
          return item !== option
        })
      })
    }
    return _this
  }
  Select.prototype.render = function() {
    var _this = this
    var _a = this.props,
      className = _a.className,
      placeholder = _a.placeholder,
      options = _a.options,
      multiple = _a.multiple,
      rest = __rest(_a, ['className', 'placeholder', 'options', 'multiple'])
    return react_1.default.createElement(
      'div',
      __assign({ className: 'gerami-select-container' }, rest),
      react_1.default.createElement(
        'div',
        { className: 'gerami-select-header' },
        react_1.default.createElement(
          'div',
          { className: 'gerami-select-placeholder', onClick: this.handleShow },
          multiple
            ? this.state.multipleSelectedItems.map(function(option, key) {
                return react_1.default.createElement(
                  'div',
                  { key: key, className: 'gerami-multi' },
                  react_1.default.createElement('span', {
                    className: 'gerami-dis-select',
                    onClick: function() {
                      return _this.handleDisSelect(option)
                    }
                  }),
                  option
                )
              })
            : react_1.default.createElement('div', null, this.state.singleSelectedItem)
        ),
        react_1.default.createElement(
          'div',
          { className: 'gerami-arrow-container', onClick: this.dropDown },
          this.state.showOptions
            ? react_1.default.createElement('i', { className: 'fa fa-chevron-up' })
            : react_1.default.createElement('i', { className: 'fa fa-chevron-down' })
        )
      ),
      react_1.default.createElement(
        'div',
        {
          className: 'gerami-options-container',
          style: {
            display: this.state.showOptions ? 'block' : 'none'
          }
        },
        this.props.options.map(function(option, key) {
          return react_1.default.createElement(
            'div',
            {
              key: key,
              onClick: function() {
                return _this.handleSelectedOption(option)
              }
            },
            react_1.default.createElement('span', null, option)
          )
        })
      )
    )
  }
  return Select
})(react_1.Component)
exports.Select = Select
