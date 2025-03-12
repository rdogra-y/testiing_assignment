import { Meta, StoryObj } from "@storybook/react";
import { default as Text } from "./Text";
import { TextProps } from "./Text.types";
declare const meta: Meta<typeof Text>;
export default meta;
type Story = StoryObj<TextProps>;
export declare const Default: Story;
export declare const Disabled: Story;
