import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./Heading";

const meta: Meta<typeof Heading> = {
  title: "Components/Heading",
  component: Heading,
  tags: ["autodocs"],
  argTypes: {
    level: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6],
    },
    uppercase: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Heading>;

export const H1: Story = { args: { level: 1, children: "Heading 1 — 48px" } };
export const H2: Story = { args: { level: 2, children: "Heading 2 — 36px" } };
export const H3: Story = { args: { level: 3, children: "Heading 3 — 28px" } };
export const H4: Story = { args: { level: 4, children: "Heading 4 — 24px" } };
export const H5: Story = { args: { level: 5, children: "Heading 5 — 20px" } };
export const H6: Story = { args: { level: 6, children: "Heading 6 — 18px" } };

export const Uppercase: Story = {
  args: { level: 1, uppercase: true, children: "Uppercase Heading" },
};

export const AllLevels: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Heading level={1}>H1 — Dashboard Overview</Heading>
      <Heading level={2}>H2 — Analytics Report</Heading>
      <Heading level={3}>H3 — User Management</Heading>
      <Heading level={4}>H4 — Order Details</Heading>
      <Heading level={5}>H5 — Product Filters</Heading>
      <Heading level={6}>H6 — Metadata Section</Heading>
    </div>
  ),
};

export const AllLevelsUppercase: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Heading level={1} uppercase>
        H1 — Dashboard Overview
      </Heading>
      <Heading level={2} uppercase>
        H2 — Analytics Report
      </Heading>
      <Heading level={3} uppercase>
        H3 — User Management
      </Heading>
      <Heading level={4} uppercase>
        H4 — Order Details
      </Heading>
      <Heading level={5} uppercase>
        H5 — Product Filters
      </Heading>
      <Heading level={6} uppercase>
        H6 — Metadata Section
      </Heading>
    </div>
  ),
};
