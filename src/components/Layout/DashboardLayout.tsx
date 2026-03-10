import React, { useState } from "react";
import { TopBar, TopBarProps } from "../TopBar";
import { Sidebar, SidebarProps } from "../Sidebar";

export interface DashboardLayoutProps {
  children: React.ReactNode;
  sidebarProps?: SidebarProps;
  topBarProps?: TopBarProps;
  showSidebar?: boolean;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  sidebarProps,
  topBarProps,
  showSidebar = true,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="app-layout">
      {showSidebar && sidebarProps && (
        <Sidebar
          {...sidebarProps}
          mobileOpen={mobileOpen}
          onToggle={() => setMobileOpen((v) => !v)}
        />
      )}
      <div className="main-content">
        {topBarProps && (
          <TopBar
            {...topBarProps}
            menuButton={topBarProps.menuButton ?? true}
            onMenuClick={() => setMobileOpen((v) => !v)}
          />
        )}
        <div className="content">
          <div className="container">{children}</div>
        </div>
      </div>
    </div>
  );
};
