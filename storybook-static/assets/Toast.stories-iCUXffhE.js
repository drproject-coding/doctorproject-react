import{j as e}from"./jsx-runtime-D_zvdyIk.js";function s({variant:a,message:F,icon:l,className:R=""}){const W=["drp-toast",a?`drp-toast--${a}`:"",R].filter(Boolean).join(" "),_=a==="error"||a==="warning"?"alert":"status";return e.jsxs("div",{className:W,role:_,children:[l&&e.jsx("span",{"aria-hidden":"true",children:l}),e.jsx("span",{children:F})]})}s.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{variant:{required:!1,tsType:{name:"union",raw:'"success" | "error" | "warning" | "info"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"info"'}]},description:""},message:{required:!0,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const V={title:"Components/Toast",component:s,tags:["autodocs"]},r={args:{message:"Changes saved successfully."}},n={args:{variant:"success",message:"Patient record updated."}},t={args:{variant:"error",message:"Failed to save. Please try again."}},i={args:{variant:"warning",message:"Session expires in 5 minutes."}},o={args:{variant:"info",message:"New features available in settings."}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(s,{message:"Default notification"}),e.jsx(s,{variant:"success",message:"Patient record updated."}),e.jsx(s,{variant:"error",message:"Failed to save. Please try again."}),e.jsx(s,{variant:"warning",message:"Session expires in 5 minutes."}),e.jsx(s,{variant:"info",message:"New features available in settings."})]})},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(s,{variant:"success",message:"Appointment confirmed.",icon:"✓"}),e.jsx(s,{variant:"error",message:"Appointment cancelled.",icon:"✕"}),e.jsx(s,{variant:"warning",message:"Reminder: appointment in 1 hour.",icon:"⚠"}),e.jsx(s,{variant:"info",message:"Dr. Smith is running 10 min late.",icon:"ℹ"})]})};var d,u,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    message: "Changes saved successfully."
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,v,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: "success",
    message: "Patient record updated."
  }
}`,...(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var x,y,j;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "error",
    message: "Failed to save. Please try again."
  }
}`,...(j=(y=t.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var T,h,S;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    message: "Session expires in 5 minutes."
  }
}`,...(S=(h=i.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var w,D,N;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: "info",
    message: "New features available in settings."
  }
}`,...(N=(D=o.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var P,A,I;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12
  }}>
      <Toast message="Default notification" />
      <Toast variant="success" message="Patient record updated." />
      <Toast variant="error" message="Failed to save. Please try again." />
      <Toast variant="warning" message="Session expires in 5 minutes." />
      <Toast variant="info" message="New features available in settings." />
    </div>
}`,...(I=(A=c.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var b,q,E;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12
  }}>
      <Toast variant="success" message="Appointment confirmed." icon="✓" />
      <Toast variant="error" message="Appointment cancelled." icon="✕" />
      <Toast variant="warning" message="Reminder: appointment in 1 hour." icon="⚠" />
      <Toast variant="info" message="Dr. Smith is running 10 min late." icon="ℹ" />
    </div>
}`,...(E=(q=m.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};const B=["Default","Success","Error","Warning","Info","AllVariants","WithIcon"];export{c as AllVariants,r as Default,t as Error,o as Info,n as Success,i as Warning,m as WithIcon,B as __namedExportsOrder,V as default};
