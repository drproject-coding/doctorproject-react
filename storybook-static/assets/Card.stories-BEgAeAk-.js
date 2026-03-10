import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as a,a as n}from"./Card-CZSjc6Mh.js";const A={title:"Components/Card",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:[void 0,"raised","flat","interactive","sm"]},accent:{control:"select",options:[void 0,"purple","mint","pink","yellow"]}}},t={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"Card Title",subtitle:"Card subtitle text"}),e.jsx("p",{children:"Card body content goes here."})]})}},s={args:{variant:"raised",children:e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"Raised Card"}),e.jsx("p",{children:"With a big offset shadow."})]})}},i={args:{variant:"interactive",children:e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"Click Me",subtitle:"I respond to hover"}),e.jsx("p",{children:"Interactive card."})]})}},c={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",maxWidth:"600px"},children:[e.jsxs(a,{accent:"purple",children:[e.jsx(n,{title:"Revenue",subtitle:"$48,290"}),e.jsx("p",{children:"+12.5% from last month"})]}),e.jsxs(a,{accent:"mint",children:[e.jsx(n,{title:"Users",subtitle:"2,847"}),e.jsx("p",{children:"+8.2% growth"})]}),e.jsxs(a,{accent:"pink",children:[e.jsx(n,{title:"Errors",subtitle:"23"}),e.jsx("p",{children:"-15% from yesterday"})]}),e.jsxs(a,{accent:"yellow",children:[e.jsx(n,{title:"Pending",subtitle:"384"}),e.jsx("p",{children:"Awaiting review"})]})]})},l={render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"16px"},children:[{label:"Total Revenue",value:"$48,290",change:"+12.5%",accent:"purple"},{label:"Active Users",value:"2,847",change:"+8.2%",accent:"mint"},{label:"New Orders",value:"384",change:"-3.1%",accent:"pink"},{label:"Conversion",value:"3.24%",change:"+0.8%",accent:"yellow"}].map(r=>e.jsxs(a,{variant:"sm",accent:r.accent,children:[e.jsx("p",{style:{margin:0,fontSize:"12px",textTransform:"uppercase",letterSpacing:"0.05em",color:"#666"},children:r.label}),e.jsx("p",{style:{margin:"4px 0",fontSize:"28px",fontWeight:700},children:r.value}),e.jsx("p",{style:{margin:0,fontSize:"12px",color:r.change.startsWith("+")?"#00AA00":"#FF4444"},children:r.change})]},r.label))})};var d,o,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: <>
        <CardHeader title="Card Title" subtitle="Card subtitle text" />
        <p>Card body content goes here.</p>
      </>
  }
}`,...(p=(o=t.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var m,g,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "raised",
    children: <>
        <CardHeader title="Raised Card" />
        <p>With a big offset shadow.</p>
      </>
  }
}`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,x,v;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: "interactive",
    children: <>
        <CardHeader title="Click Me" subtitle="I respond to hover" />
        <p>Interactive card.</p>
      </>
  }
}`,...(v=(x=i.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var C,b,f;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    maxWidth: "600px"
  }}>
      <Card accent="purple">
        <CardHeader title="Revenue" subtitle="$48,290" />
        <p>+12.5% from last month</p>
      </Card>
      <Card accent="mint">
        <CardHeader title="Users" subtitle="2,847" />
        <p>+8.2% growth</p>
      </Card>
      <Card accent="pink">
        <CardHeader title="Errors" subtitle="23" />
        <p>-15% from yesterday</p>
      </Card>
      <Card accent="yellow">
        <CardHeader title="Pending" subtitle="384" />
        <p>Awaiting review</p>
      </Card>
    </div>
}`,...(f=(b=c.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var j,y,w;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "16px"
  }}>
      {[{
      label: "Total Revenue",
      value: "$48,290",
      change: "+12.5%",
      accent: "purple" as const
    }, {
      label: "Active Users",
      value: "2,847",
      change: "+8.2%",
      accent: "mint" as const
    }, {
      label: "New Orders",
      value: "384",
      change: "-3.1%",
      accent: "pink" as const
    }, {
      label: "Conversion",
      value: "3.24%",
      change: "+0.8%",
      accent: "yellow" as const
    }].map(s => <Card key={s.label} variant="sm" accent={s.accent}>
          <p style={{
        margin: 0,
        fontSize: "12px",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        color: "#666"
      }}>
            {s.label}
          </p>
          <p style={{
        margin: "4px 0",
        fontSize: "28px",
        fontWeight: 700
      }}>
            {s.value}
          </p>
          <p style={{
        margin: 0,
        fontSize: "12px",
        color: s.change.startsWith("+") ? "#00AA00" : "#FF4444"
      }}>
            {s.change}
          </p>
        </Card>)}
    </div>
}`,...(w=(y=l.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const W=["Default","Raised","Interactive","WithAccent","StatsCards"];export{t as Default,i as Interactive,s as Raised,l as StatsCards,c as WithAccent,W as __namedExportsOrder,A as default};
