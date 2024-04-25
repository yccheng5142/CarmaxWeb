import{_ as r,a7 as V,a8 as _,b as s,r as v,e as P,j as b,f as R,ab as F,h as M,a as E,g as H,s as m,B as D,i as A,m as y,af as K,u as N,ag as q,ah as J}from"./index-rSRfZdgm.js";const Q=["className","component","disableGutters","fixed","maxWidth","classes"],X=V(),Y=_("div",{name:"MuiContainer",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:n}=o;return[a.root,a[`maxWidth${s(String(n.maxWidth))}`],n.fixed&&a.fixed,n.disableGutters&&a.disableGutters]}}),Z=o=>F({props:o,name:"MuiContainer",defaultTheme:X}),w=(o,a)=>{const n=c=>E(a,c),{classes:l,fixed:e,disableGutters:d,maxWidth:i}=o,t={root:["root",i&&`maxWidth${s(String(i))}`,e&&"fixed",d&&"disableGutters"]};return M(t,n,l)};function oo(o={}){const{createStyledComponent:a=Y,useThemeProps:n=Z,componentName:l="MuiContainer"}=o,e=a(({theme:i,ownerState:t})=>r({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:i.spacing(2),paddingRight:i.spacing(2),[i.breakpoints.up("sm")]:{paddingLeft:i.spacing(3),paddingRight:i.spacing(3)}}),({theme:i,ownerState:t})=>t.fixed&&Object.keys(i.breakpoints.values).reduce((c,p)=>{const x=p,u=i.breakpoints.values[x];return u!==0&&(c[i.breakpoints.up(x)]={maxWidth:`${u}${i.breakpoints.unit}`}),c},{}),({theme:i,ownerState:t})=>r({},t.maxWidth==="xs"&&{[i.breakpoints.up("xs")]:{maxWidth:Math.max(i.breakpoints.values.xs,444)}},t.maxWidth&&t.maxWidth!=="xs"&&{[i.breakpoints.up(t.maxWidth)]:{maxWidth:`${i.breakpoints.values[t.maxWidth]}${i.breakpoints.unit}`}}));return v.forwardRef(function(t,c){const p=n(t),{className:x,component:u="div",disableGutters:I=!1,fixed:C=!1,maxWidth:f="lg"}=p,k=P(p,Q),z=r({},p,{component:u,disableGutters:I,fixed:C,maxWidth:f}),B=w(z,l);return b.jsx(e,r({as:u,ownerState:z,className:R(B.root,x),ref:c},k))})}function ao(o){return E("MuiButton",o)}const no=H("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),h=no,io=v.createContext({}),to=io,ro=v.createContext(void 0),so=ro,eo=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],lo=o=>{const{color:a,disableElevation:n,fullWidth:l,size:e,variant:d,classes:i}=o,t={root:["root",d,`${d}${s(a)}`,`size${s(e)}`,`${d}Size${s(e)}`,a==="inherit"&&"colorInherit",n&&"disableElevation",l&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${s(e)}`],endIcon:["endIcon",`iconSize${s(e)}`]},c=M(t,ao,i);return r({},i,c)},G=o=>r({},o.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},o.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},o.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),co=m(D,{shouldForwardProp:o=>A(o)||o==="classes",name:"MuiButton",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:n}=o;return[a.root,a[n.variant],a[`${n.variant}${s(n.color)}`],a[`size${s(n.size)}`],a[`${n.variant}Size${s(n.size)}`],n.color==="inherit"&&a.colorInherit,n.disableElevation&&a.disableElevation,n.fullWidth&&a.fullWidth]}})(({theme:o,ownerState:a})=>{var n,l;const e=o.palette.mode==="light"?o.palette.grey[300]:o.palette.grey[800],d=o.palette.mode==="light"?o.palette.grey.A100:o.palette.grey[700];return r({},o.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(o.vars||o).shape.borderRadius,transition:o.transitions.create(["background-color","box-shadow","border-color","color"],{duration:o.transitions.duration.short}),"&:hover":r({textDecoration:"none",backgroundColor:o.vars?`rgba(${o.vars.palette.text.primaryChannel} / ${o.vars.palette.action.hoverOpacity})`:y(o.palette.text.primary,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},a.variant==="text"&&a.color!=="inherit"&&{backgroundColor:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:y(o.palette[a.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},a.variant==="outlined"&&a.color!=="inherit"&&{border:`1px solid ${(o.vars||o).palette[a.color].main}`,backgroundColor:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:y(o.palette[a.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},a.variant==="contained"&&{backgroundColor:o.vars?o.vars.palette.Button.inheritContainedHoverBg:d,boxShadow:(o.vars||o).shadows[4],"@media (hover: none)":{boxShadow:(o.vars||o).shadows[2],backgroundColor:(o.vars||o).palette.grey[300]}},a.variant==="contained"&&a.color!=="inherit"&&{backgroundColor:(o.vars||o).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(o.vars||o).palette[a.color].main}}),"&:active":r({},a.variant==="contained"&&{boxShadow:(o.vars||o).shadows[8]}),[`&.${h.focusVisible}`]:r({},a.variant==="contained"&&{boxShadow:(o.vars||o).shadows[6]}),[`&.${h.disabled}`]:r({color:(o.vars||o).palette.action.disabled},a.variant==="outlined"&&{border:`1px solid ${(o.vars||o).palette.action.disabledBackground}`},a.variant==="contained"&&{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground})},a.variant==="text"&&{padding:"6px 8px"},a.variant==="text"&&a.color!=="inherit"&&{color:(o.vars||o).palette[a.color].main},a.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},a.variant==="outlined"&&a.color!=="inherit"&&{color:(o.vars||o).palette[a.color].main,border:o.vars?`1px solid rgba(${o.vars.palette[a.color].mainChannel} / 0.5)`:`1px solid ${y(o.palette[a.color].main,.5)}`},a.variant==="contained"&&{color:o.vars?o.vars.palette.text.primary:(n=(l=o.palette).getContrastText)==null?void 0:n.call(l,o.palette.grey[300]),backgroundColor:o.vars?o.vars.palette.Button.inheritContainedBg:e,boxShadow:(o.vars||o).shadows[2]},a.variant==="contained"&&a.color!=="inherit"&&{color:(o.vars||o).palette[a.color].contrastText,backgroundColor:(o.vars||o).palette[a.color].main},a.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},a.size==="small"&&a.variant==="text"&&{padding:"4px 5px",fontSize:o.typography.pxToRem(13)},a.size==="large"&&a.variant==="text"&&{padding:"8px 11px",fontSize:o.typography.pxToRem(15)},a.size==="small"&&a.variant==="outlined"&&{padding:"3px 9px",fontSize:o.typography.pxToRem(13)},a.size==="large"&&a.variant==="outlined"&&{padding:"7px 21px",fontSize:o.typography.pxToRem(15)},a.size==="small"&&a.variant==="contained"&&{padding:"4px 10px",fontSize:o.typography.pxToRem(13)},a.size==="large"&&a.variant==="contained"&&{padding:"8px 22px",fontSize:o.typography.pxToRem(15)},a.fullWidth&&{width:"100%"})},({ownerState:o})=>o.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${h.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${h.disabled}`]:{boxShadow:"none"}}),po=m("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(o,a)=>{const{ownerState:n}=o;return[a.startIcon,a[`iconSize${s(n.size)}`]]}})(({ownerState:o})=>r({display:"inherit",marginRight:8,marginLeft:-4},o.size==="small"&&{marginLeft:-2},G(o))),uo=m("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(o,a)=>{const{ownerState:n}=o;return[a.endIcon,a[`iconSize${s(n.size)}`]]}})(({ownerState:o})=>r({display:"inherit",marginRight:-4,marginLeft:8},o.size==="small"&&{marginRight:-2},G(o))),xo=v.forwardRef(function(a,n){const l=v.useContext(to),e=v.useContext(so),d=K(l,a),i=N({props:d,name:"MuiButton"}),{children:t,color:c="primary",component:p="button",className:x,disabled:u=!1,disableElevation:I=!1,disableFocusRipple:C=!1,endIcon:f,focusVisibleClassName:k,fullWidth:z=!1,size:B="medium",startIcon:W,type:T,variant:S="text"}=i,L=P(i,eo),$=r({},i,{color:c,component:p,disabled:u,disableElevation:I,disableFocusRipple:C,fullWidth:z,size:B,type:T,variant:S}),g=lo($),j=W&&b.jsx(po,{className:g.startIcon,ownerState:$,children:W}),U=f&&b.jsx(uo,{className:g.endIcon,ownerState:$,children:f}),O=e||"";return b.jsxs(co,r({ownerState:$,className:R(l.className,g.root,x,O),component:p,disabled:u,focusRipple:!C,focusVisibleClassName:R(g.focusVisible,k),ref:n,type:T},L,{classes:g,children:[j,t,U]}))}),Co=xo,vo=oo({createStyledComponent:m("div",{name:"MuiContainer",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:n}=o;return[a.root,a[`maxWidth${s(String(n.maxWidth))}`],n.fixed&&a.fixed,n.disableGutters&&a.disableGutters]}}),useThemeProps:o=>N({props:o,name:"MuiContainer"})}),fo=vo,bo=o=>{const{heading:a}=o,n=a?a+" - UIFort":"React UI Kit and Admin Dashboard Template";return b.jsx(q,{children:b.jsx("title",{children:n})})};bo.propTypes={heading:J.string};export{Co as B,fo as C,bo as H};
