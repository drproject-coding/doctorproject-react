import type { Meta, StoryObj } from "@storybook/react";
import { StatCard } from "./StatCard";

const meta: Meta<typeof StatCard> = {
  title: "Composites/StatCard",
  component: StatCard,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof StatCard>;

export const Default: Story = {
  args: { value: "73%", label: "Higher Conversion" },
};

export const StatsRow: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "16px",
      }}
    >
      <StatCard value="73%" label="Higher Conversion" />
      <StatCard value="50%" label="Faster Time-to-Market" />
      <StatCard value="3x" label="Brand Consistency" />
      <StatCard value="400%" label="ROI in Year One" />
    </div>
  ),
};
