import React, { useState } from "react";
import { ProfileSidePanel } from "./ProfileAccount";
import { Pictogram } from "../../components/Pictogram/Pictogram";
import { AppSidebar } from "../shared/AppSidebar";
import { AppTopBar } from "../shared/AppTopBar";
import { AppFooter } from "../shared/AppFooter";

type TabKey = "account" | "security" | "social" | "apis" | "notifications";

/* ─────────────────────────────────────────
   Toggle switch component (drp-switch)
───────────────────────────────────────── */
const Toggle: React.FC<{
  enabled: boolean;
  onChange: (v: boolean) => void;
}> = ({ enabled, onChange }) => (
  <label className="drp-switch">
    <input
      type="checkbox"
      checked={enabled}
      onChange={(e) => onChange(e.target.checked)}
    />
    <span className="drp-switch__track">
      <span className="drp-switch__knob" />
    </span>
  </label>
);

/* ─────────────────────────────────────────
   Notification row
───────────────────────────────────────── */
const NotifRow: React.FC<{
  label: string;
  description: string;
  enabled: boolean;
  onChange: (v: boolean) => void;
}> = ({ label, description, enabled, onChange }) => (
  <div
    className="drp-flex drp-items-center drp-justify-between"
    style={{
      padding: "var(--drp-space-4) 0",
      borderBottom: "var(--drp-border-thin)",
    }}
  >
    <div>
      <p className="drp-label" style={{ marginBottom: 2 }}>
        {label}
      </p>
      <p className="drp-text drp-text--bold drp-text--sm">{description}</p>
    </div>
    <Toggle enabled={enabled} onChange={onChange} />
  </div>
);


/* ─────────────────────────────────────────
   ProfileNotifications component
───────────────────────────────────────── */
export const ProfileNotifications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("notifications");
  const [settings, setSettings] = useState({
    productUpdates: true,
    reminders: false,
    promotions: true,
    policy: true,
    accountSupport: false,
  });

  const TABS: Array<{ key: TabKey; label: string }> = [
    { key: "account", label: "Account" },
    { key: "security", label: "Security" },
    { key: "social", label: "Social Networks" },
    { key: "apis", label: "APIs" },
    { key: "notifications", label: "Notifications" },
  ];

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
                <h2 className="drp-h5">Notifications</h2>
              </div>
              <div
                style={{
                  flex: 1,
                  padding: "var(--drp-space-2) var(--drp-space-6)",
                  overflowY: "auto",
                }}
              >
                <NotifRow
                  label="Product updates"
                  description="Receive messages from our platform"
                  enabled={settings.productUpdates}
                  onChange={(v) =>
                    setSettings({ ...settings, productUpdates: v })
                  }
                />
                <NotifRow
                  label="Reminders"
                  description="Receive booking reminders, pricing notices"
                  enabled={settings.reminders}
                  onChange={(v) => setSettings({ ...settings, reminders: v })}
                />
                <NotifRow
                  label="Promotions and tips"
                  description="Receive coupons, promotions, surveys"
                  enabled={settings.promotions}
                  onChange={(v) => setSettings({ ...settings, promotions: v })}
                />
                <NotifRow
                  label="Policy and community"
                  description="Receive updates on job regulations"
                  enabled={settings.policy}
                  onChange={(v) => setSettings({ ...settings, policy: v })}
                />
                <NotifRow
                  label="Account support"
                  description="Receive messages about your account, your trips, legal alerts"
                  enabled={settings.accountSupport}
                  onChange={(v) =>
                    setSettings({ ...settings, accountSupport: v })
                  }
                />
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
