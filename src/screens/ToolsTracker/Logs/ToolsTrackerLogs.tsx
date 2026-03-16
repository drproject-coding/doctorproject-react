import React, { useState } from "react";
import { ToolsTrackerSidebar } from "../shared/ToolsTrackerSidebar";
import { ToolsTrackerFooter } from "../shared/ToolsTrackerFooter";
import { TopBar } from "../../../components/TopBar/TopBar";
import { Button } from "../../../components/Button/Button";
import { Tag } from "../../../components/Tag/Tag";

/* =========================================================================== */
/* Types                                                                         */
/* =========================================================================== */

type LogLevel = "all" | "info" | "success" | "warning" | "error" | "debug";

interface LogEntry {
  id: string;
  timestamp: string;
  level: Exclude<LogLevel, "all">;
  message: string;
  details?: string;
}

export interface ToolsTrackerLogsProps {
  defaultFilter?: LogLevel;
  defaultLogs?: "empty" | "recent" | "full";
  isLoading?: boolean;
}

/* =========================================================================== */
/* Sample data                                                                   */
/* =========================================================================== */

const RECENT_LOGS: LogEntry[] = [
  {
    id: "1",
    timestamp: "2026-03-08 10:45:12",
    level: "info",
    message: "Sync started — fetching AppSumo data",
  },
  {
    id: "2",
    timestamp: "2026-03-08 10:45:13",
    level: "success",
    message: "Connected to AppSumo API successfully",
  },
  {
    id: "3",
    timestamp: "2026-03-08 10:45:15",
    level: "info",
    message: "Scanning account for new invoices…",
  },
  {
    id: "4",
    timestamp: "2026-03-08 10:45:17",
    level: "success",
    message: "Found 3 new invoices",
  },
  {
    id: "5",
    timestamp: "2026-03-08 10:45:18",
    level: "info",
    message: "Processing invoice #7d6ce438 — AppSumo (Nov 28, 2022)",
  },
  {
    id: "6",
    timestamp: "2026-03-08 10:45:20",
    level: "success",
    message: "Invoice #7d6ce438 imported (5 products linked)",
  },
  {
    id: "7",
    timestamp: "2026-03-08 10:45:21",
    level: "info",
    message: "Processing invoice #a3f91b22 — AppSumo (Jan 14, 2026)",
  },
  {
    id: "8",
    timestamp: "2026-03-08 10:45:23",
    level: "warning",
    message: "Rate limit approaching — 80% of hourly quota used",
    details:
      "Current usage: 240/300 requests. Throttling next batch to 2 req/s.",
  },
  {
    id: "9",
    timestamp: "2026-03-08 10:45:24",
    level: "success",
    message: "Invoice #a3f91b22 imported (2 products linked)",
  },
  {
    id: "10",
    timestamp: "2026-03-08 10:45:26",
    level: "error",
    message: "Failed to fetch product details for ID 3055 — connection timeout",
    details:
      "Timeout after 10 000 ms. Endpoint: https://appsumo.com/api/products/3055. Retry 1/3 scheduled.",
  },
  {
    id: "11",
    timestamp: "2026-03-08 10:45:30",
    level: "info",
    message: "Retrying product ID 3055 (attempt 2/3)…",
  },
  {
    id: "12",
    timestamp: "2026-03-08 10:45:32",
    level: "success",
    message: "Product ID 3055 (WriterZen) fetched on retry",
  },
  {
    id: "13",
    timestamp: "2026-03-08 10:45:33",
    level: "info",
    message: "Processing invoice #e8b40d71 — AppSumo (Feb 08, 2026)",
  },
  {
    id: "14",
    timestamp: "2026-03-08 10:45:35",
    level: "error",
    message: "Invoice #e8b40d71 skipped — duplicate detected",
    details:
      "Invoice already exists in database with matching UUID. Skipping to avoid duplicate entry.",
  },
  {
    id: "15",
    timestamp: "2026-03-08 10:45:36",
    level: "warning",
    message:
      "Product 'Pretty Prompt' (ID 3052) status is OUTDATED — no active plan found",
  },
  {
    id: "16",
    timestamp: "2026-03-08 10:45:37",
    level: "debug",
    message: "Cache updated: products=334, invoices=73",
  },
  {
    id: "17",
    timestamp: "2026-03-08 10:45:38",
    level: "success",
    message: "Sync completed — 2 invoices imported, 7 products updated",
  },
];

