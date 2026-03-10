import type { Meta, StoryObj } from "@storybook/react";
import { ToolsTrackerReports } from "./ToolsTrackerReports";

const meta: Meta<typeof ToolsTrackerReports> = {
  title: "Screens/Tools Tracker/Reports",
  component: ToolsTrackerReports,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof ToolsTrackerReports>;

export const Default: Story = {};
export const MonthlySpending: Story = {
  args: { defaultTab: "monthly-spending" },
};
export const PurchasesVsRefunds: Story = {
  args: { defaultTab: "purchases-vs-refunds" },
};
export const TopProducts: Story = { args: { defaultTab: "top-products" } };
export const SpendingTrend: Story = { args: { defaultTab: "spending-trend" } };
export const FinancialHealth: Story = {
  args: { defaultTab: "financial-health" },
};
export const PortfolioAnalysis: Story = {
  args: { defaultTab: "portfolio-analysis" },
};
export const PortfolioBreakdown: Story = {
  args: { defaultTab: "portfolio-breakdown" },
};
export const SpendingByVendor: Story = {
  args: { defaultTab: "spending-by-vendor" },
};
