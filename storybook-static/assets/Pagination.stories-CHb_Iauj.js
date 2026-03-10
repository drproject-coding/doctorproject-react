import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as g}from"./index-ZH-6pyQh.js";import{P as s}from"./Pagination-Drktjtc1.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Pictogram-DOvxZ6cl.js";const k={title:"Components/Pagination",component:s,tags:["autodocs"]},r={render:()=>{const[e,a]=g.useState(1);return o.jsx(s,{currentPage:e,totalPages:8,onPageChange:a})}},t={render:()=>{const[e,a]=g.useState(3);return o.jsx(s,{currentPage:e,totalPages:8,onPageChange:a,variant:"dark"})}},n={render:()=>{const[e,a]=g.useState(1);return o.jsx(s,{currentPage:e,totalPages:5,onPageChange:a,variant:"transparent"})}};var c,p,P;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    return <Pagination currentPage={page} totalPages={8} onPageChange={setPage} />;
  }
}`,...(P=(p=r.parameters)==null?void 0:p.docs)==null?void 0:P.source}}};var u,i,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(3);
    return <Pagination currentPage={page} totalPages={8} onPageChange={setPage} variant="dark" />;
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,l,S;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    return <Pagination currentPage={page} totalPages={5} onPageChange={setPage} variant="transparent" />;
  }
}`,...(S=(l=n.parameters)==null?void 0:l.docs)==null?void 0:S.source}}};const v=["Default","Dark","Transparent"];export{t as Dark,r as Default,n as Transparent,v as __namedExportsOrder,k as default};
