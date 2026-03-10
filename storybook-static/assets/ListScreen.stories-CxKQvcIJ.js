import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-ZH-6pyQh.js";import{B as P}from"./Button-BzVJ9Li6.js";import{I as T}from"./Input-C_zh8RQu.js";import{T as S}from"./Table-ZtjTtHVH.js";import{P as A}from"./Pagination-Drktjtc1.js";import{A as R,a as q}from"./AppFooter-BSmP1R7y.js";import{T as I}from"./Tag-CUKYnKX1.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Pictogram-DOvxZ6cl.js";import"./Sidebar-Da2Fwhhn.js";import"./Footer-BagPqtfn.js";const f=({title:t,subtitle:s,activeId:b,data:h,columns:x,onAddClick:i,onRowClick:D,showSearch:k=!0,itemsPerPage:n=10})=>{const[o,N]=p.useState(""),[c,l]=p.useState(1),d=h.filter(a=>JSON.stringify(a).toLowerCase().includes(o.toLowerCase())),u=Math.ceil(d.length/n),m=(c-1)*n,j=d.slice(m,m+n);return e.jsxs("div",{className:"app-layout",children:[e.jsx(R,{activeId:b}),e.jsxs("div",{className:"main-content",children:[e.jsxs("header",{className:"topbar",children:[e.jsx("div",{className:"topbar-left",children:e.jsx("h1",{className:"topbar-title",children:t})}),i&&e.jsx("div",{className:"topbar-right",children:e.jsx(P,{onClick:i,className:"drp-btn drp-btn--primary",children:"+ Add New"})})]}),e.jsxs("div",{className:"content",style:{display:"flex",flexDirection:"column",gap:"var(--drp-space-6)"},children:[s&&e.jsx("p",{className:"drp-caption",children:s}),k&&e.jsx(T,{placeholder:"Search...",value:o,onChange:a=>{N(a.target.value),l(1)}}),e.jsx(S,{columns:x.map(a=>({key:a.key,header:a.label,render:a.render?w=>a.render(w[a.key]):void 0})),data:j}),u>1&&e.jsx(A,{currentPage:c,totalPages:u,onPageChange:l})]}),e.jsx(q,{})]})]})};f.__docgenInfo={description:"",methods:[],displayName:"ListScreen",props:{title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},activeId:{required:!1,tsType:{name:"string"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: string;
  render?: (value: any) => React.ReactNode;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"(value: any) => React.ReactNode",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!1}}]}}],raw:`Array<{
  key: string;
  label: string;
  render?: (value: any) => React.ReactNode;
}>`},description:""},onAddClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: any) => void",signature:{arguments:[{type:{name:"any"},name:"row"}],return:{name:"void"}}},description:""},showSearch:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},itemsPerPage:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}}}};const G={component:f,title:"Screens/Common/ListScreen"},C=[{id:"1",name:"Product A",status:"Active",price:"$99.99"},{id:"2",name:"Product B",status:"Active",price:"$149.99"},{id:"3",name:"Product C",status:"Inactive",price:"$79.99"},{id:"4",name:"Product D",status:"Active",price:"$199.99"},{id:"5",name:"Product E",status:"Inactive",price:"$49.99"}],r={parameters:{layout:"fullscreen"},args:{title:"Products",subtitle:"Manage your product inventory",activeId:"products",data:C,columns:[{key:"id",label:"ID"},{key:"name",label:"Product Name"},{key:"status",label:"Status",render:t=>e.jsx(I,{color:t==="Active"?"mint":"grey",children:t})},{key:"price",label:"Price"}]}};var y,g,v;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  args: {
    title: "Products",
    subtitle: "Manage your product inventory",
    activeId: "products",
    data: sampleData,
    columns: [{
      key: "id",
      label: "ID"
    }, {
      key: "name",
      label: "Product Name"
    }, {
      key: "status",
      label: "Status",
      render: (value: string) => <Tag color={value === "Active" ? "mint" : "grey"}>{value}</Tag>
    }, {
      key: "price",
      label: "Price"
    }]
  }
}`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const H=["Default"];export{r as Default,H as __namedExportsOrder,G as default};
