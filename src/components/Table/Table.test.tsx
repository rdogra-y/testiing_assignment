import React from "react";
import { render, screen } from "@testing-library/react";
import Table from "./Table";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import TableCell from "./TableCell";
import TableFooter from "./TableFooter";
import "@testing-library/jest-dom";

describe("Table Component", () => {
  test("renders the table correctly", () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell header>ID</TableCell>
            <TableCell header>Name</TableCell>
          </TableRow>
        </TableHeader>
        <tbody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Alice</TableCell>
          </TableRow>
        </tbody>
        <TableFooter>
          <TableRow>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Total")).toBeInTheDocument();
  });

  test("applies correct styling", () => {
    render(
      <Table border={true}>
        <TableHeader>
          <TableRow>
            <TableCell header>ID</TableCell>
            <TableCell header>Name</TableCell>
          </TableRow>
        </TableHeader>
        <tbody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Alice</TableCell>
          </TableRow>
        </tbody>
        <TableFooter>
          <TableRow>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
    const tableElement = screen.getByRole("table");
    expect(tableElement).toHaveStyle("border: 1px solid #ddd");
  });
});
