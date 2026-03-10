import { Meta, StoryObj } from "@storybook/react";
import { PaymentsList } from "./PaymentsList";

const meta: Meta<typeof PaymentsList> = {
  component: PaymentsList,
  title: "Screens/Payments/PaymentsList",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    theme: {
      control: { type: "radio" },
      options: ["light", "dark"],
    },
    variant: {
      control: { type: "radio" },
      options: ["list", "details", "send-money", "pay-utilities"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof PaymentsList>;

// ─── List variant ─────────────────────────────────────────────────────────────

export const ListLight: Story = {
  name: "List – Light Theme",
  args: {
    theme: "light",
    variant: "list",
  },
  parameters: { layout: "fullscreen" },
};

export const ListDark: Story = {
  name: "List – Dark Theme",
  args: {
    theme: "dark",
    variant: "list",
  },
  parameters: { layout: "fullscreen" },
};

// ─── Details (modal) variant ──────────────────────────────────────────────────

export const DetailsLight: Story = {
  name: "Details – Light Theme",
  args: {
    theme: "light",
    variant: "details",
  },
  parameters: { layout: "fullscreen" },
};

export const DetailsDark: Story = {
  name: "Details – Dark Theme",
  args: {
    theme: "dark",
    variant: "details",
  },
  parameters: { layout: "fullscreen" },
};

// ─── Send Money variant ───────────────────────────────────────────────────────

export const SendMoneyLight: Story = {
  name: "Send Money – Light Theme",
  args: {
    theme: "light",
    variant: "send-money",
  },
  parameters: { layout: "fullscreen" },
};

export const SendMoneyDark: Story = {
  name: "Send Money – Dark Theme",
  args: {
    theme: "dark",
    variant: "send-money",
  },
  parameters: { layout: "fullscreen" },
};

// ─── Pay for Utilities variant ────────────────────────────────────────────────

export const PayUtilitiesLight: Story = {
  name: "Pay for Utilities – Light Theme",
  args: {
    theme: "light",
    variant: "pay-utilities",
  },
  parameters: { layout: "fullscreen" },
};

export const PayUtilitiesDark: Story = {
  name: "Pay for Utilities – Dark Theme",
  args: {
    theme: "dark",
    variant: "pay-utilities",
  },
  parameters: { layout: "fullscreen" },
};

// ─── Legacy aliases (backwards compatibility) ─────────────────────────────────

export const Default: Story = {
  args: {
    theme: "light",
    variant: "list",
  },
  parameters: { layout: "fullscreen" },
};

export const LightTheme: Story = {
  args: {
    theme: "light",
    variant: "list",
  },
  parameters: { layout: "fullscreen" },
};

export const DarkTheme: Story = {
  args: {
    theme: "dark",
    variant: "list",
  },
  parameters: { layout: "fullscreen" },
};
