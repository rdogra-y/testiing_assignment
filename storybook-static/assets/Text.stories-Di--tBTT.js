import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{d as x}from"./styled-components.browser.esm-Dxl9SFvD.js";import"./index-DmM0KDA7.js";const u=x.p`
  font-size: 1rem; /* 14-16px equivalent */
  color: ${({$color:e,$disabled:t})=>t?"#999":e||"#333"};
  opacity: ${({$disabled:e})=>e?"0.6":"1"};
  user-select: ${({$disabled:e})=>e?"none":"auto"};

  /* Responsive Text Size */
  @media (max-width: 768px) {
    font-size: 0.875rem; /* 14px */
  }

  @media (max-width: 480px) {
    font-size: 0.75rem; /* 12px */
`,c=({children:e,color:t,disabled:p})=>m.jsx(u,{$color:t,$disabled:p,children:e});c.__docgenInfo={description:"",methods:[],displayName:"Text",props:{children:{required:!0,tsType:{name:"string"},description:"Text content inside the component"},color:{required:!1,tsType:{name:"string"},description:"Text color (optional)"},disabled:{required:!1,tsType:{name:"boolean"},description:"When true, applies disabled styling (e.g., greyed out and non-interactive)"}}};const h={title:"Components/Text",component:c,argTypes:{children:{control:"text"},color:{control:"color"},disabled:{control:"boolean"}}},o={args:{children:"Sample text goes here.",color:"#007bff",disabled:!1}},r={args:{children:"This text is disabled.",color:"#333",disabled:!0}};var s,n,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: "Sample text goes here.",
    color: "#007bff",
    disabled: false
  }
}`,...(a=(n=o.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var i,d,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: "This text is disabled.",
    color: "#333",
    disabled: true
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const T=["Default","Disabled"];export{o as Default,r as Disabled,T as __namedExportsOrder,h as default};
