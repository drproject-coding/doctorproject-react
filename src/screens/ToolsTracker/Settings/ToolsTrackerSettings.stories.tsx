import type { Meta, StoryObj } from "@storybook/react";
import { ToolsTrackerSettings } from "./ToolsTrackerSettings";

const meta: Meta<typeof ToolsTrackerSettings> = {
  title: "Screens/Tools Tracker/Settings",
  component: ToolsTrackerSettings,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof ToolsTrackerSettings>;

/** Profile & account info */
export const Profile: Story = {};

/** Change password & connected accounts */
export const Security: Story = {
  args: { defaultTab: "security" },
};

/** AppSumo API keys & webhook config */
export const ApiKeys: Story = {
  args: { defaultTab: "api-keys" },
};

/** Sync, notification & display preferences */
export const Preferences: Story = {
  args: { defaultTab: "preferences" },
};
