import type { Meta, StoryObj } from "@storybook/react";
import { ToolsTrackerSyncJobs } from "./ToolsTrackerSyncJobs";

const meta: Meta<typeof ToolsTrackerSyncJobs> = {
  title: "Screens/Tools Tracker/Sync Jobs",
  component: ToolsTrackerSyncJobs,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof ToolsTrackerSyncJobs>;

/** No jobs yet */
export const Empty: Story = {};

/** Three collapsed jobs: PARTIAL, RUNNING, SUCCESS */
export const JobList: Story = {
  args: { defaultScenario: "job-list" },
};

/** PARTIAL job expanded — steps with warnings + warning summary box */
export const PartialExpanded: Story = {
  args: { defaultScenario: "partial-expanded" },
};

/** RUNNING job expanded — Process Invoices in progress, 73 errors + "Show 70 more" */
export const RunningExpanded: Story = {
  args: { defaultScenario: "running-expanded" },
};

/** SUCCESS job expanded — Scan found 0 invoices, all remaining steps PENDING */
export const SuccessExpanded: Story = {
  args: { defaultScenario: "success-expanded" },
};

/** Active sync: early stage (12%) — live banner with step checklist + history */
export const SyncEarly: Story = {
  args: { defaultScenario: "sync-early" },
};

/** Active sync: mid-stage (50%) — compact banner + running job expanded in history */
export const SyncMid: Story = {
  args: { defaultScenario: "sync-mid" },
};
