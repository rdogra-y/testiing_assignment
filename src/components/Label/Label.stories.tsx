import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Label from "./Label";

export default {
  title: "Components/Label",
  component: Label,
  argTypes: {
    text: { control: "text" },
  },
} as Meta<typeof Label>;

const Template: StoryFn<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Label Text",
};
