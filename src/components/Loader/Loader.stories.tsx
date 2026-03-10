import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "./Loader";

const meta: Meta<typeof Loader> = {
  title: "Components/Loader",
  component: Loader,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: [undefined, "sm", "lg"] },
  },
};
export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {};
export const Small: Story = { args: { size: "sm" } };
export const Large: Story = { args: { size: "lg" } };
export const WithLabel: Story = { args: { label: "Loading..." } };

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
      <Loader size="sm" label="Small" />
      <Loader label="Default" />
      <Loader size="lg" label="Large" />
    </div>
  ),
};

export const InCard: Story = {
  render: () => (
    <div
      className="drp-card"
      style={{
        padding: "48px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <Loader size="lg" />
      <p
        style={{
          fontFamily: "var(--drp-font-primary)",
          fontSize: "14px",
          fontWeight: 600,
          color: "#666",
        }}
      >
        Loading data...
      </p>
    </div>
  ),
};
