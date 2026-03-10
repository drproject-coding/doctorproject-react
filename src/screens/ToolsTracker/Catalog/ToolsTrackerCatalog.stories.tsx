import type { Meta, StoryObj } from "@storybook/react";
import { ToolsTrackerCatalog } from "./ToolsTrackerCatalog";

const meta: Meta<typeof ToolsTrackerCatalog> = {
  title: "Screens/Tools Tracker/Catalog",
  component: ToolsTrackerCatalog,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof ToolsTrackerCatalog>;

export const Home: Story = {};
export const Browse: Story = { args: { defaultView: "browse" } };
export const BrowseWithPanel: Story = {
  args: { defaultView: "browse", defaultOpenDealId: "3" },
};
export const BrowseWithPanelEndDate: Story = {
  args: { defaultView: "browse", defaultOpenDealId: "4" },
};
export const BrowseMarketing: Story = {
  args: { defaultView: "browse", defaultCategory: "Marketing & sales" },
};
export const BrowseDevelopment: Story = {
  args: { defaultView: "browse", defaultCategory: "Development & IT" },
};
