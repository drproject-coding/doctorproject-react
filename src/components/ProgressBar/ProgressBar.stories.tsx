import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "./ProgressBar";

const meta: Meta<typeof ProgressBar> = {
  title: "Components/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100 },
      description:
        "Completion percentage from 0–100 — drives the filled portion of the bar.",
    },
    color: {
      control: "select",
      options: [undefined, "mint", "pink", "yellow", "grey"],
      description:
        "Fill color — use 'mint' for healthy/complete, 'pink' for critical/over-limit, 'yellow' for warning states, 'grey' for neutral.",
    },
    size: {
      control: "select",
      options: [undefined, "sm", "lg"],
      description:
        "Bar height — use 'sm' in dense data tables, the default for most cards, 'lg' as a standalone metric on dashboards.",
    },
  },
};
export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = { args: { value: 65 } };
export const WithLabel: Story = { args: { value: 72, label: "Storage Used" } };
export const Mint: Story = {
  args: { value: 90, color: "mint", label: "Complete" },
};
export const Pink: Story = {
  args: { value: 25, color: "pink", label: "Critical" },
};
export const Small: Story = { args: { value: 50, size: "sm" } };
export const Large: Story = { args: { value: 80, size: "lg" } };

export const MultipleMetrics: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        maxWidth: "400px",
      }}
    >
      <ProgressBar value={85} label="CPU Usage" />
      <ProgressBar value={62} color="mint" label="Memory" />
      <ProgressBar value={91} color="pink" label="Disk Space" />
      <ProgressBar value={34} color="yellow" label="Network" />
    </div>
  ),
};
