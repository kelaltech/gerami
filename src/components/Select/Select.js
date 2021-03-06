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
var MenuItem_js_1 = require('../MenuItem/MenuItem.js')
var react_fontawesome_1 = require('@fortawesome/react-fontawesome')
var free_solid_svg_icons_1 = require('@fortawesome/free-solid-svg-icons')
var Select = /** @class */ (function(_super) {
  __extends(Select, _super)
  function Select() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this
    _this.state = {
      options: _this.props.options || [],
      showOptions: false,
      multipleSelectedItems: [],
      singleSelectedItem: { name: '', value: '' },
      showPlaceholder: true
    }
    _this.handleShow = function() {
      _this.setState({
        showOptions: true
      })
    }
    _this.clearAllSelection = function() {
      _this.setState({
        options: _this.props.options || [],
        showOptions: false,
        multipleSelectedItems: [],
        singleSelectedItem: { name: '', value: '' },
        showPlaceholder: true
      })
      _this.props.selectedValue()
    }
    _this.dropDown = function() {
      _this.setState(function(prevState) {
        return {
          showOptions: !prevState.showOptions
        }
      })
    }
    _this.handleDisSelect = function(option) {
      if (_this.props.multiple) {
        var arr = _this.state.multipleSelectedItems.filter(function(item) {
          return item !== option
        })
        _this.setState({
          multipleSelectedItems: arr
        })
        if (arr.length == 0) {
          _this.setState({
            showPlaceholder: true
          })
        }
        _this.setState({
          options: _this.state.options.concat(option)
        })
        _this.props.selectedValue(arr)
      }
    }
    _this.handleSelectedOption = function(option) {
      _this.state.showPlaceholder = false
      if (_this.props.multiple) {
        var selectedItems = _this.state.multipleSelectedItems.concat(option)
        _this.setState({
          multipleSelectedItems: selectedItems
        })
        _this.props.selectedValue(selectedItems)
        _this.setState({
          options: _this.state.options.filter(function(item) {
            return item !== option
          })
        })
      } else {
        _this.setState({
          singleSelectedItem: option
        })
        _this.dropDown()
        _this.props.selectedValue(option)
      }
      //comment
      /*   this.props.multiple
              ? ( this.setState({
                  multipleSelectedItems: this.state.multipleSelectedItems.concat(option)
                }),
              this.props.selectedValue(this.state.multipleSelectedItems)
              )
              : (this.setState({
                  singleSelectedItem: option
                }),
            this.props.selectedValue(option)
              )*/
    }
    return _this
  }
  Select.prototype.render = function() {
    var _this = this
    var _a = this.props,
      className = _a.className,
      placeholder = _a.placeholder,
      multiple = _a.multiple,
      size = _a.size,
      name = _a.name,
      rest = __rest(_a, ['className', 'placeholder', 'multiple', 'size', 'name'])
    var _b = this.state,
      options = _b.options,
      showOptions = _b.showOptions,
      multipleSelectedItems = _b.multipleSelectedItems,
      showPlaceholder = _b.showPlaceholder,
      singleSelectedItem = _b.singleSelectedItem
    delete rest.selectedValue
    return react_1.default.createElement(
      'div',
      __assign(
        {
          style: {
            width: size ? size : ''
          },
          className: 'gerami-select-container ' + (className || '')
        },
        rest
      ),
      react_1.default.createElement(
        'div',
        { className: 'gerami-select-header', tabIndex: 0 },
        react_1.default.createElement(
          'div',
          { className: 'gerami-select-placeholder', onClick: this.handleShow },
          react_1.default.createElement(
            'span',
            { className: 'gerami-selected-options-container' },
            multiple
              ? multipleSelectedItems.map(function(option, i) {
                  return react_1.default.createElement(
                    'span',
                    {
                      key: i,
                      style: {
                        display: '' + (showPlaceholder ? 'none' : 'inline')
                      },
                      className: 'gerami-multi-option-container'
                    },
                    react_1.default.createElement(
                      'span',
                      { className: 'gerami-multi-option' },
                      option.name,
                      react_1.default.createElement(
                        'span',
                        {
                          onClick: function() {
                            return _this.handleDisSelect(option)
                          }
                        },
                        react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, {
                          icon: free_solid_svg_icons_1.faTimes
                        })
                      )
                    )
                  )
                })
              : react_1.default.createElement(
                  'span',
                  {
                    className: 'gerami-single-option-container',
                    onClick: function() {
                      return _this.handleDisSelect(singleSelectedItem)
                    },
                    style: {
                      display: '' + (showPlaceholder ? 'none' : 'inline')
                    }
                  },
                  singleSelectedItem.name
                ),
            react_1.default.createElement(
              'span',
              null,
              showPlaceholder ? '' + (placeholder || 'Select...') : ''
            )
          )
        ),
        react_1.default.createElement(
          'div',
          { className: 'gerami-arrow-container' },
          showPlaceholder
            ? null
            : react_1.default.createElement('i', {
                className: 'fa fa-times gerami-cancel-all',
                onClick: this.clearAllSelection
              }),
          showOptions
            ? react_1.default.createElement('i', {
                className: 'fa fa-chevron-up',
                onClick: this.dropDown
              })
            : react_1.default.createElement('i', {
                className: 'fa fa-chevron-down',
                onClick: this.dropDown
              })
        )
      ),
      react_1.default.createElement('input', {
        type: 'hidden',
        name: name ? name : '',
        value: multiple ? '' : singleSelectedItem.value
      }),
      react_1.default.createElement('div', {
        onClick: this.dropDown,
        style: {
          display: showOptions ? 'block' : 'none'
        },
        className: 'gerami-background-container'
      }),
      react_1.default.createElement(
        'div',
        {
          className: 'gerami-options-container-big',
          style: {
            display: showOptions ? 'block' : 'none'
          }
        },
        react_1.default.createElement(
          'div',
          { className: 'gerami-options-container' },
          options.map(function(option, i) {
            return react_1.default.createElement(
              MenuItem_js_1.MenuItem,
              {
                key: i,
                onClick: function() {
                  return _this.handleSelectedOption(option)
                }
              },
              option.name
            )
          })
        )
      )
    )
  }
  return Select
})(react_1.Component)
exports.Select = Select
