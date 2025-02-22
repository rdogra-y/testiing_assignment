// Table.stories.tsx
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Table from "./Table";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import TableCell from "./TableCell";
import TableFooter from "./TableFooter";
import type { TableProps } from "./Table.types";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  argTypes: {
    border: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<TableProps>;

export const Default: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableCell header>ID</TableCell>
          <TableCell header>Name</TableCell>
          <TableCell header>Age</TableCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>Alice</TableCell>
          <TableCell>25</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2</TableCell>
          <TableCell>Bob</TableCell>
          <TableCell>30</TableCell>
        </TableRow>
      </tbody>
      <TableFooter>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell colSpan={2}>2 Users</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <Table {...args} disabled={true}>
      <TableHeader>
        <TableRow>
          <TableCell header>ID</TableCell>
          <TableCell header>Name</TableCell>
          <TableCell header>Age</TableCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>Alice</TableCell>
          <TableCell>25</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2</TableCell>
          <TableCell>Bob</TableCell>
          <TableCell>30</TableCell>
        </TableRow>
      </tbody>
      <TableFooter>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell colSpan={2}>2 Users</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};
