import React, { useState } from "react";
import { ToolsTrackerSidebar } from "../shared/ToolsTrackerSidebar";
import { ToolsTrackerFooter } from "../shared/ToolsTrackerFooter";
import { TopBar } from "../../../components/TopBar/TopBar";
import { Tabs } from "../../../components/Tabs/Tabs";
import { Button } from "../../../components/Button/Button";
import { Input } from "../../../components/Input/Input";
import { Tag } from "../../../components/Tag/Tag";

/* =========================================================================== */
/* Types                                                                         */
/* =========================================================================== */

type SettingsTab = "profile" | "security" | "api-keys" | "preferences";

export interface ToolsTrackerSettingsProps {
  defaultTab?: SettingsTab;
}

/* =========================================================================== */
/* Layout helpers                                                                */
/* =========================================================================== */

const SettingsCard = ({
  title,
  description,
  children,
  action,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}) => (
  <div
    style={{
      background: "#fff",
      border: "1px solid #e5e7eb",
      borderRadius: 8,
      marginBottom: 20,
      overflow: "hidden",
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        padding: "16px 20px",
        borderBottom: "1px solid #f3f4f6",
      }}
    >
      <div>
        <p
          style={{ fontSize: 14, fontWeight: 600, color: "#111827", margin: 0 }}
        >
          {title}
        </p>
        {description && (
          <p
            style={{
              fontSize: 12,
              color: "#6b7280",
              marginTop: 2,
              marginBottom: 0,
            }}
          >
            {description}
          </p>
        )}
      </div>
      {action}
    </div>
    <div style={{ padding: "20px" }}>{children}</div>
  </div>
);

const FieldRow = ({
  label,
  children,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  hint?: string;
}) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "200px 1fr",
      gap: 16,
      alignItems: "flex-start",
      paddingBottom: 16,
      marginBottom: 16,
      borderBottom: "1px solid #f9fafb",
    }}
  >
    <div>
      <p
        style={{
          fontSize: 13,
          fontWeight: 500,
          color: "#374151",
          margin: 0,
          paddingTop: 8,
        }}
      >
        {label}
      </p>
      {hint && (
        <p
          style={{
            fontSize: 11,
            color: "#9ca3af",
            marginTop: 2,
            marginBottom: 0,
          }}
        >
          {hint}
        </p>
      )}
    </div>
    <div>{children}</div>
  </div>
);

const Divider = () => (
  <div style={{ borderTop: "1px solid #f3f4f6", margin: "4px 0 20px" }} />
);

/* =========================================================================== */
/* API Key field with mask/reveal/copy                                           */
/* =========================================================================== */

const ApiKeyField = ({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) => {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const masked = value.slice(0, 8) + "•".repeat(24) + value.slice(-4);

  return (
    <FieldRow label={label} hint={hint}>
      <div style={{ display: "flex", gap: 8 }}>
        <div style={{ flex: 1, position: "relative" }}>
          <input
            className="drp-input"
            readOnly
            value={revealed ? value : masked}
            style={{
              width: "100%",
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
              fontSize: 12,
              letterSpacing: revealed ? 0 : "0.05em",
            }}
          />
        </div>
        <button
          className="drp-btn drp-btn--outline drp-btn--sm"
          onClick={() => setRevealed((v) => !v)}
          title={revealed ? "Hide" : "Reveal"}
          style={{ flexShrink: 0 }}
        >
          {revealed ? "🙈" : "👁"}
        </button>
        <button
          className="drp-btn drp-btn--outline drp-btn--sm"
          onClick={handleCopy}
          style={{ flexShrink: 0, minWidth: 64 }}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </FieldRow>
  );
};

/* =========================================================================== */
/* Toggle row (for preferences)                                                  */
/* =========================================================================== */

const ToggleRow = ({
  label,
  hint,
  defaultEnabled = false,
}: {
  label: string;
  hint?: string;
  defaultEnabled?: boolean;
}) => {
  const [enabled, setEnabled] = useState(defaultEnabled);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: 14,
        marginBottom: 14,
        borderBottom: "1px solid #f9fafb",
      }}
    >
      <div>
        <p
          style={{ fontSize: 13, fontWeight: 500, color: "#374151", margin: 0 }}
        >
          {label}
        </p>
        {hint && (
          <p
            style={{
              fontSize: 11,
              color: "#9ca3af",
              marginTop: 2,
              marginBottom: 0,
            }}
          >
            {hint}
          </p>
        )}
      </div>
      <button
        onClick={() => setEnabled((v) => !v)}
        style={{
          width: 40,
          height: 22,
          borderRadius: 11,
          border: "none",
          background: enabled ? "var(--drp-purple, #7c3aed)" : "#d1d5db",
          cursor: "pointer",
          position: "relative",
          flexShrink: 0,
          transition: "background 0.2s",
        }}
        aria-checked={enabled}
        role="switch"
      >
        <span
          style={{
            position: "absolute",
            top: 3,
            left: enabled ? 21 : 3,
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: "#fff",
            transition: "left 0.2s",
            boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
          }}
        />
      </button>
    </div>
  );
};

