import type { ReactNode } from "react";

type AlertVariant = "info" | "success" | "warning" | "error";

export interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  children: ReactNode;
  onClose?: () => void;
  className?: string;
}

const variantStyles: Record<
  AlertVariant,
  { bg: string; border: string; icon: string }
> = {
  info: {
    bg: "rgba(0,102,255,0.08)",
    border: "var(--drp-info, #0066FF)",
    icon: "ℹ",
  },
  success: { bg: "rgba(0,170,0,0.08)", border: "var(--drp-mint)", icon: "✓" },
  warning: {
    bg: "rgba(255,170,0,0.08)",
    border: "var(--drp-yellow)",
    icon: "⚠",
  },
  error: { bg: "rgba(255,68,68,0.08)", border: "var(--drp-pink)", icon: "✕" },
};

/**
 * Inline feedback banner for system messages — use `variant="error"` for form-level errors, `variant="success"` after a completed action, and `variant="warning"` for non-blocking risks.
 * @example
 * // Success confirmation after saving
 * <Alert variant="success" title="Profile updated" onClose={handleDismiss}>
 *   Your changes have been saved successfully.
 * </Alert>
 * // Error with no title
 * <Alert variant="error">Payment failed. Please check your card details and try again.</Alert>
 */
export function Alert({
  variant = "info",
  title,
  children,
  onClose,
  className = "",
}: AlertProps) {
  const styles = variantStyles[variant];
  return (
    <div
      role="alert"
      className={className}
      style={{
        padding: "16px 20px",
        background: styles.bg,
        border: `1px solid var(--drp-black)`,
        borderLeft: `2px solid ${styles.border}`,
        display: "flex",
        gap: "12px",
        alignItems: "flex-start",
      }}
    >
      <span
        style={{ fontWeight: 700, fontSize: "16px", flexShrink: 0 }}
        aria-hidden="true"
      >
        {styles.icon}
      </span>
      <div style={{ flex: 1 }}>
        {title && (
          <p
            style={{
              fontFamily: "var(--drp-font-primary)",
              fontWeight: 700,
              fontSize: "14px",
              margin: "0 0 4px",
            }}
          >
            {title}
          </p>
        )}
        <div style={{ fontSize: "14px", lineHeight: 1.5 }}>{children}</div>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          aria-label="Close alert"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            opacity: 0.5,
            padding: 0,
            flexShrink: 0,
          }}
        >
          ×
        </button>
      )}
    </div>
  );
}
