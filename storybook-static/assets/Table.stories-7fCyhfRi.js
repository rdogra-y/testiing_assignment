import { j as e } from "./jsx-runtime-D_zvdyIk.js";
import { d as n } from "./styled-components.browser.esm-Dxl9SFvD.js";
import "./index-DmM0KDA7.js";
const C = n.table`
  width: 100%;
  border-collapse: collapse;
  border: ${({ $border: r }) => (r ? "1px solid #ddd" : "none")};

  ${({ $disabled: r }) =>
    r &&
    `
      opacity: 0.6;
      pointer-events: none;
      user-select: none;

       @media (max-width: 768px) {
      font-size: 0.875rem;
    }

    @media (max-width: 480px) {
      font-size: 0.75rem;
    `}
`,
  s = ({ children: r, border: t = !0, disabled: c }) =>
    e.jsx(C, { $border: t, $disabled: c, children: r });
s.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "Table",
  props: {
    children: {
      required: !0,
      tsType: { name: "ReactReactNode", raw: "React.ReactNode" },
      description: "Child elements inside the table",
    },
    border: {
      required: !1,
      tsType: { name: "boolean" },
      description: "Whether to show table border",
      defaultValue: { value: "true", computed: !1 },
    },
    disabled: {
      required: !1,
      tsType: { name: "boolean" },
      description:
        "When true, applies disabled styling (e.g., greyscale and non-interactive)",
    },
  },
};
const j = n.thead`
  background-color: #007bff;
  color: white;
`,
  i = ({ children: r }) => e.jsx(j, { children: r });
i.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "TableHeader",
  props: {
    children: {
      required: !0,
      tsType: { name: "ReactReactNode", raw: "React.ReactNode" },
      description: "",
    },
  },
};
const R = n.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`,
  a = ({ children: r }) => e.jsx(R, { children: r });
a.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "TableRow",
  props: {
    children: {
      required: !0,
      tsType: { name: "ReactReactNode", raw: "React.ReactNode" },
      description: "",
    },
  },
};
const f = n.td`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-weight: ${({ header: r }) => (r ? "bold" : "normal")};
`,
  l = ({ children: r, header: t = !1, colSpan: c }) =>
    e.jsx(f, { as: t ? "th" : "td", colSpan: c, children: r });
l.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "TableCell",
  props: {
    children: {
      required: !0,
      tsType: { name: "ReactReactNode", raw: "React.ReactNode" },
      description: "",
    },
    header: {
      required: !1,
      tsType: { name: "boolean" },
      description: "",
      defaultValue: { value: "false", computed: !1 },
    },
    colSpan: { required: !1, tsType: { name: "number" }, description: "" },
  },
};
const w = n.tfoot`
  background-color: #007bff;
  color: white;
  font-weight: bold;
