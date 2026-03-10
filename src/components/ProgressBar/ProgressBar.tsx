type ProgressColor = "mint" | "pink" | "yellow" | "grey";
type ProgressSize = "sm" | "lg";

export interface ProgressBarProps {
  value: number;
  color?: ProgressColor;
  size?: ProgressSize;
  label?: string;
  className?: string;
}

export function ProgressBar({
  value,
  color,
  size,
  label,
  className = "",
}: ProgressBarProps) {
  const progressClasses = [
    "drp-progress",
    color && `drp-progress--${color}`,
    size && `drp-progress--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const clampedValue = Math.min(100, Math.max(0, value));
  const bar = (
    <div
      className={progressClasses}
      role="progressbar"
      aria-valuenow={clampedValue}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      <div
        className="drp-progress__bar"
        style={{ width: `${clampedValue}%` }}
      />
    </div>
  );

  if (label) {
    return (
      <div className="drp-progress-group">
        <div className="drp-progress-group__label">
          <span>{label}</span>
          <span style={{ fontVariantNumeric: "tabular-nums" }}>{value}%</span>
        </div>
        {bar}
      </div>
    );
  }

  return bar;
}
