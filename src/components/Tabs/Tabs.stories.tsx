import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Tabs>;

const tabItems = [
  { label: "Overview", key: "overview" },
  { label: "Analytics", key: "analytics" },
  { label: "Reports", key: "reports" },
  { label: "Settings", key: "settings" },
];

export const Default: Story = { args: { items: tabItems } };
export const Underline: Story = {
  args: { items: tabItems, variant: "underline" },
};

export const ActiveTab: Story = {
  args: { items: tabItems, activeKey: "analytics" },
};
