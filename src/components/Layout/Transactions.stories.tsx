import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TransactionsList } from "../../screens/Transactions/TransactionsList";

const meta: Meta<typeof TransactionsList> = {
  component: TransactionsList,
  title: "Pages/Transactions",
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof TransactionsList>;

export const ListV1: Story = { args: { variant: "listV1" } };
export const ListV2: Story = { args: { variant: "listV2" } };
export const Invoice: Story = { args: { variant: "invoice" } };
export const Empty: Story = { args: { variant: "empty" } };
