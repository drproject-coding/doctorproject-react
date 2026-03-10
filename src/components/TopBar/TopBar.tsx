import React from "react";
import { Pictogram } from "../Pictogram/Pictogram";

export interface TopBarProps {
  title?: string;
  actions?: React.ReactNode;
  menuButton?: boolean;
  onMenuClick?: () => void;
  className?: string;
}

export const TopBar: React.FC<TopBarProps> = ({
  title,
  actions,
  menuButton = false,
  onMenuClick,
  className = "",
}) => {
  return (
    <header className={`topbar ${className}`}>
      <div className="topbar-left">
        {menuButton && (
          <button
            className="topbar-menu-btn"
            onClick={onMenuClick}
            aria-label="Open menu"
          >
            <Pictogram name="Menu" size={24} aria-hidden={true} />
          </button>
        )}
        {title && <h1 className="topbar-title">{title}</h1>}
      </div>
      {actions && <div className="topbar-right">{actions}</div>}
    </header>
  );
};
