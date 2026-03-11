import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [undefined, "underline"],
      description:
        "Tab style — omit for the default pill/box style, use 'underline' for a lighter inline navigation pattern.",
    },
    activeKey: {
      control: "text",
      description:
        "Key of the currently active tab — controls the component when managed externally; matches the `key` field of an item in `items`.",
    },
    items: {
      control: "object",
      description:
        "Array of tab definitions, each with a `label` (display text) and `key` (unique identifier used for activeKey matching).",
    },
  },
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
