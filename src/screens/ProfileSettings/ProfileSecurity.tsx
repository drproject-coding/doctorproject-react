import React, { useState } from "react";
import { ProfileSidePanel } from "./ProfileAccount";
import { Pictogram } from "../../components/Pictogram/Pictogram";
import { AppSidebar } from "../shared/AppSidebar";
import { AppTopBar } from "../shared/AppTopBar";
import { AppFooter } from "../shared/AppFooter";

type TabKey = "account" | "security" | "social" | "apis" | "notifications";


const TABS: Array<{ key: TabKey; label: string }> = [
  { key: "account", label: "Account" },
  { key: "security", label: "Security" },
  { key: "social", label: "Social Networks" },
  { key: "apis", label: "APIs" },
  { key: "notifications", label: "Notifications" },
];

/* ─────────────────────────────────────────
   Field row helper
───────────────────────────────────────── */
const FieldRow: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => (
  <div>
    <p className="drp-label" style={{ marginBottom: "var(--drp-space-1)" }}>
      {label}
    </p>
    <p
      className="drp-text drp-text--bold drp-text--sm"
      style={{
        paddingBottom: "var(--drp-space-2)",
        borderBottom: "var(--drp-border-thin)",
      }}
    >
      {value}
    </p>
  </div>
);

/* ─────────────────────────────────────────
   Session row
───────────────────────────────────────── */
const SessionRow: React.FC<{
  date: string;
  device: string;
  isCurrent?: boolean;
  icon: "laptop" | "phone";
}> = ({ date, device, isCurrent, icon }) => (
  <div
    className="drp-flex drp-items-center drp-gap-4"
    style={{
      padding: "var(--drp-space-3) 0",
      borderBottom: "var(--drp-border-thin)",
    }}
  >
    <div
      style={{
        width: 36,
        height: 36,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--drp-grey)",
        flexShrink: 0,
      }}
    >
      {icon === "laptop" ? (
        <svg
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="2" y="4" width="20" height="14" rx="0" />
          <path d="M0 20h24" strokeLinecap="round" />
        </svg>
      ) : (
        <svg
          width="20"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="5" y="2" width="14" height="20" rx="0" />
        </svg>
      )}
    </div>
    <div style={{ flex: 1 }}>
      <p className="drp-text drp-text--sm drp-text--muted">{date}</p>
      <p className="drp-text drp-text--bold drp-text--sm">{device}</p>
    </div>
    {isCurrent && (
      <button className="drp-btn drp-btn--sm drp-btn--primary">
        Current session
      </button>
    )}
  </div>
);

/* ─────────────────────────────────────────
   ProfileSecurity
───────────────────────────────────────── */
export const ProfileSecurity: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("security");

  return (
    <div className="app-layout" style={{ height: "100vh", overflow: "hidden" }}>
      <AppSidebar activeId="settings" />
      <div className="main-content" style={{ overflow: "hidden" }}>
        <AppTopBar title="Profile Settings" />
        <div
          className="drp-flex"
          style={{
            flex: 1,
            overflow: "hidden",
            padding: "var(--drp-space-6) var(--drp-space-8)",
            gap: "var(--drp-space-6)",
          }}
        >
          <ProfileSidePanel />
          <div className="drp-flex-col" style={{ flex: 1, overflow: "hidden" }}>
            {/* Tab bar */}
            <div
              className="drp-flex drp-items-center drp-gap-1"
              style={{ marginBottom: "var(--drp-space-4)", flexShrink: 0 }}
            >
              <div className="drp-tabs">
                {TABS.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`drp-tab${activeTab === tab.key ? " drp-tab--active" : ""}`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div style={{ marginLeft: "auto" }}>
                <button className="drp-btn drp-btn--outline drp-btn--sm">
                  Actions
                </button>
              </div>
            </div>

            {/* Content card */}
            <div
              className="drp-card"
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                padding: 0,
              }}
            >
              <div
                style={{
                  padding: "var(--drp-space-4) var(--drp-space-6)",
                  borderBottom: "var(--drp-border-thin)",
                }}
              >
                <h2 className="drp-h5">Login details</h2>
              </div>
              <div
                style={{
                  flex: 1,
                  padding: "var(--drp-space-4) var(--drp-space-6)",
                  overflowY: "auto",
                }}
              >
                <div className="drp-flex-col drp-gap-4">
                  <FieldRow label="Current password" value="••••••" />
                  <div className="drp-form-row">
                    <FieldRow
                      label="Security questions"
                      value="Your fathers name"
                    />
                    <FieldRow label="2-Step verification" value="Enabled" />
                  </div>
                </div>

                <div style={{ paddingTop: "var(--drp-space-4)" }}>
                  <h3
                    className="drp-h6"
                    style={{ marginBottom: "var(--drp-space-3)" }}
                  >
                    Security credentials
                  </h3>
                  <SessionRow
                    icon="laptop"
                    date="01 Apr 2021 at 06:25PM"
                    device="Mac OS Safari 15.1"
                    isCurrent
                  />
                  <SessionRow
                    icon="phone"
                    date="19 Oct 2021 at 06:30AM"
                    device="iOS Safari 15.1"
                  />
                </div>
              </div>
              <div
                className="drp-flex drp-items-center drp-justify-between"
                style={{
                  padding: "var(--drp-space-4) var(--drp-space-6)",
                  borderTop: "var(--drp-border-thin)",
                }}
              >
                <button className="drp-btn drp-btn--outline">
                  Reset Changes
                </button>
                <button className="drp-btn drp-btn--primary">
                  Update Settings
                </button>
              </div>
            </div>
          </div>
        </div>
        <AppFooter />
      </div>
    </div>
  );
};
