import { Meta, StoryObj } from "@storybook/react";
import { ProductsList } from "./ProductsList";

const meta: Meta<typeof ProductsList> = {
  component: ProductsList,
  title: "Screens/Products/ProductsList",
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof ProductsList>;

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
