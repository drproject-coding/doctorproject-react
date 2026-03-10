import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";

const allIconNames = [
  "dashboard",
  "analytics",
  "users",
  "orders",
  "products",
  "settings",
  "search",
  "bell",
  "mail",
  "calendar",
  "check",
  "close",
  "plus",
  "minus",
  "arrow-left",
  "arrow-right",
  "arrow-up",
  "arrow-down",
  "edit",
  "trash",
  "eye",
  "eye-off",
  "filter",
  "download",
] as const;

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    name: { control: "select", options: allIconNames },
    size: { control: "select", options: [undefined, "sm", "md", "lg"] },
    color: { control: "color" },
  },
};
export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = { args: { name: "dashboard" } };
export const Small: Story = { args: { name: "search", size: "sm" } };
export const Medium: Story = { args: { name: "search", size: "md" } };
export const Large: Story = { args: { name: "search", size: "lg" } };
export const Purple: Story = {
  args: { name: "bell", size: "lg", color: "#631DED" },
};
export const Orange: Story = {
  args: { name: "mail", size: "lg", color: "#FF6C01" },
};

export const AllIcons: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
        gap: "16px",
      }}
    >
      {allIconNames.map((name) => (
        <div
          key={name}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            padding: "12px",
            border: "2px solid var(--drp-black, #121212)",
          }}
        >
          <Icon name={name} size="lg" />
          <span
            style={{
              fontFamily: "var(--drp-font-mono, monospace)",
              fontSize: "10px",
              textAlign: "center",
              color: "var(--drp-text-muted, #888)",
            }}
          >
            {name}
          </span>
        </div>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      {(["sm", "md", "lg"] as const).map((size) => (
        <div
          key={size}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <Icon name="settings" size={size} />
          <span style={{ fontFamily: "monospace", fontSize: "10px" }}>
            {size} ({size === "sm" ? 16 : size === "md" ? 20 : 24}px)
          </span>
        </div>
      ))}
    </div>
  ),
};

export const DoctorProjectColors: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Icon name="dashboard" size="lg" color="#631DED" />
      <Icon name="analytics" size="lg" color="#FF6C01" />
      <Icon name="users" size="lg" color="#121212" />
      <Icon name="orders" size="lg" color="#98E9AB" />
      <Icon name="products" size="lg" color="#E99898" />
      <Icon name="settings" size="lg" color="#FAE8A4" />
      <Icon name="search" size="lg" color="#666666" />
    </div>
  ),
};
