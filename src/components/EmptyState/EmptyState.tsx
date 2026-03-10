import type { ReactNode } from "react";

export interface EmptyStateProps {
  icon?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

export function EmptyState({
  icon = "∅",
  title,
  description,
  action,
  className = "",
}: EmptyStateProps) {
  return (
    <div
      className={`drp-empty ${className}`}
      style={{
        textAlign: "center",
        padding: "48px 24px",
        border: "2px dashed rgba(0,0,0,0.2)",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          fontSize: "48px",
          marginBottom: "16px",
          opacity: 0.3,
          fontFamily: "var(--drp-font-primary)",
          fontWeight: 800,
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontFamily: "var(--drp-font-primary)",
          fontSize: "18px",
          fontWeight: 700,
          margin: "0 0 8px",
        }}
      >
        {title}
      </h3>
      {description && (
        <p
          style={{
            fontSize: "13px",
            color: "var(--drp-text-secondary, #666)",
            maxWidth: "400px",
            margin: "0 auto 20px",
          }}
        >
          {description}
        </p>
      )}
      {action}
    </div>
  );
}
