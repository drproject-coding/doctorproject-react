import type { Meta, StoryObj } from "@storybook/react";
import { ToolsTrackerAnalytics } from "./ToolsTrackerAnalytics";

const meta: Meta<typeof ToolsTrackerAnalytics> = {
  title: "Screens/Tools Tracker/Analytics",
  component: ToolsTrackerAnalytics,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof ToolsTrackerAnalytics>;

export const Default: Story = {};

export const SpendingOverview: Story = {
  args: { defaultTab: "spending-overview" },
};

export const VisualReports: Story = {
  args: { defaultTab: "visual-reports" },
};

export const CategoryAnalysis: Story = {
  args: { defaultTab: "category-analysis" },
};

export const PaymentMethods: Story = {
  args: { defaultTab: "payment-methods" },
};
