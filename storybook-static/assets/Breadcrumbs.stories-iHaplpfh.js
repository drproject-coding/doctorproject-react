import{j as e}from"./jsx-runtime-D_zvdyIk.js";function b({items:l,className:i=""}){const t=l.length-1;return e.jsx("nav",{className:`drp-breadcrumbs ${i}`,"aria-label":"Breadcrumb",children:l.map((r,a)=>e.jsxs("span",{children:[a>0&&e.jsx("span",{className:"drp-breadcrumbs__sep","aria-hidden":"true",children:"/"}),r.href&&a<t?e.jsx("a",{className:"drp-breadcrumbs__link",href:r.href,children:r.label}):e.jsx("span",{className:"drp-breadcrumbs__current","aria-current":a===t?"page":void 0,children:r.label})]},a))})}b.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const f={title:"Layout/Breadcrumbs",component:b,tags:["autodocs"]},s={args:{items:[{label:"Home",href:"#"},{label:"Users",href:"#"},{label:"John Doe"}]}},n={args:{items:[{label:"Dashboard",href:"#"},{label:"Analytics",href:"#"},{label:"Reports",href:"#"},{label:"Monthly Revenue"}]}};var o,c,d;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Home",
      href: "#"
    }, {
      label: "Users",
      href: "#"
    }, {
      label: "John Doe"
    }]
  }
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,u,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Dashboard",
      href: "#"
    }, {
      label: "Analytics",
      href: "#"
    }, {
      label: "Reports",
      href: "#"
    }, {
      label: "Monthly Revenue"
    }]
  }
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const g=["Default","Long"];export{s as Default,n as Long,g as __namedExportsOrder,f as default};
