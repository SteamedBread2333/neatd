"use strict";(self.webpackChunkneat_design=self.webpackChunkneat_design||[]).push([[32],{12169:function(b,G,n){n.r(G),n.d(G,{default:function(){return W}});var T=n(27424),D=n.n(T),I=n(27544),O=n(89693),z=n(96974),w=n(80884),E=n(18698),A=n.n(E),k=n(42122),J,m="/";function q(t){var e;return t.type==="hash"?e=createHashHistory():t.type==="memory"?e=createMemoryHistory(t):e=createBrowserHistory(),t.basename&&(m=t.basename),J=_objectSpread(_objectSpread({},e),{},{push:function(o,a){e.push(M(o,e),a)},replace:function(o,a){e.replace(M(o,e),a)},get location(){return e.location},get action(){return e.action}}),e}function M(t,e){if(typeof t=="string")return"".concat(x(m)).concat(t);if(_typeof(t)==="object"){var r=e.location.pathname;return _objectSpread(_objectSpread({},t),{},{pathname:t.pathname?"".concat(x(m)).concat(t.pathname):r})}else throw new Error("Unexpected to: ".concat(t))}function x(t){return t.slice(-1)==="/"?t.slice(0,-1):t}var _=0,d=0;function l(t,e){if(!1)var r}function N(t){return JSON.stringify(t,null,2)}function c(t){var e=t.length>1?t.map(V).join(" "):t[0];return A()(e)==="object"?"".concat(N(e)):e.toString()}function V(t){return A()(t)==="object"?"".concat(JSON.stringify(t)):t.toString()}var nn={log:function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];l("log",c(r))},info:function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];l("info",c(r))},warn:function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];l("warn",c(r))},error:function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];l("error",c(r))},group:function(){d++},groupCollapsed:function(){d++},groupEnd:function(){d&&--d},clear:function(){l("clear")},trace:function(){var e;(e=console).trace.apply(e,arguments)},profile:function(){var e;(e=console).profile.apply(e,arguments)},profileEnd:function(){var e;(e=console).profileEnd.apply(e,arguments)}},tn=n(17061),en=n(17156),j=n(67294),on=n(58472),rn=n(36386),an=n(17015),sn=n(11454),un=n(75516);function ln(t){return t.default?typeof t.default=="function"?t.default():t.default:t}function K(){return[{apply:Plugin_0,path:void 0},{apply:Plugin_1,path:void 0},{apply:Plugin_2,path:void 0},{apply:Plugin_3,path:void 0}]}function $(){return["patchRoutes","patchClientRoutes","modifyContextOpts","modifyClientRenderOpts","rootContainer","innerProvider","i18nProvider","accessProvider","dataflowProvider","outerProvider","render","onRouteChange","modifyCodeSandboxData","modifyStackBlitzData"]}var h=null;function dn(){return h=PluginManager.create({plugins:K(),validKeys:$()}),h}function cn(){return h}function mn(){return f.apply(this,arguments)}function f(){return f=_asyncToGenerator(_regeneratorRuntime().mark(function t(){var e;return _regeneratorRuntime().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return e={404:{id:"404",path:"*",parentId:"DocLayout"},GlobalLayout:{id:"GlobalLayout",path:"/",parentId:"dumi-context-layout",isLayout:!0},"dumi-context-layout":{id:"dumi-context-layout",path:"/",isLayout:!0},DocLayout:{id:"DocLayout",path:"/",parentId:"GlobalLayout",isLayout:!0},"docs/index":{path:"",id:"docs/index",parentId:"DocLayout"},"components/Alert/index":{id:"components/Alert/index",path:"components/alert",parentId:"DocLayout",meta:{_atom_route:!0}},"components/Button/index":{id:"components/Button/index",path:"components/button",parentId:"DocLayout",meta:{_atom_route:!0}},"components/Drawer/index":{id:"components/Drawer/index",path:"components/drawer",parentId:"DocLayout",meta:{_atom_route:!0}},"components/Modal/index":{id:"components/Modal/index",path:"components/modal",parentId:"DocLayout",meta:{_atom_route:!0}},"components/overview/index":{id:"components/overview/index",path:"components/overview",parentId:"DocLayout",meta:{_atom_route:!0}},"components/Rate/index":{id:"components/Rate/index",path:"components/rate",parentId:"DocLayout",meta:{_atom_route:!0}},"components/Segmented/index":{id:"components/Segmented/index",path:"components/segmented",parentId:"DocLayout",meta:{_atom_route:!0}},"components/Tag/index":{id:"components/Tag/index",path:"components/tag",parentId:"DocLayout",meta:{_atom_route:!0}},"demo-render":{id:"demo-render",path:"~demos/:id",parentId:"GlobalLayout"}},o.abrupt("return",{routes:e,routeComponents:{404:React.lazy(function(){return n.e(65).then(n.bind(n,20604))}),GlobalLayout:React.lazy(function(){return Promise.resolve().then(n.bind(n,12169))}),"dumi-context-layout":React.lazy(function(){return n.e(84).then(n.bind(n,84968))}),DocLayout:React.lazy(function(){return Promise.all([n.e(372),n.e(519)]).then(n.bind(n,89522))}),"docs/index":React.lazy(function(){return Promise.all([n.e(593),n.e(675),n.e(935)]).then(n.bind(n,36680))}),"components/Alert/index":React.lazy(function(){return Promise.all([n.e(593),n.e(675),n.e(242)]).then(n.bind(n,5319))}),"components/Button/index":React.lazy(function(){return Promise.all([n.e(593),n.e(675),n.e(544)]).then(n.bind(n,41988))}),"components/Drawer/index":React.lazy(function(){return Promise.all([n.e(593),n.e(675),n.e(179)]).then(n.bind(n,15709))}),"components/Modal/index":React.lazy(function(){return Promise.all([n.e(593),n.e(675),n.e(499)]).then(n.bind(n,28209))}),"components/overview/index":React.lazy(function(){return Promise.all([n.e(593),n.e(675),n.e(440)]).then(n.bind(n,95513))}),"components/Rate/index":React.lazy(function(){return Promise.all([n.e(593),n.e(675),n.e(346)]).then(n.bind(n,91961))}),"components/Segmented/index":React.lazy(function(){return Promise.all([n.e(593),n.e(675),n.e(657)]).then(n.bind(n,78468))}),"components/Tag/index":React.lazy(function(){return Promise.all([n.e(593),n.e(675),n.e(426)]).then(n.bind(n,63920))}),"demo-render":React.lazy(function(){return n.e(9).then(n.bind(n,65149))})}});case 2:case"end":return o.stop()}},t)})),f.apply(this,arguments)}var F="/",U=!1;function hn(t){var e=createPluginManager(),r=useState(void 0),o=_slicedToArray(r,2),a=o[0],p=o[1];if(useEffect(function(){var Y=function(){var i=_asyncToGenerator(_regeneratorRuntime().mark(function u(){var g,v,S,P,R,H,X,B;return _regeneratorRuntime().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,getRoutes(e);case 2:return g=s.sent,v=g.routes,S=g.routeComponents,s.next=7,e.applyPlugins({key:"patchRoutes",type:ApplyPluginsType.event,args:{routes:v,routeComponents:S}});case 7:return P=e.applyPlugins({key:"modifyContextOpts",type:ApplyPluginsType.modify,initialValue:{}}),R=P.basename||"/",H=createHistory({type:"memory",basename:R}),X={routes:v,routeComponents:S,pluginManager:e,rootElement:P.rootElement||document.getElementById("root"),publicPath:F,runtimePublicPath:U,history:H,basename:R,components:!0},B=e.applyPlugins({key:"modifyClientRenderOpts",type:ApplyPluginsType.modify,initialValue:X}),s.abrupt("return",B);case 13:case"end":return s.stop()}},u)}));return function(){return i.apply(this,arguments)}}();Y().then(function(i){if(p(i),t.location){var u;i==null||(u=i.history)===null||u===void 0||u.push(t.location)}t.historyRef&&(t.historyRef.current=i==null?void 0:i.history)})},[]),a===void 0)return _jsx("div",{id:"loading"});var C=renderClient(a);return _jsx(React.Fragment,{children:_jsx(C,{})})}var fn=n(66820),L=typeof window!="undefined"?window.html2sketch:null;function yn(t,e){return y.apply(this,arguments)}function y(){return y=_asyncToGenerator(_regeneratorRuntime().mark(function t(e,r){return _regeneratorRuntime().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(r.type!=="group"){a.next=6;break}return a.next=3,L.nodeToGroup(e);case 3:a.t0=a.sent.toSketchJSON(),a.next=9;break;case 6:return a.next=8,L.nodeToSymbol(e);case 8:a.t0=a.sent.toSketchJSON();case 9:return a.abrupt("return",a.t0);case 10:case"end":return a.stop()}},t)})),y.apply(this,arguments)}function pn(t,e){return getPluginManager().applyPlugins({key:"toSketchJSON",type:ApplyPluginsType.modify,initialValue:null,args:{target:t,opts:e},async:!0})}var gn=null,vn=function(){},Z=n(35944),Q=function(e){var r=e.children,o=(0,z.pC)(),a=(0,I.OI)(),p=D()(a,1),C=p[0];return(0,j.useEffect)(function(){console.log(`
                   ii.                                         ;9ABH,          
                  SA391,                                    .r9GG35&G          
                  &#ii13Gh;                               i3X31i;:,rB1         
                  iMs,:,i5895,                         .5G91:,:;:s1:8A         
                   33::::,,;5G5,                     ,58Si,,:::,sHX;iH1        
                    Sr.,:;rs13BBX35hh11511h5Shhh5S3GAXS:.,,::,,1AG3i,GG        
                    .G51S511sr;;iiiishS8G89Shsrrsh59S;.,,,,,..5A85Si,h8        
                   :SB9s:,............................,,,.,,,SASh53h,1G.       
                .r18S;..,,,,,,,,,,,,,,,,,,,,,,,,,,,,,....,,.1H315199,rX,       
              ;S89s,..,,,,,,,,,,,,,,,,,,,,,,,....,,.......,,,;r1ShS8,;Xi       
            i55s:.........,,,,,,,,,,,,,,,,.,,,......,.....,,....r9&5.:X1       
           59;.....,.     .,,,,,,,,,,,...        .............,..:1;.:&s       
          s8,..;53S5S3s.   .,,,,,,,.,..      i15S5h1:.........,,,..,,:99       
          93.:39s:rSGB@A;  ..,,,,.....    .SG3hhh9G&BGi..,,,,,,,,,,,,.,83      
          G5.G8  9#@@@@@X. .,,,,,,.....  iA9,.S&B###@@Mr...,,,,,,,,..,.;Xh     
          Gs.X8 S@@@@@@@B:..,,,,,,,,,,. rA1 ,A@@@@@@@@@H:........,,,,,,.iX:    
         ;9. ,8A#@@@@@@#5,.,,,,,,,,,... 9A. 8@@@@@@@@@@M;    ....,,,,,,,,S8    
         X3    iS8XAHH8s.,,,,,,,,,,...,..58hH@@@@@@@@@Hs       ...,,,,,,,:Gs   
        r8,        ,,,...,,,,,,,,,,.....  ,h8XABMMHX3r.          .,,,,,,,.rX:  
       :9, .    .:,..,:;;;::,.,,,,,..          .,,.               ..,,,,,,.59  
      .Si      ,:.i8HBMMMMMB&5,....                    .            .,,,,,.sMr
      SS       :: h@@@@@@@@@@#; .                     ...  .         ..,,,,iM5
      91  .    ;:.,1&@@@@@@MXs.                            .          .,,:,:&S
      hS ....  .:;,,,i3MMS1;..,..... .  .     ...                     ..,:,.99
      ,8; ..... .,:,..,8Ms:;,,,...                                     .,::.83
       s&: ....  .sS553B@@HX3s;,.    .,;13h.                            .:::&1
        SXr  .  ...;s3G99XA&X88Shss11155hi.                             ,;:h&,
         iH8:  . ..   ,;iiii;,::,,,,,.                                 .;irHA  
          ,8X5;   .     .......                                       ,;iihS8Gi
             1831,                                                 .,;irrrrrs&@
               ;5A8r.                                            .:;iiiiirrss1H
                 :X@H3s.......                                .,:;iii;iiiiirsrh
                  r#h:;,...,,.. .,,:;;;;;:::,...              .:;;;;;;iiiirrss1
                 ,M8 ..,....,.....,,::::::,,...         .     .,;;;iiiiiirss11h
                 8B;.,,,,,,,.,.....          .           ..   .:;;;;iirrsss111h
                i@5,:::,,,,,,,,.... .                   . .:::;;;;;irrrss111111
                9Bi,:,,,,......                        ..r91;;;;;iirrsss1ss1111
    `)},[]),(0,Z.tZ)(O.iV,{children:o})},W=Q}}]);
