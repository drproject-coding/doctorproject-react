import{j as y}from"./jsx-runtime-D_zvdyIk.js";import{D}from"./Dropzone-CSfsQhPi.js";import"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";const B={title:"Components/Dropzone",component:D,tags:["autodocs"]},e={},o={args:{accept:"image/*",hint:"PNG, JPG, GIF up to 5MB",icon:"🖼"}},r={args:{accept:".pdf,.doc,.docx",hint:"PDF or Word document, max 20MB",icon:"📄"}},a={render:()=>y.jsx(D,{onFiles:t=>alert(`${t.length} file(s) selected: ${t.map(x=>x.name).join(", ")}`),hint:"Any file type accepted"})};var s,n,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,m,i;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    accept: "image/*",
    hint: "PNG, JPG, GIF up to 5MB",
    icon: "🖼"
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    accept: ".pdf,.doc,.docx",
    hint: "PDF or Word document, max 20MB",
    icon: "📄"
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var f,g,h;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:'{\n  render: () => <Dropzone onFiles={files => alert(`${files.length} file(s) selected: ${files.map(f => f.name).join(", ")}`)} hint="Any file type accepted" />\n}',...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const I=["Default","ImageOnly","DocumentUpload","WithCallback"];export{e as Default,r as DocumentUpload,o as ImageOnly,a as WithCallback,I as __namedExportsOrder,B as default};
