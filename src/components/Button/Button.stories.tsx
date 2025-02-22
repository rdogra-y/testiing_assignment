import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button from "./Button";
import type { ButtonProps } from "./Button.types"; // ✅ Import ButtonProps explicitly

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
  },
} as Meta<typeof Button>;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary: StoryFn<ButtonProps> = Template.bind({});
Primary.args = {
  label: "Click Me",
  disabled: false,
};

export const Disabled: StoryFn<ButtonProps> = Template.bind({});
Disabled.args = {
  label: "Disabled",
  disabled: true,
};
