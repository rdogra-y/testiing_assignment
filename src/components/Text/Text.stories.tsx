// Text.stories.tsx

import { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";
import type { TextProps } from "./Text.types";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  argTypes: {
    children: { control: "text" },
    color: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<TextProps>;

export const Default: Story = {
  args: {
    children: "Sample text goes here.",
    color: "#007bff",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "This text is disabled.",
    color: "#333",
    disabled: true,
  },
};
