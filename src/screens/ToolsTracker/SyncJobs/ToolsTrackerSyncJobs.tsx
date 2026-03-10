import React, { useState } from "react";
import { ToolsTrackerSidebar } from "../shared/ToolsTrackerSidebar";
import { ToolsTrackerFooter } from "../shared/ToolsTrackerFooter";
import { TopBar } from "../../../components/TopBar/TopBar";
import { Button } from "../../../components/Button/Button";
import { Tag } from "../../../components/Tag/Tag";

/* =========================================================================== */
/* Types                                                                         */
/* =========================================================================== */

export type SyncScenario =
  | "empty"
  | "job-list"
  | "partial-expanded"
  | "running-expanded"
  | "success-expanded"
  | "sync-early"
  | "sync-mid";

type JobStatus = "partial" | "running" | "success" | "failed";
type StepStatus = "pending" | "running" | "completed" | "warning" | "error";

interface StepSubItem {
  type: "warning" | "error";
  id: string;
  message: string;
}

interface JobStep {
  name: string;
  status: StepStatus;
  summary?: string;
  time?: string;
  subItems?: StepSubItem[];
  showMore?: number;
}

interface SyncJob {
  id: string;
  status: JobStatus;
  startedAt: string;
  summary: string;
  duration?: string;
  steps: JobStep[];
  warnings?: string[];
  errors?: string[];
  errorsMore?: number;
}

export interface ToolsTrackerSyncJobsProps {
  defaultScenario?: SyncScenario;
}

/* =========================================================================== */
/* Static data                                                                   */
/* =========================================================================== */

const JOB_PARTIAL: SyncJob = {
  id: "job-1",
  status: "partial",
  startedAt: "Mar 3, 2026  06:34 AM",
  summary: "127 inv, 333 prod synced",
  duration: "7m 33s",
  steps: [
    {
      name: "Scan AppSumo",
      status: "completed",
      summary: "11 pages – 127 invoices – 96 paid, 31 partial refund",
      time: "33s",
    },
    {
      name: "Delta Detection",
      status: "completed",
      summary: "4 new, 123 up to date",
      time: "450ms",
    },
    {
      name: "Process Invoices",
      status: "completed",
      summary: "4 total, 4 skipped",
      time: "15s",
      subItems: [
        { type: "warning", id: "#56O0db03", message: "No financial data" },
        { type: "warning", id: "#f01dOO58", message: "No financial data" },
        { type: "warning", id: "#4b8c7ba7", message: "No financial data" },
        { type: "warning", id: "#7d6ce438", message: "No financial data" },
      ],
    },
    {
      name: "Sync Products",
      status: "warning",
      summary:
        "334 read (active: 280, outdated: 5, refunded: 49) – 333 synced, 1 failed",
      time: "6m 41s",
    },
    {
      name: "Enrich Categories",
      status: "warning",
      summary: "",
      time: "4m 34s",
    },
    {
      name: "Finalize & Reload",
      status: "completed",
      summary: "73 inv, 334 prod in DB – 96 paid, 31 partial refund",
      time: "3s",
    },
  ],
  warnings: [
    "Invoice #560ddb03: No financial data",
    "Invoice #f01d0058: No financial data",
    "Invoice #4b8c7ba7: No financial data",
    "Invoice #7d6ce438: No financial data",
  ],
};