const FULL_LOGS: LogEntry[] = [
  {
    id: "f1",
    timestamp: "2026-03-05 09:12:01",
    level: "info",
    message: "Session started for user yfatihi.pro",
  },
  {
    id: "f2",
    timestamp: "2026-03-05 09:12:03",
    level: "debug",
    message: "Loading cached product list (334 items)",
  },
  {
    id: "f3",
    timestamp: "2026-03-05 09:12:04",
    level: "success",
    message: "Dashboard ready",
  },
  {
    id: "f4",
    timestamp: "2026-03-05 09:15:10",
    level: "info",
    message: "Manual sync triggered by user",
  },
  {
    id: "f5",
    timestamp: "2026-03-05 09:15:11",
    level: "success",
    message: "AppSumo OAuth token valid — no re-auth needed",
  },
  {
    id: "f6",
    timestamp: "2026-03-05 09:15:14",
    level: "info",
    message: "Fetching invoice page 1/4…",
  },
  {
    id: "f7",
    timestamp: "2026-03-05 09:15:16",
    level: "info",
    message: "Fetching invoice page 2/4…",
  },
  {
    id: "f8",
    timestamp: "2026-03-05 09:15:18",
    level: "info",
    message: "Fetching invoice page 3/4…",
  },
  {
    id: "f9",
    timestamp: "2026-03-05 09:15:20",
    level: "warning",
    message: "Page 4/4 returned empty — possible end of history",
  },
  {
    id: "f10",
    timestamp: "2026-03-05 09:15:21",
    level: "success",
    message: "73 invoices fetched in total",
  },
  {
    id: "f11",
    timestamp: "2026-03-05 09:15:22",
    level: "info",
    message: "Diffing against existing database (71 stored)…",
  },
  {
    id: "f12",
    timestamp: "2026-03-05 09:15:23",
    level: "success",
    message: "2 new invoices detected",
  },
  {
    id: "f13",
    timestamp: "2026-03-05 09:15:24",
    level: "info",
    message: "Saving new invoices to database…",
  },
  {
    id: "f14",
    timestamp: "2026-03-05 09:15:25",
    level: "success",
    message: "Invoice #e8b40d71 saved",
  },
  {
    id: "f15",
    timestamp: "2026-03-05 09:15:26",
    level: "success",
    message: "Invoice #a3f91b22 saved",
  },
  {
    id: "f16",
    timestamp: "2026-03-05 09:15:27",
    level: "info",
    message: "Linking products to invoices…",
  },
  {
    id: "f17",
    timestamp: "2026-03-05 09:15:29",
    level: "error",
    message:
      "Product slug collision: 'writerzen' already exists with different ID",
    details:
      "Existing ID: 2940 | New ID: 3051. Keeping existing record and updating metadata only.",
  },
  {
    id: "f18",
    timestamp: "2026-03-05 09:15:30",
    level: "warning",
    message:
      "3 products have no refund deadline set — deadline may have passed",
  },
  {
    id: "f19",
    timestamp: "2026-03-05 09:15:31",
    level: "success",
    message: "All products linked — 334 total in portfolio",
  },
  {
    id: "f20",
    timestamp: "2026-03-05 09:15:32",
    level: "debug",
    message: "Persisting session state to disk",
  },
  {
    id: "f21",
    timestamp: "2026-03-05 09:15:33",
    level: "success",
    message: "Sync complete — total time: 23 s",
  },
  ...RECENT_LOGS,
];

/* =========================================================================== */
/* Level helpers                                                                 */
/* =========================================================================== */

const LEVEL_TAG_COLOR: Record<Exclude<LogLevel, "all">, string> = {
  info: "purple",
  success: "mint",
  warning: "orange",
  error: "pink",
  debug: "grey",
};

const LevelTag = ({ level }: { level: Exclude<LogLevel, "all"> }) => (
  <Tag color={LEVEL_TAG_COLOR[level] as any}>{level.toUpperCase()}</Tag>
);

/* =========================================================================== */
/* Log Row                                                                       */
/* =========================================================================== */

const LogRow = ({ entry }: { entry: LogEntry }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{
        padding: "8px 12px",
        borderBottom: "1px solid #f3f4f6",
        cursor: entry.details ? "pointer" : "default",
      }}
      onClick={() => entry.details && setExpanded((v) => !v)}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
        {/* Timestamp */}
        <span
          style={{
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
            fontSize: 11,
            color: "#9ca3af",
            whiteSpace: "nowrap",
            flexShrink: 0,
            paddingTop: 1,
          }}
        >
          {entry.timestamp}
        </span>

        {/* Level */}
        <div style={{ flexShrink: 0 }}>
          <LevelTag level={entry.level} />
        </div>

        {/* Message */}
        <span style={{ fontSize: 13, color: "#374151", flex: 1 }}>
          {entry.message}
        </span>

        {/* Expand indicator */}
        {entry.details && (
          <span style={{ fontSize: 11, color: "#9ca3af", flexShrink: 0 }}>
            {expanded ? "▲" : "▼"}
          </span>
        )}
      </div>

      {/* Expanded details */}
      {expanded && entry.details && (
        <div
          style={{
            marginTop: 6,
            marginLeft: 220,
            padding: "8px 12px",
            background: "#f9fafb",
            borderRadius: 4,
            borderLeft: "3px solid #e5e7eb",
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
            fontSize: 11,
            color: "#6b7280",
            lineHeight: 1.6,
          }}
        >
          {entry.details}
        </div>
      )}
    </div>
  );
};

