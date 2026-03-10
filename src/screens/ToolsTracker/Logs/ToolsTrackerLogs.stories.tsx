import type { Meta, StoryObj } from "@storybook/react";
import { ToolsTrackerLogs } from "./ToolsTrackerLogs";

const meta: Meta<typeof ToolsTrackerLogs> = {
  title: "Screens/Tools Tracker/Logs",
  component: ToolsTrackerLogs,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof ToolsTrackerLogs>;

/** No activity recorded yet */
export const Empty: Story = {};

/** Loading state — fetching logs */
export const Loading: Story = {
  args: { isLoading: true },
};

/** Recent sync activity — mix of INFO, SUCCESS, WARNING, ERROR, DEBUG */
export const WithLogs: Story = {
  args: { defaultLogs: "recent" },
};

/** Filtered to ERROR level only */
export const ErrorsOnly: Story = {
  args: { defaultLogs: "recent", defaultFilter: "error" },
};

/** Filtered to WARNING level only */
export const WarningsOnly: Story = {
  args: { defaultLogs: "recent", defaultFilter: "warning" },
};

/** Full history — paginated, 38 entries across multiple pages */
export const FullHistory: Story = {
  args: { defaultLogs: "full" },
};
