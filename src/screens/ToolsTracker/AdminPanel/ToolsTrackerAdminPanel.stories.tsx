import type { Meta, StoryObj } from "@storybook/react";
import { ToolsTrackerAdminPanel } from "./ToolsTrackerAdminPanel";

const meta: Meta<typeof ToolsTrackerAdminPanel> = {
  title: "Screens/Tools Tracker/Admin Panel",
  component: ToolsTrackerAdminPanel,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof ToolsTrackerAdminPanel>;

export const Users: Story = {};
export const Products: Story = { args: { defaultTab: "products" } };
export const Invoices: Story = { args: { defaultTab: "invoices" } };
export const Activity: Story = { args: { defaultTab: "activity" } };
export const AuditTrail: Story = { args: { defaultTab: "audit-trail" } };
