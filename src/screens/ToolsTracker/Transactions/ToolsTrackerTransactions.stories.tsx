import type { Meta, StoryObj } from "@storybook/react";
import { ToolsTrackerTransactions } from "./ToolsTrackerTransactions";

const meta: Meta<typeof ToolsTrackerTransactions> = {
  title: "Screens/Tools Tracker/Transactions",
  component: ToolsTrackerTransactions,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof ToolsTrackerTransactions>;

export const Default: Story = {};

export const CardView: Story = {
  args: { defaultView: "card", defaultFilter: "all" },
};

export const TableView: Story = {
  args: { defaultView: "table", defaultFilter: "all" },
};

export const FilterPaid: Story = {
  args: { defaultFilter: "paid" },
};

export const FilterHasRefund: Story = {
  args: { defaultFilter: "has-refund" },
};

export const FilterRefunded: Story = {
  args: { defaultFilter: "refunded" },
};
