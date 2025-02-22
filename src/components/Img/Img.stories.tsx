import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Img from "./Img";
import type { ImgProps } from "./Img.types";

export default {
  title: "Components/Img",
  component: Img,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
    borderRadius: { control: "text" },
    disabled: { control: "boolean" },
  },
} as Meta<typeof Img>;

const Template: StoryFn<ImgProps> = (args) => <Img {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://images.unsplash.com/photo-1739826009158-edbd53ec9979?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
  alt: "Placeholder Image",
  width: "150px",
  height: "150px",
  borderRadius: "10px",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: "https://images.unsplash.com/photo-1739826009158-edbd53ec9979?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
  alt: "Placeholder Image",
  width: "150px",
  height: "150px",
  borderRadius: "10px",
  disabled: true,
};
