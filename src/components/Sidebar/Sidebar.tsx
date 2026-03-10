import React from "react";

export interface SidebarNavItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  badge?: string | number;
  badgeVariant?: "purple" | "green";
  active?: boolean;
  href?: string;
  onClick?: () => void;
}

export interface SidebarNavSection {
  label: string;
  items: SidebarNavItem[];
}

export interface SidebarTeamMember {
  name: string;
  avatar?: string;
  initials?: string;
}

export interface SidebarProps {
  brandName?: string;
  sections?: SidebarNavSection[];
  teamMembers?: SidebarTeamMember[];
  teamLabel?: string;
  collapsed?: boolean;
  mobileOpen?: boolean;
  onToggle?: () => void;
  onItemClick?: (id: string) => void;
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  brandName = "Doctor Project",
  sections = [],
  teamMembers = [],
  teamLabel = "Team",
  collapsed = false,
  mobileOpen = false,
  onToggle,
  onItemClick,
  className = "",
}) => {
  const sidebarClass = [
    "sidebar",
    collapsed && "collapsed",
    mobileOpen && "sidebar--mobile-open",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <aside className={sidebarClass}>
      <div className="sidebar-brand">
        <span className="sidebar-brand-name">{brandName}</span>
        <span className="sidebar-brand-dot" />
      </div>

      <nav className="sidebar-nav" aria-label="Main navigation">
        {sections.map((section, sIdx) => (
          <div key={sIdx} className="sidebar-nav-section">
            <div className="sidebar-nav-label">{section.label}</div>
            {section.items.map((item) => (
              <a
                key={item.id}
                className={`sidebar-nav-item${item.active ? " active" : ""}`}
                href={item.href || "#"}
                aria-label={collapsed ? item.label : undefined}
                aria-current={item.active ? "page" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  item.onClick?.();
                  onItemClick?.(item.id);
                }}
              >
                {item.icon && (
                  <span className="sidebar-nav-icon">{item.icon}</span>
                )}
                <span className="sidebar-nav-text">{item.label}</span>
                {item.badge !== undefined && (
                  <span
                    className={`sidebar-badge sidebar-badge--${item.badgeVariant || "purple"}`}
                  >
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </div>
        ))}
      </nav>

      {teamMembers.length > 0 && (
        <div className="sidebar-team">
          <div className="sidebar-team-label">{teamLabel}</div>
          {teamMembers.map((member, idx) => (
            <div key={idx} className="sidebar-team-member">
              <div className="sidebar-avatar">
                {member.avatar ? (
                  <img src={member.avatar} alt={member.name} />
                ) : (
                  member.initials || member.name.charAt(0).toUpperCase()
                )}
              </div>
              <span className="sidebar-team-name">{member.name}</span>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
};
