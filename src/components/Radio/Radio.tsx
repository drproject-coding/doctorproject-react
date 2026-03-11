import type { InputHTMLAttributes } from "react";

export interface RadioProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label: string;
  color?: "pink" | "purple";
  dark?: boolean;
  error?: boolean;
}

/**
 * Single radio button for mutually exclusive option groups — group multiple `Radio` elements under the same `name` attribute and use `error` to surface validation state.
 * @example
 * // Appointment type selector
 * <fieldset>
 *   <Radio name="apptType" label="In-person visit" value="in-person" color="purple" defaultChecked />
 *   <Radio name="apptType" label="Video consultation" value="video" color="purple" />
 *   <Radio name="apptType" label="Phone call" value="phone" color="purple" />
 * </fieldset>
 */
export function Radio({
  label,
  color,
  dark,
  error,
  className = "",
  ...props
}: RadioProps) {
  const classes = [
    "drp-radio",
    color && `drp-radio--${color}`,
    dark && "drp-radio--dark",
    error && "drp-radio--error",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <label className={classes}>
      <input type="radio" {...props} />
      {label}
    </label>
  );
}
