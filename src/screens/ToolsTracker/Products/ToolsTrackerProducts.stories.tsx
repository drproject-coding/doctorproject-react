import type { Meta, StoryObj } from "@storybook/react";
import { ToolsTrackerProducts } from "./ToolsTrackerProducts";

const meta: Meta<typeof ToolsTrackerProducts> = {
  title: "Screens/Tools Tracker/Products",
  component: ToolsTrackerProducts,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof ToolsTrackerProducts>;

export const Default: Story = {};
export const AllProducts: Story = { args: { defaultFilter: "all" } };
export const Favorites: Story = { args: { defaultFilter: "favorites" } };
export const Urgent: Story = { args: { defaultFilter: "urgent" } };
export const Soon: Story = { args: { defaultFilter: "soon" } };
export const Safe: Story = { args: { defaultFilter: "safe" } };
export const Expired: Story = { args: { defaultFilter: "expired" } };
export const Refunded: Story = { args: { defaultFilter: "refunded" } };