const JOB_RUNNING_ERRORS: SyncJob = {
  id: "job-2",
  status: "running",
  startedAt: "Mar 3, 2026  06:25 AM",
  summary: "127 inv, 0 prod synced",
  duration: "—",
  steps: [
    {
      name: "Scan AppSumo",
      status: "completed",
      summary: "11 pages – 127 invoices – 96 paid, 31 partial refund",
      time: "33s",
    },
    {
      name: "Delta Detection",
      status: "completed",
      summary: "127 new",
      time: "152ms",
    },
    {
      name: "Process Invoices",
      status: "running",
      subItems: [
        {
          type: "error",
          id: "#e6a79816",
          message: "Failed to get database invoice ID",
        },
        {
          type: "error",
          id: "#485f6c3e",
          message: "Failed to get database invoice ID",
        },
        {
          type: "error",
          id: "#d1bcf2ec",
          message: "Failed to get database invoice ID",
        },
        {
          type: "error",
          id: "#d2aa3a9f",
          message: "Failed to get database invoice ID",
        },
        {
          type: "error",
          id: "#585a2c2c",
          message: "Failed to get database invoice ID",
        },
      ],
      showMore: 70,
    },
    { name: "Sync Products", status: "pending" },
    { name: "Enrich Categories", status: "pending" },
    { name: "Finalize & Reload", status: "pending" },
  ],
  errors: [
    "Invoice #e6a79816: Failed to get database invoice ID",
    "Invoice #485f6c3e: Failed to get database invoice ID",
    "Invoice #d1bcf2ec: Failed to get database invoice ID",
    "Invoice #d2aa3a9f: Failed to get database invoice ID",
    "Invoice #d2aa3a9f: Failed to get database invoice ID",
    "Invoice #585a2c2c: Failed to get database invoice ID",
  ],
  errorsMore: 68,
  warnings: [
    "Invoice #560db03: No financial data",
    "Invoice #f01d0058: No financial data",
  ],
};

const JOB_SUCCESS_ZERO: SyncJob = {
  id: "job-3",
  status: "success",
  startedAt: "Mar 2, 2026  07:16 AM",
  summary: "0 inv, 0 prod synced",
  duration: "0s",
  steps: [
    {
      name: "Scan AppSumo",
      status: "completed",
      summary: "0 invoices",
      time: "2ms",
    },
    { name: "Delta Detection", status: "pending" },
    { name: "Process Invoices", status: "pending" },
    { name: "Sync Products", status: "pending" },
    { name: "Enrich Categories", status: "pending" },
    { name: "Finalize & Reload", status: "pending" },
  ],
};

const JOB_ACTIVE: SyncJob = {
  id: "job-4",
  status: "running",
  startedAt: "Mar 8, 2026  06:43 AM",
  summary: "0 inv, 0 prod synced",
  duration: "—",
  steps: [
    {
      name: "Scan AppSumo",
      status: "completed",
      summary: "11 pages – 127 invoices – 96 paid, 31 partial refund",
      time: "29s",
    },
    {
      name: "Delta Detection",
      status: "completed",
      summary: "4 new, 123 up to date",
      time: "447ms",
    },
    { name: "Process Invoices", status: "running" },
    { name: "Sync Products", status: "pending" },
    { name: "Enrich Categories", status: "pending" },
    { name: "Finalize & Reload", status: "pending" },
  ],
};

const STEP_NAMES = [
  "Scan AppSumo",
  "Delta Detection",
  "Process Invoices",
  "Sync Products",
  "Enrich Categories",
  "Finalize & Reload",
];

/* =========================================================================== */
/* Scenario config                                                               */
/* =========================================================================== */

interface ScenarioConfig {
  jobs: SyncJob[];
  expandedId: string | null;
  syncProgress: number | null;
  syncMessage: string;
  syncElapsed: number;
  syncActiveStep: number; // index into STEP_NAMES
}

