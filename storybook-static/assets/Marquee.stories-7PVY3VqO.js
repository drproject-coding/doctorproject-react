import{j as t}from"./jsx-runtime-D_zvdyIk.js";function l({items:n,separator:T="+++",speed:N=20,className:E=""}){const o=n.flatMap((e,r)=>r<n.length-1?[e,T]:[e]),f=[...o,...o];return t.jsx("div",{className:`drp-marquee ${E}`,children:t.jsx("div",{className:"drp-marquee__track",style:{animationDuration:`${N}s`},children:f.map((e,r)=>t.jsx("span",{className:"drp-marquee__item",children:e},r))})})}l.__docgenInfo={description:"",methods:[],displayName:"Marquee",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},separator:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"+++"',computed:!1}},speed:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"20",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const I={title:"Composites/Marquee",component:l,tags:["autodocs"],parameters:{layout:"fullscreen"}},a={args:{items:["SYNDICATION","ENRICHMENT","AUTOMATION","DIGITAL ASSET MANAGEMENT"],separator:"+++"}},s={args:{items:["BRUTALIST","DESIGN","SYSTEM","DOCTOR PROJECT"],separator:"///",speed:10}};var p,d,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    items: ["SYNDICATION", "ENRICHMENT", "AUTOMATION", "DIGITAL ASSET MANAGEMENT"],
    separator: "+++"
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,c,i;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    items: ["BRUTALIST", "DESIGN", "SYSTEM", "DOCTOR PROJECT"],
    separator: "///",
    speed: 10
  }
}`,...(i=(c=s.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const S=["Default","Fast"];export{a as Default,s as Fast,S as __namedExportsOrder,I as default};
