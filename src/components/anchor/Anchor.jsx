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
var React = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var __1 = require("../../");
var Anchor = /** @class */ (function (_super) {
    __extends(Anchor, _super);
    function Anchor(props) {
        return _super.call(this, props) || this;
    }
    Anchor.prototype.render = function () {
        var _a = this.props, button = _a.button, children = _a.children, className = _a.className, to = _a.to, rest = __rest(_a, ["button", "children", "className", "to"]);
        var child = button ? <__1.Button>{children}</__1.Button> : children;
        return typeof to === 'string' ? (<react_router_dom_1.Link to={to} {...rest} className={"a" + (className ? ' ' + className : '')}>
        {child}
      </react_router_dom_1.Link>) : (<a {...rest} className={"a" + (className ? ' ' + className : '')}>
        {child}
      </a>);
    };
    return Anchor;
}(React.Component));
exports.Anchor = Anchor;
