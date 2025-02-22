import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import HeroImage from "./HeroImage";
import type { HeroImageProps } from "./HeroImage.types";

export default {
  title: "Components/HeroImage",
  component: HeroImage,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    height: { control: "text" },
    overlayText: { control: "text" },
    disabled: { control: "boolean" },
    backgroundColor: { control: "color" },
  },
} as Meta<typeof HeroImage>;

const Template: StoryFn<HeroImageProps> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "",
  alt: "Hero Image",
  height: "400px",
  overlayText: "Welcome to Our Site",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: "https://images.unsplash.com/photo-1542866263-77e2cdc46889?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJsdWV8ZW58MHx8MHx8fDA%3D",
  alt: "Hero Image",
  height: "400px",
  overlayText: "Welcome to Our Site",
  disabled: true,
};

export const CustomBackground = Template.bind({});
CustomBackground.args = {
  src: "",
  alt: "Hero Image",
  height: "400px",
  overlayText: "Custom Background",
  backgroundColor: "#333", // Example background color overlay
  disabled: false,
};
