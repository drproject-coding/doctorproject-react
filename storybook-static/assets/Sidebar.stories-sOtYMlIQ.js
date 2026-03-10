import{j as S}from"./jsx-runtime-D_zvdyIk.js";import{S as P}from"./Sidebar-Da2Fwhhn.js";import{P as D}from"./Pictogram-DOvxZ6cl.js";const h={component:P,title:"Navigation/Sidebar",parameters:{layout:"fullscreen"}},e=g=>S.jsx(D,{name:g,size:28,"aria-hidden":!0}),r=[{label:"Main",items:[{id:"dashboard",label:"Dashboard",icon:e("Layout"),active:!0},{id:"products",label:"Products",icon:e("Basket")},{id:"customers",label:"Customers",icon:e("Apps")},{id:"contacts",label:"Contacts",icon:e("Message")},{id:"accounts",label:"Accounts",icon:e("Credit card")},{id:"transactions",label:"Transactions",icon:e("Up arrow")},{id:"sales",label:"Sales",icon:e("Analytics")},{id:"payments",label:"Payments",icon:e("Folder"),badge:14,badgeVariant:"green"}]},{label:"Tools",items:[{id:"calendar",label:"Calendar",icon:e("Time")},{id:"inbox",label:"Inbox",icon:e("Mail"),badge:12,badgeVariant:"purple"},{id:"education",label:"Education",icon:e("Bookmark")},{id:"reports",label:"Reports",icon:e("Pie Chart")},{id:"support",label:"Support",icon:e("Info")}]},{label:"Account",items:[{id:"settings",label:"Settings",icon:e("Filters")}]}],u=[{name:"Alice Johnson",initials:"AJ"},{name:"Bob Smith",initials:"BS"},{name:"Carol Davis",initials:"CD"}],a={args:{brandName:"Doctor Project",sections:r,teamMembers:u}},s={args:{brandName:"Doctor Project",sections:r,collapsed:!0}},o={args:{brandName:"Doctor Project",sections:r,teamMembers:u}};var t,n,i;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    brandName: "Doctor Project",
    sections: sampleSections,
    teamMembers: sampleTeam
  }
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,l,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    brandName: "Doctor Project",
    sections: sampleSections,
    collapsed: true
  }
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,p,b;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    brandName: "Doctor Project",
    sections: sampleSections,
    teamMembers: sampleTeam
  }
}`,...(b=(p=o.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};const x=["Default","Collapsed","WithBadges"];export{s as Collapsed,a as Default,o as WithBadges,x as __namedExportsOrder,h as default};
