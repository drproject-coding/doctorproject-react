import { Meta, StoryObj } from "@storybook/react";
import { SignUp } from "./SignUp";

const meta: Meta<typeof SignUp> = {
  component: SignUp,
  title: "Screens/Auth/SignUp",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof SignUp>;

export const Default: Story = {};
