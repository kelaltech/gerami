"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var React = __importStar(require("react"));
require("./TextArea.scss");
var TextArea = /** @class */ (function (_super) {
    __extends(TextArea, _super);
    function TextArea(props) {
        var _this = _super.call(this, props) || this;
        _this.textarea = react_1.createRef();
        _this.placeholder = react_1.createRef();
        _this.updateFloat = _this.updateFloat.bind(_this);
        return _this;
    }
    TextArea.prototype.componentDidMount = function () {
        this.updateFloat();
    };
    TextArea.prototype.render = function () {
        var _a = this.props, className = _a.className, label = _a.label, placeholder = _a.placeholder, rest = __rest(_a, ["className", "label", "placeholder"]);
        return (<label className={"label" + (className ? ' ' + className : '')}>
        <textarea className={'textarea'} {...rest} onBlur={this.updateFloat} onChange={this.updateFloat} onFocus={this.updateFloat} onKeyDown={this.updateFloat} onKeyUp={this.updateFloat} placeholder={''} ref={this.textarea}/>
        <div className={'placeholder'} ref={this.placeholder}>
          {placeholder || label}
        </div>
      </label>);
    };
    TextArea.prototype.updateFloat = function () {
        this.placeholder.current.className = "placeholder" + (this.textarea.current.value ? ' float' : '');
    };
    Object.defineProperty(TextArea.prototype, "value", {
        get: function () {
            return this.textarea.current.value;
        },
        enumerable: true,
        configurable: true
    });
    return TextArea;
}(react_1.Component));
exports.TextArea = TextArea;
