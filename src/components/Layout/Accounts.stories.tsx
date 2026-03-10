import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AccountsList } from "../../screens/Accounts/AccountsList";

const meta: Meta<typeof AccountsList> = {
  component: AccountsList,
  title: "Pages/Accounts",
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof AccountsList>;

export const ListV1: Story = { args: { variant: "v1" } };
export const ListV2: Story = { args: { variant: "v2" } };
