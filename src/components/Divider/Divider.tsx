export interface DividerProps {
  label?: string;
  className?: string;
}

export function Divider({ label, className = "" }: DividerProps) {
  if (label) {
    return (
      <div
        className={`drp-divider ${className}`}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div
          style={{ flex: 1, height: "2px", background: "var(--drp-black)" }}
        />
        <span
          style={{
            fontFamily: "var(--drp-font-primary)",
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </span>
        <div
          style={{ flex: 1, height: "2px", background: "var(--drp-black)" }}
        />
      </div>
    );
  }
  return (
    <hr
      className={`drp-divider ${className}`}
      style={{
        border: "none",
        height: "2px",
        background: "var(--drp-black)",
        margin: 0,
      }}
    />
  );
}
