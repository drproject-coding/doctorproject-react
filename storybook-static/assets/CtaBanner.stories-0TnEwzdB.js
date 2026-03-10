import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as o}from"./Button-BzVJ9Li6.js";function s({title:v,text:i,children:j,className:S=""}){return e.jsxs("div",{className:["drp-cta",S].filter(Boolean).join(" "),children:[e.jsx("div",{className:"drp-cta__title",children:v}),i&&e.jsx("p",{className:"drp-cta__text",children:i}),j]})}s.__docgenInfo={description:"",methods:[],displayName:"CtaBanner",props:{title:{required:!0,tsType:{name:"string"},description:""},text:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const N={title:"Components/CtaBanner",component:s,tags:["autodocs"]},t={args:{title:"Ready to modernise your practice?",text:"Join 2,000+ healthcare providers using DoctorProject to streamline patient care."}},r={args:{title:"Start your free trial today",text:"No credit card required. Set up in minutes.",children:e.jsx(o,{variant:"secondary",children:"Get Started Free"})}},a={render:()=>e.jsx(s,{title:"Transform your patient experience",text:"Everything your practice needs, in one place.",children:e.jsxs("div",{style:{display:"flex",gap:12,justifyContent:"center"},children:[e.jsx(o,{variant:"secondary",children:"Start Free Trial"}),e.jsx(o,{variant:"ghost",children:"Book a Demo"})]})})},n={args:{title:"Book a demo today."}};var c,d,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: "Ready to modernise your practice?",
    text: "Join 2,000+ healthcare providers using DoctorProject to streamline patient care."
  }
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,u,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: "Start your free trial today",
    text: "No credit card required. Set up in minutes.",
    children: <Button variant="secondary">Get Started Free</Button>
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var y,h,g;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <CtaBanner title="Transform your patient experience" text="Everything your practice needs, in one place.">
      <div style={{
      display: "flex",
      gap: 12,
      justifyContent: "center"
    }}>
        <Button variant="secondary">Start Free Trial</Button>
        <Button variant="ghost">Book a Demo</Button>
      </div>
    </CtaBanner>
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,B,f;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: "Book a demo today."
  }
}`,...(f=(B=n.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};const _=["Default","WithButton","WithTwoButtons","TitleOnly"];export{t as Default,n as TitleOnly,r as WithButton,a as WithTwoButtons,_ as __namedExportsOrder,N as default};
