import type { ReactNode } from "react";

export interface AppShellProps {
  sidebar: ReactNode;
  topbar: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
}

export interface SidebarProps {
  children: ReactNode;
  collapsed?: boolean;
}

export interface TopbarProps {
  children: ReactNode;
}

export function AppShell({ sidebar, topbar, children, footer }: AppShellProps) {
  return (
    <div className="app-layout">
      {sidebar}
      <div className="main-content">
        {topbar}
        <main>{children}</main>
        {footer && <footer className="footer-bar">{footer}</footer>}
      </div>
    </div>
  );
}

export function Sidebar({ children, collapsed }: SidebarProps) {
  const classes = ["sidebar", collapsed && "collapsed"]
    .filter(Boolean)
    .join(" ");
  return <aside className={classes}>{children}</aside>;
}

export function Topbar({ children }: TopbarProps) {
  return <header className="topbar">{children}</header>;
}
