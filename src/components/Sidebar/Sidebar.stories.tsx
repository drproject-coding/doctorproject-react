import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";
import { Pictogram } from "../Pictogram/Pictogram";

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  title: "Navigation/Sidebar",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

const P = (name: string) => (
  <Pictogram name={name as any} size={28} aria-hidden={true} />
);

const sampleSections = [
  {
    label: "Main",
    items: [
      { id: "dashboard", label: "Dashboard", icon: P("Layout"), active: true },
      { id: "products", label: "Products", icon: P("Basket") },
      { id: "customers", label: "Customers", icon: P("Apps") },
      { id: "contacts", label: "Contacts", icon: P("Message") },
      { id: "accounts", label: "Accounts", icon: P("Credit card") },
      {
        id: "transactions",
        label: "Transactions",
        icon: P("Up arrow"),
      },
      { id: "sales", label: "Sales", icon: P("Analytics") },
      {
        id: "payments",
        label: "Payments",
        icon: P("Folder"),
        badge: 14,
        badgeVariant: "green" as const,
      },
    ],
  },
  {
    label: "Tools",
    items: [
      { id: "calendar", label: "Calendar", icon: P("Time") },
      {
        id: "inbox",
        label: "Inbox",
        icon: P("Mail"),
        badge: 12,
        badgeVariant: "purple" as const,
      },
      { id: "education", label: "Education", icon: P("Bookmark") },
      { id: "reports", label: "Reports", icon: P("Pie Chart") },
      { id: "support", label: "Support", icon: P("Info") },
    ],
  },
  {
    label: "Account",
    items: [{ id: "settings", label: "Settings", icon: P("Filters") }],
  },
];

const sampleTeam = [
  { name: "Alice Johnson", initials: "AJ" },
  { name: "Bob Smith", initials: "BS" },
  { name: "Carol Davis", initials: "CD" },
];

export const Default: Story = {
  args: {
    brandName: "Doctor Project",
    sections: sampleSections,
    teamMembers: sampleTeam,
  },
};

export const Collapsed: Story = {
  args: {
    brandName: "Doctor Project",
    sections: sampleSections,
    collapsed: true,
  },
};

export const WithBadges: Story = {
  args: {
    brandName: "Doctor Project",
    sections: sampleSections,
    teamMembers: sampleTeam,
  },
};
