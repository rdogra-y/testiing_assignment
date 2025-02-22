import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Table from "./Table";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import TableCell from "./TableCell";
import TableFooter from "./TableFooter";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => (
    <Table>
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
