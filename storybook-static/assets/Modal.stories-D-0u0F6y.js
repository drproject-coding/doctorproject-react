import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-ZH-6pyQh.js";import{M as s}from"./Modal-gznsiZLH.js";import"./_commonjsHelpers-CqkleIqs.js";const x={title:"Components/Modal",component:s,tags:["autodocs"]},t={render:()=>{const[r,e]=m.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx("button",{className:"drp-btn drp-btn--primary",onClick:()=>e(!0),children:"Open Modal"}),n.jsx(s,{open:r,onClose:()=>e(!1),title:"Confirm Action",footer:n.jsxs(n.Fragment,{children:[n.jsx("button",{className:"drp-btn drp-btn--outline",onClick:()=>e(!1),children:"Cancel"}),n.jsx("button",{className:"drp-btn drp-btn--primary",onClick:()=>e(!1),children:"Confirm"})]}),children:n.jsx("p",{children:"Are you sure you want to proceed with this action? This cannot be undone."})})]})}},o={render:()=>{const[r,e]=m.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx("button",{className:"drp-btn drp-btn--outline",onClick:()=>e(!0),children:"Open Long Modal"}),n.jsx(s,{open:r,onClose:()=>e(!1),title:"Terms of Service",children:Array.from({length:10},(b,u)=>n.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."},u))})]})}};var a,i,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <button className="drp-btn drp-btn--primary" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <Modal open={open} onClose={() => setOpen(false)} title="Confirm Action" footer={<>
              <button className="drp-btn drp-btn--outline" onClick={() => setOpen(false)}>
                Cancel
              </button>
              <button className="drp-btn drp-btn--primary" onClick={() => setOpen(false)}>
                Confirm
              </button>
            </>}>
          <p>
            Are you sure you want to proceed with this action? This cannot be
            undone.
          </p>
        </Modal>
      </>;
  }
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var p,d,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <button className="drp-btn drp-btn--outline" onClick={() => setOpen(true)}>
          Open Long Modal
        </button>
        <Modal open={open} onClose={() => setOpen(false)} title="Terms of Service">
          {Array.from({
          length: 10
        }, (_, i) => <p key={i}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>)}
        </Modal>
      </>;
  }
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const O=["Default","LongContent"];export{t as Default,o as LongContent,O as __namedExportsOrder,x as default};
