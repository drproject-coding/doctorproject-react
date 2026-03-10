import { Meta, StoryObj } from "@storybook/react";
import { SalesList } from "./SalesList";

const meta: Meta<typeof SalesList> = {
  component: SalesList,
  title: "Screens/Sales/SalesList",
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof SalesList>;

export const ListV1: Story = {
  args: { theme: "light", variant: "v1" },
};

export const ListV2: Story = {
  args: { theme: "light", variant: "v2" },
};
