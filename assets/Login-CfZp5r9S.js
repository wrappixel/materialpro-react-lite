import{r as y,j as t,c as k,b as J,f as ee,L as V}from"./index-D1bK8PRZ.js";import{P as ie,C as le}from"./PageContainer-U21kOWTK.js";import{u as K,f as se,C as oe}from"./CustomTextField-BdRRIDi6.js";import{a as U,b as G,s as S,c as M,d as D,r as ne,m as Q,e as te,T as m,B as $}from"./Box-CvYoT_qX.js";import{S as Y}from"./Stack-CqbCgeTX.js";import{c as X,b as ce}from"./Grow-QKKoC1Yt.js";import{u as de}from"./Menu-BL7NJ4-f.js";import{B as pe}from"./CircularProgress-D7lLWJil.js";import{B as ue}from"./Button-BuXw2xWo.js";import{A as me}from"./AuthLogo-DppwYAzL.js";import{G as re}from"./Grid-Dzu6wlNT.js";import"./isMuiElement-CGuTjFR5.js";function he(e){return U("PrivateSwitchBase",e)}G("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const fe=e=>{const{classes:o,checked:r,disabled:s,edge:n}=e,i={root:["root",r&&"checked",s&&"disabled",n&&`edge${k(n)}`],input:["input"]};return D(i,he,o)},be=S(pe)({padding:9,borderRadius:"50%",variants:[{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:({edge:e,ownerState:o})=>e==="start"&&o.size!=="small",style:{marginLeft:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}},{props:({edge:e,ownerState:o})=>e==="end"&&o.size!=="small",style:{marginRight:-12}}]}),xe=S("input",{shouldForwardProp:ne})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),ge=y.forwardRef(function(o,r){const{autoFocus:s,checked:n,checkedIcon:i,className:l,defaultChecked:a,disabled:h,disableFocusRipple:p=!1,edge:f=!1,icon:j,id:R,inputProps:N,inputRef:B,name:w,onBlur:g,onChange:C,onFocus:O,readOnly:T,required:F=!1,tabIndex:W,type:b,value:I,...q}=o,[v,z]=de({controlled:n,default:!!a,name:"SwitchBase",state:"checked"}),c=K(),E=u=>{O&&O(u),c&&c.onFocus&&c.onFocus(u)},P=u=>{g&&g(u),c&&c.onBlur&&c.onBlur(u)},x=u=>{if(u.nativeEvent.defaultPrevented)return;const _=u.target.checked;z(_),C&&C(u,_)};let d=h;c&&typeof d>"u"&&(d=c.disabled);const ae=b==="checkbox"||b==="radio",A={...o,checked:v,disabled:d,disableFocusRipple:p,edge:f},Z=fe(A);return t.jsxs(be,{component:"span",className:M(Z.root,l),centerRipple:!0,focusRipple:!p,disabled:d,tabIndex:null,role:void 0,onFocus:E,onBlur:P,ownerState:A,ref:r,...q,children:[t.jsx(xe,{autoFocus:s,checked:n,defaultChecked:a,className:Z.input,disabled:d,id:ae?R:void 0,name:w,onChange:x,readOnly:T,ref:B,required:F,ownerState:A,tabIndex:W,type:b,...b==="checkbox"&&I===void 0?{}:{value:I},...N}),v?i:j]})}),Ce=X(t.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),ve=X(t.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),ye=X(t.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function ke(e){return U("MuiCheckbox",e)}const H=G("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),je=e=>{const{classes:o,indeterminate:r,color:s,size:n}=e,i={root:["root",r&&"indeterminate",`color${k(s)}`,`size${k(n)}`]},l=D(i,ke,o);return{...o,...l}},we=S(ge,{shouldForwardProp:e=>ne(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,r.indeterminate&&o.indeterminate,o[`size${k(r.size)}`],r.color!=="default"&&o[`color${k(r.color)}`]]}})(Q(({theme:e})=>({color:(e.vars||e).palette.text.secondary,variants:[{props:{color:"default",disableRipple:!1},style:{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:ee(e.palette.action.active,e.palette.action.hoverOpacity)}}},...Object.entries(e.palette).filter(te()).map(([o])=>({props:{color:o,disableRipple:!1},style:{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[o].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:ee(e.palette[o].main,e.palette.action.hoverOpacity)}}})),...Object.entries(e.palette).filter(te()).map(([o])=>({props:{color:o},style:{[`&.${H.checked}, &.${H.indeterminate}`]:{color:(e.vars||e).palette[o].main},[`&.${H.disabled}`]:{color:(e.vars||e).palette.action.disabled}}})),{props:{disableRipple:!1},style:{"&:hover":{"@media (hover: none)":{backgroundColor:"transparent"}}}}]}))),Fe=t.jsx(ve,{}),Pe=t.jsx(Ce,{}),Se=t.jsx(ye,{}),Re=y.forwardRef(function(o,r){const s=J({props:o,name:"MuiCheckbox"}),{checkedIcon:n=Fe,color:i="primary",icon:l=Pe,indeterminate:a=!1,indeterminateIcon:h=Se,inputProps:p,size:f="medium",disableRipple:j=!1,className:R,...N}=s,B=a?h:l,w=a?h:n,g={...s,disableRipple:j,color:i,indeterminate:a,size:f},C=je(g);return t.jsx(we,{type:"checkbox",inputProps:{"data-indeterminate":a,...p},icon:y.cloneElement(B,{fontSize:B.props.fontSize??f}),checkedIcon:y.cloneElement(w,{fontSize:w.props.fontSize??f}),ownerState:g,ref:r,className:M(C.root,R),disableRipple:j,...N,classes:C})});function Be(e){return U("MuiFormControlLabel",e)}const L=G("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),Ie=e=>{const{classes:o,disabled:r,labelPlacement:s,error:n,required:i}=e,l={root:["root",r&&"disabled",`labelPlacement${k(s)}`,n&&"error",i&&"required"],label:["label",r&&"disabled"],asterisk:["asterisk",n&&"error"]};return D(l,Be,o)},ze=S("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[{[`& .${L.label}`]:o.label},o.root,o[`labelPlacement${k(r.labelPlacement)}`]]}})(Q(({theme:e})=>({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${L.disabled}`]:{cursor:"default"},[`& .${L.label}`]:{[`&.${L.disabled}`]:{color:(e.vars||e).palette.text.disabled}},variants:[{props:{labelPlacement:"start"},style:{flexDirection:"row-reverse",marginRight:-11}},{props:{labelPlacement:"top"},style:{flexDirection:"column-reverse"}},{props:{labelPlacement:"bottom"},style:{flexDirection:"column"}},{props:({labelPlacement:o})=>o==="start"||o==="top"||o==="bottom",style:{marginLeft:16}}]}))),Le=S("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(Q(({theme:e})=>({[`&.${L.error}`]:{color:(e.vars||e).palette.error.main}}))),$e=y.forwardRef(function(o,r){const s=J({props:o,name:"MuiFormControlLabel"}),{checked:n,className:i,componentsProps:l={},control:a,disabled:h,disableTypography:p,inputRef:f,label:j,labelPlacement:R="end",name:N,onChange:B,required:w,slots:g={},slotProps:C={},value:O,...T}=s,F=K(),W=h??a.props.disabled??(F==null?void 0:F.disabled),b=w??a.props.required,I={disabled:W,required:b};["checked","name","onChange","value","inputRef"].forEach(d=>{typeof a.props[d]>"u"&&typeof s[d]<"u"&&(I[d]=s[d])});const q=se({props:s,muiFormControl:F,states:["error"]}),v={...s,disabled:W,labelPlacement:R,required:b,error:q.error},z=Ie(v),c={slots:g,slotProps:{...l,...C}},[E,P]=ce("typography",{elementType:m,externalForwardedProps:c,ownerState:v});let x=j;return x!=null&&x.type!==m&&!p&&(x=t.jsx(E,{component:"span",...P,className:M(z.label,P==null?void 0:P.className),children:x})),t.jsxs(ze,{className:M(z.root,i),ownerState:v,ref:r,...T,children:[y.cloneElement(a,I),b?t.jsxs("div",{children:[x,t.jsxs(Le,{ownerState:v,"aria-hidden":!0,className:z.asterisk,children:[" ","*"]})]}):x]})});function Me(e){return U("MuiFormGroup",e)}G("MuiFormGroup",["root","row","error"]);const Ne=e=>{const{classes:o,row:r,error:s}=e;return D({root:["root",r&&"row",s&&"error"]},Me,o)},We=S("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,r.row&&o.row]}})({display:"flex",flexDirection:"column",flexWrap:"wrap",variants:[{props:{row:!0},style:{flexDirection:"row"}}]}),Ue=y.forwardRef(function(o,r){const s=J({props:o,name:"MuiFormGroup"}),{className:n,row:i=!1,...l}=s,a=K(),h=se({props:s,muiFormControl:a,states:["error"]}),p={...s,row:i,error:h.error},f=Ne(p);return t.jsx(We,{className:M(f.root,n),ownerState:p,ref:r,...l})}),Ge=({title:e,subtitle:o,subtext:r})=>t.jsxs(t.Fragment,{children:[e?t.jsx(m,{fontWeight:"700",variant:"h2",mb:1,children:e}):null,r,t.jsxs(Y,{children:[t.jsxs($,{children:[t.jsx(m,{variant:"subtitle1",fontWeight:600,component:"label",htmlFor:"username",mb:"5px",children:"Username"}),t.jsx(oe,{id:"username",variant:"outlined",fullWidth:!0})]}),t.jsxs($,{mt:"25px",children:[t.jsx(m,{variant:"subtitle1",fontWeight:600,component:"label",htmlFor:"password",mb:"5px",children:"Password"}),t.jsx(oe,{id:"password",type:"password",variant:"outlined",fullWidth:!0})]}),t.jsxs(Y,{justifyContent:"space-between",direction:"row",alignItems:"center",my:2,children:[t.jsx(Ue,{children:t.jsx($e,{control:t.jsx(Re,{defaultChecked:!0}),label:"Remeber this Device"})}),t.jsx(m,{component:V,to:"/",fontWeight:"500",sx:{textDecoration:"none",color:"primary.main"},children:"Forgot Password ?"})]})]}),t.jsx($,{children:t.jsx(ue,{color:"primary",variant:"contained",size:"large",fullWidth:!0,component:V,to:"/",type:"submit",children:"Sign In"})}),o]}),Xe=()=>t.jsx(ie,{title:"Login",description:"this is Login page",children:t.jsx($,{sx:{position:"relative","&:before":{content:'""',background:"radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",backgroundSize:"400% 400%",animation:"gradient 15s ease infinite",position:"absolute",height:"100%",width:"100%",opacity:"0.3"}},children:t.jsx(re,{container:!0,spacing:0,justifyContent:"center",sx:{height:"100vh"},children:t.jsx(re,{item:!0,xs:12,sm:12,lg:4,xl:3,display:"flex",justifyContent:"center",alignItems:"center",children:t.jsxs(le,{elevation:9,sx:{p:4,zIndex:1,width:"100%",maxWidth:"500px"},children:[t.jsx($,{display:"flex",alignItems:"center",justifyContent:"center",children:t.jsx(me,{})}),t.jsx(Ge,{subtext:t.jsx(m,{variant:"subtitle1",textAlign:"center",color:"textSecondary",mb:1,children:"Your Social Campaigns"}),subtitle:t.jsxs(Y,{direction:"row",spacing:1,justifyContent:"center",mt:3,children:[t.jsx(m,{color:"textSecondary",variant:"h6",fontWeight:"500",children:"New to Modernize?"}),t.jsx(m,{component:V,to:"/auth/register",fontWeight:"500",sx:{textDecoration:"none",color:"primary.main"},children:"Create an account"})]})})]})})})})});export{Xe as default};
