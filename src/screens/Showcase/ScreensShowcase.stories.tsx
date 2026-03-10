import { Meta, StoryObj } from "@storybook/react";
import { ScreensShowcase } from "./ScreensShowcase";

const meta: Meta<typeof ScreensShowcase> = {
  component: ScreensShowcase,
  title: "Showcase/All Screens",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof ScreensShowcase>;

export const AllScreens: Story = {
  render: () => <ScreensShowcase />,
};