/* =========================================================================== */
/* Profile tab                                                                   */
/* =========================================================================== */

const ProfileTab = () => (
  <>
    <SettingsCard
      title="Profile"
      description="Your public identity in Tools Tracker"
    >
      {/* Avatar + info */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          marginBottom: 24,
          paddingBottom: 20,
          borderBottom: "1px solid #f3f4f6",
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "var(--drp-warning, #f59e0b)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22,
            fontWeight: 700,
            color: "#fff",
            flexShrink: 0,
          }}
        >
          YF
        </div>
        <div>
          <p
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: "#111827",
              margin: 0,
            }}
          >
            yfatihi.pro
          </p>
          <p style={{ fontSize: 13, color: "#6b7280", margin: "2px 0 6px" }}>
            yfatihi.pro@gmail.com
          </p>
          <Tag color="orange">Admin</Tag>
        </div>
        <div style={{ marginLeft: "auto" }}>
          <Button variant="outline" size="sm">
            Change Avatar
          </Button>
        </div>
      </div>

      {/* Form fields */}
      <FieldRow label="Full Name">
        <Input defaultValue="Youssef Fatihi" />
      </FieldRow>
      <FieldRow
        label="Display Name"
        hint="Shown in the sidebar and activity logs"
      >
        <Input defaultValue="yfatihi.pro" />
      </FieldRow>
      <FieldRow
        label="Email"
        hint="Linked to your AppSumo account — cannot be changed"
      >
        <Input defaultValue="yfatihi.pro@gmail.com" />
      </FieldRow>
      <FieldRow label="Timezone">
        <select
          className="drp-input"
          style={{ width: "100%" }}
          defaultValue="Europe/Paris"
        >
          <option value="Europe/Paris">Europe/Paris (UTC+1)</option>
          <option value="America/New_York">America/New_York (UTC-5)</option>
          <option value="UTC">UTC</option>
          <option value="Asia/Tokyo">Asia/Tokyo (UTC+9)</option>
        </select>
      </FieldRow>

      <div
        style={{ display: "flex", justifyContent: "flex-end", marginTop: 4 }}
      >
        <Button variant="primary">Save Changes</Button>
      </div>
    </SettingsCard>

    {/* Danger zone */}
    <SettingsCard
      title="Danger Zone"
      description="Irreversible actions — proceed with caution"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <p
            style={{
              fontSize: 13,
              fontWeight: 500,
              color: "#374151",
              margin: 0,
            }}
          >
            Delete Account
          </p>
          <p
            style={{
              fontSize: 12,
              color: "#9ca3af",
              marginTop: 2,
              marginBottom: 0,
            }}
          >
            Permanently delete your account and all synced data
          </p>
        </div>
        <Button variant="danger" size="sm">
          Delete Account
        </Button>
      </div>
    </SettingsCard>
  </>
);

/* =========================================================================== */
/* Security tab                                                                  */
/* =========================================================================== */

