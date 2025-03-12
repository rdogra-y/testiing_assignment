import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{d as b}from"./styled-components.browser.esm-Dxl9SFvD.js";import"./index-DmM0KDA7.js";const v=b.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  background-color: ${({disabled:e})=>e?"#e0e0e0":"white"};

  /* Responsive adjustments */
  @media (max-width: 768px) {
    font-size: 14px;
    max-width: 300px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    max-width: 250px;
    padding: 10px;
  }
`,o=({options:e,value:m,onChange:g,disabled:x})=>s.jsx(v,{value:m,onChange:a=>g(a.target.value),disabled:x,children:e.map(a=>s.jsx("option",{value:a.value,children:a.label},a.value))});o.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; value: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"{ label: string; value: string }[]"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const h={title:"Components/Dropdown",component:o,argTypes:{value:{control:"text"},disabled:{control:"boolean"}}},c=e=>s.jsx(o,{...e}),r=c.bind({});r.args={options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],value:"1",onChange:e=>console.log("Selected:",e),disabled:!1};const t=c.bind({});t.args={...r.args,disabled:!0};var n,i,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"args => <Dropdown {...args} />",...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var l,p,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"args => <Dropdown {...args} />",...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const D=["Default","Disabled"];export{r as Default,t as Disabled,D as __namedExportsOrder,h as default};