const SCENARIOS: Record<SyncScenario, ScenarioConfig> = {
  empty: {
    jobs: [],
    expandedId: null,
    syncProgress: null,
    syncMessage: "",
    syncElapsed: 0,
    syncActiveStep: 0,
  },
  "job-list": {
    jobs: [JOB_PARTIAL, JOB_RUNNING_ERRORS, JOB_SUCCESS_ZERO],
    expandedId: null,
    syncProgress: null,
    syncMessage: "",
    syncElapsed: 0,
    syncActiveStep: 0,
  },
  "partial-expanded": {
    jobs: [JOB_PARTIAL, JOB_RUNNING_ERRORS, JOB_SUCCESS_ZERO],
    expandedId: "job-1",
    syncProgress: null,
    syncMessage: "",
    syncElapsed: 0,
    syncActiveStep: 0,
  },
  "running-expanded": {
    jobs: [JOB_PARTIAL, JOB_RUNNING_ERRORS, JOB_SUCCESS_ZERO],
    expandedId: "job-2",
    syncProgress: null,
    syncMessage: "",
    syncElapsed: 0,
    syncActiveStep: 0,
  },
  "success-expanded": {
    jobs: [JOB_PARTIAL, JOB_RUNNING_ERRORS, JOB_SUCCESS_ZERO],
    expandedId: "job-3",
    syncProgress: null,
    syncMessage: "",
    syncElapsed: 0,
    syncActiveStep: 0,
  },
  "sync-early": {
    jobs: [JOB_ACTIVE, JOB_PARTIAL, JOB_RUNNING_ERRORS, JOB_SUCCESS_ZERO],
    expandedId: null,
    syncProgress: 12,
    syncMessage: "Scanning invoice page 6/11.",
    syncElapsed: 15,
    syncActiveStep: 0,
  },
  "sync-mid": {
    jobs: [JOB_ACTIVE, JOB_PARTIAL, JOB_RUNNING_ERRORS, JOB_SUCCESS_ZERO],
    expandedId: "job-4",
    syncProgress: 50,
    syncMessage: "Processing invoice 2/4",
    syncElapsed: 36,
    syncActiveStep: 2,
  },
};

/* =========================================================================== */
/* Step icon                                                                     */
/* =========================================================================== */

const STEP_ICON_COLORS: Record<StepStatus, string> = {
  completed: "#22c55e",
  running: "var(--drp-purple, #7c3aed)",
  pending: "transparent",
  warning: "#f97316",
  error: "#ef4444",
};

const StepIcon = ({ status }: { status: StepStatus }) => (
  <span
    style={{
      display: "inline-block",
      width: 10,
      height: 10,
      borderRadius: 2,
      background: STEP_ICON_COLORS[status],
      border:
        status === "pending"
          ? "1.5px solid #9ca3af"
          : `1.5px solid ${STEP_ICON_COLORS[status]}`,
      flexShrink: 0,
    }}
  />
);

/* =========================================================================== */
/* Step status tag                                                               */
/* =========================================================================== */

const StepStatusTag = ({ status }: { status: StepStatus }) => {
  if (status === "completed") return <Tag color="mint">COMPLETED</Tag>;
  if (status === "running")
    return (
      <Tag color="purple" filled>
        RUNNING
      </Tag>
    );
  if (status === "warning") return <Tag color="orange">WARNING</Tag>;
  if (status === "error") return <Tag color="pink">ERROR</Tag>;
  return <Tag color="grey">PENDING</Tag>;
};

/* =========================================================================== */
/* Job status tag                                                                */
/* =========================================================================== */

const JobStatusTag = ({ status }: { status: JobStatus }) => {
  if (status === "partial") return <Tag color="orange">PARTIAL</Tag>;
  if (status === "running") return <Tag color="purple">RUNNING</Tag>;
  if (status === "success") return <Tag color="mint">SUCCESS</Tag>;
  return <Tag color="pink">FAILED</Tag>;
};

/* =========================================================================== */
/* Warning / Error summary boxes                                                 */
/* =========================================================================== */

const WarningBox = ({ items }: { items: string[] }) => (
  <div
    style={{
      borderLeft: "3px solid #f97316",
      background: "#fff7ed",
      padding: "10px 14px",
      marginTop: 8,
      borderRadius: "0 4px 4px 0",
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 6,
        marginBottom: 6,
        fontWeight: 600,
        fontSize: 13,
        color: "#c2410c",
      }}
    >
      <span>⚠</span>
      {items.length} warning{items.length !== 1 ? "s" : ""}
    </div>
    {items.map((msg, i) => (
      <div
        key={i}
        style={{
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          fontSize: 11,
          color: "#c2410c",
          marginBottom: 2,
          paddingLeft: 14,
        }}
      >
        {msg}
      </div>
    ))}
  </div>
);

