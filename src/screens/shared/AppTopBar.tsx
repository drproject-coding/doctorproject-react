import React from "react";
import { Pictogram } from "../../components/Pictogram/Pictogram";

export interface AppTopBarProps {
  title: string;
  notificationCount?: number;
}

export const AppTopBar: React.FC<AppTopBarProps> = ({
  title,
  notificationCount,
}) => (
  <header className="topbar">
    <div className="topbar-left">
      <h1 className="topbar-title">{title}</h1>
    </div>
    <div className="topbar-right">
      <button className="topbar-icon-btn" aria-label="Search">
        <svg
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      <button
        className="topbar-icon-btn"
        aria-label={
          notificationCount
            ? `Notifications (${notificationCount} unread)`
            : "Notifications"
        }
      >
        <Pictogram name="Attention" size={20} aria-hidden={true} />
      </button>
      <button className="topbar-apps-btn">
        <Pictogram name="Apps" size={18} aria-hidden={true} />
        <span>Apps</span>
      </button>
      <button className="topbar-create-btn">
        <Pictogram name="Add" size={20} aria-hidden={true} />
        <span>Create new</span>
      </button>
    </div>
  </header>
);
