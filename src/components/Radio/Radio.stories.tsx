import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "./Radio";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = { args: { label: "Option A", name: "demo" } };
export const Purple: Story = {
  args: { label: "Purple", name: "color", color: "purple" },
};
export const Dark: Story = {
  args: { label: "Dark", name: "dark", dark: true },
};

export const Group: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Radio name="plan" label="Free" defaultChecked />
      <Radio name="plan" label="Pro" />
      <Radio name="plan" label="Enterprise" />
    </div>
  ),
};

export const Error: Story = {
  args: { label: "Invalid selection", name: "error", error: true },
};

/** Error state within a group */
export const GroupWithError: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Radio name="plan-err" label="Free" error />
      <Radio name="plan-err" label="Pro" error />
      <Radio name="plan-err" label="Enterprise" error />
      <span style={{ fontSize: 12, color: "var(--drp-error-dark)" }}>
        Please select a plan
      </span>
    </div>
  ),
};
