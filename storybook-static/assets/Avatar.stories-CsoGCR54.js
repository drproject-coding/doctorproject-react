import{j as a}from"./jsx-runtime-D_zvdyIk.js";const T={sm:32,lg:64};function s({src:l,alt:z="",size:e,initials:A,"aria-label":q,className:I=""}){const o=["drp-avatar",e&&`drp-avatar--${e}`,I].filter(Boolean).join(" "),p=e?T[e]:48;return l?a.jsx("img",{className:o,src:l,alt:z,width:p,height:p}):a.jsx("div",{className:o,"aria-label":q,style:{display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--drp-font-primary)",fontWeight:700,fontSize:e==="sm"?"14px":e==="lg"?"32px":"20px",background:"var(--drp-purple-20)",color:"var(--drp-purple)"},children:A||"?"})}s.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"lg"'}]},description:""},initials:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:"Required when no visible label is present (initials-only avatar)"},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const _={title:"Components/Avatar",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:[void 0,"sm","lg"]}}},r={args:{initials:"JD"}},i={args:{initials:"AB",size:"sm"}},t={args:{initials:"XY",size:"lg"}},n={render:()=>a.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[a.jsx(s,{size:"sm",initials:"SM"}),a.jsx(s,{initials:"MD"}),a.jsx(s,{size:"lg",initials:"LG"})]})};var c,d,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    initials: "JD"
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,g,f;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    initials: "AB",
    size: "sm"
  }
}`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,x,y;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    initials: "XY",
    size: "lg"
  }
}`,...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var S,h,j;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "12px",
    alignItems: "center"
  }}>
      <Avatar size="sm" initials="SM" />
      <Avatar initials="MD" />
      <Avatar size="lg" initials="LG" />
    </div>
}`,...(j=(h=n.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};const D=["WithInitials","Small","Large","Sizes"];export{t as Large,n as Sizes,i as Small,r as WithInitials,D as __namedExportsOrder,_ as default};