/* =========================================================================== */
/* Log Container                                                                 */
/* =========================================================================== */

const LogContainer = ({
  logs,
  isLoading,
}: {
  logs: LogEntry[];
  isLoading?: boolean;
}) => {
  return (
    <div
      style={{
        border: "1px solid #374151",
        borderRadius: 6,
        background: "#fff",
        overflow: "hidden",
      }}
    >
      {isLoading ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "48px 24px",
            gap: 12,
          }}
        >
          {/* Spinner */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--drp-purple, #7c3aed)"
            strokeWidth={2}
            strokeLinecap="round"
            style={{
              animation: "spin 0.8s linear infinite",
            }}
            aria-hidden="true"
          >
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            <circle cx="12" cy="12" r="10" strokeOpacity={0.2} />
            <path d="M12 2a10 10 0 0 1 10 10" />
          </svg>
          <span className="drp-text drp-text--sm drp-text--muted">
            Loading activity logs…
          </span>
        </div>
      ) : logs.length === 0 ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "48px 24px",
          }}
        >
          <span className="drp-text drp-text--sm drp-text--muted">
            No activity yet
          </span>
        </div>
      ) : (
        <>
          {logs.map((entry) => (
            <LogRow key={entry.id} entry={entry} />
          ))}
        </>
      )}
    </div>
  );
};

/* =========================================================================== */
/* Main Component                                                                */
/* =========================================================================== */

const LEVEL_OPTIONS: { value: LogLevel; label: string }[] = [
  { value: "all", label: "All Levels" },
  { value: "info", label: "Info" },
  { value: "success", label: "Success" },
  { value: "warning", label: "Warning" },
  { value: "error", label: "Error" },
  { value: "debug", label: "Debug" },
];

export const ToolsTrackerLogs: React.FC<ToolsTrackerLogsProps> = ({
  defaultFilter = "all",
  defaultLogs = "empty",
  isLoading = false,
}) => {
  const [filter, setFilter] = useState<LogLevel>(defaultFilter);

  const baseLogs =
    defaultLogs === "full"
      ? FULL_LOGS
      : defaultLogs === "recent"
        ? RECENT_LOGS
        : [];

  const filteredLogs =
    filter === "all" ? baseLogs : baseLogs.filter((l) => l.level === filter);

  return (
    <div className="drp-app-shell" style={{ display: "flex", height: "100vh" }}>
      <ToolsTrackerSidebar activeId="logs" />
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
        <TopBar title="Activity Logs" />
        <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px" }}>
          {/* Toolbar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 16,
            }}
          >
            <select
              className="drp-input"
              value={filter}
              onChange={(e) => setFilter(e.target.value as LogLevel)}
              style={{ width: 140 }}
            >
              {LEVEL_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <Button variant="outline">Clear Logs</Button>
            <Button variant="primary">Refresh</Button>
            <Button variant="outline">Load Full History</Button>
          </div>

          {/* Log summary badges when logs are present */}
          {baseLogs.length > 0 && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 12,
              }}
            >
              {(["info", "success", "warning", "error", "debug"] as const).map(
                (level) => {
                  const count = baseLogs.filter(
                    (l) => l.level === level,
                  ).length;
                  if (count === 0) return null;
                  return (
                    <button
                      key={level}
                      onClick={() =>
                        setFilter((prev) => (prev === level ? "all" : level))
                      }
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                        opacity: filter !== "all" && filter !== level ? 0.4 : 1,
                      }}
                    >
                      <Tag color={LEVEL_TAG_COLOR[level] as any}>
                        {level.toUpperCase()} {count}
                      </Tag>
                    </button>
                  );
                },
              )}
              {filter !== "all" && (
                <button
                  onClick={() => setFilter("all")}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: 11,
                    color: "#6b7280",
                    textDecoration: "underline",
                    padding: 0,
                  }}
                >
                  clear filter
                </button>
              )}
            </div>
          )}

          {/* Log entries */}
          <LogContainer logs={filteredLogs} isLoading={isLoading} />
        </div>
        <ToolsTrackerFooter />
      </div>
    </div>
  );
};
