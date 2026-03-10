import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Text: Story = { args: { variant: "text" } };
export const Rectangular: Story = {
  args: { variant: "rectangular", height: "200px" },
};
export const Avatar: Story = {
  args: { variant: "circular", width: 64, height: 64 },
};

export const CardSkeleton: Story = {
  render: () => (
    <div className="drp-card" style={{ padding: "24px", maxWidth: "400px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "16px",
        }}
      >
        <Skeleton variant="circular" width={40} height={40} />
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="40%" height="10px" />
        </div>
      </div>
      <Skeleton variant="rectangular" height="160px" />
      <div
        style={{
          marginTop: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <Skeleton variant="text" />
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="60%" />
      </div>
    </div>
  ),
};

export const TableSkeleton: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {Array.from({ length: 5 }, (_, i) => (
        <div
          key={i}
          style={{ display: "flex", gap: "16px", alignItems: "center" }}
        >
          <Skeleton variant="circular" width={32} height={32} />
          <Skeleton variant="text" width="25%" />
          <Skeleton variant="text" width="30%" />
          <Skeleton variant="text" width="15%" />
          <Skeleton variant="text" width="10%" />
        </div>
      ))}
    </div>
  ),
};
