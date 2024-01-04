"use strict";(self.webpackChunk_derbysoft_neat_design=self.webpackChunk_derbysoft_neat_design||[]).push([[296],{97778:function(G,F,e){var I=e(68400),O=e.n(I),C=e(77315),m=e(67294),R,x,i=(0,C.kc)(function(y){var l=y.token,u=y.css;return{codeSpan:u(R||(R=O()([`
      padding: 0.2em 0.4em;
      font-size: 0.9em;
      background: `,`;
      border-radius: `,`px;
      font-family: monospace;
    `])),l.colorFillTertiary,l.borderRadius),dot:u(x||(x=O()([`
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      margin-inline-end: 4px;
      border: 1px solid `,`;
    `])),l.colorSplit)}}),$=function(l){var u=i(),p=u.styles,P=l.value,k=l.children,t=React.useMemo(function(){var o=new TinyColor(P).toHex8String();return o.endsWith("ff")?o.slice(0,-2):o},[P]);return _jsxs("span",{className:p.codeSpan,children:[_jsx("span",{className:p.dot,style:{backgroundColor:t}}),k!=null?k:t]})},N=null},34472:function(G,F,e){var I=e(5574),O=e(68400),C=e.n(O),m=e(77315),R=e(55893),x=e(67294),i={},$={},N=e(3126),y,l,u,p={en:{token:"Token Name",description:"Description",type:"Type",value:"Default Value",componentToken:"Component Token",globalToken:"Global Token",help:"How to use?",customizeTokenLink:"https://ant.design/docs/react/customize-theme#customize-design-token",customizeComponentTokenLink:"https://ant.design/docs/react/customize-theme#customize-component-token"}},P="en",k=(0,m.kc)(function(){return{tableTitle:(0,m.iv)(y||(y=C()([`
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    line-height: 40px;
  `]))),arrowIcon:(0,m.iv)(l||(l=C()([`
    font-size: 16px;
    margin-right: 8px;
    & svg {
      transition: all 0.3s;
    }
  `]))),help:(0,m.iv)(u||(u=C()([`
    margin-left: 8px;
    font-size: 12px;
    font-weight: normal;
    color: #999;
    a {
      color: #999;
    }
  `])))}}),t=function(n){var a=n.defaultOpen,_=n.tokens,v=n.title,g=n.helpText,S=n.helpLink,f=n.component,B=useTheme(),W=useColumns(),d=useState(a||!1),r=_slicedToArray(d,2),b=r[0],K=r[1],U=k(),M=U.styles;if(!_.length)return null;var Z=_.sort(f?void 0:function(s,c){var D=s.toLowerCase().includes("color"),A=c.toLowerCase().includes("color");return D&&!A?-1:!D&&A?1:s<c?-1:1}).map(function(s){var c=f?tokenMeta.components[f].find(function(D){return D.token===s}):tokenMeta.global[s];return c?{name:s,desc:c.descEn,type:c.type,value:f?tokenData[f].component[s]:defaultToken[s]}:null}).filter(Boolean),z=f?`<ConfigProvider
  theme={{
    components: {
      `.concat(f,`: {
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
</ConfigProvider>`;return _jsxs(_Fragment,{children:[_jsxs("div",{className:M.tableTitle,onClick:function(){return K(!b)},children:[_jsx(RightOutlined,{className:M.arrowIcon,rotate:b?90:0}),_jsxs("h3",{children:[v,_jsx(Popover,{title:null,overlayStyle:{width:400},content:_jsxs(Typography,{children:[_jsx("pre",{style:{fontSize:12},children:z}),_jsxs("a",{href:S,target:"_blank",rel:"noreferrer",children:[_jsx(LinkOutlined,{style:{marginRight:4}}),g]})]}),children:_jsxs("span",{className:M.help,children:[_jsx(QuestionCircleOutlined,{style:{marginRight:3}}),g]})})]})]}),b&&_jsx(ConfigProvider,{theme:{token:{borderRadius:0}},children:_jsx(Table,{size:"middle",columns:W,bordered:!0,dataSource:Z,style:{marginBottom:B.margin},pagination:!1,rowKey:function(c){return c.name}})})]})},o=p[P],j=function(n){var a=n.component,_=useMemo(function(){var S=new Set;return a.split(",").forEach(function(f){var B=tokenData[f]||{},W=B.global,d=W===void 0?[]:W;d.forEach(function(r){S.add(r)})}),[Array.from(S)]},[a]),v=_slicedToArray(_,1),g=v[0];return _jsxs(_Fragment,{children:[tokenMeta.components[a]&&_jsx(t,{title:o.componentToken,helpText:o.help,helpLink:o.customizeTokenLink,tokens:tokenMeta.components[a].map(function(S){return S.token}),component:a,defaultOpen:!0}),_jsx(t,{title:o.globalToken,helpText:o.help,helpLink:o.customizeComponentTokenLink,tokens:g})]})},E=null},50848:function(G,F,e){e.d(F,{Z:function(){return W}});var I=e(97857),O=e.n(I),C=e(5574),m=e.n(C),R=e(68400),x=e.n(R),i=e(67294),$=e(92112),N=e(74855),y=e.n(N),l=e(93967),u=e.n(l),p=e(45360),P=e(40411),k=e(16829),t=e(35944),o,j=k.Z.div(o||(o=x()([`
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
`]))),E=function(r){var b=r.name,K=r.icon,U=r.isNew,M=r.justCopied,Z=r.onCopied,z=u()({copied:M===b}),s=function(D,A){A?Z(b,D):p.ZP.error("Copy icon name failed, please try again.")};return(0,t.tZ)(y(),{text:"<".concat(b," />"),onCopy:s,children:(0,t.BX)(j,{className:z,children:[i.createElement(K),(0,t.tZ)("span",{className:"neaticon-name",children:(0,t.tZ)(P.Z,{dot:U,children:b})})]})})},L=E,n=e(96486),a=e(72117),_=e(77315),v,g,S=(0,n.toArray)($).filter(function(d){return(d==null?void 0:d.displayName)!=="NeatIcon"}),f=k.Z.div(v||(v=x()([`
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
  `]))),B=(0,_.kc)(function(d){var r=d.css;return{iconSearchAffix:r(g||(g=x()([`
    display: flex;
    transition: all 0.3s;
    justify-content: space-between;
  `])))}}),W=function(){var d=(0,a.Fg)(),r=d.token,b=r["border-radius-base"],K=r["color-bg"],U=B(),M=U.styles,Z=i.useState(null),z=m()(Z,2),s=z[0],c=z[1],D=(0,i.useState)(!1),A=m()(D,2),Q=A[0],Y=A[1],q=(0,i.useState)({searchKey:""}),J=m()(q,2),V=J[0],ee=J[1],ne=(0,i.useMemo)(function(){var h=V.searchKey,T=h===void 0?"":h;if(T){var re=T.replace(new RegExp("^<([a-zA-Z]*)\\s/>$","gi"),function(X,w){return w}).replace(/(Filled|Outlined|TwoTone)$/,"").toLowerCase(),se=S.filter(function(X){var w;return X==null||(w=X.displayName)===null||w===void 0?void 0:w.toLowerCase().includes(re)});return se}return S},[V]),te=(0,n.debounce)(function(h){ee(function(T){return O()(O()({},T),{},{searchKey:h.target.value})})},300),H=i.useRef(null),oe=i.useCallback(function(h,T){a.yw.success((0,t.BX)("span",{children:[(0,t.tZ)("code",{className:"copied-code",children:T})," copied \u{1F389}"]})),c(h),H.current=setTimeout(function(){c(null)},2e3)},[]);i.useEffect(function(){return function(){H.current&&clearTimeout(H.current)}},[]);var ae={boxShadow:"rgba(50, 50, 93, 0.25) 0 6px 12px -2px, rgba(0, 0, 0, 0.3) 0 3px 7px -3px",padding:8,margin:-8,borderRadius:b,backgroundColor:K};return(0,t.BX)("div",{className:"markdown",style:{marginTop:30},children:[(0,t.tZ)(a.D_,{offsetTop:60,onChange:Y,children:(0,t.tZ)("div",{className:M.iconSearchAffix,style:Q?ae:{},children:(0,t.tZ)(a.II,{placeholder:"just input you want to search~",style:{flex:1,marginInlineStart:16},allowClear:!0,autoFocus:!0,size:"large",onChange:te})})}),(0,t.tZ)(f,{children:ne.map(function(h){var T=h==null?void 0:h.displayName;return T?(0,t.tZ)(L,{name:T,justCopied:s,onCopied:oe,isNew:!1,icon:h},T):null})})]})}},3126:function(G,F,e){var I=e(5574),O=e.n(I),C=e(68400),m=e.n(C),R=e(67294),x=e(77315),i=e(55893),$=e(97778),N,y={en:{token:"Token Name",description:"Description",type:"Type",value:"Default Value"}},l=(0,x.kc)(function(o){var j=o.token,E=o.css;return{codeSpan:E(N||(N=m()([`
      margin: 0 1px;
      padding: 0.2em 0.4em;
      font-size: 0.9em;
      background: `,`;
      border: 1px solid `,`;
      border-radius: 3px;
      font-family: monospace;
    `])),j.colorFillTertiary,j.colorSplit)}}),u="en",p=y[u];function P(){var o=l(),j=o.styles;return[{title:p.token,key:"name",dataIndex:"name"},{title:p.description,key:"desc",dataIndex:"desc"},{title:p.type,key:"type",dataIndex:"type",render:function(L,n){return _jsx("span",{className:j.codeSpan,children:n.type})}},{title:p.value,key:"value",render:function(L,n){var a=typeof n.value=="string"&&(n.value.startsWith("#")||n.value.startsWith("rgb"));return a?_jsx(ColorChunk,{value:n.value,children:n.value}):typeof n.value!="string"?JSON.stringify(n.value):n.value}}]}var k=function(j){var E=j.type,L=P(),n=React.useMemo(function(){return Object.entries(tokenMeta.global).filter(function(a){var _=_slicedToArray(a,2),v=_[1];return v.source===E}).map(function(a){var _=_slicedToArray(a,2),v=_[0],g=_[1];return{name:v,desc:g.descEn,type:g.type,value:defaultToken[v]}})},[E,u]);return _jsx(Table,{dataSource:n,columns:L,pagination:!1,bordered:!0})},t=null}}]);
