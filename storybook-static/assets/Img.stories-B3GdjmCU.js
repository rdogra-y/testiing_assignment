import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{d as b}from"./styled-components.browser.esm-Dxl9SFvD.js";import"./index-DmM0KDA7.js";const f=b.img`
  width: ${e=>e.width||"auto"};
  height: ${e=>e.height||"auto"};
  border-radius: ${e=>{var s;return((s=e.theme)==null?void 0:s.borderRadius)||"0"}};

  /* If disabled, apply greyed-out styles */
  ${e=>e.$disabled&&`
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  `}

  /* Responsive Scaling */
  @media (max-width: 768px) {
    max-width: 80%;
  }

  @media (max-width: 480px) {
    max-width: 60%;
`,o=({src:e,alt:s,width:g,height:u,borderRadius:h,disabled:x})=>m.jsx(f,{src:e,alt:s,width:g,height:u,style:{borderRadius:h},$disabled:x});o.__docgenInfo={description:"",methods:[],displayName:"Img",props:{src:{required:!0,tsType:{name:"string"},description:"Image source URL"},alt:{required:!0,tsType:{name:"string"},description:"Alternative text for the image"},width:{required:!1,tsType:{name:"string"},description:"Width of the image (optional)"},height:{required:!1,tsType:{name:"string"},description:"Height of the image (optional)"},borderRadius:{required:!1,tsType:{name:"string"},description:"Border radius for rounded corners (optional)"},disabled:{required:!1,tsType:{name:"boolean"},description:"When true, applies disabled styling (e.g., greyed out and non-clickable)"}}};const H={title:"Components/Img",component:o,argTypes:{src:{control:"text"},alt:{control:"text"},width:{control:"text"},height:{control:"text"},borderRadius:{control:"text"},disabled:{control:"boolean"}}},c=e=>m.jsx(o,{...e}),t=c.bind({});t.args={src:"https://images.unsplash.com/photo-1739826009158-edbd53ec9979?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",alt:"Placeholder Image",width:"150px",height:"150px",borderRadius:"10px",disabled:!1};const r=c.bind({});r.args={src:"https://images.unsplash.com/photo-1739826009158-edbd53ec9979?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",alt:"Placeholder Image",width:"150px",height:"150px",borderRadius:"10px",disabled:!0};var a,i,d;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:"args => <Img {...args} />",...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var n,l,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"args => <Img {...args} />",...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const M=["Default","Disabled"];export{t as Default,r as Disabled,M as __namedExportsOrder,H as default};
