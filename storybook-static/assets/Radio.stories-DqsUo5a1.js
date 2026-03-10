import{j as e}from"./jsx-runtime-D_zvdyIk.js";function r({label:F,color:p,dark:G,error:O,className:T="",..._}){const C=["drp-radio",p&&`drp-radio--${p}`,G&&"drp-radio--dark",O&&"drp-radio--error",T].filter(Boolean).join(" ");return e.jsxs("label",{className:C,children:[e.jsx("input",{type:"radio",..._}),F]})}r.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{label:{required:!0,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:'"pink" | "purple"',elements:[{name:"literal",value:'"pink"'},{name:"literal",value:'"purple"'}]},description:""},dark:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};const N={title:"Components/Radio",component:r,tags:["autodocs"]},n={args:{label:"Option A",name:"demo"}},o={args:{label:"Purple",name:"color",color:"purple"}},s={args:{label:"Dark",name:"dark",dark:!0}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(r,{name:"plan",label:"Free",defaultChecked:!0}),e.jsx(r,{name:"plan",label:"Pro"}),e.jsx(r,{name:"plan",label:"Enterprise"})]})},t={args:{label:"Invalid selection",name:"error",error:!0}},a={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(r,{name:"plan-err",label:"Free",error:!0}),e.jsx(r,{name:"plan-err",label:"Pro",error:!0}),e.jsx(r,{name:"plan-err",label:"Enterprise",error:!0}),e.jsx("span",{style:{fontSize:12,color:"var(--drp-error-dark)"},children:"Please select a plan"})]})};var i,d,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "Option A",
    name: "demo"
  }
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,u,x;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Purple",
    name: "color",
    color: "purple"
  }
}`,...(x=(u=o.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var f,b,g;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "Dark",
    name: "dark",
    dark: true
  }
}`,...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,k,j;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  }}>
      <Radio name="plan" label="Free" defaultChecked />
      <Radio name="plan" label="Pro" />
      <Radio name="plan" label="Enterprise" />
    </div>
}`,...(j=(k=l.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var v,E,h;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: "Invalid selection",
    name: "error",
    error: true
  }
}`,...(h=(E=t.parameters)==null?void 0:E.docs)==null?void 0:h.source}}};var D,P,R,S,q;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  }}>
      <Radio name="plan-err" label="Free" error />
      <Radio name="plan-err" label="Pro" error />
      <Radio name="plan-err" label="Enterprise" error />
      <span style={{
      fontSize: 12,
      color: "var(--drp-error-dark)"
    }}>
        Please select a plan
      </span>
    </div>
}`,...(R=(P=a.parameters)==null?void 0:P.docs)==null?void 0:R.source},description:{story:"Error state within a group",...(q=(S=a.parameters)==null?void 0:S.docs)==null?void 0:q.description}}};const w=["Default","Purple","Dark","Group","Error","GroupWithError"];export{s as Dark,n as Default,t as Error,l as Group,a as GroupWithError,o as Purple,w as __namedExportsOrder,N as default};
