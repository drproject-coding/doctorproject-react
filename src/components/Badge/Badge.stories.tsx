import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        undefined,
        "filled",
        "primary",
        "secondary",
        "outline",
        "mint",
        "pink",
      ],
    },
  },
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = { args: { children: "5" } };
export const Filled: Story = { args: { children: "12", variant: "filled" } };
export const Primary: Story = { args: { children: "3", variant: "primary" } };
export const Secondary: Story = {
  args: { children: "7", variant: "secondary" },
};
export const Mint: Story = { args: { children: "OK", variant: "mint" } };
export const Pink: Story = { args: { children: "!", variant: "pink" } };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <Badge>5</Badge>
      <Badge variant="filled">12</Badge>
      <Badge variant="primary">3</Badge>
      <Badge variant="secondary">7</Badge>
      <Badge variant="outline">0</Badge>
      <Badge variant="mint">OK</Badge>
      <Badge variant="pink">!</Badge>
    </div>
  ),
};
