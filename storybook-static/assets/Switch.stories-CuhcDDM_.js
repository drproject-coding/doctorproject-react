import{j as e}from"./jsx-runtime-D_zvdyIk.js";function a({label:n,...k}){return e.jsxs("label",{className:"drp-switch",children:[e.jsx("input",{type:"checkbox",...k}),e.jsx("span",{className:"drp-switch__track",children:e.jsx("span",{className:"drp-switch__knob"})}),n&&e.jsx("span",{children:n})]})}a.__docgenInfo={description:"",methods:[],displayName:"Switch"};const j={title:"Components/Switch",component:a,tags:["autodocs"]},s={args:{label:"Dark Mode"}},r={args:{label:"Enabled",defaultChecked:!0}},t={args:{}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(a,{label:"Email notifications",defaultChecked:!0}),e.jsx(a,{label:"Push notifications"}),e.jsx(a,{label:"Marketing emails"}),e.jsx(a,{label:"Two-factor auth",defaultChecked:!0})]})};var o,l,i;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: "Dark Mode"
  }
}`,...(i=(l=s.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var d,p,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Enabled",
    defaultChecked: true
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,h,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {}
}`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var f,b,g;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <Switch label="Email notifications" defaultChecked />
      <Switch label="Push notifications" />
      <Switch label="Marketing emails" />
      <Switch label="Two-factor auth" defaultChecked />
    </div>
}`,...(g=(b=c.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const w=["Default","Checked","NoLabel","SettingsExample"];export{r as Checked,s as Default,t as NoLabel,c as SettingsExample,w as __namedExportsOrder,j as default};
