import { useId, useState, type ReactNode } from "react";
import React from "react";

export interface TooltipProps {
  text: string;
  children: ReactNode;
  className?: string;
}

/**
 * On-focus tooltip that surfaces supplementary context for an interactive element — wrap a single focusable child (button, link, input) and set `text` to a concise non-essential description.
 * @example
 * // Explain an icon-only button
 * <Tooltip text="Export as CSV">
 *   <Button icon aria-label="Export"><DownloadIcon /></Button>
 * </Tooltip>
 * // Clarify a form field's requirement
 * <Tooltip text="Must match the name on your insurance card">
 *   <Input label="Full legal name" value={name} onChange={handleChange} />
 * </Tooltip>
 */
export function Tooltip({ text, children, className = "" }: TooltipProps) {
  const tooltipId = useId();
  const [visible, setVisible] = useState(false);

  return (
    <span
      className={`drp-tooltip ${className}`}
      style={{ position: "relative", display: "inline-flex" }}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<React.HTMLAttributes<HTMLElement>>,
              {
                "aria-describedby": visible ? tooltipId : undefined,
                onFocus: (e: React.FocusEvent) => {
                  setVisible(true);
                  (child.props as React.HTMLAttributes<HTMLElement>).onFocus?.(
                    e as React.FocusEvent<HTMLElement>,
                  );
                },
                onBlur: (e: React.FocusEvent) => {
                  setVisible(false);
                  (child.props as React.HTMLAttributes<HTMLElement>).onBlur?.(
                    e as React.FocusEvent<HTMLElement>,
                  );
                },
              },
            )
          : child,
      )}
      <span
        id={tooltipId}
        role="tooltip"
        className="drp-tooltip-text"
        style={{
          visibility: visible ? "visible" : undefined,
          opacity: visible ? 1 : undefined,
        }}
      >
        {text}
      </span>
    </span>
  );
}
