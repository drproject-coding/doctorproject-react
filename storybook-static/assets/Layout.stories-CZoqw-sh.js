import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as N}from"./index-ZH-6pyQh.js";import{T as g}from"./TopBar-Dos0-P9g.js";import{S as f}from"./Sidebar-Da2Fwhhn.js";import{s as T,m as S}from"./fake-Ca0xkTur.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Pictogram-DOvxZ6cl.js";function i({sidebar:a,topbar:r,children:s,footer:n}){return e.jsxs("div",{className:"app-layout",children:[a,e.jsxs("div",{className:"main-content",children:[r,e.jsx("main",{children:s}),n&&e.jsx("footer",{className:"footer-bar",children:n})]})]})}function u({children:a,collapsed:r}){const s=["sidebar",r&&"collapsed"].filter(Boolean).join(" ");return e.jsx("aside",{className:s,children:a})}function j({children:a}){return e.jsx("header",{className:"topbar",children:a})}i.__docgenInfo={description:"",methods:[],displayName:"AppShell",props:{sidebar:{required:!0,tsType:{name:"ReactNode"},description:""},topbar:{required:!0,tsType:{name:"ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},footer:{required:!1,tsType:{name:"ReactNode"},description:""}}};u.__docgenInfo={description:"",methods:[],displayName:"Sidebar",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},collapsed:{required:!1,tsType:{name:"boolean"},description:""}}};j.__docgenInfo={description:"",methods:[],displayName:"Topbar",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const v=({children:a,sidebarProps:r,topBarProps:s,showSidebar:n=!0})=>{const[y,l]=N.useState(!1);return e.jsxs("div",{className:"app-layout",children:[n&&r&&e.jsx(f,{...r,mobileOpen:y,onToggle:()=>l(o=>!o)}),e.jsxs("div",{className:"main-content",children:[s&&e.jsx(g,{...s,menuButton:s.menuButton??!0,onMenuClick:()=>l(o=>!o)}),e.jsx("div",{className:"content",children:e.jsx("div",{className:"container",children:a})})]})]})};v.__docgenInfo={description:"",methods:[],displayName:"DashboardLayout",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},sidebarProps:{required:!1,tsType:{name:"SidebarProps"},description:""},topBarProps:{required:!1,tsType:{name:"TopBarProps"},description:""},showSidebar:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const A={title:"Layout/AppShell",component:i,tags:["autodocs"],parameters:{layout:"fullscreen"}},D=()=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"sidebar-brand",children:[e.jsx("span",{className:"sidebar-brand-name",children:"Doctor Project"}),e.jsx("span",{className:"sidebar-brand-dot"})]}),e.jsx("nav",{className:"sidebar-nav",children:e.jsxs("div",{className:"sidebar-nav-section",children:[e.jsx("div",{className:"sidebar-nav-label",children:"Navigation"}),S.map(a=>e.jsxs("a",{href:a.href,className:"sidebar-nav-item",children:[e.jsx("span",{className:"sidebar-nav-icon",dangerouslySetInnerHTML:{__html:a.iconSvg}}),e.jsx("span",{className:"sidebar-nav-text",children:a.label}),a.badge&&e.jsx("span",{className:"sidebar-badge sidebar-badge--purple",children:a.badge})]},a.label))]})})]}),B=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"topbar-left",children:e.jsx("h1",{className:"topbar-title",children:"Dashboard"})}),e.jsxs("div",{className:"topbar-right",children:[e.jsxs("button",{className:"topbar-icon-btn",children:[e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,children:e.jsx("path",{d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"})}),e.jsx("span",{className:"notification-dot"})]}),e.jsxs("button",{className:"topbar-create-btn",children:[e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,children:e.jsx("path",{d:"M12 4v16m8-8H4"})}),"Create New"]})]})]}),t={render:()=>e.jsx("div",{style:{height:"600px"},children:e.jsx(i,{sidebar:e.jsx(u,{children:e.jsx(D,{})}),topbar:e.jsx(j,{children:e.jsx(B,{})}),footer:e.jsx("span",{className:"footer-link",children:"© 2026 Doctor Project"}),children:e.jsxs("div",{style:{padding:"24px"},children:[e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"16px",marginBottom:"24px"},children:T.map(a=>e.jsxs("div",{className:"drp-card drp-card--sm",style:{padding:"16px"},children:[e.jsx("p",{className:"drp-label",children:a.label}),e.jsx("p",{className:"drp-display-md",style:{margin:"4px 0"},children:a.value}),e.jsx("p",{style:{margin:0,fontSize:"12px",fontWeight:600,color:a.trend==="up"?"var(--drp-success)":"var(--drp-error)"},children:a.change})]},a.label))}),e.jsxs("div",{className:"drp-card",style:{padding:"24px"},children:[e.jsx("h3",{className:"drp-h4",style:{marginBottom:"16px"},children:"Recent Activity"}),e.jsx("p",{className:"drp-text--secondary",children:"Dashboard content would go here — charts, tables, activity feeds..."})]})]})})})},d={render:()=>e.jsxs(v,{sidebarProps:{sections:[{label:"Navigation",items:[{id:"dashboard",label:"Dashboard",icon:e.jsx("span",{children:"◎"}),active:!0},{id:"products",label:"Products",icon:e.jsx("span",{children:"▣"})},{id:"customers",label:"Customers",icon:e.jsx("span",{children:"▥"})},{id:"payments",label:"Payments",icon:e.jsx("span",{children:"▦"}),badge:3}]}]},topBarProps:{title:"Dashboard"},children:[e.jsx("h2",{className:"drp-h3",children:"Welcome to Dashboard"}),e.jsx("p",{className:"drp-text--secondary",children:"This is the DashboardLayout component combining TopBar and Sidebar."})]})};var c,p,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "600px"
  }}>
      <AppShell sidebar={<Sidebar>
            <SidebarContent />
          </Sidebar>} topbar={<Topbar>
            <TopbarContent />
          </Topbar>} footer={<span className="footer-link">© 2026 Doctor Project</span>}>
        <div style={{
        padding: "24px"
      }}>
          <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "16px",
          marginBottom: "24px"
        }}>
            {stats.map(s => <div key={s.label} className="drp-card drp-card--sm" style={{
            padding: "16px"
          }}>
                <p className="drp-label">{s.label}</p>
                <p className="drp-display-md" style={{
              margin: "4px 0"
            }}>
                  {s.value}
                </p>
                <p style={{
              margin: 0,
              fontSize: "12px",
              fontWeight: 600,
              color: s.trend === "up" ? "var(--drp-success)" : "var(--drp-error)"
            }}>
                  {s.change}
                </p>
              </div>)}
          </div>
          <div className="drp-card" style={{
          padding: "24px"
        }}>
            <h3 className="drp-h4" style={{
            marginBottom: "16px"
          }}>
              Recent Activity
            </h3>
            <p className="drp-text--secondary">
              Dashboard content would go here — charts, tables, activity
              feeds...
            </p>
          </div>
        </div>
      </AppShell>
    </div>
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var h,b,x;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <DashboardLayout sidebarProps={{
    sections: [{
      label: "Navigation",
      items: [{
        id: "dashboard",
        label: "Dashboard",
        icon: <span>◎</span>,
        active: true
      }, {
        id: "products",
        label: "Products",
        icon: <span>▣</span>
      }, {
        id: "customers",
        label: "Customers",
        icon: <span>▥</span>
      }, {
        id: "payments",
        label: "Payments",
        icon: <span>▦</span>,
        badge: 3
      }]
    }]
  }} topBarProps={{
    title: "Dashboard"
  }}>
      <h2 className="drp-h3">Welcome to Dashboard</h2>
      <p className="drp-text--secondary">
        This is the DashboardLayout component combining TopBar and Sidebar.
      </p>
    </DashboardLayout>
}`,...(x=(b=d.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const w=["Default","Dashboard"];export{d as Dashboard,t as Default,w as __namedExportsOrder,A as default};
