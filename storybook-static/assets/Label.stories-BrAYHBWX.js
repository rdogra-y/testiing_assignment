import { j as p } from "./jsx-runtime-D_zvdyIk.js";
import { d as u } from "./styled-components.browser.esm-Dxl9SFvD.js";
import "./index-DmM0KDA7.js";
const x = u.label`
  font-size: 1rem; /* 16px equivalent */
  font-weight: bold;
  color: ${({ disabled: e }) => (e ? "#999" : "#000")};
  cursor: ${({ disabled: e }) => (e ? "not-allowed" : "default")};

  /* Responsive Text Size */
  @media (max-width: 768px) {
    font-size: 0.875rem; /* 14px */
  }

  @media (max-width: 480px) {
    font-size: 0.75rem; /* 12px */
`,
  a = ({ text: e, htmlFor: c, disabled: b }) =>
    p.jsx(x, { htmlFor: c, disabled: b, children: e });
a.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "Label",
  props: {
    text: {
      required: !0,
      tsType: { name: "string" },
      description: "Text to be displayed inside the label",
    },
    htmlFor: {
      required: !1,
      tsType: { name: "string" },
      description: "The ID of the associated input element (optional)",
    },
    disabled: {
      required: !1,
      tsType: { name: "boolean" },
      description:
        "When true, applies disabled styling (e.g., greyed out and non-interactive)",
    },
  },
};
const T = {
    title: "Components/Label",
    component: a,
    argTypes: {
      text: { control: "text" },
      htmlFor: { control: "text" },
      disabled: { control: "boolean" },
    },
  },
  m = (e) => p.jsx(a, { ...e }),
  t = m.bind({});
t.args = { text: "Label Text", disabled: !1 };
const s = m.bind({});
s.args = { text: "Label Text (Disabled)", disabled: !0, htmlFor: "input-id" };
var r, o, i;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((r = t.parameters) == null ? void 0 : r.docs),
    source: {
      originalSource: "args => <Label {...args} />",
      ...((i = (o = t.parameters) == null ? void 0 : o.docs) == null
        ? void 0
        : i.source),
    },
  },
};
var l, n, d;
s.parameters = {
  ...s.parameters,
  docs: {
    ...((l = s.parameters) == null ? void 0 : l.docs),
    source: {
      originalSource: "args => <Label {...args} />",
      ...((d = (n = s.parameters) == null ? void 0 : n.docs) == null
        ? void 0
        : d.source),
    },
  },
};
const y = ["Default", "Disabled"];
export { t as Default, s as Disabled, y as __namedExportsOrder, T as default };
