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
var react_1 = require("react");
require("./Loading.scss");
var __1 = require("../..");
var Loading = /** @class */ (function (_super) {
    __extends(Loading, _super);
    function Loading(props) {
        var _this = _super.call(this, props) || this;
        _this.dead = null;
        _this.state = {
            pastCustomDelay: !!props.delay ? !props.delay : true
        };
        if (props.delay)
            setTimeout(function () {
                !(_this.dead === false) || _this.setState({ pastCustomDelay: true });
            }, typeof props.delay === 'number' ? props.delay : 200);
        return _this;
    }
    Loading.prototype.componentDidMount = function () {
        this.dead = false;
    };
    Loading.prototype.componentWillUnmount = function () {
        this.dead = true;
    };
    Loading.prototype.render = function () {
        var _a = this.props, className = _a.className, error = _a.error, pastDelay = _a.pastDelay, problem = _a.problem, timedOut = _a.timedOut, rest = __rest(_a, ["className", "error", "pastDelay", "problem", "timedOut"]);
        if (rest) {
            //@ts-ignore
            delete rest.delay;
            //@ts-ignore
            delete rest.isLoading;
        }
        return problem ? (<__1.Warning {...rest} className={className}>
        <div className={'bold padding-bottom-normal'}>
          Ohh, no! We have a problem.
        </div>
        <div>
          <span className={'italic'}>Code</span>: {problem.code || '[N/A]'}
        </div>
        <div>
          <span className={'italic'}>Message</span>:{' '}
          {problem.message || (typeof problem === 'string' ? problem : '[N/A]')}
        </div>
      </__1.Warning>) : error ? (<__1.Warning {...rest} className={className}>
        Sorry, an unexpected error occurred.&nbsp;&nbsp;&nbsp;&nbsp;:(
      </__1.Warning>) : timedOut ? (<__1.Warning {...rest} className={className}>
        Sorry, the request timed out.&nbsp;&nbsp;&nbsp;&nbsp;:(
      </__1.Warning>) : pastDelay === false || !this.state.pastCustomDelay ? null : (<div {...rest} className={"loading" + (className ? ' ' + className : '')}>
        <svg className={'svg'} width={50} height={50}>
          <circle className="big-circle" cx={25} cy={25} r={18} strokeWidth={4}/>
          <circle className="small-circle" cx={25} cy={8} r={4} strokeWidth={8}/>
        </svg>
      </div>);
    };
    return Loading;
}(react_1.Component));
exports.Loading = Loading;
