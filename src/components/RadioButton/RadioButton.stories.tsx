// RadioButton.stories.tsx
import React, { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import RadioButton from "./RadioButton";
import type { RadioButtonProps } from "./RadioButton.types";

export default {
  title: "Components/RadioButton",
  component: RadioButton,
  argTypes: {
    label: { control: "text" },
    name: { control: "text" },
    value: { control: "text" },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
} as Meta<typeof RadioButton>;

const Template: StoryFn<RadioButtonProps> = (args) => {
  // Local state to manage which option is selected.
  const [selected, setSelected] = useState(args.checked ? args.value : "");
  return (
    <RadioButton
      {...args}
      checked={selected === args.value}
      onChange={setSelected}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Option 1",
  name: "example",
  value: "option1",
  checked: false,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Option 1",
  name: "example",
  value: "option1",
  checked: false,
  disabled: true,
};
