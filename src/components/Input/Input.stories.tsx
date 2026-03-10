import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    error: { control: "boolean" },
    success: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = { args: { placeholder: "Enter text..." } };
export const WithLabel: Story = {
  args: {
    label: "Email Address",
    placeholder: "you@example.com",
    type: "email",
  },
};
export const Error: Story = {
  args: {
    label: "Password",
    type: "password",
    error: true,
    placeholder: "Required",
  },
};
export const Success: Story = {
  args: { label: "Username", value: "johndoe", success: true, readOnly: true },
};
export const Disabled: Story = {
  args: { label: "Locked Field", value: "Cannot edit", disabled: true },
};

export const FormExample: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        maxWidth: "400px",
      }}
    >
      <Input label="Full Name" placeholder="John Doe" />
      <Input label="Email" type="email" placeholder="you@example.com" />
      <Input label="Password" type="password" placeholder="••••••••" />
      <Input label="Error Example" error placeholder="Invalid input" />
      <Input label="Success Example" success value="Valid input" readOnly />
    </div>
  ),
};
