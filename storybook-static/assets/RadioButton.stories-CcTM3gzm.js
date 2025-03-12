import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./index-DmM0KDA7.js";import{d as h}from"./styled-components.browser.esm-Dxl9SFvD.js";const v=h.label`
  display: flex;
  align-items: center;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  font-size: 1rem;
  user-select: none;
  color: ${({disabled:e})=>e?"#999":"#000"};

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`,S=h.input`
  margin-right: 10px;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
`,i=({label:e,name:n,value:o,checked:b,onChange:x,disabled:r})=>{const f=()=>{r||x(o)};return s.jsxs(v,{disabled:r,children:[s.jsx(S,{type:"radio",name:n,value:o,checked:b,onChange:f,disabled:r}),e]})};i.__docgenInfo={description:"",methods:[],displayName:"RadioButton",props:{label:{required:!0,tsType:{name:"string"},description:"Label text associated with the radio button"},name:{required:!0,tsType:{name:"string"},description:"Name attribute to group related radio buttons"},value:{required:!0,tsType:{name:"string"},description:"Value assigned to the radio button"},checked:{required:!0,tsType:{name:"boolean"},description:"Whether the radio button is checked"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Function to handle selection change"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the radio button is disabled"}}};const C={title:"Components/RadioButton",component:i,argTypes:{label:{control:"text"},name:{control:"text"},value:{control:"text"},checked:{control:"boolean"},disabled:{control:"boolean"}}},g=e=>{const[n,o]=y.useState(e.checked?e.value:"");return s.jsx(i,{...e,checked:n===e.value,onChange:o})},t=g.bind({});t.args={label:"Option 1",name:"example",value:"option1",checked:!1,disabled:!1};const a=g.bind({});a.args={label:"Option 1",name:"example",value:"option1",checked:!1,disabled:!0};var d,c,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  // Local state to manage which option is selected.
  const [selected, setSelected] = useState(args.checked ? args.value : "");
  return <RadioButton {...args} checked={selected === args.value} onChange={setSelected} />;
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,p,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  // Local state to manage which option is selected.
  const [selected, setSelected] = useState(args.checked ? args.value : "");
  return <RadioButton {...args} checked={selected === args.value} onChange={setSelected} />;
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const R=["Default","Disabled"];export{t as Default,a as Disabled,R as __namedExportsOrder,C as default};
