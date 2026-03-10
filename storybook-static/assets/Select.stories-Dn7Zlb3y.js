import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as W}from"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";function r({label:i,error:c,success:V,className:A="",children:L,id:k,...F}){const M=W.useId(),d=k??M,p=e.jsx("select",{id:d,className:["drp-select",c&&"drp-select--error",V&&"drp-select--success",A].filter(Boolean).join(" "),...F,children:L}),u=typeof c=="string"?e.jsx("span",{className:"drp-field__error",role:"alert",children:c}):null;return i?e.jsxs("div",{className:"drp-field",children:[e.jsx("label",{className:"drp-field__label",htmlFor:d,children:i}),p,u]}):e.jsxs(e.Fragment,{children:[p,u]})}r.__docgenInfo={description:"",methods:[],displayName:"Select",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"union",raw:"string | boolean",elements:[{name:"string"},{name:"boolean"}]},description:""},success:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["SelectHTMLAttributes"]};const G={title:"Components/Select",component:r,tags:["autodocs"]},s=[e.jsx("option",{value:"",children:"Select a role..."},""),e.jsx("option",{value:"admin",children:"Admin"},"admin"),e.jsx("option",{value:"editor",children:"Editor"},"editor"),e.jsx("option",{value:"viewer",children:"Viewer"},"viewer")],n={args:{label:"Role",children:s}},l={args:{label:"Locked",disabled:!0,children:e.jsx("option",{children:"Cannot change"})}},a={args:{label:"Role",error:!0,children:s}},o={args:{label:"Role",success:!0,children:s}},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap"},children:[e.jsx(r,{label:"Default",children:s}),e.jsx(r,{label:"Error",error:!0,children:s}),e.jsx(r,{label:"Success",success:!0,children:s}),e.jsx(r,{label:"Disabled",disabled:!0,children:e.jsx("option",{children:"Cannot change"})})]})};var m,b,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Role",
    children: roleOptions
  }
}`,...(h=(b=n.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var g,x,f;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Locked",
    disabled: true,
    children: <option>Cannot change</option>
  }
}`,...(f=(x=l.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var S,j,y,v,E;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: "Role",
    error: true,
    children: roleOptions
  }
}`,...(y=(j=a.parameters)==null?void 0:j.docs)==null?void 0:y.source},description:{story:"Error state with red border",...(E=(v=a.parameters)==null?void 0:v.docs)==null?void 0:E.description}}};var w,D,O,R,_;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "Role",
    success: true,
    children: roleOptions
  }
}`,...(O=(D=o.parameters)==null?void 0:D.docs)==null?void 0:O.source},description:{story:"Success state with green border",...(_=(R=o.parameters)==null?void 0:R.docs)==null?void 0:_.description}}};var N,q,C,T,I;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "24px",
    flexWrap: "wrap"
  }}>
      <Select label="Default">{roleOptions}</Select>
      <Select label="Error" error>
        {roleOptions}
      </Select>
      <Select label="Success" success>
        {roleOptions}
      </Select>
      <Select label="Disabled" disabled>
        <option>Cannot change</option>
      </Select>
    </div>
}`,...(C=(q=t.parameters)==null?void 0:q.docs)==null?void 0:C.source},description:{story:"All validation states side by side",...(I=(T=t.parameters)==null?void 0:T.docs)==null?void 0:I.description}}};const J=["Default","Disabled","Error","Success","ValidationStates"];export{n as Default,l as Disabled,a as Error,o as Success,t as ValidationStates,J as __namedExportsOrder,G as default};
