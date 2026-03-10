import { Meta, StoryObj } from "@storybook/react";
import { AccountsList } from "./AccountsList";

const meta: Meta<typeof AccountsList> = {
  component: AccountsList,
  title: "Screens/Accounts/AccountsList",
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof AccountsList>;

export const V1Light: Story = {
  args: { theme: "light", variant: "v1" },
};

export const V1Dark: Story = {
  args: { theme: "dark", variant: "v1" },
};

export const V2Light: Story = {
  args: { theme: "light", variant: "v2" },
};

export const V2Dark: Story = {
  args: { theme: "dark", variant: "v2" },
};
