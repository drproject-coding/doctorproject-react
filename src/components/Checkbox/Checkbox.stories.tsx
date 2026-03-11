import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description:
        "Visible label rendered next to the checkbox — always provide one unless the checkbox context is unambiguous with an aria-label.",
    },
    disabled: {
      control: "boolean",
      description:
        "Prevents user interaction — use when the option is unavailable in the current state, not just to guide preference.",
    },
    dark: {
      control: "boolean",
      description:
        "Applies a dark-theme style — use on dark backgrounds like sidebars or hero sections.",
    },
  },
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
