import{_ as X}from"./iframe-D3F8pvxZ.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-ZH-6pyQh.js";import{T as S}from"./Tag-CUKYnKX1.js";import{P as J}from"./ProgressBar-ZKcrqfuQ.js";import{P as z}from"./Pagination-Drktjtc1.js";import{I as H}from"./Input-C_zh8RQu.js";import{T as U,a as Y}from"./ToolsTrackerFooter-BlqtX9eC.js";import{T as G}from"./ToolsTrackerTopBar-CICGxCko.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Pictogram-DOvxZ6cl.js";import"./TopBar-Dos0-P9g.js";const K={activated:"Activated",redeemed:"Redeemed","not-redeemed":"Not Redeemed",outdated:"Outdated",refunded:"Refunded"},Q={activated:"mint",redeemed:"purple","not-redeemed":"grey",outdated:"orange",refunded:"pink"},Z=[{id:"all",label:"All"},{id:"activated",label:"Active"},{id:"not-redeemed",label:"Not Redeemed"},{id:"outdated",label:"Outdated"},{id:"refunded",label:"Refunded"}],ee={lastSynced:"3d ago",invoices:"73",products:"334"},ae={totalPurchases:12480,totalSavings:3200,totalRefunds:860,netSpent:8420},te=[{id:"1",date:"Mar 01, 2025",status:"activated",thumbnail:"https://placehold.co/56x56/e8f5e9/388e3c?text=TL",name:"TaskLinker Pro",subtitle:"Project management & automation",price:79,progressValue:80,isExpired:!1},{id:"2",date:"Feb 15, 2025",status:"redeemed",thumbnail:"https://placehold.co/56x56/ede7f6/6d28d9?text=SB",name:"SendBox Email",subtitle:"Cold outreach & drip campaigns",price:49,progressValue:60,isExpired:!1},{id:"3",date:"Jan 10, 2025",status:"not-redeemed",thumbnail:"https://placehold.co/56x56/f3f4f6/6b7280?text=VX",name:"VideoXpert",subtitle:"AI video editing suite",price:129,progressValue:0,isExpired:!1},{id:"4",date:"Dec 20, 2024",status:"outdated",thumbnail:"https://placehold.co/56x56/fff3e0/e65100?text=CF",name:"ContentForge",subtitle:"Blog & content automation",price:59,progressValue:40,isExpired:!0},{id:"5",date:"Nov 05, 2024",status:"refunded",thumbnail:"https://placehold.co/56x56/fce4ec/c2185b?text=PX",name:"PixelCraft",subtitle:"Design & asset generator",price:99,progressValue:0,isExpired:!1},{id:"6",date:"Oct 18, 2024",status:"activated",thumbnail:"https://placehold.co/56x56/e3f2fd/1565c0?text=AS",name:"AutoScribe",subtitle:"Transcription & note-taking",price:69,progressValue:90,isExpired:!1}],re=({status:a})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--drp-space-4)",padding:"var(--drp-space-2) var(--drp-space-6)",background:"var(--drp-bg-secondary, #f9fafb)",borderBottom:"var(--drp-border-thin)",fontSize:"var(--drp-text-xs)",color:"var(--drp-text-muted)",flexShrink:0},children:[e.jsxs("span",{children:["Last synced:"," ",e.jsx("strong",{style:{color:"#f59e0b"},children:a.lastSynced})]}),e.jsx("span",{style:{color:"var(--drp-border)"},children:"|"}),e.jsxs("span",{children:["Invoices: ",e.jsx("strong",{style:{color:"#7c3aed"},children:a.invoices})]}),e.jsx("span",{style:{color:"var(--drp-border)"},children:"|"}),e.jsxs("span",{children:["Products: ",e.jsx("strong",{style:{color:"#16a34a"},children:a.products})]})]}),se=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ne=[3,7,5,9,4,11,8,6,10,5,7,9],de=[2,4,3,6,3,8,6,5,7,4,5,7],le=()=>{const a=n.useRef(null);return n.useEffect(()=>{let r;return(async()=>{var d;try{const{Chart:l,registerables:g}=await X(async()=>{const{Chart:h,registerables:f}=await import("./chart-CocV-0mg.js").then(v=>v.h);return{Chart:h,registerables:f}},[],import.meta.url);l.register(...g);const i=(d=a.current)==null?void 0:d.getContext("2d");if(!i)return;r=new l(i,{type:"bar",data:{labels:se,datasets:[{type:"bar",label:"Purchases",data:ne,backgroundColor:"#7c3aed",borderRadius:4,yAxisID:"y"},{type:"line",label:"Savings",data:de,borderColor:"#f59e0b",backgroundColor:"transparent",pointBackgroundColor:"#f59e0b",pointRadius:4,tension:.3,yAxisID:"y1"}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{y:{position:"left",grid:{color:"rgba(0,0,0,0.05)"},ticks:{font:{size:11}}},y1:{position:"right",grid:{drawOnChartArea:!1},ticks:{font:{size:11}}},x:{grid:{display:!1},ticks:{font:{size:11}}}}}})}catch{}})(),()=>{r&&typeof r.destroy=="function"&&r.destroy()}},[]),e.jsxs("div",{className:"drp-card",style:{padding:"var(--drp-space-5)",flex:1,minWidth:0},children:[e.jsxs("div",{className:"drp-flex drp-items-center",style:{marginBottom:"var(--drp-space-4)",justifyContent:"space-between"},children:[e.jsx("h3",{className:"drp-text drp-text--sm drp-text--bold",children:"Purchase Overview"}),e.jsxs("div",{className:"drp-flex drp-items-center drp-gap-4",children:[e.jsxs("span",{className:"drp-flex drp-items-center drp-gap-1",children:[e.jsx("span",{style:{width:10,height:10,borderRadius:2,background:"var(--drp-purple, #7c3aed)",display:"inline-block"}}),e.jsx("span",{className:"drp-text drp-text--xs drp-text--muted",children:"Purchases"})]}),e.jsxs("span",{className:"drp-flex drp-items-center drp-gap-1",children:[e.jsx("span",{style:{width:10,height:10,borderRadius:"50%",background:"var(--drp-warning, #f59e0b)",display:"inline-block"}}),e.jsx("span",{className:"drp-text drp-text--xs drp-text--muted",children:"Savings"})]})]})]}),e.jsx("div",{style:{height:200},children:e.jsx("canvas",{ref:a})})]})},ie=({data:a})=>{const r=[{label:"Total Purchases",value:`$${a.totalPurchases.toLocaleString()}`,color:"var(--drp-text)"},{label:"Total Savings",value:`$${a.totalSavings.toLocaleString()}`,color:"var(--drp-success, #16a34a)"},{label:"Total Refunds",value:`$${a.totalRefunds.toLocaleString()}`,color:"var(--drp-purple, #7c3aed)"},{label:"Net Spent",value:`$${a.netSpent.toLocaleString()}`,color:"var(--drp-warning, #f59e0b)"}];return e.jsxs("div",{className:"drp-card",style:{padding:"var(--drp-space-5)",minWidth:220,display:"flex",flexDirection:"column",gap:"var(--drp-space-4)"},children:[e.jsx("h3",{className:"drp-text drp-text--sm drp-text--bold",children:"Financial Overview"}),r.map(s=>e.jsxs("div",{children:[e.jsx("p",{className:"drp-text drp-text--xs drp-text--muted",style:{marginBottom:2},children:s.label}),e.jsx("p",{className:"drp-text drp-text--lg drp-text--bold",style:{color:s.color},children:s.value})]},s.label))]})},oe=({product:a})=>e.jsxs("div",{className:"drp-card",style:{padding:"var(--drp-space-4)",display:"flex",gap:"var(--drp-space-3)",alignItems:"flex-start"},children:[e.jsx("img",{src:a.thumbnail,alt:a.name,width:56,height:56,style:{borderRadius:"var(--drp-radius)",flexShrink:0,objectFit:"cover"}}),e.jsxs("div",{style:{flex:1,minWidth:0},children:[e.jsxs("div",{className:"drp-flex drp-items-center drp-gap-2",style:{marginBottom:"var(--drp-space-1)",flexWrap:"wrap"},children:[e.jsx("span",{className:"drp-text drp-text--xs drp-text--muted",children:a.date}),e.jsx(S,{color:Q[a.status],children:K[a.status]}),a.isExpired&&e.jsx(S,{color:"grey",children:"Expired"})]}),e.jsx("p",{className:"drp-text drp-text--sm drp-text--bold",style:{marginBottom:2},children:a.name}),e.jsx("p",{className:"drp-text drp-text--xs drp-text--muted",style:{marginBottom:"var(--drp-space-2)"},children:a.subtitle}),e.jsx(J,{value:a.progressValue,color:a.status==="activated"?"mint":a.status==="refunded"?"pink":"grey"})]}),e.jsxs("div",{style:{flexShrink:0,display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"var(--drp-space-2)"},children:[e.jsxs("span",{className:"drp-text drp-text--sm drp-text--bold",children:["$",a.price]}),e.jsxs("div",{className:"drp-flex drp-gap-1",children:[e.jsx("button",{className:"drp-btn drp-btn--outline drp-btn--sm",children:"View"}),e.jsx("button",{className:"drp-btn drp-btn--ghost drp-btn--sm",children:"···"})]})]})]}),I=({syncStatus:a=ee,financialOverview:r=ae,products:s=te,currentPage:d=1,totalPages:l=4,activeNav:g="dashboard",onNavClick:i,onSync:h,onClearCache:f,onPageChange:v})=>{const[b,O]=n.useState("all"),[o,q]=n.useState(""),[y,$]=n.useState("light"),j=s.filter(t=>{const M=b==="all"||t.status===b,W=!o||t.name.toLowerCase().includes(o.toLowerCase())||t.subtitle.toLowerCase().includes(o.toLowerCase());return M&&W});return e.jsxs("div",{className:"app-layout","data-theme":y,children:[e.jsx(U,{activeId:g,onNavClick:i,onClearCache:f}),e.jsxs("div",{className:"main-content",style:{display:"flex",flexDirection:"column"},children:[e.jsx(G,{onSyncClick:h,theme:y,onThemeToggle:()=>$(t=>t==="light"?"dark":"light")}),e.jsx(re,{status:a}),e.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"var(--drp-space-6)",display:"flex",flexDirection:"column",gap:"var(--drp-space-6)"},children:[e.jsxs("div",{className:"drp-flex drp-gap-5",style:{alignItems:"stretch"},children:[e.jsx(le,{}),e.jsx(ie,{data:r})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"drp-flex drp-gap-3",style:{marginBottom:"var(--drp-space-4)",alignItems:"center",flexWrap:"wrap"},children:[e.jsx("div",{style:{flex:1,minWidth:200},children:e.jsx(H,{placeholder:"Search products…",value:o,onChange:t=>q(t.target.value)})}),e.jsx("div",{className:"drp-flex drp-gap-1",children:Z.map(t=>e.jsx("button",{className:`drp-btn drp-btn--sm ${b===t.id?"drp-btn--primary":"drp-btn--ghost"}`,onClick:()=>O(t.id),children:t.label},t.id))})]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--drp-space-3)"},children:j.length===0?e.jsx("p",{className:"drp-text drp-text--sm drp-text--muted",style:{textAlign:"center",padding:"var(--drp-space-8)"},children:"No products found."}):j.map(t=>e.jsx(oe,{product:t},t.id))}),e.jsx("div",{style:{marginTop:"var(--drp-space-5)",display:"flex",justifyContent:"center"},children:e.jsx(z,{currentPage:d,totalPages:l,onPageChange:v??(()=>{})})})]})]}),e.jsx(Y,{})]})]})};I.__docgenInfo={description:"",methods:[],displayName:"ToolsTrackerDashboard",props:{syncStatus:{required:!1,tsType:{name:"TTSyncStatus"},description:"",defaultValue:{value:`{
  lastSynced: "3d ago",
  invoices: "73",
  products: "334",
}`,computed:!1}},financialOverview:{required:!1,tsType:{name:"TTFinancialOverview"},description:"",defaultValue:{value:`{
  totalPurchases: 12480,
  totalSavings: 3200,
  totalRefunds: 860,
  netSpent: 8420,
}`,computed:!1}},products:{required:!1,tsType:{name:"Array",elements:[{name:"TTProduct"}],raw:"TTProduct[]"},description:"",defaultValue:{value:`[
  {
    id: "1",
    date: "Mar 01, 2025",
    status: "activated",
    thumbnail: "https://placehold.co/56x56/e8f5e9/388e3c?text=TL",
    name: "TaskLinker Pro",
    subtitle: "Project management & automation",
    price: 79,
    progressValue: 80,
    isExpired: false,
  },
  {
    id: "2",
    date: "Feb 15, 2025",
    status: "redeemed",
    thumbnail: "https://placehold.co/56x56/ede7f6/6d28d9?text=SB",
    name: "SendBox Email",
    subtitle: "Cold outreach & drip campaigns",
    price: 49,
    progressValue: 60,
    isExpired: false,
  },
  {
    id: "3",
    date: "Jan 10, 2025",
    status: "not-redeemed",
    thumbnail: "https://placehold.co/56x56/f3f4f6/6b7280?text=VX",
    name: "VideoXpert",
    subtitle: "AI video editing suite",
    price: 129,
    progressValue: 0,
    isExpired: false,
  },
  {
    id: "4",
    date: "Dec 20, 2024",
    status: "outdated",
    thumbnail: "https://placehold.co/56x56/fff3e0/e65100?text=CF",
    name: "ContentForge",
    subtitle: "Blog & content automation",
    price: 59,
    progressValue: 40,
    isExpired: true,
  },
  {
    id: "5",
    date: "Nov 05, 2024",
    status: "refunded",
    thumbnail: "https://placehold.co/56x56/fce4ec/c2185b?text=PX",
    name: "PixelCraft",
    subtitle: "Design & asset generator",
    price: 99,
    progressValue: 0,
    isExpired: false,
  },
  {
    id: "6",
    date: "Oct 18, 2024",
    status: "activated",
    thumbnail: "https://placehold.co/56x56/e3f2fd/1565c0?text=AS",
    name: "AutoScribe",
    subtitle: "Transcription & note-taking",
    price: 69,
    progressValue: 90,
    isExpired: false,
  },
]`,computed:!1}},currentPage:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},totalPages:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}},activeNav:{required:!1,tsType:{name:"union",raw:`| "dashboard"
| "analytics"
| "reports"
| "transactions"
| "products"
| "appsumo-catalog"
| "admin-panel"
| "import"
| "logs"
| "sync-jobs"
| "settings"`,elements:[{name:"literal",value:'"dashboard"'},{name:"literal",value:'"analytics"'},{name:"literal",value:'"reports"'},{name:"literal",value:'"transactions"'},{name:"literal",value:'"products"'},{name:"literal",value:'"appsumo-catalog"'},{name:"literal",value:'"admin-panel"'},{name:"literal",value:'"import"'},{name:"literal",value:'"logs"'},{name:"literal",value:'"sync-jobs"'},{name:"literal",value:'"settings"'}]},description:"",defaultValue:{value:'"dashboard"',computed:!1}},onNavClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: TTNavId) => void",signature:{arguments:[{type:{name:"union",raw:`| "dashboard"
| "analytics"
| "reports"
| "transactions"
| "products"
| "appsumo-catalog"
| "admin-panel"
| "import"
| "logs"
| "sync-jobs"
| "settings"`,elements:[{name:"literal",value:'"dashboard"'},{name:"literal",value:'"analytics"'},{name:"literal",value:'"reports"'},{name:"literal",value:'"transactions"'},{name:"literal",value:'"products"'},{name:"literal",value:'"appsumo-catalog"'},{name:"literal",value:'"admin-panel"'},{name:"literal",value:'"import"'},{name:"literal",value:'"logs"'},{name:"literal",value:'"sync-jobs"'},{name:"literal",value:'"settings"'}]},name:"id"}],return:{name:"void"}}},description:""},onSync:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onRunSync:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClearCache:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""}}};const Se={component:I,title:"Screens/Tools Tracker/Dashboard",parameters:{layout:"fullscreen"}},c={},p={args:{syncStatus:{lastSynced:"7d ago",invoices:"73",products:"334"}}},u={name:"Filtered — Refunded",args:{}},m={name:"Empty State (no matching products)",args:{products:[]}},x={name:"Pagination — Page 2",args:{currentPage:2,totalPages:4}};var T,N,P;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:"{}",...(P=(N=c.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var C,w,k;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    syncStatus: {
      lastSynced: "7d ago",
      invoices: "73",
      products: "334"
    }
  }
}`,...(k=(w=p.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var A,E,R;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Filtered — Refunded",
  args: {}
}`,...(R=(E=u.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var V,L,B;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "Empty State (no matching products)",
  args: {
    products: []
  }
}`,...(B=(L=m.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var D,F,_;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Pagination — Page 2",
  args: {
    currentPage: 2,
    totalPages: 4
  }
}`,...(_=(F=x.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};const Te=["Default","OutdatedData","FilteredByRefunded","EmptySearch","PageTwo"];export{c as Default,m as EmptySearch,u as FilteredByRefunded,p as OutdatedData,x as PageTwo,Te as __namedExportsOrder,Se as default};
