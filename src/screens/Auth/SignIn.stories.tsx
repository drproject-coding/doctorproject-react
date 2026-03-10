import { Meta, StoryObj } from "@storybook/react";
import { SignIn } from "./SignIn";

const meta: Meta<typeof SignIn> = {
  component: SignIn,
  title: "Screens/Auth/SignIn",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof SignIn>;

export const Default: Story = {};
