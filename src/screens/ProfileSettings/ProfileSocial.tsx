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
   Social network row
───────────────────────────────────────── */
interface SocialAccount {
  name: string;
  value: string | null;
  icon: React.ReactNode;
}

const SocialRow: React.FC<{ account: SocialAccount }> = ({ account }) => (
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
        color: "var(--drp-black)",
        flexShrink: 0,
        fontSize: "var(--drp-text-xl)",
        fontWeight: "var(--drp-weight-bold)" as any,
      }}
    >
      {account.icon}
    </div>
    <div style={{ flex: 1 }}>
      <p className="drp-label" style={{ marginBottom: "var(--drp-space-1)" }}>
        {account.name}
      </p>
      <p className="drp-text drp-text--bold drp-text--sm">
        {account.value ?? "Not connected"}
      </p>
    </div>
    {!account.value && (
      <button
        className="drp-btn drp-btn--ghost drp-btn--sm"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--drp-space-1)",
          border: "none",
          boxShadow: "none",
        }}
      >
        <svg
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
        Connect
      </button>
    )}
  </div>
);

/* ─────────────────────────────────────────
   ProfileSocial
───────────────────────────────────────── */
export const ProfileSocial: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("social");

  const socialAccounts: SocialAccount[] = [
    {
      name: "Facebook",
      value: "https://www.facebook.com/whiteui.store",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      value: null,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </svg>
      ),
    },
    {
      name: "Dropbox",
      value: "@whiteui.store",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L6 7l6 5-6 5 6 5 6-5-6-5 6-5-6-5zm-6 17l6-5 6 5-6 5-6-5z" />
        </svg>
      ),
    },
    {
      name: "Google",
      value: null,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
      ),
    },
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
                <h2 className="drp-h5">Social profiles</h2>
              </div>
              <div
                style={{
                  flex: 1,
                  padding: "var(--drp-space-2) var(--drp-space-6)",
                  overflowY: "auto",
                }}
              >
                {socialAccounts.map((account) => (
                  <SocialRow key={account.name} account={account} />
                ))}
                <button
                  className="drp-btn drp-btn--ghost drp-btn--sm"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--drp-space-2)",
                    marginTop: "var(--drp-space-4)",
                    border: "none",
                    boxShadow: "none",
                    padding: 0,
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                  </svg>
                  Add More
                </button>
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