`,
  b = ({ children: r }) => e.jsx(w, { children: r });
b.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "TableFooter",
  props: {
    children: {
      required: !0,
      tsType: { name: "ReactReactNode", raw: "React.ReactNode" },
      description: "",
    },
  },
};
const S = {
    title: "Components/Table",
    component: s,
    argTypes: {
      border: { control: "boolean" },
      disabled: { control: "boolean" },
    },
  },
  o = {
    render: (r) =>
      e.jsxs(s, {
        ...r,
        children: [
          e.jsx(i, {
            children: e.jsxs(a, {
              children: [
                e.jsx(l, { header: !0, children: "ID" }),
                e.jsx(l, { header: !0, children: "Name" }),
                e.jsx(l, { header: !0, children: "Age" }),
              ],
            }),
          }),
          e.jsxs("tbody", {
            children: [
              e.jsxs(a, {
                children: [
                  e.jsx(l, { children: "1" }),
                  e.jsx(l, { children: "Alice" }),
                  e.jsx(l, { children: "25" }),
                ],
              }),
              e.jsxs(a, {
                children: [
                  e.jsx(l, { children: "2" }),
                  e.jsx(l, { children: "Bob" }),
                  e.jsx(l, { children: "30" }),
                ],
              }),
            ],
          }),
          e.jsx(b, {
            children: e.jsxs(a, {
              children: [
                e.jsx(l, { children: "Total" }),
                e.jsx(l, { colSpan: 2, children: "2 Users" }),
              ],
            }),
          }),
        ],
      }),
  },
  d = {
    render: (r) =>
      e.jsxs(s, {
        ...r,
        disabled: !0,
        children: [
          e.jsx(i, {
            children: e.jsxs(a, {
              children: [
                e.jsx(l, { header: !0, children: "ID" }),
                e.jsx(l, { header: !0, children: "Name" }),
                e.jsx(l, { header: !0, children: "Age" }),
              ],
            }),
          }),
          e.jsxs("tbody", {
            children: [
              e.jsxs(a, {
                children: [
                  e.jsx(l, { children: "1" }),
                  e.jsx(l, { children: "Alice" }),
                  e.jsx(l, { children: "25" }),
                ],
              }),
              e.jsxs(a, {
                children: [
                  e.jsx(l, { children: "2" }),
                  e.jsx(l, { children: "Bob" }),
                  e.jsx(l, { children: "30" }),
                ],
              }),
            ],
          }),
          e.jsx(b, {
            children: e.jsxs(a, {
              children: [
                e.jsx(l, { children: "Total" }),
                e.jsx(l, { colSpan: 2, children: "2 Users" }),
              ],
            }),
          }),
        ],
      }),
  };
var T, h, p;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((T = o.parameters) == null ? void 0 : T.docs),
    source: {
      originalSource: `{
  render: args => <Table {...args}>\r
      <TableHeader>\r
        <TableRow>\r
          <TableCell header>ID</TableCell>\r
          <TableCell header>Name</TableCell>\r
          <TableCell header>Age</TableCell>\r
        </TableRow>\r
      </TableHeader>\r
      <tbody>\r
        <TableRow>\r
          <TableCell>1</TableCell>\r
          <TableCell>Alice</TableCell>\r
          <TableCell>25</TableCell>\r
        </TableRow>\r
        <TableRow>\r
          <TableCell>2</TableCell>\r
          <TableCell>Bob</TableCell>\r
          <TableCell>30</TableCell>\r
        </TableRow>\r
      </tbody>\r
      <TableFooter>\r
        <TableRow>\r
          <TableCell>Total</TableCell>\r
          <TableCell colSpan={2}>2 Users</TableCell>\r
        </TableRow>\r
      </TableFooter>\r
    </Table>
}`,
      ...((p = (h = o.parameters) == null ? void 0 : h.docs) == null
        ? void 0
        : p.source),
    },
  },
};
var x, m, u;
d.parameters = {
  ...d.parameters,
  docs: {
    ...((x = d.parameters) == null ? void 0 : x.docs),
    source: {
      originalSource: `{
  render: args => <Table {...args} disabled={true}>\r
      <TableHeader>\r
        <TableRow>\r
          <TableCell header>ID</TableCell>\r
          <TableCell header>Name</TableCell>\r
          <TableCell header>Age</TableCell>\r
        </TableRow>\r
      </TableHeader>\r
      <tbody>\r
        <TableRow>\r
          <TableCell>1</TableCell>\r
          <TableCell>Alice</TableCell>\r
          <TableCell>25</TableCell>\r
        </TableRow>\r
        <TableRow>\r
          <TableCell>2</TableCell>\r
          <TableCell>Bob</TableCell>\r
          <TableCell>30</TableCell>\r
        </TableRow>\r
      </tbody>\r
      <TableFooter>\r
        <TableRow>\r
          <TableCell>Total</TableCell>\r
          <TableCell colSpan={2}>2 Users</TableCell>\r
        </TableRow>\r
      </TableFooter>\r
    </Table>
}`,
      ...((u = (m = d.parameters) == null ? void 0 : m.docs) == null
        ? void 0
        : u.source),
    },
  },
};
const _ = ["Default", "Disabled"];
export { o as Default, d as Disabled, _ as __namedExportsOrder, S as default };
