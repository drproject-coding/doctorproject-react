import { Meta, StoryObj } from "@storybook/react";
import { TransactionsList } from "./TransactionsList";

const meta: Meta<typeof TransactionsList> = {
  component: TransactionsList,
  title: "Screens/Transactions/TransactionsList",
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof TransactionsList>;

export const ListV1Light: Story = {
  args: { theme: "light", variant: "listV1" },
};

export const ListV1Dark: Story = {
  args: { theme: "dark", variant: "listV1" },
};

export const ListV2Light: Story = {
  args: { theme: "light", variant: "listV2" },
};

export const ListV2Dark: Story = {
  args: { theme: "dark", variant: "listV2" },
};

export const InvoiceLight: Story = {
  args: { theme: "light", variant: "invoice" },
};

export const InvoiceDark: Story = {
  args: { theme: "dark", variant: "invoice" },
};

export const EmptyLight: Story = {
  args: { theme: "light", variant: "empty" },
};

export const EmptyDark: Story = {
  args: { theme: "dark", variant: "empty" },
};
