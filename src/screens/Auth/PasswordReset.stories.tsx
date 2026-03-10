import { Meta, StoryObj } from "@storybook/react";
import { PasswordReset } from "./PasswordReset";

const meta: Meta<typeof PasswordReset> = {
  component: PasswordReset,
  title: "Screens/Auth/PasswordReset",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof PasswordReset>;

export const RequestReset: Story = {
  args: { mode: "request" },
};

export const ResetForm: Story = {
  args: { mode: "reset" },
};
