import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = { args: { label: "Accept terms" } };
export const Checked: Story = {
  args: { label: "Checked", defaultChecked: true },
};
export const Dark: Story = { args: { label: "Dark variant", dark: true } };
export const Disabled: Story = { args: { label: "Disabled", disabled: true } };

export const Group: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Checkbox label="Option A" defaultChecked />
      <Checkbox label="Option B" />
      <Checkbox label="Option C" />
      <Checkbox label="Disabled" disabled />
    </div>
  ),
};