const ErrorBox = ({ items, more }: { items: string[]; more?: number }) => (
  <div
    style={{
      borderLeft: "3px solid #ef4444",
      background: "#fef2f2",
      padding: "10px 14px",
      marginTop: 8,
      borderRadius: "0 4px 4px 0",
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 6,
        marginBottom: 6,
        fontWeight: 600,
        fontSize: 13,
        color: "#b91c1c",
      }}
    >
      <span>✕</span>
      {items.length + (more ?? 0)} error{items.length !== 1 ? "s" : ""}
    </div>
    {items.map((msg, i) => (
      <div
        key={i}
        style={{
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          fontSize: 11,
          color: "#b91c1c",
          marginBottom: 2,
          paddingLeft: 14,
        }}
      >
        {msg}
      </div>
    ))}
    {more && more > 0 && (
      <div
        style={{
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          fontSize: 11,
          color: "#b91c1c",
          paddingLeft: 14,
          fontStyle: "italic",
        }}
      >
        ...and {more} more
      </div>
    )}
  </div>
);

/* =========================================================================== */
/* Step table                                                                    */
/* =========================================================================== */

const COL_STEP = "42%";
const COL_STATUS = "12%";
const COL_SUMMARY = "36%";
const COL_TIME = "10%";

const StepTable = ({
  steps,
  warnings,
  errors,
  errorsMore,
}: {
  steps: JobStep[];
  warnings?: string[];
  errors?: string[];
  errorsMore?: number;
}) => (
  <div
    style={{
      borderTop: "1px dashed #e5e7eb",
      marginTop: 0,
    }}
  >
    {/* Header */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `${COL_STEP} ${COL_STATUS} ${COL_SUMMARY} ${COL_TIME}`,
        padding: "8px 12px",
        borderBottom: "1px solid #f3f4f6",
      }}
    >
      {["STEP", "STATUS", "SUMMARY", "TIME"].map((h) => (
        <span
          key={h}
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.07em",
            color: "#9ca3af",
            textTransform: "uppercase",
          }}
        >
          {h}
        </span>
      ))}
    </div>

    {/* Rows */}
    {steps.map((step) => (
      <div key={step.name}>
        {/* Step row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `${COL_STEP} ${COL_STATUS} ${COL_SUMMARY} ${COL_TIME}`,
            padding: "8px 12px",
            borderBottom: "1px solid #f9fafb",
            alignItems: "flex-start",
          }}
        >
          {/* Step name */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <StepIcon status={step.status} />
            <span
              style={{
                fontSize: 13,
                color: step.status === "pending" ? "#9ca3af" : "#374151",
              }}
            >
              {step.name}
            </span>
          </div>

          {/* Status */}
          <div>
            <StepStatusTag status={step.status} />
          </div>

          {/* Summary */}
          <span style={{ fontSize: 12, color: "#6b7280" }}>{step.summary}</span>

          {/* Time */}
          <span
            style={{
              fontSize: 12,
              color: "#9ca3af",
              textAlign: "right",
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
            }}
          >
            {step.time ?? "—"}
          </span>
        </div>

        {/* Sub-items */}
        {step.subItems && step.subItems.length > 0 && (
          <div
            style={{
              paddingLeft: 40,
              paddingRight: 12,
              paddingBottom: 8,
              borderBottom: "1px solid #f9fafb",
            }}
          >
            {step.subItems.map((sub, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 3,
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    color: sub.type === "error" ? "#ef4444" : "#f97316",
                    flexShrink: 0,
                  }}
                >
                  {sub.type === "error" ? "✕" : "⚠"}
                </span>
                <span
                  style={{
                    fontSize: 12,
                    color: "#374151",
                    fontFamily:
                      "ui-monospace, SFMono-Regular, Menlo, monospace",
                    flexShrink: 0,
                  }}
                >
                  Invoice {sub.id}
                </span>
                <span style={{ fontSize: 12, color: "#6b7280" }}>
                  {sub.message}
                </span>
              </div>
            ))}
            {step.showMore && step.showMore > 0 && (
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--drp-purple, #7c3aed)",
                  cursor: "pointer",
                  fontSize: 12,
                  padding: 0,
                  marginTop: 4,
                }}
              >
                Show {step.showMore} more
              </button>
            )}
          </div>
        )}
      </div>
    ))}

    {/* Summary boxes */}
    {(errors && errors.length > 0) || (warnings && warnings.length > 0) ? (
      <div style={{ padding: "8px 12px 12px" }}>
        {errors && errors.length > 0 && (
          <ErrorBox items={errors} more={errorsMore} />
        )}
        {warnings && warnings.length > 0 && <WarningBox items={warnings} />}
      </div>
    ) : null}
  </div>
);