const SecurityTab = () => (
  <>
    <SettingsCard
      title="Change Password"
      description="Update your login credentials"
    >
      <FieldRow label="Current Password">
        <Input type="password" placeholder="Enter current password" />
      </FieldRow>
      <FieldRow label="New Password" hint="At least 8 characters">
        <Input type="password" placeholder="Enter new password" />
      </FieldRow>
      <FieldRow label="Confirm New Password">
        <Input type="password" placeholder="Repeat new password" />
      </FieldRow>

      <div
        style={{ display: "flex", justifyContent: "flex-end", marginTop: 4 }}
      >
        <Button variant="primary">Update Password</Button>
      </div>
    </SettingsCard>

    <SettingsCard
      title="Connected Accounts"
      description="External services linked to your account"
    >
      {[
        {
          name: "AppSumo",
          email: "yfatihi.pro@gmail.com",
          status: "connected",
          since: "Mar 3, 2026",
        },
        {
          name: "Google",
          email: "yfatihi.pro@gmail.com",
          status: "connected",
          since: "Mar 3, 2026",
        },
      ].map((account) => (
        <div
          key={account.name}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            paddingBottom: 14,
            marginBottom: 14,
            borderBottom: "1px solid #f9fafb",
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background: "#f3f4f6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
              flexShrink: 0,
            }}
          >
            {account.name === "AppSumo" ? "🛒" : "G"}
          </div>
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: "#374151",
                margin: 0,
              }}
            >
              {account.name}
            </p>
            <p
              style={{
                fontSize: 12,
                color: "#9ca3af",
                marginTop: 1,
                marginBottom: 0,
              }}
            >
              {account.email} · Connected {account.since}
            </p>
          </div>
          <Tag color="mint">Connected</Tag>
          <Button variant="outline" size="sm">
            Disconnect
          </Button>
        </div>
      ))}
    </SettingsCard>

    <SettingsCard
      title="Active Sessions"
      description="Devices currently logged in to your account"
    >
      {[
        {
          device: "MacBook Pro — Chrome",
          location: "Paris, France",
          lastActive: "Now",
          isCurrent: true,
        },
        {
          device: "iPhone 15 — Safari",
          location: "Paris, France",
          lastActive: "2h ago",
          isCurrent: false,
        },
      ].map((session, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            paddingBottom: 14,
            marginBottom: 14,
            borderBottom: i === 0 ? "1px solid #f9fafb" : "none",
          }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#374151",
                  margin: 0,
                }}
              >
                {session.device}
              </p>
              {session.isCurrent && <Tag color="purple">Current</Tag>}
            </div>
            <p
              style={{
                fontSize: 12,
                color: "#9ca3af",
                marginTop: 2,
                marginBottom: 0,
              }}
            >
              {session.location} · {session.lastActive}
            </p>
          </div>
          {!session.isCurrent && (
            <Button variant="outline" size="sm">
              Revoke
            </Button>
          )}
        </div>
      ))}
    </SettingsCard>
  </>
);

/* =========================================================================== */
/* API Keys tab                                                                  */
/* =========================================================================== */

