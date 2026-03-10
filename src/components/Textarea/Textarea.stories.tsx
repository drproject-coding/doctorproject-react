import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: { placeholder: "Enter your message..." },
};
export const WithLabel: Story = {
  args: { label: "Description", placeholder: "Tell us about your project..." },
};
export const Error: Story = {
  args: { label: "Bio", error: true, placeholder: "Required field" },
};
export const Success: Story = {
  args: { label: "Notes", success: true, value: "Looks good!", readOnly: true },
};