/* =========================================================================== */
/* Job row                                                                       */
/* =========================================================================== */

const JobRow = ({
  job,
  expanded,
  onToggle,
}: {
  job: SyncJob;
  expanded: boolean;
  onToggle: () => void;
}) => (
  <div
    style={{
      border: "1px solid #e5e7eb",
      borderRadius: 4,
      marginBottom: 6,
      background: "#fff",
      overflow: "hidden",
    }}
  >
    {/* Header */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "10px 14px",
        cursor: "pointer",
      }}
      onClick={onToggle}
    >
      <JobStatusTag status={job.status} />
      <Tag color="purple">DELTA SYNC</Tag>
      <span style={{ fontSize: 13, color: "#374151", flex: 1, marginLeft: 4 }}>
        {job.startedAt}
      </span>
      <span style={{ fontSize: 13, color: "#6b7280" }}>{job.summary}</span>
      <span
        style={{
          fontSize: 12,
          color: "#9ca3af",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          marginLeft: 16,
          minWidth: 52,
          textAlign: "right",
        }}
      >
        {job.duration ?? "—"}
      </span>
      <span style={{ fontSize: 12, color: "#9ca3af", marginLeft: 8 }}>
        {expanded ? "▼" : "▶"}
      </span>
    </div>

    {/* Expanded step table */}
    {expanded && (
      <StepTable
        steps={job.steps}
        warnings={job.warnings}
        errors={job.errors}
        errorsMore={job.errorsMore}
      />
    )}
  </div>
);

/* =========================================================================== */
/* Sync progress banner                                                          */
/* =========================================================================== */

const SyncProgressBanner = ({
  progress,
  message,
  elapsed,
  activeStep,
  showChecklist,
}: {
  progress: number;
  message: string;
  elapsed: number;
  activeStep: number;
  showChecklist: boolean;
}) => (
  <div
    style={{
      border: "1px solid #e5e7eb",
      borderRadius: 6,
      background: "#fff",
      padding: "14px 16px",
      marginBottom: 20,
    }}
  >
    {/* Top row */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 10,
      }}
    >
      {/* Pulsing green dot */}
      <span
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#22c55e",
          flexShrink: 0,
          boxShadow: "0 0 0 2px rgba(34,197,94,0.3)",
        }}
      />
      <span
        style={{ fontSize: 14, fontWeight: 500, color: "#111827", flex: 1 }}
      >
        Delta Sync in progress
      </span>
      <span
        style={{
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          fontSize: 13,
          color: "#6b7280",
        }}
      >
        {elapsed}s
      </span>
      {/* Stop button — red, small */}
      <button
        style={{
          background: "#ef4444",
          color: "#fff",
          border: "none",
          borderRadius: 4,
          padding: "4px 12px",
          fontSize: 12,
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Stop
      </button>
    </div>

    {/* Progress bar */}
    <div
      style={{
        height: 6,
        background: "#e5e7eb",
        borderRadius: 3,
        overflow: "hidden",
        marginBottom: 6,
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          height: "100%",
          background: "var(--drp-purple, #7c3aed)",
          borderRadius: 3,
          transition: "width 0.4s ease",
        }}
      />
    </div>

    {/* Progress % + message */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: showChecklist ? 12 : 0,
      }}
    >
      <span style={{ fontSize: 12, color: "#6b7280" }}>{message}</span>
      <span
        style={{
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          fontSize: 12,
          color: "#6b7280",
        }}
      >
        {progress}%
      </span>
    </div>

    {/* Step checklist (early state only) */}
    {showChecklist && (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
          marginTop: 4,
        }}
      >
        {STEP_NAMES.map((name, i) => {
          const isActive = i === activeStep;
          const isDone = i < activeStep;
          return (
            <div
              key={name}
              style={{ display: "flex", alignItems: "center", gap: 8 }}
            >
              <span
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: 3,
                  border: isActive
                    ? "2px solid var(--drp-purple, #7c3aed)"
                    : isDone
                      ? "2px solid #22c55e"
                      : "1.5px solid #d1d5db",
                  background: isActive
                    ? "var(--drp-purple, #7c3aed)"
                    : isDone
                      ? "#22c55e"
                      : "transparent",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {(isActive || isDone) && (
                  <span style={{ color: "white", fontSize: 8, lineHeight: 1 }}>
                    ✓
                  </span>
                )}
              </span>
              <span
                style={{
                  fontSize: 12,
                  color: isActive ? "#111827" : isDone ? "#6b7280" : "#9ca3af",
                  fontWeight: isActive ? 500 : 400,
                }}
              >
                {name}
              </span>
            </div>
          );
        })}
      </div>
    )}
  </div>
);

