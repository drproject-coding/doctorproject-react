import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as r}from"./ProgressBar-ZKcrqfuQ.js";const L={title:"Components/ProgressBar",component:r,tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100}},color:{control:"select",options:[void 0,"mint","pink","yellow","grey"]},size:{control:"select",options:[void 0,"sm","lg"]}}},a={args:{value:65}},s={args:{value:72,label:"Storage Used"}},o={args:{value:90,color:"mint",label:"Complete"}},l={args:{value:25,color:"pink",label:"Critical"}},n={args:{value:50,size:"sm"}},t={args:{value:80,size:"lg"}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[e.jsx(r,{value:85,label:"CPU Usage"}),e.jsx(r,{value:62,color:"mint",label:"Memory"}),e.jsx(r,{value:91,color:"pink",label:"Disk Space"}),e.jsx(r,{value:34,color:"yellow",label:"Network"})]})};var i,p,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    value: 65
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,g,d;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    value: 72,
    label: "Storage Used"
  }
}`,...(d=(g=s.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var v,x,b;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    value: 90,
    color: "mint",
    label: "Complete"
  }
}`,...(b=(x=o.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var S,y,k;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    value: 25,
    color: "pink",
    label: "Critical"
  }
}`,...(k=(y=l.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var P,f,M;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    value: 50,
    size: "sm"
  }
}`,...(M=(f=n.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var j,C,B;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    value: 80,
    size: "lg"
  }
}`,...(B=(C=t.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var D,U,h;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    maxWidth: "400px"
  }}>
      <ProgressBar value={85} label="CPU Usage" />
      <ProgressBar value={62} color="mint" label="Memory" />
      <ProgressBar value={91} color="pink" label="Disk Space" />
      <ProgressBar value={34} color="yellow" label="Network" />
    </div>
}`,...(h=(U=c.parameters)==null?void 0:U.docs)==null?void 0:h.source}}};const W=["Default","WithLabel","Mint","Pink","Small","Large","MultipleMetrics"];export{a as Default,t as Large,o as Mint,c as MultipleMetrics,l as Pink,n as Small,s as WithLabel,W as __namedExportsOrder,L as default};
