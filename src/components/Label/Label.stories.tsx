import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Label from "./Label";
import type { LabelProps } from "./Label.types";

export default {
  title: "Components/Label",
  component: Label,
  argTypes: {
    text: { control: "text" },
    htmlFor: { control: "text" },
    disabled: { control: "boolean" },
  },
} as Meta<typeof Label>;

const Template: StoryFn<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Label Text",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: "Label Text (Disabled)",
  disabled: true,
  htmlFor: "input-id", // Optional: shows association with an input
};
