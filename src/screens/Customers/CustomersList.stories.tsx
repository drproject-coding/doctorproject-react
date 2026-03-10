import { Meta, StoryObj } from "@storybook/react";
import { CustomersList } from "./CustomersList";

const meta: Meta<typeof CustomersList> = {
  component: CustomersList,
  title: "Screens/Customers/CustomersList",
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof CustomersList>;

export const ListV1: Story = {
  args: { theme: "light", variant: "v1" },
};

export const ListV2: Story = {
  args: { theme: "light", variant: "v2" },
};

export const ListV3: Story = {
  args: { theme: "light", variant: "v3" },
};

export const Details: Story = {
  args: { theme: "light", variant: "details" },
};

export const ListV1Dark: Story = {
  args: { theme: "dark", variant: "v1" },
};

export const ListV2Dark: Story = {
  args: { theme: "dark", variant: "v2" },
};

export const ListV3Dark: Story = {
  args: { theme: "dark", variant: "v3" },
};

export const DetailsDark: Story = {
  args: { theme: "dark", variant: "details" },
};
