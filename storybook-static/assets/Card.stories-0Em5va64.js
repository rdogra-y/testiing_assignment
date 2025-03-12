import { j as e } from "./jsx-runtime-D_zvdyIk.js";
import { d as i } from "./styled-components.browser.esm-Dxl9SFvD.js";
import "./index-DmM0KDA7.js";
const T = i.div`
  width: 100%;
  max-width: 350px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  background-color: ${({ backgroundColor: r }) => r || "#fff"};

  ${({ disabled: r }) =>
    r &&
    `
      opacity: 0.6;
      cursor: not-allowed;
      pointer-events: none;
    `}

  &:hover {
    transform: scale(1.05);
  }

  /* Responsive Card */
  @media (max-width: 768px) {
    max-width: 90%;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }

  /* Disable hover scaling on mobile */
  @media (max-width: 768px) {
    &:hover {
      transform: none;
    }
  }
`,
  j = i.img`
  width: 100%;
  height: auto;
  max-height: 180px;
  object-fit: cover;

  @media (max-width: 480px) {
    max-height: 140px;
  }
`,
  k = i.div`
  padding: 16px;
`,
  v = i.h3`
  font-size: 1.125rem; /* 18px */
  margin: 0;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`,
  q = i.p`
  font-size: 0.875rem; /* 14px */
  color: #666;

   @media (max-width: 480px) {
    font-size: 0.75rem;
`,
  s = ({
    title: r,
    description: w,
    imageSrc: C,
    onClick: n,
    disabled: c,
    backgroundColor: D,
  }) => {
    const y = () => {
      c || (n && n());
    };
    return e.jsxs(T, {
      onClick: y,
      disabled: c,
      backgroundColor: D,
      children: [
        e.jsx(j, { src: C, alt: r }),
        e.jsxs(k, {
          children: [e.jsx(v, { children: r }), e.jsx(q, { children: w })],
        }),
      ],
    });
  };
s.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "Card",
  props: {
    title: {
      required: !0,
      tsType: { name: "string" },
      description: "Title of the card",
    },
    description: {
      required: !0,
      tsType: { name: "string" },
      description: "Description text for the card",
    },
    imageSrc: {
      required: !0,
      tsType: { name: "string" },
      description: "Image source URL for the card",
    },
    onClick: {
      required: !1,
      tsType: {
        name: "signature",
        type: "function",
        raw: "() => void",
        signature: { arguments: [], return: { name: "void" } },
      },
      description: "Optional click event handler for the card",
    },
    disabled: {
      required: !1,
      tsType: { name: "boolean" },
      description: "Whether the card is disabled",
    },
    backgroundColor: {
      required: !1,
      tsType: { name: "string" },
      description: "Optional background color for the card",
    },
  },
};
const S = {
    title: "Components/Card",
    component: s,
    argTypes: {
      title: { control: "text" },
      description: { control: "text" },
      imageSrc: { control: "text" },
      disabled: { control: "boolean" },
      backgroundColor: { control: "color" },
    },
  },
  d = (r) => e.jsx(s, { ...r }),
  o = d.bind({});
o.args = {
  title: "Sample Card",
  description: "This is a description of the card component.",
  imageSrc:
    "https://images.unsplash.com/photo-1579546929662-711aa81148cf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};
const a = d.bind({});
a.args = {
  title: "Disabled Card",
  description: "This card is disabled.",
  imageSrc:
    "https://images.unsplash.com/photo-1579546929662-711aa81148cf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  disabled: !0,
};
const t = d.bind({});
t.args = {
  title: "Custom Background Card",
  description: "This card has a custom background color.",
  imageSrc:
    "https://images.unsplash.com/photo-1579546929662-711aa81148cf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  backgroundColor: "#f0f0f0",
};
var p, m, l;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((p = o.parameters) == null ? void 0 : p.docs),
    source: {
      originalSource: "args => <Card {...args} />",
      ...((l = (m = o.parameters) == null ? void 0 : m.docs) == null
        ? void 0
        : l.source),
    },
  },
};
var x, f, u;
a.parameters = {
  ...a.parameters,
  docs: {
    ...((x = a.parameters) == null ? void 0 : x.docs),
    source: {
      originalSource: "args => <Card {...args} />",
      ...((u = (f = a.parameters) == null ? void 0 : f.docs) == null
        ? void 0
        : u.source),
    },
  },
};
var h, g, b;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((h = t.parameters) == null ? void 0 : h.docs),
    source: {
      originalSource: "args => <Card {...args} />",
      ...((b = (g = t.parameters) == null ? void 0 : g.docs) == null
        ? void 0
        : b.source),
    },
  },
};
const A = ["Default", "Disabled", "CustomBackground"];
export {
  t as CustomBackground,
  o as Default,
  a as Disabled,
  A as __namedExportsOrder,
  S as default,
};
