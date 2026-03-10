import{j as e}from"./jsx-runtime-D_zvdyIk.js";function s({label:i,className:o=""}){return i?e.jsxs("div",{className:`drp-divider ${o}`,style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("div",{style:{flex:1,height:"2px",background:"var(--drp-black)"}}),e.jsx("span",{style:{fontFamily:"var(--drp-font-primary)",fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",whiteSpace:"nowrap"},children:i}),e.jsx("div",{style:{flex:1,height:"2px",background:"var(--drp-black)"}})]}):e.jsx("hr",{className:`drp-divider ${o}`,style:{border:"none",height:"2px",background:"var(--drp-black)",margin:0}})}s.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{label:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const j={title:"Components/Divider",component:s,tags:["autodocs"]},r={},t={args:{label:"OR"}},a={args:{label:"SECTION 02"}},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[e.jsx("p",{children:"Content above the divider"}),e.jsx(s,{}),e.jsx("p",{children:"Content below the divider"}),e.jsx(s,{label:"OR"}),e.jsx("p",{children:"Alternative content"})]})};var d,p,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var c,m,x;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "OR"
  }
}`,...(x=(m=t.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var u,v,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "SECTION 02"
  }
}`,...(g=(v=a.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var h,f,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    maxWidth: "400px"
  }}>
      <p>Content above the divider</p>
      <Divider />
      <p>Content below the divider</p>
      <Divider label="OR" />
      <p>Alternative content</p>
    </div>
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const S=["Default","WithLabel","Section","InContext"];export{r as Default,n as InContext,a as Section,t as WithLabel,S as __namedExportsOrder,j as default};
