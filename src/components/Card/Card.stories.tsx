import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Card from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    imageSrc: { control: "text" },
    disabled: { control: "boolean" },
    backgroundColor: { control: "color" }, // New control for background color
  },
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Sample Card",
  description: "This is a description of the card component.",
  imageSrc:
    "https://images.unsplash.com/photo-1579546929662-711aa81148cf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: "Disabled Card",
  description: "This card is disabled.",
  imageSrc:
    "https://images.unsplash.com/photo-1579546929662-711aa81148cf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  disabled: true,
};

export const CustomBackground = Template.bind({});
CustomBackground.args = {
  title: "Custom Background Card",
  description: "This card has a custom background color.",
  imageSrc:
    "https://images.unsplash.com/photo-1579546929662-711aa81148cf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  backgroundColor: "#f0f0f0",
};
