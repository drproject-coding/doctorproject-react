import type { Meta, StoryObj } from "@storybook/react";
import { EmptyState } from "./EmptyState";

const meta: Meta<typeof EmptyState> = {
  title: "Components/EmptyState",
  component: EmptyState,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    title: "No data found",
    description: "There are no items to display yet.",
  },
};

export const WithAction: Story = {
  args: {
    icon: "📦",
    title: "No products",
    description: "Get started by adding your first product.",
    action: <button className="drp-btn drp-btn--primary">Add Product</button>,
  },
};

export const NoResults: Story = {
  args: {
    icon: "🔍",
    title: "No results",
    description: "Try adjusting your search or filter criteria.",
    action: <button className="drp-btn drp-btn--outline">Clear Filters</button>,
  },
};
