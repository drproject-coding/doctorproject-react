import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "outline"
  | "ghost"
  | "ghost-bordered"
  | "danger"
  | "secondary"
  | "dark";
type ButtonSize = "sm" | "lg";

type ButtonBaseProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "aria-label"
> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
  /** Icon element placed before the label */
  iconLeft?: ReactNode;
  /** Icon element placed after the label */
  iconRight?: ReactNode;
  children: ReactNode;
};

export type ButtonProps =
  | (ButtonBaseProps & { icon?: false; "aria-label"?: string })
  | (ButtonBaseProps & { icon: true; "aria-label": string });

/**
 * Primary interactive element for all user actions — use `variant="primary"` for the main CTA, `variant="danger"` for destructive actions (always pair with a confirmation dialog), and never use raw `<button>` elements.
 * @example
 * // Standard form submit
 * <Button variant="primary" onClick={handleSave}>Save Changes</Button>
 * // Destructive with icon
 * <Button variant="danger" iconLeft={<TrashIcon />}>Delete Account</Button>
 * // Icon-only (aria-label required)
 * <Button icon aria-label="Close dialog"><XIcon /></Button>
 */
export function Button({
  variant,
  size,
  block,
  icon,
  iconLeft,
  iconRight,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = [
    "drp-btn",
    variant && `drp-btn--${variant}`,
    size && `drp-btn--${size}`,
    block && "drp-btn--block",
    icon && "drp-btn--icon",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} {...props}>
      {iconLeft && <span className="drp-btn__icon">{iconLeft}</span>}
      {children}
      {iconRight && <span className="drp-btn__icon">{iconRight}</span>}
    </button>
  );
}
