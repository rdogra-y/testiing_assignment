import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import HeroImage, { HeroImageProps } from "./HeroImage";

export default {
  title: "Components/HeroImage",
  component: HeroImage,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    height: { control: "text" },
    overlayText: { control: "text" },
  },
} as Meta<typeof HeroImage>; // ✅ This default export is required

const Template: StoryFn<HeroImageProps> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://images.unsplash.com/photo-1542866263-77e2cdc46889?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJsdWV8ZW58MHx8MHx8fDA%3D",
  alt: "Hero Image",
  height: "400px",
  overlayText: "Welcome to Our Site",
};
