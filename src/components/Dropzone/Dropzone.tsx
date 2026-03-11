import { useState, useRef } from "react";
import type { ReactNode, DragEvent, ChangeEvent, KeyboardEvent } from "react";

export interface DropzoneProps {
  onFiles?: (files: File[]) => void;
  accept?: string;
  hint?: string;
  icon?: ReactNode;
  className?: string;
  "aria-label"?: string;
}

export function Dropzone({
  onFiles,
  accept,
  hint = "PNG, JPG, PDF up to 10MB",
  icon = "↑",
  className = "",
  "aria-label": ariaLabel = "Upload file",
}: DropzoneProps) {
  const [active, setActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleDragOver(e: DragEvent) {
    e.preventDefault();
    setActive(true);
  }

  function handleDragLeave() {
    setActive(false);
  }

  function handleDrop(e: DragEvent) {
    e.preventDefault();
    setActive(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length) onFiles?.(files);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    if (files.length) onFiles?.(files);
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      inputRef.current?.click();
    }
  }

  const classes = [
    "drp-dropzone",
    active ? "drp-dropzone--active" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type="button"
      className={classes}
      tabIndex={0}
      aria-label={ariaLabel}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
      onKeyDown={handleKeyDown}
    >
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple
        style={{ display: "none" }}
        onChange={handleChange}
      />
      <span className="drp-dropzone__icon" aria-hidden={true}>
        {icon}
      </span>
      <span className="drp-dropzone__text">
        Drop files here or click to upload
      </span>
      {hint && <span className="drp-dropzone__hint">{hint}</span>}
    </button>
  );
}
