import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description:
        "Visible label describing what the toggle controls — use a noun or short phrase (e.g. 'Dark mode'), not a verb.",
    },
    defaultChecked: {
      control: "boolean",
      description:
        "Sets the initial on/off state for uncontrolled usage — reflect the user's saved preference when available.",
    },
  },
};
export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = { args: { label: "Dark Mode" } };
export const Checked: Story = {
  args: { label: "Enabled", defaultChecked: true },
};
export const NoLabel: Story = { args: {} };

export const SettingsExample: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Switch label="Email notifications" defaultChecked />
      <Switch label="Push notifications" />
      <Switch label="Marketing emails" />
      <Switch label="Two-factor auth" defaultChecked />
    </div>
  ),
};
