import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{T as i}from"./Table-ZtjTtHVH.js";import{u as c}from"./fake-Ca0xkTur.js";const y={title:"Components/Table",component:i,tags:["autodocs"]},a={args:{columns:[{key:"name",header:"Name"},{key:"email",header:"Email"},{key:"role",header:"Role"},{key:"status",header:"Status"},{key:"joinDate",header:"Joined"}],data:c.slice(0,8)}},n={render:()=>r.jsx(i,{columns:[{key:"name",header:"Name",render:e=>r.jsx("strong",{children:String(e.name)})},{key:"email",header:"Email"},{key:"role",header:"Role",render:e=>r.jsx("span",{className:"drp-tag drp-tag--purple",style:{fontSize:"11px"},children:String(e.role)})},{key:"status",header:"Status",render:e=>{const p=e.status==="Active"?"mint":e.status==="Pending"?"yellow":"pink";return r.jsx("span",{className:`drp-tag drp-tag--${p} drp-tag--dot`,children:String(e.status)})}}],data:c.slice(0,6)})};var t,s,o;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    columns: [{
      key: "name",
      header: "Name"
    }, {
      key: "email",
      header: "Email"
    }, {
      key: "role",
      header: "Role"
    }, {
      key: "status",
      header: "Status"
    }, {
      key: "joinDate",
      header: "Joined"
    }],
    data: users.slice(0, 8)
  }
}`,...(o=(s=a.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var d,l,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Table columns={[{
    key: "name",
    header: "Name",
    render: row => <strong>{String(row.name)}</strong>
  }, {
    key: "email",
    header: "Email"
  }, {
    key: "role",
    header: "Role",
    render: row => <span className="drp-tag drp-tag--purple" style={{
      fontSize: "11px"
    }}>
              {String(row.role)}
            </span>
  }, {
    key: "status",
    header: "Status",
    render: row => {
      const color = row.status === "Active" ? "mint" : row.status === "Pending" ? "yellow" : "pink";
      return <span className={\`drp-tag drp-tag--\${color} drp-tag--dot\`}>
                {String(row.status)}
              </span>;
    }
  }]} data={users.slice(0, 6)} />
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const k=["Default","WithCustomRender"];export{a as Default,n as WithCustomRender,k as __namedExportsOrder,y as default};
