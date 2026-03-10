import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as r}from"./Input-C_zh8RQu.js";import"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";const P={title:"Components/Input",component:r,tags:["autodocs"],argTypes:{error:{control:"boolean"},success:{control:"boolean"},disabled:{control:"boolean"}}},a={args:{placeholder:"Enter text..."}},s={args:{label:"Email Address",placeholder:"you@example.com",type:"email"}},l={args:{label:"Password",type:"password",error:!0,placeholder:"Required"}},o={args:{label:"Username",value:"johndoe",success:!0,readOnly:!0}},n={args:{label:"Locked Field",value:"Cannot edit",disabled:!0}},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[e.jsx(r,{label:"Full Name",placeholder:"John Doe"}),e.jsx(r,{label:"Email",type:"email",placeholder:"you@example.com"}),e.jsx(r,{label:"Password",type:"password",placeholder:"••••••••"}),e.jsx(r,{label:"Error Example",error:!0,placeholder:"Invalid input"}),e.jsx(r,{label:"Success Example",success:!0,value:"Valid input",readOnly:!0})]})};var c,p,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter text..."
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,m,i;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "Email Address",
    placeholder: "you@example.com",
    type: "email"
  }
}`,...(i=(m=s.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var x,b,h;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Password",
    type: "password",
    error: true,
    placeholder: "Required"
  }
}`,...(h=(b=l.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var y,g,E;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: "Username",
    value: "johndoe",
    success: true,
    readOnly: true
  }
}`,...(E=(g=o.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var v,j,I;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: "Locked Field",
    value: "Cannot edit",
    disabled: true
  }
}`,...(I=(j=n.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var S,f,w;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    maxWidth: "400px"
  }}>
      <Input label="Full Name" placeholder="John Doe" />
      <Input label="Email" type="email" placeholder="you@example.com" />
      <Input label="Password" type="password" placeholder="••••••••" />
      <Input label="Error Example" error placeholder="Invalid input" />
      <Input label="Success Example" success value="Valid input" readOnly />
    </div>
}`,...(w=(f=t.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};const W=["Default","WithLabel","Error","Success","Disabled","FormExample"];export{a as Default,n as Disabled,l as Error,t as FormExample,o as Success,s as WithLabel,W as __namedExportsOrder,P as default};
