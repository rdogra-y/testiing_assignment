import { j as a } from "./jsx-runtime-D_zvdyIk.js";
import { d as k } from "./styled-components.browser.esm-Dxl9SFvD.js";
import "./index-DmM0KDA7.js";
const T = k.div`
  position: relative;
  width: 100%;
  height: ${({ height: e }) => e || "300px"};
  background: url(${({ background: e }) => e}) center/cover no-repeat;
  background-color: ${({ backgroundColor: e }) => e || "transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);

  ${({ disabled: e }) =>
    e &&
    `
      opacity: 0.5;
      filter: grayscale(100%);
      cursor: not-allowed;
    `}

  /* Responsive Adjustments */
  @media (max-width: 768px) {
    height: ${({ height: e }) => e || "250px"};
    font-size: 1.5rem;
    background-position: center top;
  }

  @media (max-width: 480px) {
    height: ${({ height: e }) => e || "180px"};
    font-size: 1.2rem;
  }

  /* Dark Overlay for Better Readability */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
`,
  s = ({
    src: e,
    alt: b,
    height: f,
    overlayText: n,
    disabled: y,
    backgroundColor: H,
  }) =>
    a.jsx(T, {
      background: e,
      height: f,
      disabled: y,
      backgroundColor: H,
      role: "img",
      "aria-label": b,
      children: n && a.jsx("p", { children: n }),
    });
s.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "HeroImage",
  props: {
    src: {
      required: !0,
      tsType: { name: "string" },
      description: "Source URL for the hero image",
    },
    alt: {
      required: !0,
      tsType: { name: "string" },
      description: "Alternative text for the image (for accessibility)",
    },
    height: {
      required: !1,
      tsType: { name: "string" },
      description: 'Optional height of the hero image (e.g., "400px")',
    },
    overlayText: {
      required: !1,
      tsType: { name: "string" },
      description: "Optional text to display as an overlay on the image",
    },
    disabled: {
      required: !1,
      tsType: { name: "boolean" },
      description:
        "When true, applies disabled styling (e.g. greyscale and lower opacity)",
    },
    backgroundColor: {
      required: !1,
      tsType: { name: "string" },
      description: "Optional background color overlay (if needed)",
    },
  },
};
const j = {
    title: "Components/HeroImage",
    component: s,
    argTypes: {
      src: { control: "text" },
      alt: { control: "text" },
      height: { control: "text" },
      overlayText: { control: "text" },
      disabled: { control: "boolean" },
      backgroundColor: { control: "color" },
    },
  },
  i = (e) => a.jsx(s, { ...e }),
  r = i.bind({});
r.args = {
  src: "",
  alt: "Hero Image",
  height: "400px",
  overlayText: "Welcome to Our Site",
  disabled: !1,
};
const o = i.bind({});
o.args = {
  src: "https://images.unsplash.com/photo-1542866263-77e2cdc46889?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJsdWV8ZW58MHx8MHx8fDA%3D",
  alt: "Hero Image",
  height: "400px",
  overlayText: "Welcome to Our Site",
  disabled: !0,
};
const t = i.bind({});
t.args = {
  src: "",
  alt: "Hero Image",
  height: "400px",
  overlayText: "Custom Background",
  backgroundColor: "#333",
  disabled: !1,
};
var c, l, d;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((c = r.parameters) == null ? void 0 : c.docs),
    source: {
      originalSource: "args => <HeroImage {...args} />",
      ...((d = (l = r.parameters) == null ? void 0 : l.docs) == null
        ? void 0
        : d.source),
    },
  },
};
var p, g, m;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((p = o.parameters) == null ? void 0 : p.docs),
    source: {
      originalSource: "args => <HeroImage {...args} />",
      ...((m = (g = o.parameters) == null ? void 0 : g.docs) == null
        ? void 0
        : m.source),
    },
  },
};
var u, h, x;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((u = t.parameters) == null ? void 0 : u.docs),
    source: {
      originalSource: "args => <HeroImage {...args} />",
      ...((x = (h = t.parameters) == null ? void 0 : h.docs) == null
        ? void 0
        : x.source),
    },
  },
};
const D = ["Default", "Disabled", "CustomBackground"];
export {
  t as CustomBackground,
  r as Default,
  o as Disabled,
  D as __namedExportsOrder,
  j as default,
};
