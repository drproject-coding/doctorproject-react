import{j as e}from"./jsx-runtime-D_zvdyIk.js";function r({size:y,weight:b,muted:oe,secondary:de,as:ie="p",children:ce,className:me=""}){const pe=["drp-text",y&&y!=="md"&&`drp-text--${y}`,b&&b!=="regular"&&`drp-text--${b}`,me].filter(Boolean).join(" "),a={};return oe?a.color="var(--drp-text-muted)":de&&(a.color="var(--drp-text-secondary)"),e.jsx(ie,{className:pe,style:Object.keys(a).length?a:void 0,children:ce})}r.__docgenInfo={description:"",methods:[],displayName:"Text",props:{size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:""},weight:{required:!1,tsType:{name:"union",raw:'"regular" | "medium" | "semibold" | "bold"',elements:[{name:"literal",value:'"regular"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"semibold"'},{name:"literal",value:'"bold"'}]},description:""},muted:{required:!1,tsType:{name:"boolean"},description:""},secondary:{required:!1,tsType:{name:"boolean"},description:""},as:{required:!1,tsType:{name:"union",raw:'"p" | "span" | "div" | "label"',elements:[{name:"literal",value:'"p"'},{name:"literal",value:'"span"'},{name:"literal",value:'"div"'},{name:"literal",value:'"label"'}]},description:"",defaultValue:{value:'"p"',computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const xe={title:"Components/Text",component:r,tags:["autodocs"],argTypes:{size:{control:"select",options:[void 0,"xs","sm","md","lg"]},weight:{control:"select",options:[void 0,"regular","medium","semibold","bold"]},as:{control:"select",options:["p","span","div","label"]},muted:{control:"boolean"},secondary:{control:"boolean"}}},s={args:{children:"Default body text at 14px regular weight."}},t={args:{size:"xs",children:"Extra small text — 11px"}},n={args:{size:"sm",children:"Small text — 12px"}},l={args:{size:"md",children:"Medium text — 14px (default)"}},o={args:{size:"lg",children:"Large text — 16px"}},d={args:{weight:"bold",children:"Bold weight text"}},i={args:{weight:"semibold",children:"Semibold weight text"}},c={args:{muted:!0,children:"Muted text for secondary information"}},m={args:{secondary:!0,children:"Secondary text for supporting content"}},p={args:{as:"span",children:"Rendered as a <span>"}},u={args:{as:"label",weight:"semibold",children:"Rendered as a <label>"}},x={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(r,{size:"xs",children:"Extra Small (11px) — Caption text and metadata"}),e.jsx(r,{size:"sm",children:"Small (12px) — Helper text and labels"}),e.jsx(r,{size:"md",children:"Medium (14px) — Default body text"}),e.jsx(r,{size:"lg",children:"Large (16px) — Emphasized body text"})]})},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(r,{weight:"regular",children:"Regular (400) — Standard body copy"}),e.jsx(r,{weight:"medium",children:"Medium (500) — Slightly emphasized"}),e.jsx(r,{weight:"semibold",children:"Semibold (600) — Labels and buttons"}),e.jsx(r,{weight:"bold",children:"Bold (700) — Strong emphasis"})]})},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(r,{children:"Primary text — default color"}),e.jsx(r,{secondary:!0,children:"Secondary text — supporting content"}),e.jsx(r,{muted:!0,children:"Muted text — de-emphasized content"})]})};var S,f,T;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: "Default body text at 14px regular weight."
  }
}`,...(T=(f=s.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var v,z,w;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: "xs",
    children: "Extra small text — 11px"
  }
}`,...(w=(z=t.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var j,M,D;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    size: "sm",
    children: "Small text — 12px"
  }
}`,...(D=(M=n.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var E,L,A;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    size: "md",
    children: "Medium text — 14px (default)"
  }
}`,...(A=(L=l.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var R,q,B;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    size: "lg",
    children: "Large text — 16px"
  }
}`,...(B=(q=o.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var C,N,V;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    weight: "bold",
    children: "Bold weight text"
  }
}`,...(V=(N=d.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var _,H,O;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    weight: "semibold",
    children: "Semibold weight text"
  }
}`,...(O=(H=i.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var P,W,$;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    muted: true,
    children: "Muted text for secondary information"
  }
}`,...($=(W=c.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var k,I,F;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    secondary: true,
    children: "Secondary text for supporting content"
  }
}`,...(F=(I=m.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var G,J,K;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    as: "span",
    children: "Rendered as a <span>"
  }
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    as: "label",
    weight: "semibold",
    children: "Rendered as a <label>"
  }
}`,...(X=(U=u.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  }}>
      <Text size="xs">Extra Small (11px) — Caption text and metadata</Text>
      <Text size="sm">Small (12px) — Helper text and labels</Text>
      <Text size="md">Medium (14px) — Default body text</Text>
      <Text size="lg">Large (16px) — Emphasized body text</Text>
    </div>
}`,...(ee=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,ae,se;g.parameters={...g.parameters,docs:{...(re=g.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  }}>
      <Text weight="regular">Regular (400) — Standard body copy</Text>
      <Text weight="medium">Medium (500) — Slightly emphasized</Text>
      <Text weight="semibold">Semibold (600) — Labels and buttons</Text>
      <Text weight="bold">Bold (700) — Strong emphasis</Text>
    </div>
}`,...(se=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var te,ne,le;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  }}>
      <Text>Primary text — default color</Text>
      <Text secondary>Secondary text — supporting content</Text>
      <Text muted>Muted text — de-emphasized content</Text>
    </div>
}`,...(le=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};const ge=["Default","ExtraSmall","Small","Medium","Large","Bold","Semibold","Muted","Secondary","AsSpan","AsLabel","AllSizes","AllWeights","ColorVariants"];export{x as AllSizes,g as AllWeights,u as AsLabel,p as AsSpan,d as Bold,h as ColorVariants,s as Default,t as ExtraSmall,o as Large,l as Medium,c as Muted,m as Secondary,i as Semibold,n as Small,ge as __namedExportsOrder,xe as default};
