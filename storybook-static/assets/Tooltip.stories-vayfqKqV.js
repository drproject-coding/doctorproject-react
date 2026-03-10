import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u,R as p}from"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";function l({text:h,children:g,className:T=""}){const d=u.useId(),[a,c]=u.useState(!1);return e.jsxs("span",{className:`drp-tooltip ${T}`,style:{position:"relative",display:"inline-flex"},children:[p.Children.map(g,t=>p.isValidElement(t)?p.cloneElement(t,{"aria-describedby":a?d:void 0,onFocus:i=>{var s,o;c(!0),(o=(s=t.props).onFocus)==null||o.call(s,i)},onBlur:i=>{var s,o;c(!1),(o=(s=t.props).onBlur)==null||o.call(s,i)}}):t),e.jsx("span",{id:d,role:"tooltip",className:"drp-tooltip-text",style:{visibility:a?"visible":void 0,opacity:a?1:void 0},children:h})]})}l.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{text:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const S={title:"Components/Tooltip",component:l,tags:["autodocs"]},r={args:{text:"This is a tooltip",children:e.jsx("span",{style:{textDecoration:"underline",cursor:"help"},children:"Hover me"})}},n={render:()=>e.jsx("div",{style:{padding:"40px"},children:e.jsx(l,{text:"Click to save your changes",children:e.jsx("button",{className:"drp-btn drp-btn--primary",children:"Save"})})})};var m,x,y;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    text: "This is a tooltip",
    children: <span style={{
      textDecoration: "underline",
      cursor: "help"
    }}>
        Hover me
      </span>
  }
}`,...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var v,b,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: "40px"
  }}>
      <Tooltip text="Click to save your changes">
        <button className="drp-btn drp-btn--primary">Save</button>
      </Tooltip>
    </div>
}`,...(f=(b=n.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const B=["Default","OnButton"];export{r as Default,n as OnButton,B as __namedExportsOrder,S as default};
