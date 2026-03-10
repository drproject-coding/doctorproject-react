import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";function _({label:l,error:t,success:E,className:q="",id:S,...c}){const L=v.useId(),n=S??L,d=["drp-input",t&&"drp-input--error",E&&"drp-input--success",q].filter(Boolean).join(" "),i=typeof t=="string"?e.jsx("span",{className:"drp-field__error",role:"alert",children:t}):null;return l?e.jsxs("div",{className:"drp-field",children:[e.jsx("label",{className:"drp-field__label",htmlFor:n,children:l}),e.jsx("textarea",{id:n,className:d,...c}),i]}):e.jsxs(e.Fragment,{children:[e.jsx("textarea",{id:n,className:d,...c}),i]})}_.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"union",raw:"string | boolean",elements:[{name:"string"},{name:"boolean"}]},description:""},success:{required:!1,tsType:{name:"boolean"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["TextareaHTMLAttributes"]};const O={title:"Components/Textarea",component:_,tags:["autodocs"]},r={args:{placeholder:"Enter your message..."}},s={args:{label:"Description",placeholder:"Tell us about your project..."}},a={args:{label:"Bio",error:!0,placeholder:"Required field"}},o={args:{label:"Notes",success:!0,value:"Looks good!",readOnly:!0}};var u,p,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter your message..."
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,f,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Description",
    placeholder: "Tell us about your project..."
  }
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var b,h,j;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Bio",
    error: true,
    placeholder: "Required field"
  }
}`,...(j=(h=a.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var y,T,N;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: "Notes",
    success: true,
    value: "Looks good!",
    readOnly: true
  }
}`,...(N=(T=o.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};const R=["Default","WithLabel","Error","Success"];export{r as Default,a as Error,o as Success,s as WithLabel,R as __namedExportsOrder,O as default};