const ApiKeysTab = () => (
  <>
    <SettingsCard
      title="AppSumo Integration"
      description="Credentials used to sync your invoice and product data"
      action={
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#22c55e",
              boxShadow: "0 0 0 2px rgba(34,197,94,0.25)",
              display: "inline-block",
            }}
          />
          <span style={{ fontSize: 12, color: "#22c55e", fontWeight: 500 }}>
            Connected
          </span>
        </div>
      }
    >
      <FieldRow
        label="Authentication Method"
        hint="How Tools Tracker connects to AppSumo"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            paddingTop: 6,
          }}
        >
          <Tag color="purple">OAuth 2.0</Tag>
          <span style={{ fontSize: 12, color: "#6b7280" }}>
            Authorized via AppSumo on Mar 3, 2026
          </span>
        </div>
      </FieldRow>

      <ApiKeyField
        label="Access Token"
        value="sk_appsumo_a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8"
        hint="Used for all API requests — keep this secret"
      />

      <ApiKeyField
        label="Refresh Token"
        value="rt_appsumo_z9y8x7w6v5u4t3s2r1q0p9o8n7m6l5k4j3i2"
        hint="Used to obtain a new access token when expired"
      />

      <FieldRow label="Token Expiry">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            paddingTop: 6,
          }}
        >
          <Tag color="yellow">Expires Mar 3, 2027</Tag>
          <span style={{ fontSize: 12, color: "#6b7280" }}>
            340 days remaining
          </span>
        </div>
      </FieldRow>

      <div
        style={{
          display: "flex",
          gap: 8,
          justifyContent: "flex-end",
          marginTop: 4,
        }}
      >
        <Button variant="outline">Revoke Access</Button>
        <Button variant="primary">Reconnect AppSumo</Button>
      </div>
    </SettingsCard>

    <SettingsCard
      title="Webhook Secret"
      description="Used to verify incoming webhook payloads"
      action={<Tag color="grey">Optional</Tag>}
    >
      <ApiKeyField
        label="Webhook Secret"
        value="whsec_a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4"
        hint="Set on your server to validate webhook signatures"
      />
      <FieldRow
        label="Webhook URL"
        hint="POST endpoint where events will be sent"
      >
        <Input placeholder="https://your-server.com/webhooks/tools-tracker" />
      </FieldRow>
      <div
        style={{
          display: "flex",
          gap: 8,
          justifyContent: "flex-end",
          marginTop: 4,
        }}
      >
        <Button variant="outline">Regenerate Secret</Button>
        <Button variant="primary">Save Webhook</Button>
      </div>
    </SettingsCard>

    <SettingsCard
      title="API Usage"
      description="Current usage against AppSumo rate limits"
    >
      {[
        { label: "Requests this hour", used: 42, limit: 300 },
        { label: "Requests today", used: 1240, limit: 5000 },
        { label: "Syncs this month", used: 18, limit: 100 },
      ].map((stat) => {
        const pct = Math.round((stat.used / stat.limit) * 100);
        const color =
          pct > 80
            ? "#ef4444"
            : pct > 60
              ? "#f97316"
              : "var(--drp-purple, #7c3aed)";
        return (
          <div key={stat.label} style={{ marginBottom: 14 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 4,
              }}
            >
              <span style={{ fontSize: 12, color: "#374151" }}>
                {stat.label}
              </span>
              <span style={{ fontSize: 12, color: "#9ca3af" }}>
                {stat.used.toLocaleString()} / {stat.limit.toLocaleString()}
              </span>
            </div>
            <div
              style={{
                height: 6,
                background: "#f3f4f6",
                borderRadius: 3,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${pct}%`,
                  height: "100%",
                  background: color,
                  borderRadius: 3,
                }}
              />
            </div>
          </div>
        );
      })}
    </SettingsCard>
  </>
);

/* =========================================================================== */
/* Preferences tab                                                               */
/* =========================================================================== */

const PreferencesTab = () => (
  <>
    <SettingsCard
      title="Sync Settings"
      description="Control how and when Tools Tracker fetches data"
    >
      <ToggleRow
        label="Auto-sync"
        hint="Automatically fetch new data on a schedule"
        defaultEnabled
      />

      <FieldRow
        label="Sync Frequency"
        hint="How often to check for new invoices"
      >
        <select
          className="drp-input"
          style={{ width: "100%" }}
          defaultValue="daily"
        >
          <option value="15min">Every 15 minutes</option>
          <option value="hourly">Every hour</option>
          <option value="daily">Once a day</option>
          <option value="manual">Manual only</option>
        </select>
      </FieldRow>

      <ToggleRow
        label="Delta sync"
        hint="Only fetch records that have changed since last sync (faster)"
        defaultEnabled
      />
      <ToggleRow
        label="Sync on login"
        hint="Trigger a sync automatically when you open the app"
      />

      <div
        style={{ display: "flex", justifyContent: "flex-end", marginTop: 4 }}
      >
        <Button variant="primary">Save Sync Settings</Button>
      </div>
    </SettingsCard>

    <SettingsCard
      title="Notifications"
      description="Choose which events trigger email alerts"
    >
      <ToggleRow
        label="Sync errors"
        hint="Email me when a sync job encounters errors"
        defaultEnabled
      />
      <ToggleRow
        label="Sync completed"
        hint="Email me when a sync job finishes successfully"
      />
      <ToggleRow
        label="New refund detected"
        hint="Alert when a product switches to refunded status"
        defaultEnabled
      />
      <ToggleRow
        label="Refund deadline approaching"
        hint="Remind me 3 days before a refund window closes"
        defaultEnabled
      />

      <div
        style={{ display: "flex", justifyContent: "flex-end", marginTop: 4 }}
      >
        <Button variant="primary">Save Notifications</Button>
      </div>
    </SettingsCard>

    <SettingsCard
      title="Display Preferences"
      description="Formatting and appearance settings"
    >
      <FieldRow label="Currency display">
        <select
          className="drp-input"
          style={{ width: "100%" }}
          defaultValue="USD"
        >
          <option value="USD">USD ($)</option>
          <option value="EUR">EUR (€)</option>
          <option value="GBP">GBP (£)</option>
        </select>
      </FieldRow>
      <FieldRow label="Date format">
        <select
          className="drp-input"
          style={{ width: "100%" }}
          defaultValue="DD/MM/YYYY"
        >
          <option value="DD/MM/YYYY">DD/MM/YYYY</option>
          <option value="MM/DD/YYYY">MM/DD/YYYY</option>
          <option value="YYYY-MM-DD">YYYY-MM-DD</option>
        </select>
      </FieldRow>
      <ToggleRow
        label="Compact tables"
        hint="Reduce row height in product and invoice tables"
      />

      <div
        style={{ display: "flex", justifyContent: "flex-end", marginTop: 4 }}
      >
        <Button variant="primary">Save Preferences</Button>
      </div>
    </SettingsCard>

    <SettingsCard title="Data & Cache" description="Manage locally cached data">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 12,
          marginBottom: 20,
        }}
      >
        {[
          { label: "Invoices cached", value: "73" },
          { label: "Products cached", value: "334" },
          { label: "Cache size", value: "1.2 MB" },
        ].map((stat) => (
          <div
            key={stat.label}
            style={{
              background: "#f9fafb",
              borderRadius: 6,
              padding: "12px 16px",
              border: "1px solid #f3f4f6",
            }}
          >
            <p
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "#111827",
                margin: 0,
              }}
            >
              {stat.value}
            </p>
            <p
              style={{
                fontSize: 11,
                color: "#9ca3af",
                marginTop: 2,
                marginBottom: 0,
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <Button variant="outline">Clear Cache</Button>
        <Button variant="danger">Wipe All Data</Button>
      </div>
    </SettingsCard>
  </>
);

/* =========================================================================== */
/* Main component                                                                */
/* =========================================================================== */

const SETTINGS_TABS = [
  { key: "profile", label: "Profile" },
  { key: "security", label: "Security" },
  { key: "api-keys", label: "API Keys" },
  { key: "preferences", label: "Preferences" },
];

export const ToolsTrackerSettings: React.FC<ToolsTrackerSettingsProps> = ({
  defaultTab = "profile",
}) => {
  const [tab, setTab] = useState<SettingsTab>(defaultTab);

  return (
    <div className="drp-app-shell" style={{ display: "flex", height: "100vh" }}>
      <ToolsTrackerSidebar activeId="settings" />
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
        <TopBar title="Settings" />
        <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px" }}>
          <div style={{ marginBottom: 24 }}>
            <Tabs
              items={SETTINGS_TABS}
              activeKey={tab}
              onChange={(k) => setTab(k as SettingsTab)}
            />
          </div>

          {tab === "profile" && <ProfileTab />}
          {tab === "security" && <SecurityTab />}
          {tab === "api-keys" && <ApiKeysTab />}
          {tab === "preferences" && <PreferencesTab />}
        </div>
        <ToolsTrackerFooter />
      </div>
    </div>
  );
};
