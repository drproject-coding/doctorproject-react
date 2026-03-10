import{j as e}from"./jsx-runtime-D_zvdyIk.js";function r({color:l,pulse:O,className:_="",...B}){const N=["drp-dot",l&&`drp-dot--${l}`,O&&"drp-dot--pulse",_].filter(Boolean).join(" ");return e.jsx("span",{className:N,...B})}r.__docgenInfo={description:"",methods:[],displayName:"StatusDot",props:{className:{defaultValue:{value:'""',computed:!1},required:!1}}};const E={title:"Components/StatusDot",component:r,tags:["autodocs"],argTypes:{color:{control:"select",options:[void 0,"purple","mint","pink","yellow"]},pulse:{control:"boolean"}}},a={args:{"aria-hidden":!0}},n={args:{color:"purple","aria-hidden":!0}},s={args:{color:"mint","aria-hidden":!0}},t={args:{color:"pink","aria-hidden":!0}},i={args:{color:"mint",pulse:!0,"aria-hidden":!0}},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(r,{color:"mint",pulse:!0,"aria-hidden":!0})," Online"]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(r,{color:"yellow","aria-hidden":!0})," Away"]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(r,{color:"pink","aria-hidden":!0})," Busy"]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(r,{"aria-hidden":!0})," Offline"]})]})};var d,p,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    "aria-hidden": true
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,m,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    color: "purple",
    "aria-hidden": true
  }
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var x,y,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    color: "mint",
    "aria-hidden": true
  }
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var h,v,S;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    color: "pink",
    "aria-hidden": true
  }
}`,...(S=(v=t.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var j,D,I;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "mint",
    pulse: true,
    "aria-hidden": true
  }
}`,...(I=(D=i.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var k,P,w;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  }}>
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }}>
        <StatusDot color="mint" pulse aria-hidden={true} /> Online
      </div>
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }}>
        <StatusDot color="yellow" aria-hidden={true} /> Away
      </div>
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }}>
        <StatusDot color="pink" aria-hidden={true} /> Busy
      </div>
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }}>
        <StatusDot aria-hidden={true} /> Offline
      </div>
    </div>
}`,...(w=(P=o.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};const L=["Default","Purple","Mint","Pink","Pulsing","StatusList"];export{a as Default,s as Mint,t as Pink,i as Pulsing,n as Purple,o as StatusList,L as __namedExportsOrder,E as default};
