"use strict";(self.webpackChunkneat_design=self.webpackChunkneat_design||[]).push([[32],{33684:function(Y,C,t){t.r(C),t.d(C,{default:function(){return W}});var A=t(27424),D=t.n(A),E=t(30474),J=t(27544),N=t(96974),b=t(80884),H=t(18698),L=t.n(H),w=t(42122),B,f="/";function k(n){var e;return n.type==="hash"?e=createHashHistory():n.type==="memory"?e=createMemoryHistory(n):e=createBrowserHistory(),n.basename&&(f=n.basename),B=_objectSpread(_objectSpread({},e),{},{push:function(o,a){e.push(T(o,e),a)},replace:function(o,a){e.replace(T(o,e),a)},get location(){return e.location},get action(){return e.action}}),e}function T(n,e){if(typeof n=="string")return"".concat(x(f)).concat(n);if(_typeof(n)==="object"){var r=e.location.pathname;return _objectSpread(_objectSpread({},n),{},{pathname:n.pathname?"".concat(x(f)).concat(n.pathname):r})}else throw new Error("Unexpected to: ".concat(n))}function x(n){return n.slice(-1)==="/"?n.slice(0,-1):n}var q=0,d=0;function s(n,e){if(!1)var r}function V(n){return JSON.stringify(n,null,2)}function c(n){var e=n.length>1?n.map(j).join(" "):n[0];return L()(e)==="object"?"".concat(V(e)):e.toString()}function j(n){return L()(n)==="object"?"".concat(JSON.stringify(n)):n.toString()}var _={log:function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];s("log",c(r))},info:function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];s("info",c(r))},warn:function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];s("warn",c(r))},error:function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];s("error",c(r))},group:function(){d++},groupCollapsed:function(){d++},groupEnd:function(){d&&--d},clear:function(){s("clear")},trace:function(){var e;(e=console).trace.apply(e,arguments)},profile:function(){var e;(e=console).profile.apply(e,arguments)},profileEnd:function(){var e;(e=console).profileEnd.apply(e,arguments)}},tt=t(17061),nt=t(17156),et=t(67294),ot=t(58472),rt=t(36386),at=t(17015),ut=t(11454),it=t(75516);function lt(n){return n.default?typeof n.default=="function"?n.default():n.default:n}function K(){return[{apply:Plugin_0,path:void 0},{apply:Plugin_1,path:void 0},{apply:Plugin_2,path:void 0},{apply:Plugin_3,path:void 0}]}function $(){return["patchRoutes","patchClientRoutes","modifyContextOpts","modifyClientRenderOpts","rootContainer","innerProvider","i18nProvider","accessProvider","dataflowProvider","outerProvider","render","onRouteChange","modifyCodeSandboxData","modifyStackBlitzData"]}var m=null;function st(){return m=PluginManager.create({plugins:K(),validKeys:$()}),m}function dt(){return m}function ct(){return y.apply(this,arguments)}function y(){return y=_asyncToGenerator(_regeneratorRuntime().mark(function n(){var e;return _regeneratorRuntime().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return e={404:{id:"404",path:"*",parentId:"DocLayout"},GlobalLayout:{id:"GlobalLayout",path:"/",parentId:"dumi-context-layout",isLayout:!0},"dumi-context-layout":{id:"dumi-context-layout",path:"/",isLayout:!0},DocLayout:{id:"DocLayout",path:"/",parentId:"GlobalLayout",isLayout:!0},"docs/index":{path:"",id:"docs/index",parentId:"DocLayout"},"components/Button/index":{id:"components/Button/index",path:"components/button",parentId:"DocLayout",meta:{_atom_route:!0}},"components/Modal/index":{id:"components/Modal/index",path:"components/modal",parentId:"DocLayout",meta:{_atom_route:!0}},"components/overview/index":{id:"components/overview/index",path:"components/overview",parentId:"DocLayout",meta:{_atom_route:!0}},"components/Tag/index":{id:"components/Tag/index",path:"components/tag",parentId:"DocLayout",meta:{_atom_route:!0}},"demo-render":{id:"demo-render",path:"~demos/:id",parentId:"GlobalLayout"}},o.abrupt("return",{routes:e,routeComponents:{404:React.lazy(function(){return t.e(65).then(t.bind(t,20604))}),GlobalLayout:React.lazy(function(){return Promise.resolve().then(t.bind(t,33684))}),"dumi-context-layout":React.lazy(function(){return t.e(84).then(t.bind(t,84968))}),DocLayout:React.lazy(function(){return Promise.all([t.e(372),t.e(519)]).then(t.bind(t,89522))}),"docs/index":React.lazy(function(){return Promise.all([t.e(593),t.e(675),t.e(935)]).then(t.bind(t,36680))}),"components/Button/index":React.lazy(function(){return Promise.all([t.e(593),t.e(675),t.e(544)]).then(t.bind(t,41988))}),"components/Modal/index":React.lazy(function(){return Promise.all([t.e(593),t.e(675),t.e(499)]).then(t.bind(t,28209))}),"components/overview/index":React.lazy(function(){return Promise.all([t.e(593),t.e(675),t.e(440)]).then(t.bind(t,95513))}),"components/Tag/index":React.lazy(function(){return Promise.all([t.e(593),t.e(675),t.e(426)]).then(t.bind(t,63920))}),"demo-render":React.lazy(function(){return t.e(9).then(t.bind(t,65149))})}});case 2:case"end":return o.stop()}},n)})),y.apply(this,arguments)}var F="/",U=!1;function ft(n){var e=createPluginManager(),r=useState(void 0),o=_slicedToArray(r,2),a=o[0],g=o[1];if(useEffect(function(){var X=function(){var u=_asyncToGenerator(_regeneratorRuntime().mark(function l(){var h,v,P,S,R,G,I,z;return _regeneratorRuntime().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,getRoutes(e);case 2:return h=i.sent,v=h.routes,P=h.routeComponents,i.next=7,e.applyPlugins({key:"patchRoutes",type:ApplyPluginsType.event,args:{routes:v,routeComponents:P}});case 7:return S=e.applyPlugins({key:"modifyContextOpts",type:ApplyPluginsType.modify,initialValue:{}}),R=S.basename||"/",G=createHistory({type:"memory",basename:R}),I={routes:v,routeComponents:P,pluginManager:e,rootElement:S.rootElement||document.getElementById("root"),publicPath:F,runtimePublicPath:U,history:G,basename:R,components:!0},z=e.applyPlugins({key:"modifyClientRenderOpts",type:ApplyPluginsType.modify,initialValue:I}),i.abrupt("return",z);case 13:case"end":return i.stop()}},l)}));return function(){return u.apply(this,arguments)}}();X().then(function(u){if(g(u),n.location){var l;u==null||(l=u.history)===null||l===void 0||l.push(n.location)}n.historyRef&&(n.historyRef.current=u==null?void 0:u.history)})},[]),a===void 0)return _jsx("div",{id:"loading"});var M=renderClient(a);return _jsx(React.Fragment,{children:_jsx(M,{})})}var mt=t(66820),O=typeof window!="undefined"?window.html2sketch:null;function yt(n,e){return p.apply(this,arguments)}function p(){return p=_asyncToGenerator(_regeneratorRuntime().mark(function n(e,r){return _regeneratorRuntime().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(r.type!=="group"){a.next=6;break}return a.next=3,O.nodeToGroup(e);case 3:a.t0=a.sent.toSketchJSON(),a.next=9;break;case 6:return a.next=8,O.nodeToSymbol(e);case 8:a.t0=a.sent.toSketchJSON();case 9:return a.abrupt("return",a.t0);case 10:case"end":return a.stop()}},n)})),p.apply(this,arguments)}function pt(n,e){return getPluginManager().applyPlugins({key:"toSketchJSON",type:ApplyPluginsType.modify,initialValue:null,args:{target:n,opts:e},async:!0})}var gt=null,ht=function(){},Z=t(35944),Q=function(e){var r=e.children,o=(0,N.pC)(),a=(0,J.OI)(),g=D()(a,1),M=g[0];return(0,Z.tZ)(E.iV,{children:o})},W=Q}}]);