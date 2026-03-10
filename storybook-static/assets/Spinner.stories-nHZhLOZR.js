import{j as e}from"./jsx-runtime-D_zvdyIk.js";function n({className:f=""}){return e.jsx("div",{className:["drp-spinner",f].filter(Boolean).join(" "),role:"status","aria-label":"Loading"})}n.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const g={title:"Components/Spinner",component:n,tags:["autodocs"]},r={},s={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[e.jsx(n,{}),e.jsx("span",{style:{fontFamily:"var(--drp-font-primary)",fontSize:"var(--drp-text-sm)",fontWeight:600},children:"Loading..."})]})},a={render:()=>e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center"},children:[e.jsx(n,{}),e.jsx(n,{}),e.jsx(n,{})]})};var t,o,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(i=(o=r.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var p,d,l;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: 12
  }}>
      <Spinner />
      <span style={{
      fontFamily: "var(--drp-font-primary)",
      fontSize: "var(--drp-text-sm)",
      fontWeight: 600
    }}>
        Loading...
      </span>
    </div>
}`,...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,m,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 24,
    alignItems: "center"
  }}>
      <Spinner />
      <Spinner />
      <Spinner />
    </div>
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const y=["Default","InContext","Multiple"];export{r as Default,s as InContext,a as Multiple,y as __namedExportsOrder,g as default};
