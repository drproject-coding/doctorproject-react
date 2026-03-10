import React, { useState } from "react";
import { Tabs } from "../../../components/Tabs/Tabs";
import { ToolsTrackerSidebar } from "../shared/ToolsTrackerSidebar";
import { ToolsTrackerTopBar } from "../shared/ToolsTrackerTopBar";
import { ToolsTrackerFooter } from "../shared/ToolsTrackerFooter";
import { SpendingOverview } from "./tabs/SpendingOverview";
import { VisualReports } from "./tabs/VisualReports";
import { CategoryAnalysis } from "./tabs/CategoryAnalysis";
import { PaymentMethods } from "./tabs/PaymentMethods";

/* -------------------------------------------------------------------------- */
/* Types                                                                       */
/* -------------------------------------------------------------------------- */

type AnalyticsTab =
  | "spending-overview"
  | "visual-reports"
  | "category-analysis"
  | "payment-methods";

export interface ToolsTrackerAnalyticsProps {
  defaultTab?: AnalyticsTab;
}

/* -------------------------------------------------------------------------- */
/* Tab config                                                                  */
/* -------------------------------------------------------------------------- */

const TABS = [
  { key: "spending-overview", label: "Spending Overview" },
  { key: "visual-reports", label: "Visual Reports" },
  { key: "category-analysis", label: "Category Analysis" },
  { key: "payment-methods", label: "Payment Methods" },
];

/* -------------------------------------------------------------------------- */
/* Component                                                                   */
/* -------------------------------------------------------------------------- */

export const ToolsTrackerAnalytics: React.FC<ToolsTrackerAnalyticsProps> = ({
  defaultTab = "spending-overview",
}) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <div
      className={`drp-app-shell${theme === "dark" ? " drp-theme--dark" : ""}`}
      style={{ display: "flex", height: "100vh", overflow: "hidden" }}
    >
      {/* Sidebar */}
      <ToolsTrackerSidebar activeId="analytics" />

      {/* Main */}
      <div
        className="main-content"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <ToolsTrackerTopBar
          theme={theme}
          onThemeToggle={() =>
            setTheme((t) => (t === "light" ? "dark" : "light"))
          }
        />

        {/* Content area */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "var(--drp-space-6)",
          }}
        >
          {/* Page header */}
          <div style={{ marginBottom: "var(--drp-space-5)" }}>
            <h1
              className="drp-text drp-text--xl drp-text--bold"
              style={{ marginBottom: "var(--drp-space-1)" }}
            >
              Analytics
            </h1>
            <p className="drp-text drp-text--sm drp-text--muted">
              Spending insights across all your AppSumo purchases
            </p>
          </div>

          {/* Tabs */}
          <Tabs
            items={TABS}
            activeKey={activeTab}
            onChange={(key) => setActiveTab(key)}
            variant="underline"
          />

          {/* Tab content */}
          <div style={{ marginTop: "var(--drp-space-6)" }}>
            {activeTab === "spending-overview" && <SpendingOverview />}
            {activeTab === "visual-reports" && <VisualReports />}
            {activeTab === "category-analysis" && <CategoryAnalysis />}
            {activeTab === "payment-methods" && <PaymentMethods />}
          </div>
        </div>

        <ToolsTrackerFooter />
      </div>
    </div>
  );
};
