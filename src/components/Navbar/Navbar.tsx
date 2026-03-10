import type { ReactNode } from "react";

export interface NavbarProps {
  brand: ReactNode;
  children: ReactNode;
  actions?: ReactNode;
  className?: string;
}

export function Navbar({
  brand,
  children,
  actions,
  className = "",
}: NavbarProps) {
  return (
    <nav className={`drp-navbar ${className}`}>
      <div className="drp-navbar__brand">{brand}</div>
      <div className="drp-navbar__links">{children}</div>
      {actions && <div className="drp-navbar__actions">{actions}</div>}
    </nav>
  );
}
