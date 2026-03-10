import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};

export const InContext: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <Spinner />
      <span
        style={{
          fontFamily: "var(--drp-font-primary)",
          fontSize: "var(--drp-text-sm)",
          fontWeight: 600,
        }}
      >
        Loading...
      </span>
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <Spinner />
      <Spinner />
      <Spinner />
    </div>
  ),
};
