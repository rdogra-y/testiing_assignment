import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  argTypes: {
    children: { control: "text" }, // Update 'content' to 'children'
    color: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "Sample text goes here.", // Use 'children' instead of 'content'
    color: "#007bff",
  },
};
