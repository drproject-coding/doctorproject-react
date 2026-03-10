import{j as e}from"./jsx-runtime-D_zvdyIk.js";function r({level:p=1,children:V,uppercase:$,className:k=""}){const B=`h${p}`,C=[`drp-h${p}`,k].filter(Boolean).join(" "),I=$?{textTransform:"uppercase",letterSpacing:"var(--drp-tracking-caps)",fontWeight:"var(--drp-weight-heavy)"}:{};return e.jsx(B,{className:C,style:I,children:V})}r.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{level:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:"",defaultValue:{value:"1",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},uppercase:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const z={title:"Components/Heading",component:r,tags:["autodocs"],argTypes:{level:{control:"select",options:[1,2,3,4,5,6]},uppercase:{control:"boolean"}}},a={args:{level:1,children:"Heading 1 — 48px"}},n={args:{level:2,children:"Heading 2 — 36px"}},s={args:{level:3,children:"Heading 3 — 28px"}},l={args:{level:4,children:"Heading 4 — 24px"}},c={args:{level:5,children:"Heading 5 — 20px"}},i={args:{level:6,children:"Heading 6 — 18px"}},t={args:{level:1,uppercase:!0,children:"Uppercase Heading"}},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(r,{level:1,children:"H1 — Dashboard Overview"}),e.jsx(r,{level:2,children:"H2 — Analytics Report"}),e.jsx(r,{level:3,children:"H3 — User Management"}),e.jsx(r,{level:4,children:"H4 — Order Details"}),e.jsx(r,{level:5,children:"H5 — Product Filters"}),e.jsx(r,{level:6,children:"H6 — Metadata Section"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(r,{level:1,uppercase:!0,children:"H1 — Dashboard Overview"}),e.jsx(r,{level:2,uppercase:!0,children:"H2 — Analytics Report"}),e.jsx(r,{level:3,uppercase:!0,children:"H3 — User Management"}),e.jsx(r,{level:4,uppercase:!0,children:"H4 — Order Details"}),e.jsx(r,{level:5,uppercase:!0,children:"H5 — Product Filters"}),e.jsx(r,{level:6,uppercase:!0,children:"H6 — Metadata Section"})]})};var u,g,H;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    level: 1,
    children: "Heading 1 — 48px"
  }
}`,...(H=(g=a.parameters)==null?void 0:g.docs)==null?void 0:H.source}}};var m,v,x;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    level: 2,
    children: "Heading 2 — 36px"
  }
}`,...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var h,f,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    level: 3,
    children: "Heading 3 — 28px"
  }
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var j,S,D;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    level: 4,
    children: "Heading 4 — 24px"
  }
}`,...(D=(S=l.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var U,O,A;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    level: 5,
    children: "Heading 5 — 20px"
  }
}`,...(A=(O=c.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var M,T,b;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    level: 6,
    children: "Heading 6 — 18px"
  }
}`,...(b=(T=i.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var w,R,q;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    level: 1,
    uppercase: true,
    children: "Uppercase Heading"
  }
}`,...(q=(R=t.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var F,L,N;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <Heading level={1}>H1 — Dashboard Overview</Heading>
      <Heading level={2}>H2 — Analytics Report</Heading>
      <Heading level={3}>H3 — User Management</Heading>
      <Heading level={4}>H4 — Order Details</Heading>
      <Heading level={5}>H5 — Product Filters</Heading>
      <Heading level={6}>H6 — Metadata Section</Heading>
    </div>
}`,...(N=(L=d.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var P,_,E;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <Heading level={1} uppercase>
        H1 — Dashboard Overview
      </Heading>
      <Heading level={2} uppercase>
        H2 — Analytics Report
      </Heading>
      <Heading level={3} uppercase>
        H3 — User Management
      </Heading>
      <Heading level={4} uppercase>
        H4 — Order Details
      </Heading>
      <Heading level={5} uppercase>
        H5 — Product Filters
      </Heading>
      <Heading level={6} uppercase>
        H6 — Metadata Section
      </Heading>
    </div>
}`,...(E=(_=o.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const G=["H1","H2","H3","H4","H5","H6","Uppercase","AllLevels","AllLevelsUppercase"];export{d as AllLevels,o as AllLevelsUppercase,a as H1,n as H2,s as H3,l as H4,c as H5,i as H6,t as Uppercase,G as __namedExportsOrder,z as default};
