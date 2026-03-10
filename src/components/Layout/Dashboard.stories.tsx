import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Dashboard } from "../../screens/Dashboard/Dashboard";

const meta: Meta<typeof Dashboard> = {
  component: Dashboard,
  title: "Pages/Dashboard",
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof Dashboard>;

export const DashboardPage: Story = {};
