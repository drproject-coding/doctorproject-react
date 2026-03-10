import type { Meta, StoryObj } from "@storybook/react";
import { StatusDot } from "./StatusDot";

const meta: Meta<typeof StatusDot> = {
  title: "Components/StatusDot",
  component: StatusDot,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: [undefined, "purple", "mint", "pink", "yellow"],
    },
    pulse: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof StatusDot>;

export const Default: Story = { args: { "aria-hidden": true } };
export const Purple: Story = { args: { color: "purple", "aria-hidden": true } };
export const Mint: Story = { args: { color: "mint", "aria-hidden": true } };
export const Pink: Story = { args: { color: "pink", "aria-hidden": true } };
export const Pulsing: Story = {
  args: { color: "mint", pulse: true, "aria-hidden": true },
};

export const StatusList: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <StatusDot color="mint" pulse aria-hidden={true} /> Online
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <StatusDot color="yellow" aria-hidden={true} /> Away
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <StatusDot color="pink" aria-hidden={true} /> Busy
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <StatusDot aria-hidden={true} /> Offline
      </div>
    </div>
  ),
};
