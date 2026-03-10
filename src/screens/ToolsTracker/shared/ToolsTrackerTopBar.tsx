import React from "react";
import { TopBar } from "../../../components/TopBar/TopBar";

export interface ToolsTrackerTopBarProps {
  onMenuClick?: () => void;
  onSyncClick?: () => void;
  theme?: "light" | "dark";
  onThemeToggle?: () => void;
}

export const ToolsTrackerTopBar: React.FC<ToolsTrackerTopBarProps> = ({
  onMenuClick,
  onSyncClick,
  theme = "light",
  onThemeToggle,
}) => (
  <TopBar
    title="Tools Tracker"
    menuButton={false}
    onMenuClick={onMenuClick}
    actions={
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--drp-space-2)",
        }}
      >
        <button
          className="drp-btn drp-btn--ghost drp-btn--sm"
          onClick={onThemeToggle}
          aria-label="Toggle theme"
          title={
            theme === "light" ? "Switch to dark mode" : "Switch to light mode"
          }
          style={{ fontSize: 16, lineHeight: 1 }}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
        <button
          className="drp-btn drp-btn--primary drp-btn--sm"
          onClick={onSyncClick}
        >
          Sync with AppSumo
        </button>
      </div>
    }
  />
);
