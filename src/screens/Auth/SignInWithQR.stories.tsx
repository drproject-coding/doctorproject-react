import { Meta, StoryObj } from "@storybook/react";
import { SignInWithQR } from "./SignInWithQR";

const meta: Meta<typeof SignInWithQR> = {
  component: SignInWithQR,
  title: "Screens/Auth/SignInWithQR",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof SignInWithQR>;

export const Default: Story = {};
