import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs } from "./Breadcrumbs";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Layout/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: "object",
      description:
        "Ordered array of breadcrumb segments — each item with a label and optional href; the last item is rendered as the current page (no link).",
    },
  },
};
export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: {
    items: [
      { label: "Home", href: "#" },
      { label: "Users", href: "#" },
      { label: "John Doe" },
    ],
  },
};

export const Long: Story = {
  args: {
    items: [
      { label: "Dashboard", href: "#" },
      { label: "Analytics", href: "#" },
      { label: "Reports", href: "#" },
      { label: "Monthly Revenue" },
    ],
  },
};
