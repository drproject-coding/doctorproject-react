import type { Meta, StoryObj } from "@storybook/react";
import { ToolsTrackerImport } from "./ToolsTrackerImport";

const meta: Meta<typeof ToolsTrackerImport> = {
  title: "Screens/Tools Tracker/Import",
  component: ToolsTrackerImport,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof ToolsTrackerImport>;

export const AIImport: Story = {};

export const ManualEntry: Story = {
  args: { defaultMode: "manual" },
};

export const AIImportWithFile: Story = {
  args: { defaultMode: "ai", defaultStep: "form" },
};

export const ManualEntryForm: Story = {
  args: { defaultMode: "manual", defaultStep: "form" },
};
