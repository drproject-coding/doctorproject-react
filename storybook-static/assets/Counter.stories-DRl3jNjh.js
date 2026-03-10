import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as C}from"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";function S({value:l,min:a=0,max:u=99,onChange:c}){const[q,A]=C.useState(l??a),e=l??q,m=i=>{const p=Math.min(u,Math.max(a,i));A(p),c==null||c(p)};return r.jsxs("div",{className:"drp-counter",children:[r.jsx("button",{className:"drp-counter__btn",onClick:()=>m(e-1),disabled:e<=a,children:"−"}),r.jsx("input",{className:"drp-counter__value",type:"number",value:e,min:a,max:u,onChange:i=>m(Number(i.target.value)),readOnly:!0}),r.jsx("button",{className:"drp-counter__btn",onClick:()=>m(e+1),disabled:e>=u,children:"+"})]})}S.__docgenInfo={description:"",methods:[],displayName:"Counter",props:{value:{required:!1,tsType:{name:"number"},description:""},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"99",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""}}};const V={title:"Components/Counter",component:S,tags:["autodocs"]},s={args:{value:1}},t={args:{value:5,min:0,max:10}},n={args:{value:0,min:0}},o={args:{value:99,max:99}};var d,v,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    value: 1
  }
}`,...(g=(v=s.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var f,x,b;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    value: 5,
    min: 0,
    max: 10
  }
}`,...(b=(x=t.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var _,y,h;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    value: 0,
    min: 0
  }
}`,...(h=(y=n.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var j,M,N;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    value: 99,
    max: 99
  }
}`,...(N=(M=o.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};const k=["Default","WithRange","AtMin","AtMax"];export{o as AtMax,n as AtMin,s as Default,t as WithRange,k as __namedExportsOrder,V as default};
