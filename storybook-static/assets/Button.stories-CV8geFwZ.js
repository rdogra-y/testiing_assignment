import { j as p } from "./jsx-runtime-D_zvdyIk.js";
import { d as x } from "./styled-components.browser.esm-Dxl9SFvD.js";
import "./index-DmM0KDA7.js";
const g = x.button`
  background-color: blue;
  color: white;
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  min-width: 120px;
  max-width: 100%;
  transition:
    background-color 0.3s ease-in-out,
    transform 0.1s ease-in-out;

  &:hover {
    background-color: darkblue;
  }

  &:active {
    background-color: navy;
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 18px;
    min-width: 100px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 8px 16px;
    min-width: 80px;
  }
`,
  r = ({ label: o, children: u, disabled: m, onClick: b }) =>
    p.jsx(g, { disabled: m, onClick: b, children: u || o });
r.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "Button",
  props: {
    label: {
      required: !1,
      tsType: { name: "string" },
      description: "The text inside the button",
    },
    children: {
      required: !1,
      tsType: { name: "ReactReactNode", raw: "React.ReactNode" },
      description:
        "Button can accept text, HTML, or even other React components inside it.",
    },
    disabled: {
      required: !1,
      tsType: { name: "boolean" },
      description: "Whether the button is disabled",
    },
    onClick: {
      required: !1,
      tsType: {
        name: "signature",
        type: "function",
        raw: "() => void",
        signature: { arguments: [], return: { name: "void" } },
      },
      description: "Function to handle button clicks",
    },
  },
};
const k = {
    title: "Components/Button",
    component: r,
    argTypes: {
      label: { control: "text" },
      disabled: { control: "boolean" },
      onClick: { action: "clicked" },
    },
  },
  l = (o) => p.jsx(r, { ...o }),
  e = l.bind({});
e.args = { label: "Click Me", disabled: !1 };
const t = l.bind({});
t.args = { label: "Disabled", disabled: !0 };
var a, s, n;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((a = e.parameters) == null ? void 0 : a.docs),
    source: {
      originalSource: "args => <Button {...args} />",
      ...((n = (s = e.parameters) == null ? void 0 : s.docs) == null
        ? void 0
        : n.source),
    },
  },
};
var i, d, c;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((i = t.parameters) == null ? void 0 : i.docs),
    source: {
      originalSource: "args => <Button {...args} />",
      ...((c = (d = t.parameters) == null ? void 0 : d.docs) == null
        ? void 0
        : c.source),
    },
  },
};
const w = ["Primary", "Disabled"];
export { t as Disabled, e as Primary, w as __namedExportsOrder, k as default };
