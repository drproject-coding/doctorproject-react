import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Select>;

const roleOptions = [
  <option key="" value="">
    Select a role...
  </option>,
  <option key="admin" value="admin">
    Admin
  </option>,
  <option key="editor" value="editor">
    Editor
  </option>,
  <option key="viewer" value="viewer">
    Viewer
  </option>,
];

export const Default: Story = {
  args: {
    label: "Role",
    children: roleOptions,
  },
};

export const Disabled: Story = {
  args: {
    label: "Locked",
    disabled: true,
    children: <option>Cannot change</option>,
  },
};

/** Error state with red border */
export const Error: Story = {
  args: { label: "Role", error: true, children: roleOptions },
};

/** Success state with green border */
export const Success: Story = {
  args: { label: "Role", success: true, children: roleOptions },
};

/** All validation states side by side */
export const ValidationStates: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
      <Select label="Default">{roleOptions}</Select>
      <Select label="Error" error>
        {roleOptions}
      </Select>
      <Select label="Success" success>
        {roleOptions}
      </Select>
      <Select label="Disabled" disabled>
        <option>Cannot change</option>
      </Select>
    </div>
  ),
};
