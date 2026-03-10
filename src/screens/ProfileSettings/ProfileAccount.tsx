import React, { useState } from "react";
import { Pictogram } from "../../components/Pictogram/Pictogram";
import { AppSidebar } from "../shared/AppSidebar";
import { AppTopBar } from "../shared/AppTopBar";
import { AppFooter } from "../shared/AppFooter";

type TabKey = "account" | "security" | "social" | "apis" | "notifications";

interface ProfileLayoutProps {
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
  children: React.ReactNode;
}

/* ─────────────────────────────────────────
   Shared: dark sidebar (left navigation)
───────────────────────────────────────── */



/* ─────────────────────────────────────────
   Shared: profile sidebar (left panel)
───────────────────────────────────────── */
export const ProfileSidePanel: React.FC = () => (
  <div style={{ width: 280, flexShrink: 0, padding: "var(--drp-space-6)" }}>
    {/* Avatar */}
    <div
      style={{
        width: 80,
        height: 80,
        overflow: "hidden",
        background: "var(--drp-grey-light)",
        marginBottom: "var(--drp-space-4)",
      }}
    >
      <img
        src="https://i.pravatar.cc/80?img=47"
        alt="Laquita Elliott"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "var(--drp-info)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: "var(--drp-text-h4)",
          fontWeight: "var(--drp-weight-bold)" as any,
        }}
      >
        LE
      </div>
    </div>

    <h2 className="drp-h5" style={{ marginBottom: 2 }}>
      Laquita Elliott
    </h2>
    <p
      className="drp-text drp-text--sm drp-text--muted"
      style={{ marginBottom: "var(--drp-space-3)" }}
    >
      elliott.laquita@gmail.com
    </p>

    <p
      className="drp-text drp-text--sm"
      style={{
        marginBottom: "var(--drp-space-4)",
        color: "var(--drp-text-secondary)",
      }}
    >
      Happiness is not something readymade.
      <br />
      It comes from your own actions.
    </p>

    <span
      className="drp-tag"
      style={{ marginBottom: "var(--drp-space-6)", display: "inline-block" }}
    >
      Designer
    </span>

    {/* Stats */}
    <div>
      <div
        style={{
          paddingBottom: "var(--drp-space-3)",
          borderBottom: "var(--drp-border-dashed)",
        }}
      >
        <div className="drp-flex drp-items-center drp-justify-between">
          <div className="drp-flex drp-items-center drp-gap-2">
            <span className="drp-h5">296</span>
            <span className="drp-badge drp-badge--pink">-8</span>
          </div>
          <svg
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="var(--drp-grey)"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <p
          className="drp-text drp-text--sm drp-text--muted"
          style={{ marginTop: 2 }}
        >
          New tasks
        </p>
      </div>

      <div
        style={{
          padding: "var(--drp-space-3) 0",
          borderBottom: "var(--drp-border-dashed)",
        }}
      >
        <div className="drp-flex drp-items-center drp-justify-between">
          <div className="drp-flex drp-items-center drp-gap-2">
            <span className="drp-h5">18</span>
            <span className="drp-badge drp-badge--mint">5</span>
          </div>
          <svg
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="var(--drp-grey)"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </div>
        <p
          className="drp-text drp-text--sm drp-text--muted"
          style={{ marginTop: 2 }}
        >
          Followers
        </p>
      </div>

      <div style={{ paddingTop: "var(--drp-space-3)" }}>
        <span className="drp-h5">$36</span>
        <p
          className="drp-text drp-text--sm drp-text--muted"
          style={{ marginTop: 2 }}
        >
          Hourly rate
        </p>
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────
   Shared: tab bar + actions button
───────────────────────────────────────── */
const TABS: Array<{ key: TabKey; label: string }> = [
  { key: "account", label: "Account" },
  { key: "security", label: "Security" },
  { key: "social", label: "Social Networks" },
  { key: "apis", label: "APIs" },
  { key: "notifications", label: "Notifications" },
];

export const ProfileTabBar: React.FC<{
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
}> = ({ activeTab, onTabChange }) => (
  <div
    className="drp-flex drp-items-center drp-gap-1"
    style={{ marginBottom: "var(--drp-space-4)", flexShrink: 0 }}
  >
    <div className="drp-tabs">
      {TABS.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onTabChange(tab.key)}
          className={`drp-tab${activeTab === tab.key ? " drp-tab--active" : ""}`}
        >
          {tab.label}
        </button>
      ))}
    </div>
    <div style={{ marginLeft: "auto" }}>
      <button className="drp-btn drp-btn--outline drp-btn--sm">Actions</button>
    </div>
  </div>
);

/* ─────────────────────────────────────────
   Shared: content card with footer buttons
───────────────────────────────────────── */
const ContentCard: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
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
      <h2 className="drp-h5">{title}</h2>
    </div>
    <div
      style={{
        flex: 1,
        padding: "var(--drp-space-4) var(--drp-space-6)",
        overflowY: "auto",
      }}
    >
      {children}
    </div>
    <div
      className="drp-flex drp-items-center drp-justify-between"
      style={{
        padding: "var(--drp-space-4) var(--drp-space-6)",
        borderTop: "var(--drp-border-thin)",
      }}
    >
      <button className="drp-btn drp-btn--outline">Reset Changes</button>
      <button className="drp-btn drp-btn--primary">Update Settings</button>
    </div>
  </div>
);

/* ─────────────────────────────────────────
   Shared: field row
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
   Full layout wrapper
───────────────────────────────────────── */
const ProfileLayout: React.FC<ProfileLayoutProps> = ({
  activeTab,
  onTabChange,
  children,
}) => (
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
          <ProfileTabBar activeTab={activeTab} onTabChange={onTabChange} />
          {children}
        </div>
      </div>
      <AppFooter />
    </div>
  </div>
);

/* ─────────────────────────────────────────
   Account tab content
───────────────────────────────────────── */
export const ProfileAccount: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("account");

  return (
    <ProfileLayout activeTab={activeTab} onTabChange={setActiveTab}>
      <ContentCard title="Public account details">
        <div className="drp-flex-col drp-gap-4">
          <FieldRow label="Full name" value="Henry Richardson" />
          <FieldRow label="Country" value="United States" />
          <FieldRow label="City" value="New Castle" />
          <div className="drp-form-row">
            <FieldRow label="Date of birth" value="January 24, 1983" />
            <FieldRow label="Gender" value="Male" />
          </div>
          <div className="drp-form-row">
            <FieldRow label="Email address" value="seb.bennett@gmail.com" />
            <FieldRow label="Phone number" value="+995 590 558 124" />
          </div>
          <FieldRow
            label="Address"
            value="83222 Dicki View, South Pasqualeview, RI 79216-3100"
          />
        </div>
      </ContentCard>
    </ProfileLayout>
  );
};
