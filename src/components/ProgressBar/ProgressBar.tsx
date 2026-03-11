type ProgressColor = "mint" | "pink" | "yellow" | "grey";
type ProgressSize = "sm" | "lg";

export interface ProgressBarProps {
  value: number;
  color?: ProgressColor;
  size?: ProgressSize;
  label?: string;
  className?: string;
}

/**
 * Horizontal progress indicator for completion percentages and loading states — pass `label` to render the metric name and live percentage side-by-side above the bar.
 * @example
 * // Onboarding completion tracker
 * <ProgressBar value={65} color="mint" label="Profile completion" />
 * // Compact bar without label
 * <ProgressBar value={40} color="pink" size="sm" />
 */
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
