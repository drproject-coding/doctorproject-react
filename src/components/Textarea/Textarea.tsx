import { useId, type TextareaHTMLAttributes } from "react";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string | boolean;
  success?: boolean;
}

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
