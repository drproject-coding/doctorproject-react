import{j as e}from"./jsx-runtime-D_zvdyIk.js";function a({label:j,dark:y,className:O="",...v}){const S=["drp-checkbox",y&&"drp-checkbox--dark",O].filter(Boolean).join(" ");return e.jsxs("label",{className:S,children:[e.jsx("input",{type:"checkbox",...v}),j]})}a.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!0,tsType:{name:"string"},description:""},dark:{required:!1,tsType:{name:"boolean"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};const _={title:"Components/Checkbox",component:a,tags:["autodocs"]},r={args:{label:"Accept terms"}},s={args:{label:"Checked",defaultChecked:!0}},o={args:{label:"Dark variant",dark:!0}},t={args:{label:"Disabled",disabled:!0}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(a,{label:"Option A",defaultChecked:!0}),e.jsx(a,{label:"Option B"}),e.jsx(a,{label:"Option C"}),e.jsx(a,{label:"Disabled",disabled:!0})]})};var c,n,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "Accept terms"
  }
}`,...(d=(n=r.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var i,p,u;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "Checked",
    defaultChecked: true
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,b,x;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Dark variant",
    dark: true
  }
}`,...(x=(b=o.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var k,h,f;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: "Disabled",
    disabled: true
  }
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var g,C,D;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  }}>
      <Checkbox label="Option A" defaultChecked />
      <Checkbox label="Option B" />
      <Checkbox label="Option C" />
      <Checkbox label="Disabled" disabled />
    </div>
}`,...(D=(C=l.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const q=["Default","Checked","Dark","Disabled","Group"];export{s as Checked,o as Dark,r as Default,t as Disabled,l as Group,q as __namedExportsOrder,_ as default};
