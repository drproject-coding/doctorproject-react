import type { Meta, StoryObj } from "@storybook/react";
import { ToolsTrackerDashboard } from "./ToolsTrackerDashboard";

const meta: Meta<typeof ToolsTrackerDashboard> = {
  component: ToolsTrackerDashboard,
  title: "Screens/Tools Tracker/Dashboard",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof ToolsTrackerDashboard>;

export const Default: Story = {};

export const OutdatedData: Story = {
  args: {
    syncStatus: {
      lastSynced: "7d ago",
      invoices: "73",
      products: "334",
    },
  },
};

export const FilteredByRefunded: Story = {
  name: "Filtered — Refunded",
  args: {},
};

export const EmptySearch: Story = {
  name: "Empty State (no matching products)",
  args: {
    products: [],
  },
};

export const PageTwo: Story = {
  name: "Pagination — Page 2",
  args: {
    currentPage: 2,
    totalPages: 4,
  },
};
