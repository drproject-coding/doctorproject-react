import { useId, type TextareaHTMLAttributes } from "react";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string | boolean;
  success?: boolean;
}

/**
 * Multi-line text input for free-form content such as clinical notes or messages — mirrors `Input` API with `label`, `error`, and `success` states, and accepts all native `<textarea>` attributes.
 * @example
 * <Textarea
 *   label="Clinical notes"
 *   placeholder="Describe symptoms, observations, and treatment plan…"
 *   rows={6}
 *   value={notes}
 *   onChange={(e) => setNotes(e.target.value)}
 *   error={notesError}
 * />
 */
export function Textarea({
  label,
  error,
  success,
  className = "",
  id,
  ...props
}: TextareaProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  const classes = [
    "drp-input",
    error && "drp-input--error",
    success && "drp-input--success",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const errorMessage =
    typeof error === "string" ? (
      <span className="drp-field__error" role="alert">
        {error}
      </span>
    ) : null;

  if (label) {
    return (
      <div className="drp-field">
        <label className="drp-field__label" htmlFor={inputId}>
          {label}
        </label>
        <textarea id={inputId} className={classes} {...props} />
        {errorMessage}
      </div>
    );
  }
  return (
    <>
      <textarea id={inputId} className={classes} {...props} />
      {errorMessage}
    </>
  );
}
