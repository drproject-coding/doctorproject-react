import type { InputHTMLAttributes } from "react";

type SwitchBaseProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

export type SwitchProps =
  | (SwitchBaseProps & { label: string; "aria-label"?: string })
  | (SwitchBaseProps & { label?: never; "aria-label": string });

/**
 * Toggle switch for boolean settings that take effect immediately — provide `label` when a visible text description is present, or `aria-label` when the switch is used without visible text.
 * @example
 * // Notification preference with visible label
 * <Switch
 *   label="Email appointment reminders"
 *   checked={emailReminders}
 *   onChange={(e) => setEmailReminders(e.target.checked)}
 * />
 * // Icon-only toggle (aria-label required)
 * <Switch aria-label="Dark mode" checked={darkMode} onChange={toggleDark} />
 */
export function Switch({ label, ...props }: SwitchProps) {
  return (
    <label className="drp-switch">
      <input type="checkbox" {...props} />
      <span className="drp-switch__track">
        <span className="drp-switch__knob" />
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
