import type { ReactNode } from "react";

type TagColor =
  | "purple"
  | "mint"
  | "pink"
  | "yellow"
  | "grey"
  | "orange"
  | "light"
  | "teal"
  | "black";

export interface TagProps {
  children: ReactNode;
  color?: TagColor;
  filled?: boolean;
  dark?: boolean;
  dot?: boolean;
  /** Alias for `dot` — show a leading legend dot */
  legend?: boolean;
  /** Icon element placed before the label */
  icon?: ReactNode;
  closeable?: boolean;
  onClose?: () => void;
  className?: string;
}

/**
 * Compact label for categorizing or filtering content — use `closeable`/`onClose` for dismissible filter chips, `dot` or `legend` for color-coded legend items in charts or status lists.
 * @example
 * // Dismissible filter chip
 * <Tag color="purple" filled closeable onClose={() => removeFilter("cardiology")}>Cardiology</Tag>
 * // Legend item with dot
 * <Tag color="mint" legend>Completed</Tag>
 */
export function Tag({
  children,
  color,
  filled,
  dark,
  dot,
  legend,
  icon,
  closeable,
  onClose,
  className = "",
}: TagProps) {
  const showDot = dot || legend;
  const classes = [
    "drp-tag",
    color && `drp-tag--${color}`,
    filled && "drp-tag--filled",
    dark && "drp-tag--dark",
    showDot && "drp-tag--dot",
    closeable && "drp-tag--closeable",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes}>
      {icon && <span className="drp-tag__icon">{icon}</span>}
      {children}
      {closeable && (
        <button
          className="drp-tag__close"
          onClick={onClose}
          aria-label="Remove tag"
        >
          <span aria-hidden="true">×</span>
        </button>
      )}
    </span>
  );
}
