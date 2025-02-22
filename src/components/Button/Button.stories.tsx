import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" }, // ✅ Ensures it logs in Storybook
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Click Me",
  disabled: false,
  onClick: () => alert("Button Clicked!"), // ✅ Add an alert to confirm clicks
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
  disabled: true,
  onClick: () => alert("You shouldn't be able to click this!"),
};
