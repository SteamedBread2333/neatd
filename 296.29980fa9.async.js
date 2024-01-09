"use strict";(self.webpackChunk_derbysoft_neat_design=self.webpackChunk_derbysoft_neat_design||[]).push([[296],{97778:function(G,F,e){var I=e(68400),C=e.n(I),x=e(77315),v=e(67294),R,k,d=(0,x.kc)(function(h){var i=h.token,c=h.css;return{codeSpan:c(R||(R=C()([`
      padding: 0.2em 0.4em;
      font-size: 0.9em;
      background: `,`;
      border-radius: `,`px;
      font-family: monospace;
    `])),i.colorFillTertiary,i.borderRadius),dot:c(k||(k=C()([`
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      margin-inline-end: 4px;
      border: 1px solid `,`;
    `])),i.colorSplit)}}),$=function(i){var c=d(),_=c.styles,P=i.value,j=i.children,t=React.useMemo(function(){var a=new TinyColor(P).toHex8String();return a.endsWith("ff")?a.slice(0,-2):a},[P]);return _jsxs("span",{className:_.codeSpan,children:[_jsx("span",{className:_.dot,style:{backgroundColor:t}}),j!=null?j:t]})},N=null},34472:function(G,F,e){var I=e(5574),C=e(68400),x=e.n(C),v=e(77315),R=e(55893),k=e(67294),d={},$={},N=e(3126),h,i,c,_={en:{token:"Token Name",description:"Description",type:"Type",value:"Default Value",componentToken:"Component Token",globalToken:"Global Token",help:"How to use?",customizeTokenLink:"https://ant.design/docs/react/customize-theme#customize-design-token",customizeComponentTokenLink:"https://ant.design/docs/react/customize-theme#customize-component-token"}},P="en",j=(0,v.kc)(function(){return{tableTitle:(0,v.iv)(h||(h=x()([`
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    line-height: 40px;
  `]))),arrowIcon:(0,v.iv)(i||(i=x()([`
    font-size: 16px;
    margin-right: 8px;
    & svg {
      transition: all 0.3s;
    }
  `]))),help:(0,v.iv)(c||(c=x()([`
    margin-left: 8px;
    font-size: 12px;
    font-weight: normal;
    color: #999;
    a {
      color: #999;
    }
  `])))}}),t=function(n){var o=n.defaultOpen,s=n.tokens,y=n.title,g=n.helpText,O=n.helpLink,m=n.component,B=useTheme(),z=useColumns(),K=useState(o||!1),u=_slicedToArray(K,2),l=u[0],L=u[1],M=j(),A=M.styles;if(!s.length)return null;var U=s.sort(m?void 0:function(r,p){var b=r.toLowerCase().includes("color"),W=p.toLowerCase().includes("color");return b&&!W?-1:!b&&W?1:r<p?-1:1}).map(function(r){var p=m?tokenMeta.components[m].find(function(b){return b.token===r}):tokenMeta.global[r];return p?{name:r,desc:p.descEn,type:p.type,value:m?tokenData[m].component[r]:defaultToken[r]}:null}).filter(Boolean),Z=m?`<ConfigProvider
  theme={{
    components: {
      `.concat(m,`: {
        /* here is your component tokens */
      },
    },
  }}
>
  ...
</ConfigProvider>`):`<ConfigProvider
  theme={{
    token: {
      /* here is your global tokens */
    },
  }}
>
  ...
</ConfigProvider>`;return _jsxs(_Fragment,{children:[_jsxs("div",{className:A.tableTitle,onClick:function(){return L(!l)},children:[_jsx(RightOutlined,{className:A.arrowIcon,rotate:l?90:0}),_jsxs("h3",{children:[y,_jsx(Popover,{title:null,overlayStyle:{width:400},content:_jsxs(Typography,{children:[_jsx("pre",{style:{fontSize:12},children:Z}),_jsxs("a",{href:O,target:"_blank",rel:"noreferrer",children:[_jsx(LinkOutlined,{style:{marginRight:4}}),g]})]}),children:_jsxs("span",{className:A.help,children:[_jsx(QuestionCircleOutlined,{style:{marginRight:3}}),g]})})]})]}),l&&_jsx(ConfigProvider,{theme:{token:{borderRadius:0}},children:_jsx(Table,{size:"middle",columns:z,bordered:!0,dataSource:U,style:{marginBottom:B.margin},pagination:!1,rowKey:function(p){return p.name}})})]})},a=_[P],S=function(n){var o=n.component,s=useMemo(function(){var O=new Set;return o.split(",").forEach(function(m){var B=tokenData[m]||{},z=B.global,K=z===void 0?[]:z;K.forEach(function(u){O.add(u)})}),[Array.from(O)]},[o]),y=_slicedToArray(s,1),g=y[0];return _jsxs(_Fragment,{children:[tokenMeta.components[o]&&_jsx(t,{title:a.componentToken,helpText:a.help,helpLink:a.customizeTokenLink,tokens:tokenMeta.components[o].map(function(O){return O.token}),component:o,defaultOpen:!0}),_jsx(t,{title:a.globalToken,helpText:a.help,helpLink:a.customizeComponentTokenLink,tokens:g})]})},E=null},50848:function(G,F,e){e.d(F,{Z:function(){return K}});var I=e(97857),C=e.n(I),x=e(5574),v=e.n(x),R=e(68400),k=e.n(R),d=e(67294),$=e(4313),N=e(74855),h=e.n(N),i=e(93967),c=e.n(i),_=e(45360),P=e(40411),j=e(16829),t=e(35944),a,S=j.Z.div(a||(a=k()([`
  width: 16%;
  height: 160px;
  display: flex;
  flex-flow: column;
  cursor: pointer;
  justify-content: space-around;
  align-items: center;
  font-size: 36px;
  background-image: none;
  transition: all .5s;
  &:hover {
    background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
    border-radius: 6px;
    color: white;
    .neaticon-name > span{
      color: white;
    }
  }
`]))),E={Loading:35,LoadingLG:52,LoadingSM:18},D=function(l){var L=l.name,M=l.icon,A=l.isNew,U=l.justCopied,Z=l.onCopied,r=c()({copied:U===L}),p=function(J,V){V?Z(L,J):_.ZP.error("Copy icon name failed, please try again.")},b=M.displayName.includes("Loading"),W={spin:b,anti:!0,style:C()({},b?{fontSize:E[M.displayName]}:{})};return(0,t.tZ)(h(),{text:"<".concat(L," />"),onCopy:p,children:(0,t.BX)(S,{className:r,children:[d.createElement(M,W),(0,t.tZ)("span",{className:"neaticon-name",children:(0,t.tZ)(P.Z,{dot:A,children:L})})]})})},n=D,o=e(96486),s=e(72117),y=e(77315),g,O,m=(0,o.toArray)($).filter(function(u){return(u==null?void 0:u.displayName)!=="NeatIcon"}),B=j.Z.div(g||(g=k()([`
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
  `]))),z=(0,y.kc)(function(u){var l=u.css;return{iconSearchAffix:l(O||(O=k()([`
    display: flex;
    transition: all 0.3s;
    justify-content: space-between;
  `])))}}),K=function(){var u=(0,s.Fg)(),l=u.token,L=l["border-radius-base"],M=l["color-bg"],A=z(),U=A.styles,Z=d.useState(null),r=v()(Z,2),p=r[0],b=r[1],W=(0,d.useState)(!1),H=v()(W,2),J=H[0],V=H[1],ee=(0,d.useState)({searchKey:""}),Y=v()(ee,2),q=Y[0],ne=Y[1],te=(0,d.useMemo)(function(){var f=q.searchKey,T=f===void 0?"":f;if(T){var se=T.replace(new RegExp("^<([a-zA-Z]*)\\s/>$","gi"),function(X,w){return w}).replace(/(Filled|Outlined|TwoTone)$/,"").toLowerCase(),le=m.filter(function(X){var w;return X==null||(w=X.displayName)===null||w===void 0?void 0:w.toLowerCase().includes(se)});return le}return m},[q]),ae=(0,o.debounce)(function(f){ne(function(T){return C()(C()({},T),{},{searchKey:f.target.value})})},300),Q=d.useRef(null),oe=d.useCallback(function(f,T){s.yw.success((0,t.BX)("span",{children:[(0,t.tZ)("code",{className:"copied-code",children:T})," copied \u{1F389}"]})),b(f),Q.current=setTimeout(function(){b(null)},2e3)},[]);d.useEffect(function(){return function(){Q.current&&clearTimeout(Q.current)}},[]);var re={boxShadow:"rgba(50, 50, 93, 0.25) 0 6px 12px -2px, rgba(0, 0, 0, 0.3) 0 3px 7px -3px",padding:8,margin:-8,borderRadius:L,backgroundColor:M};return(0,t.BX)("div",{className:"markdown",style:{marginTop:30},children:[(0,t.tZ)(s.D_,{offsetTop:60,onChange:V,children:(0,t.tZ)("div",{className:U.iconSearchAffix,style:J?re:{},children:(0,t.tZ)(s.II,{placeholder:"just input you want to search~",style:{flex:1,marginInlineStart:16},allowClear:!0,autoFocus:!0,size:"large",onChange:ae})})}),(0,t.tZ)(B,{children:te.map(function(f){var T=f==null?void 0:f.displayName;return T?(0,t.tZ)(n,{name:T,justCopied:p,onCopied:oe,isNew:!1,icon:f},T):null})})]})}},3126:function(G,F,e){var I=e(5574),C=e.n(I),x=e(68400),v=e.n(x),R=e(67294),k=e(77315),d=e(55893),$=e(97778),N,h={en:{token:"Token Name",description:"Description",type:"Type",value:"Default Value"}},i=(0,k.kc)(function(a){var S=a.token,E=a.css;return{codeSpan:E(N||(N=v()([`
      margin: 0 1px;
      padding: 0.2em 0.4em;
      font-size: 0.9em;
      background: `,`;
      border: 1px solid `,`;
      border-radius: 3px;
      font-family: monospace;
    `])),S.colorFillTertiary,S.colorSplit)}}),c="en",_=h[c];function P(){var a=i(),S=a.styles;return[{title:_.token,key:"name",dataIndex:"name"},{title:_.description,key:"desc",dataIndex:"desc"},{title:_.type,key:"type",dataIndex:"type",render:function(D,n){return _jsx("span",{className:S.codeSpan,children:n.type})}},{title:_.value,key:"value",render:function(D,n){var o=typeof n.value=="string"&&(n.value.startsWith("#")||n.value.startsWith("rgb"));return o?_jsx(ColorChunk,{value:n.value,children:n.value}):typeof n.value!="string"?JSON.stringify(n.value):n.value}}]}var j=function(S){var E=S.type,D=P(),n=React.useMemo(function(){return Object.entries(tokenMeta.global).filter(function(o){var s=_slicedToArray(o,2),y=s[1];return y.source===E}).map(function(o){var s=_slicedToArray(o,2),y=s[0],g=s[1];return{name:y,desc:g.descEn,type:g.type,value:defaultToken[y]}})},[E,c]);return _jsx(Table,{dataSource:n,columns:D,pagination:!1,bordered:!0})},t=null}}]);
