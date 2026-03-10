import React from "react";

export const ToolsTrackerFooter: React.FC = () => (
  <footer
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px var(--drp-space-6)",
      borderTop: "1px solid var(--drp-border-color, #e5e7eb)",
      background: "var(--drp-surface, #fafafa)",
      flexShrink: 0,
      minHeight: 44,
    }}
  >
    {/* Left — brand + version */}
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <span
        style={{
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.04em",
          color: "var(--drp-text-primary, #111)",
          textTransform: "uppercase",
        }}
      >
        Tools Tracker
      </span>
      <span
        style={{
          fontSize: 11,
          color: "var(--drp-text-muted, #9ca3af)",
          background: "var(--drp-bg-subtle, #f3f4f6)",
          border: "1px solid var(--drp-border-color, #e5e7eb)",
          borderRadius: 4,
          padding: "1px 6px",
          fontFamily: "var(--drp-font-mono, monospace)",
        }}
      >
        v1.0
      </span>
    </div>

    {/* Center — links */}
    <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
      {(["Privacy Policy", "License", "API Reference"] as const).map(
        (label) => (
          <a
            key={label}
            href="#"
            style={{
              fontSize: 11,
              color: "var(--drp-text-muted, #9ca3af)",
              textDecoration: "none",
            }}
          >
            {label}
          </a>
        ),
      )}
    </div>

    {/* Right — copyright */}
    <span
      style={{
        fontSize: 11,
        color: "var(--drp-text-muted, #9ca3af)",
      }}
    >
      © 2026 Doctor Project
    </span>
  </footer>
);