/* =========================================================================== */
/* Main component                                                                */
/* =========================================================================== */

export const ToolsTrackerSyncJobs: React.FC<ToolsTrackerSyncJobsProps> = ({
  defaultScenario = "empty",
}) => {
  const config = SCENARIOS[defaultScenario];
  const [expandedId, setExpandedId] = useState<string | null>(
    config.expandedId,
  );

  const toggleJob = (id: string) =>
    setExpandedId((prev) => (prev === id ? null : id));

  const hasSyncBanner = config.syncProgress !== null;
  const showChecklist = hasSyncBanner && config.syncProgress! < 25;

  return (
    <div className="drp-app-shell" style={{ display: "flex", height: "100vh" }}>
      <ToolsTrackerSidebar activeId="sync-jobs" />
      <div
        className="main-content"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          minWidth: 0,
        }}
      >
        <TopBar
          title="Sync Jobs"
          actions={
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Button variant="primary">
                <span style={{ marginRight: 6 }}>↻</span>
                Run Sync
              </Button>
              <button
                className="drp-btn drp-btn--outline drp-btn--sm"
                aria-label="Notifications"
                style={{ padding: "6px 10px" }}
              >
                🔔
              </button>
            </div>
          }
        />

        <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px" }}>
          {/* Live sync banner */}
          {hasSyncBanner && (
            <SyncProgressBanner
              progress={config.syncProgress!}
              message={config.syncMessage}
              elapsed={config.syncElapsed}
              activeStep={config.syncActiveStep}
              showChecklist={showChecklist}
            />
          )}

          {/* Job History */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <h2
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: "#111827",
                margin: 0,
              }}
            >
              Job History
            </h2>
            <div style={{ display: "flex", gap: 8 }}>
              <Button variant="outline">Load History</Button>
              <Button variant="outline">Clear History</Button>
              <Button variant="primary">Refresh</Button>
            </div>
          </div>

          {/* Job list */}
          <div
            style={{
              border: "1px solid #374151",
              borderRadius: 6,
              overflow: "hidden",
              background: "#f9fafb",
              padding: 8,
            }}
          >
            {config.jobs.length === 0 ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "48px 24px",
                  background: "#fff",
                  borderRadius: 4,
                }}
              >
                <span className="drp-text drp-text--sm drp-text--muted">
                  No sync jobs yet. Click "Run Sync" to start.
                </span>
              </div>
            ) : (
              config.jobs.map((job) => (
                <JobRow
                  key={job.id}
                  job={job}
                  expanded={expandedId === job.id}
                  onToggle={() => toggleJob(job.id)}
                />
              ))
            )}
          </div>
        </div>

        <ToolsTrackerFooter />
      </div>
    </div>
  );
};
