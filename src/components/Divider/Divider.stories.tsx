import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "Components/Divider",
  component: Divider,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {};
export const WithLabel: Story = { args: { label: "OR" } };
export const Section: Story = { args: { label: "SECTION 02" } };

export const InContext: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        maxWidth: "400px",
      }}
    >
      <p>Content above the divider</p>
      <Divider />
      <p>Content below the divider</p>
      <Divider label="OR" />
      <p>Alternative content</p>
    </div>
  ),
};
