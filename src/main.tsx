import React from "react";
import { createRoot } from "react-dom/client";
import {
  Button,
  Card,
  Dropdown,
  HeroImage,
  Img,
  Label,
  RadioButton,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableFooter,
  Text,
} from "./components";

export * from "./components";

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Button label="Click Me">Click Me</Button>
    <Card
      title="Sample Card"
      description="This is a sample card"
      imageSrc="https://via.placeholder.com/300x180"
    />
    <Dropdown
      options={[
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" },
      ]}
      value="1"
      onChange={() => {}}
    />
    <HeroImage src="https://via.placeholder.com/800x400" alt="Hero" />
    <Img src="https://via.placeholder.com/150" alt="Placeholder Image" />
    <Label text="Sample Label" />
    <RadioButton
      label="Option 1"
      name="sample"
      value="1"
      checked={true}
      onChange={() => {}}
    />
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
    <Text color="blue">Sample Text Component</Text>
  </React.StrictMode>
);
