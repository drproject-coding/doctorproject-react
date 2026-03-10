import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SupportHome } from "../../screens/Support/SupportHome";

const meta: Meta<typeof SupportHome> = {
  component: SupportHome,
  title: "Pages/Support",
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof SupportHome>;

export const HelpCenter: Story = { args: { view: "home" } };
export const HelpCategories: Story = { args: { view: "categories" } };
export const HelpArticle: Story = { args: { view: "article" } };
export const HelpSearch: Story = { args: { view: "search" } };
