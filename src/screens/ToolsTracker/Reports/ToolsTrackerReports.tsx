import React, { useState } from "react";
import { Tabs } from "../../../components/Tabs/Tabs";
import { ToolsTrackerSidebar } from "../shared/ToolsTrackerSidebar";
import { ToolsTrackerTopBar } from "../shared/ToolsTrackerTopBar";
import { ToolsTrackerFooter } from "../shared/ToolsTrackerFooter";
import { MonthlySpending } from "./tabs/MonthlySpending";
import { PurchasesVsRefunds } from "./tabs/PurchasesVsRefunds";
import { TopProducts } from "./tabs/TopProducts";
import { SpendingTrend } from "./tabs/SpendingTrend";
import { FinancialHealth } from "./tabs/FinancialHealth";
import { PortfolioAnalysis } from "./tabs/PortfolioAnalysis";
import { PortfolioBreakdown } from "./tabs/PortfolioBreakdown";
import { SpendingByVendor } from "./tabs/SpendingByVendor";

type ReportsTab =
  | "monthly-spending"
  | "purchases-vs-refunds"
  | "top-products"
  | "spending-trend"
  | "financial-health"
  | "portfolio-analysis"
  | "portfolio-breakdown"
  | "spending-by-vendor";

const TABS = [
  { key: "monthly-spending", label: "Monthly Spending" },
  { key: "purchases-vs-refunds", label: "Purchases vs Refunds" },
  { key: "top-products", label: "Top Products" },
  { key: "spending-trend", label: "Spending Trend" },
  { key: "financial-health", label: "Financial Health" },
  { key: "portfolio-analysis", label: "Portfolio Analysis" },
  { key: "portfolio-breakdown", label: "Portfolio Breakdown" },
  { key: "spending-by-vendor", label: "Spending by Vendor" },
];

export interface ToolsTrackerReportsProps {
  defaultTab?: ReportsTab;
}

export const ToolsTrackerReports: React.FC<ToolsTrackerReportsProps> = ({
  defaultTab = "monthly-spending",
}) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <div
      className={`drp-app-shell${theme === "dark" ? " drp-theme--dark" : ""}`}
      style={{ display: "flex", height: "100vh", overflow: "hidden" }}
    >
      <ToolsTrackerSidebar activeId="reports" />

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

        <div
          style={{ flex: 1, overflowY: "auto", padding: "var(--drp-space-6)" }}
        >
          <div style={{ marginBottom: "var(--drp-space-5)" }}>
            <h1
              className="drp-text drp-text--xl drp-text--bold"
              style={{ marginBottom: "var(--drp-space-1)" }}
            >
              Reports
            </h1>
            <p className="drp-text drp-text--sm drp-text--muted">
              Detailed financial reports across all your purchases
            </p>
          </div>

          {/* Tabs — allow horizontal scroll for 8 items */}
          <div style={{ overflowX: "auto" }}>
            <Tabs
              items={TABS}
              activeKey={activeTab}
              onChange={setActiveTab}
              variant="underline"
            />
          </div>

          <div style={{ marginTop: "var(--drp-space-6)" }}>
            {activeTab === "monthly-spending" && <MonthlySpending />}
            {activeTab === "purchases-vs-refunds" && <PurchasesVsRefunds />}
            {activeTab === "top-products" && <TopProducts />}
            {activeTab === "spending-trend" && <SpendingTrend />}
            {activeTab === "financial-health" && <FinancialHealth />}
            {activeTab === "portfolio-analysis" && <PortfolioAnalysis />}
            {activeTab === "portfolio-breakdown" && <PortfolioBreakdown />}
            {activeTab === "spending-by-vendor" && <SpendingByVendor />}
          </div>
        </div>

        <ToolsTrackerFooter />
      </div>
    </div>
  );
};
