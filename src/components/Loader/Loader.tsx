type LoaderSize = "sm" | "lg";

export interface LoaderProps {
  size?: LoaderSize;
  label?: string;
  className?: string;
}

/**
 * Spinning indicator for async operations — use `size="sm"` inline within buttons or table cells, `size="lg"` for full-section loading states, and `label` to provide screen-reader context.
 * @example
 * // Full-page loading state
 * <Loader size="lg" label="Loading patient records…" />
 * // Inline inside a data cell
 * <Loader size="sm" />
 */
export function Loader({ size, label, className = "" }: LoaderProps) {
  const dimension = size === "sm" ? 20 : size === "lg" ? 48 : 32;
  const borderWidth = size === "sm" ? 2 : size === "lg" ? 4 : 3;

  return (
    <div
      className={className}
      style={{ display: "inline-flex", alignItems: "center", gap: "12px" }}
    >
      <div
        style={{
          width: dimension,
          height: dimension,
          border: `${borderWidth}px solid var(--drp-light-grey, #E0E0E0)`,
          borderTop: `${borderWidth}px solid var(--drp-purple)`,
          animation: "drp-spin 0.8s linear infinite",
        }}
      />
      {label && (
        <span
          style={{
            fontFamily: "var(--drp-font-primary)",
            fontSize: "var(--drp-text-sm)",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          {label}
        </span>
      )}
      <style>{`@keyframes drp-spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
