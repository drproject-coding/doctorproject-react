import{j as e}from"./jsx-runtime-D_zvdyIk.js";function a({quote:j,name:w,role:o,avatar:n,className:q=""}){return e.jsxs("div",{className:["drp-testimonial",q].filter(Boolean).join(" "),children:[e.jsx("p",{className:"drp-testimonial__quote",children:j}),e.jsxs("div",{className:"drp-testimonial__author",children:[n&&e.jsx("div",{className:"drp-testimonial__avatar",children:n}),e.jsxs("div",{children:[e.jsx("div",{className:"drp-testimonial__name",children:w}),o&&e.jsx("div",{className:"drp-testimonial__role",children:o})]})]})]})}a.__docgenInfo={description:"",methods:[],displayName:"Testimonial",props:{quote:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},role:{required:!1,tsType:{name:"string"},description:""},avatar:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const N={title:"Components/Testimonial",component:a,tags:["autodocs"]},f=()=>e.jsx("img",{src:"https://i.pravatar.cc/48?img=3",alt:"avatar",style:{width:48,height:48,objectFit:"cover"}}),t={args:{quote:"This design system saved us weeks of work. The components are clean, consistent, and extremely well-documented.",name:"Sarah Chen",role:"Head of Product, MediFlow",avatar:e.jsx(f,{})}},r={args:{quote:"The brutalist aesthetic is exactly what our brand needed. Bold, direct, and impossible to ignore.",name:"James Okafor",role:"Creative Director"}},s={args:{quote:"Finally a design system that doesn't look like every other SaaS tool out there.",name:"Maria Gonzalez",avatar:e.jsx(f,{})}},i={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24},children:[e.jsx(a,{quote:"Incredible attention to detail. Every component just works.",name:"Alex Kim",role:"Frontend Lead",avatar:e.jsx("img",{src:"https://i.pravatar.cc/48?img=1",style:{width:48,height:48}})}),e.jsx(a,{quote:"We shipped our MVP 3x faster thanks to this system.",name:"Priya Nair",role:"CTO, HealthTrack",avatar:e.jsx("img",{src:"https://i.pravatar.cc/48?img=5",style:{width:48,height:48}})}),e.jsx(a,{quote:"Dark mode support out of the box. That alone was worth it.",name:"Tom Williams",role:"Senior Engineer",avatar:e.jsx("img",{src:"https://i.pravatar.cc/48?img=8",style:{width:48,height:48}})}),e.jsx(a,{quote:"The typography system is chef's kiss. Super readable at every size.",name:"Leila Hassan",role:"UX Designer",avatar:e.jsx("img",{src:"https://i.pravatar.cc/48?img=9",style:{width:48,height:48}})})]})};var l,d,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    quote: "This design system saved us weeks of work. The components are clean, consistent, and extremely well-documented.",
    name: "Sarah Chen",
    role: "Head of Product, MediFlow",
    avatar: <Avatar />
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,p,h;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    quote: "The brutalist aesthetic is exactly what our brand needed. Bold, direct, and impossible to ignore.",
    name: "James Okafor",
    role: "Creative Director"
  }
}`,...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var u,g,v;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    quote: "Finally a design system that doesn't look like every other SaaS tool out there.",
    name: "Maria Gonzalez",
    avatar: <Avatar />
  }
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var y,x,T;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 24
  }}>
      <Testimonial quote="Incredible attention to detail. Every component just works." name="Alex Kim" role="Frontend Lead" avatar={<img src="https://i.pravatar.cc/48?img=1" style={{
      width: 48,
      height: 48
    }} />} />
      <Testimonial quote="We shipped our MVP 3x faster thanks to this system." name="Priya Nair" role="CTO, HealthTrack" avatar={<img src="https://i.pravatar.cc/48?img=5" style={{
      width: 48,
      height: 48
    }} />} />
      <Testimonial quote="Dark mode support out of the box. That alone was worth it." name="Tom Williams" role="Senior Engineer" avatar={<img src="https://i.pravatar.cc/48?img=8" style={{
      width: 48,
      height: 48
    }} />} />
      <Testimonial quote="The typography system is chef's kiss. Super readable at every size." name="Leila Hassan" role="UX Designer" avatar={<img src="https://i.pravatar.cc/48?img=9" style={{
      width: 48,
      height: 48
    }} />} />
    </div>
}`,...(T=(x=i.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};const S=["Default","NoAvatar","NoRole","Grid"];export{t as Default,i as Grid,r as NoAvatar,s as NoRole,S as __namedExportsOrder,N as default};
