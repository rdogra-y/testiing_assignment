import { Meta, StoryFn } from "@storybook/react";
import Img, { ImgProps } from "./Img";

export default {
  title: "Components/Img",
  component: Img,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
    borderRadius: { control: "text" },
  },
} as Meta<typeof Img>;

const Template: StoryFn<ImgProps> = (args) => <Img {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://via.placeholder.com/150",
  alt: "Placeholder Image",
  width: "150px",
  height: "150px",
  borderRadius: "10px",
};
