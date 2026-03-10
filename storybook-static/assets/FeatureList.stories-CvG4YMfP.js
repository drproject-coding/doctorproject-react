import{j as e}from"./jsx-runtime-D_zvdyIk.js";function i({features:g,className:f=""}){return e.jsx("div",{className:["drp-features",f].filter(Boolean).join(" "),children:g.map((r,h)=>e.jsxs("div",{className:"drp-feature",children:[e.jsx("div",{className:"drp-feature__icon",children:r.icon}),e.jsx("div",{className:"drp-feature__title",children:r.title}),e.jsx("div",{className:"drp-feature__text",children:r.text})]},h))})}i.__docgenInfo={description:"",methods:[],displayName:"FeatureList",props:{features:{required:!0,tsType:{name:"Array",elements:[{name:"FeatureItem"}],raw:"FeatureItem[]"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const y={title:"Components/FeatureList",component:i,tags:["autodocs"]},S=[{icon:"♥",title:"Patient Records",text:"Secure, HIPAA-compliant storage for all patient data and history."},{icon:"📅",title:"Appointment Scheduling",text:"Smart scheduling with automated reminders and conflict detection."},{icon:"💊",title:"Prescription Management",text:"Digital prescriptions with dosage tracking and renewal alerts."}],t={args:{features:S}},n={render:()=>e.jsx("div",{style:{maxWidth:800},children:e.jsx(i,{features:[{icon:"🔒",title:"HIPAA Compliant",text:"End-to-end encryption and audit logs."},{icon:"⚡",title:"Real-time Sync",text:"Instant updates across all devices."}]})})},a={render:()=>e.jsx(i,{features:[{icon:"♥",title:"Patient Records",text:"Secure HIPAA-compliant storage."},{icon:"📅",title:"Scheduling",text:"Smart appointment management."},{icon:"💊",title:"Prescriptions",text:"Digital prescription workflows."},{icon:"📊",title:"Analytics",text:"Real-time practice insights."},{icon:"💬",title:"Messaging",text:"Secure patient communications."},{icon:"🔗",title:"Integrations",text:"Connect with 50+ healthcare tools."}]})};var s,o,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    features: medicalFeatures
  }
}`,...(c=(o=t.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var l,d,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 800
  }}>
      <FeatureList features={[{
      icon: "🔒",
      title: "HIPAA Compliant",
      text: "End-to-end encryption and audit logs."
    }, {
      icon: "⚡",
      title: "Real-time Sync",
      text: "Instant updates across all devices."
    }]} />
    </div>
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,p,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <FeatureList features={[{
    icon: "♥",
    title: "Patient Records",
    text: "Secure HIPAA-compliant storage."
  }, {
    icon: "📅",
    title: "Scheduling",
    text: "Smart appointment management."
  }, {
    icon: "💊",
    title: "Prescriptions",
    text: "Digital prescription workflows."
  }, {
    icon: "📊",
    title: "Analytics",
    text: "Real-time practice insights."
  }, {
    icon: "💬",
    title: "Messaging",
    text: "Secure patient communications."
  }, {
    icon: "🔗",
    title: "Integrations",
    text: "Connect with 50+ healthcare tools."
  }]} />
}`,...(x=(p=a.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};const w=["Default","TwoColumns","SixFeatures"];export{t as Default,a as SixFeatures,n as TwoColumns,w as __namedExportsOrder,y as default};
