import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as d}from"./ChartCard-DcswqgEn.js";import{c as i}from"./fake-Ca0xkTur.js";const m={title:"Layout/ChartCard",component:d,tags:["autodocs"]},a={args:{title:"Revenue Overview",subtitle:"Monthly revenue for 2026",children:e.jsx("div",{style:{width:"100%",height:"200px",display:"flex",alignItems:"flex-end",gap:"4px",padding:"16px"},children:i.revenue.map((n,r)=>e.jsx("div",{style:{flex:1,background:"var(--drp-purple)",height:`${n/6e4*100}%`,minHeight:"4px",border:"1px solid var(--drp-black)"},title:`${i.labels[r]}: $${n.toLocaleString()}`},r))}),legend:e.jsx("div",{style:{display:"flex",gap:"16px",fontSize:"12px",fontFamily:"var(--drp-font-primary)"},children:e.jsxs("span",{children:[e.jsx("span",{style:{display:"inline-block",width:8,height:8,background:"var(--drp-purple)",marginRight:4}}),"Revenue"]})})}},t={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[e.jsx(d,{title:"Users",subtitle:"Monthly active users",children:e.jsx("div",{style:{width:"100%",height:"180px",display:"flex",alignItems:"flex-end",gap:"4px",padding:"16px"},children:i.users.map((n,r)=>e.jsx("div",{style:{flex:1,background:"var(--drp-mint)",height:`${n/3e3*100}%`,border:"1px solid var(--drp-black)"}},r))})}),e.jsx(d,{title:"Orders",subtitle:"Monthly orders",children:e.jsx("div",{style:{width:"100%",height:"180px",display:"flex",alignItems:"flex-end",gap:"4px",padding:"16px"},children:i.orders.map((n,r)=>e.jsx("div",{style:{flex:1,background:"var(--drp-orange)",height:`${n/500*100}%`,border:"1px solid var(--drp-black)"}},r))})})]})};var l,s,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: "Revenue Overview",
    subtitle: "Monthly revenue for 2026",
    children: <div style={{
      width: "100%",
      height: "200px",
      display: "flex",
      alignItems: "flex-end",
      gap: "4px",
      padding: "16px"
    }}>
        {chartData.revenue.map((val, i) => <div key={i} style={{
        flex: 1,
        background: "var(--drp-purple)",
        height: \`\${val / 60000 * 100}%\`,
        minHeight: "4px",
        border: "1px solid var(--drp-black)"
      }} title={\`\${chartData.labels[i]}: $\${val.toLocaleString()}\`} />)}
      </div>,
    legend: <div style={{
      display: "flex",
      gap: "16px",
      fontSize: "12px",
      fontFamily: "var(--drp-font-primary)"
    }}>
        <span>
          <span style={{
          display: "inline-block",
          width: 8,
          height: 8,
          background: "var(--drp-purple)",
          marginRight: 4
        }} />
          Revenue
        </span>
      </div>
  }
}`,...(p=(s=a.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var o,h,x;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px"
  }}>
      <ChartCard title="Users" subtitle="Monthly active users">
        <div style={{
        width: "100%",
        height: "180px",
        display: "flex",
        alignItems: "flex-end",
        gap: "4px",
        padding: "16px"
      }}>
          {chartData.users.map((val, i) => <div key={i} style={{
          flex: 1,
          background: "var(--drp-mint)",
          height: \`\${val / 3000 * 100}%\`,
          border: "1px solid var(--drp-black)"
        }} />)}
        </div>
      </ChartCard>
      <ChartCard title="Orders" subtitle="Monthly orders">
        <div style={{
        width: "100%",
        height: "180px",
        display: "flex",
        alignItems: "flex-end",
        gap: "4px",
        padding: "16px"
      }}>
          {chartData.orders.map((val, i) => <div key={i} style={{
          flex: 1,
          background: "var(--drp-orange)",
          height: \`\${val / 500 * 100}%\`,
          border: "1px solid var(--drp-black)"
        }} />)}
        </div>
      </ChartCard>
    </div>
}`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const u=["Default","TwoCharts"];export{a as Default,t as TwoCharts,u as __namedExportsOrder,m as default};
