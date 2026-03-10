import{j as e}from"./jsx-runtime-D_zvdyIk.js";function t({width:n,height:a,variant:c="text",className:_=""}){const r={background:"linear-gradient(90deg, rgba(0,0,0,0.06) 25%, rgba(0,0,0,0.12) 50%, rgba(0,0,0,0.06) 75%)",backgroundSize:"200% 100%",animation:"drp-shimmer 1.5s ease-in-out infinite",border:"1px solid rgba(0,0,0,0.08)"};if(c==="text")Object.assign(r,{width:n||"100%",height:a||"14px"});else if(c==="circular"){const p=n||a||48;Object.assign(r,{width:p,height:p,borderRadius:"50%"})}else Object.assign(r,{width:n||"100%",height:a||"120px"});return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:_,style:r,"aria-hidden":"true"}),e.jsx("style",{children:`
        @keyframes drp-shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
        @media (prefers-reduced-motion: reduce) { .drp-skeleton-shimmer { animation: none !important; } }
      `})]})}t.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},variant:{required:!1,tsType:{name:"union",raw:'"text" | "rectangular" | "circular"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"rectangular"'},{name:"literal",value:'"circular"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const q={title:"Components/Skeleton",component:t,tags:["autodocs"]},i={args:{variant:"text"}},s={args:{variant:"rectangular",height:"200px"}},l={args:{variant:"circular",width:64,height:64}},d={render:()=>e.jsxs("div",{className:"drp-card",style:{padding:"24px",maxWidth:"400px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"16px"},children:[e.jsx(t,{variant:"circular",width:40,height:40}),e.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(t,{variant:"text",width:"60%"}),e.jsx(t,{variant:"text",width:"40%",height:"10px"})]})]}),e.jsx(t,{variant:"rectangular",height:"160px"}),e.jsxs("div",{style:{marginTop:"16px",display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(t,{variant:"text"}),e.jsx(t,{variant:"text",width:"80%"}),e.jsx(t,{variant:"text",width:"60%"})]})]})},o={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:Array.from({length:5},(n,a)=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{variant:"circular",width:32,height:32}),e.jsx(t,{variant:"text",width:"25%"}),e.jsx(t,{variant:"text",width:"30%"}),e.jsx(t,{variant:"text",width:"15%"}),e.jsx(t,{variant:"text",width:"10%"})]},a))})};var x,m,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "text"
  }
}`,...(g=(m=i.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,h,v;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: "rectangular",
    height: "200px"
  }
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var f,y,w;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "circular",
    width: 64,
    height: 64
  }
}`,...(w=(y=l.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var j,k,S;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="drp-card" style={{
    padding: "24px",
    maxWidth: "400px"
  }}>
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: "12px",
      marginBottom: "16px"
    }}>
        <Skeleton variant="circular" width={40} height={40} />
        <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: "8px"
      }}>
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="40%" height="10px" />
        </div>
      </div>
      <Skeleton variant="rectangular" height="160px" />
      <div style={{
      marginTop: "16px",
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }}>
        <Skeleton variant="text" />
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="60%" />
      </div>
    </div>
}`,...(S=(k=d.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var b,T,D;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  }}>
      {Array.from({
      length: 5
    }, (_, i) => <div key={i} style={{
      display: "flex",
      gap: "16px",
      alignItems: "center"
    }}>
          <Skeleton variant="circular" width={32} height={32} />
          <Skeleton variant="text" width="25%" />
          <Skeleton variant="text" width="30%" />
          <Skeleton variant="text" width="15%" />
          <Skeleton variant="text" width="10%" />
        </div>)}
    </div>
}`,...(D=(T=o.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const A=["Text","Rectangular","Avatar","CardSkeleton","TableSkeleton"];export{l as Avatar,d as CardSkeleton,s as Rectangular,o as TableSkeleton,i as Text,A as __namedExportsOrder,q as default};
