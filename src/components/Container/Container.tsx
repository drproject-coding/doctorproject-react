import type { CSSProperties, ElementType, HTMLAttributes } from "react";

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
  /** Maximum width. Defaults to "1200px". */
  maxWidth?: string;
  /** Horizontal padding. Defaults to responsive via clamp. */
  padding?: string;
  as?: ElementType;
}

export function Container({
  maxWidth = "1200px",
  padding = "clamp(16px, 4vw, 32px)",
  as: Tag = "div",
  style,
  children,
  ...rest
}: ContainerProps) {
  const containerStyle: CSSProperties = {
    width: "100%",
    maxWidth,
    marginInline: "auto",
    paddingInline: padding,
    ...style,
  };

  return (
    <Tag style={containerStyle} {...rest}>
      {children}
    </Tag>
  );
}
