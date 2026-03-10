import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    text: "This is a tooltip",
    children: (
      <span style={{ textDecoration: "underline", cursor: "help" }}>
        Hover me
      </span>
    ),
  },
};

export const OnButton: Story = {
  render: () => (
    <div style={{ padding: "40px" }}>
      <Tooltip text="Click to save your changes">
        <button className="drp-btn drp-btn--primary">Save</button>
      </Tooltip>
    </div>
  ),
};
