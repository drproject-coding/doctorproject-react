import{j as e}from"./jsx-runtime-D_zvdyIk.js";function r({value:p,label:c,className:u=""}){return e.jsxs("dl",{className:`drp-stat-card ${u}`,style:{textAlign:"center",padding:"var(--drp-space-8)",border:"var(--drp-border-chunk)",background:"var(--drp-surface)",margin:0},children:[e.jsx("dd",{style:{fontFamily:"var(--drp-font-primary)",fontSize:"3.5rem",fontWeight:800,color:"var(--drp-purple)",lineHeight:1,fontVariantNumeric:"tabular-nums",margin:0},children:p}),e.jsx("dt",{style:{fontFamily:"var(--drp-font-primary)",fontSize:"var(--drp-text-sm)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.1em",marginTop:"var(--drp-space-2)"},children:c})]})}r.__docgenInfo={description:"",methods:[],displayName:"StatCard",props:{value:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const g={title:"Composites/StatCard",component:r,tags:["autodocs"]},a={args:{value:"73%",label:"Higher Conversion"}},t={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"16px"},children:[e.jsx(r,{value:"73%",label:"Higher Conversion"}),e.jsx(r,{value:"50%",label:"Faster Time-to-Market"}),e.jsx(r,{value:"3x",label:"Brand Consistency"}),e.jsx(r,{value:"400%",label:"ROI in Year One"})]})};var s,n,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    value: "73%",
    label: "Higher Conversion"
  }
}`,...(l=(n=a.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var o,i,d;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "16px"
  }}>
      <StatCard value="73%" label="Higher Conversion" />
      <StatCard value="50%" label="Faster Time-to-Market" />
      <StatCard value="3x" label="Brand Consistency" />
      <StatCard value="400%" label="ROI in Year One" />
    </div>
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const v=["Default","StatsRow"];export{a as Default,t as StatsRow,v as __namedExportsOrder,g as default};
