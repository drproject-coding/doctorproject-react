import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PaymentsList } from "../../screens/Payments/PaymentsList";

const meta: Meta<typeof PaymentsList> = {
  component: PaymentsList,
  title: "Pages/Payments",
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof PaymentsList>;

export const PaymentsListView: Story = { args: { variant: "list" } };
export const PaymentsSendMoney: Story = { args: { variant: "send-money" } };
export const PaymentsDetails: Story = { args: { variant: "details" } };
export const PaymentsUtilities: Story = { args: { variant: "pay-utilities" } };
