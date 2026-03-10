import{j as t}from"./jsx-runtime-D_zvdyIk.js";function e({title:b,price:y,period:s,features:x,featured:r,badge:i,action:h,className:U=""}){const v=["drp-pricing",r&&"drp-pricing--featured",U].filter(Boolean).join(" ");return t.jsxs("div",{className:v,style:{padding:"var(--drp-space-8)",border:"3px solid var(--drp-black)",background:r?"var(--drp-purple)":"var(--drp-surface)",color:r?"#FFFFFF":"inherit",textAlign:"center",position:"relative"},children:[i&&t.jsx("div",{style:{position:"absolute",top:"-12px",left:"50%",transform:"translateX(-50%)",padding:"2px 16px",background:"var(--drp-orange)",color:"#FFFFFF",fontFamily:"var(--drp-font-primary)",fontSize:"11px",fontWeight:700,textTransform:"uppercase",border:"2px solid var(--drp-black)"},children:i}),t.jsx("p",{style:{fontFamily:"var(--drp-font-primary)",fontSize:"12px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"16px"},children:b}),t.jsx("p",{style:{fontFamily:"var(--drp-font-primary)",fontSize:"2.5rem",fontWeight:800,marginBottom:"8px"},children:y}),s&&t.jsx("p",{style:{fontFamily:"var(--drp-font-mono)",fontSize:"11px",opacity:.7,marginBottom:"24px"},children:s}),t.jsx("ul",{style:{listStyle:"none",textAlign:"left",marginBottom:"24px",padding:0},children:x.map((F,P)=>t.jsxs("li",{style:{fontFamily:"var(--drp-font-mono)",fontSize:"13px",padding:"8px 0",borderBottom:"1px solid rgba(128,128,128,0.3)",display:"flex",alignItems:"center",gap:"8px"},children:[t.jsx("span",{style:{fontWeight:700,color:r?"#FFFFFF":"var(--drp-success)"},children:"✓"}),F]},P))}),h]})}e.__docgenInfo={description:"",methods:[],displayName:"PricingCard",props:{title:{required:!0,tsType:{name:"string"},description:""},price:{required:!0,tsType:{name:"string"},description:""},period:{required:!1,tsType:{name:"string"},description:""},features:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},featured:{required:!1,tsType:{name:"boolean"},description:""},badge:{required:!1,tsType:{name:"string"},description:""},action:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const C={title:"Composites/PricingCard",component:e,tags:["autodocs"]},n={args:{title:"Starter",price:"$499",period:"per month",features:["Up to 1,000 SKUs","5 User Seats","Basic DAM","Email Support"],action:t.jsx("button",{className:"drp-btn drp-btn--outline",style:{width:"100%"},children:"Get Started"})}},o={args:{title:"Professional",price:"$1,499",period:"per month",featured:!0,badge:"Most Popular",features:["Up to 25,000 SKUs","15 User Seats","Advanced DAM + PIM","Priority Support","All Connectors","AI Enrichment"],action:t.jsx("button",{className:"drp-btn",style:{width:"100%",background:"#fff",color:"var(--drp-purple)"},children:"Get Started"})}},a={render:()=>t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px"},children:[t.jsx(e,{title:"Starter",price:"$499",period:"per month",features:["Up to 1,000 SKUs","5 User Seats","Basic DAM","Email Support","Standard Connectors"],action:t.jsx("button",{className:"drp-btn drp-btn--outline",style:{width:"100%"},children:"Get Started"})}),t.jsx(e,{title:"Professional",price:"$1,499",period:"per month",featured:!0,badge:"Most Popular",features:["Up to 25,000 SKUs","15 User Seats","Advanced DAM + PIM","Priority Support","All Connectors","AI Enrichment"],action:t.jsx("button",{className:"drp-btn",style:{width:"100%",background:"#fff",color:"var(--drp-purple)"},children:"Get Started"})}),t.jsx(e,{title:"Enterprise",price:"Custom",period:"contact for pricing",features:["Unlimited SKUs","Unlimited Users","Full Platform","24/7 Support","Custom Integrations","On-premise Option"],action:t.jsx("button",{className:"drp-btn drp-btn--outline",style:{width:"100%"},children:"Contact Sales"})})]})};var p,d,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: "Starter",
    price: "$499",
    period: "per month",
    features: ["Up to 1,000 SKUs", "5 User Seats", "Basic DAM", "Email Support"],
    action: <button className="drp-btn drp-btn--outline" style={{
      width: "100%"
    }}>
        Get Started
      </button>
  }
}`,...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,u,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: "Professional",
    price: "$1,499",
    period: "per month",
    featured: true,
    badge: "Most Popular",
    features: ["Up to 25,000 SKUs", "15 User Seats", "Advanced DAM + PIM", "Priority Support", "All Connectors", "AI Enrichment"],
    action: <button className="drp-btn" style={{
      width: "100%",
      background: "#fff",
      color: "var(--drp-purple)"
    }}>
        Get Started
      </button>
  }
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var f,g,S;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px"
  }}>
      <PricingCard title="Starter" price="$499" period="per month" features={["Up to 1,000 SKUs", "5 User Seats", "Basic DAM", "Email Support", "Standard Connectors"]} action={<button className="drp-btn drp-btn--outline" style={{
      width: "100%"
    }}>
            Get Started
          </button>} />
      <PricingCard title="Professional" price="$1,499" period="per month" featured badge="Most Popular" features={["Up to 25,000 SKUs", "15 User Seats", "Advanced DAM + PIM", "Priority Support", "All Connectors", "AI Enrichment"]} action={<button className="drp-btn" style={{
      width: "100%",
      background: "#fff",
      color: "var(--drp-purple)"
    }}>
            Get Started
          </button>} />
      <PricingCard title="Enterprise" price="Custom" period="contact for pricing" features={["Unlimited SKUs", "Unlimited Users", "Full Platform", "24/7 Support", "Custom Integrations", "On-premise Option"]} action={<button className="drp-btn drp-btn--outline" style={{
      width: "100%"
    }}>
            Contact Sales
          </button>} />
    </div>
}`,...(S=(g=a.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};const j=["Default","Featured","PricingRow"];export{n as Default,o as Featured,a as PricingRow,j as __namedExportsOrder,C as default};
