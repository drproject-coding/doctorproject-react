export interface SpinnerProps {
  className?: string;
}

export function Spinner({ className = "" }: SpinnerProps) {
  return (
    <div
      className={["drp-spinner", className].filter(Boolean).join(" ")}
      role="status"
      aria-label="Loading"
    />
  );
}
