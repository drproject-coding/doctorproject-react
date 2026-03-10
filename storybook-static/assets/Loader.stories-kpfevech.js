import{j as e}from"./jsx-runtime-D_zvdyIk.js";function r({size:a,label:d,className:A=""}){const p=a==="sm"?20:a==="lg"?48:32,c=a==="sm"?2:a==="lg"?4:3;return e.jsxs("div",{className:A,style:{display:"inline-flex",alignItems:"center",gap:"12px"},children:[e.jsx("div",{style:{width:p,height:p,border:`${c}px solid var(--drp-light-grey, #E0E0E0)`,borderTop:`${c}px solid var(--drp-purple)`,animation:"drp-spin 0.8s linear infinite"}}),d&&e.jsx("span",{style:{fontFamily:"var(--drp-font-primary)",fontSize:"var(--drp-text-sm)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em"},children:d}),e.jsx("style",{children:"@keyframes drp-spin { to { transform: rotate(360deg); } }"})]})}r.__docgenInfo={description:"",methods:[],displayName:"Loader",props:{size:{required:!1,tsType:{name:"union",raw:'"sm" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"lg"'}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const _={title:"Components/Loader",component:r,tags:["autodocs"],argTypes:{size:{control:"select",options:[void 0,"sm","lg"]}}},s={},n={args:{size:"sm"}},t={args:{size:"lg"}},l={args:{label:"Loading..."}},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:"32px",alignItems:"center"},children:[e.jsx(r,{size:"sm",label:"Small"}),e.jsx(r,{label:"Default"}),e.jsx(r,{size:"lg",label:"Large"})]})},i={render:()=>e.jsxs("div",{className:"drp-card",style:{padding:"48px",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",gap:"16px"},children:[e.jsx(r,{size:"lg"}),e.jsx("p",{style:{fontFamily:"var(--drp-font-primary)",fontSize:"14px",fontWeight:600,color:"#666"},children:"Loading data..."})]})};var m,g,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var x,f,y;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: "sm"
  }
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var v,h,L;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: "lg"
  }
}`,...(L=(h=t.parameters)==null?void 0:h.docs)==null?void 0:L.source}}};var S,z,b;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: "Loading..."
  }
}`,...(b=(z=l.parameters)==null?void 0:z.docs)==null?void 0:b.source}}};var j,I,D;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "32px",
    alignItems: "center"
  }}>
      <Loader size="sm" label="Small" />
      <Loader label="Default" />
      <Loader size="lg" label="Large" />
    </div>
}`,...(D=(I=o.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var T,W,E;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="drp-card" style={{
    padding: "48px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px"
  }}>
      <Loader size="lg" />
      <p style={{
      fontFamily: "var(--drp-font-primary)",
      fontSize: "14px",
      fontWeight: 600,
      color: "#666"
    }}>
        Loading data...
      </p>
    </div>
}`,...(E=(W=i.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};const q=["Default","Small","Large","WithLabel","AllSizes","InCard"];export{o as AllSizes,s as Default,i as InCard,t as Large,n as Small,l as WithLabel,q as __namedExportsOrder,_ as default};
