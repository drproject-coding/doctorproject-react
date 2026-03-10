import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AppShell, Sidebar, Topbar } from "./Layout";
import { DashboardLayout } from "./DashboardLayout";
import { menuItems, stats } from "../../data/fake";

const meta: Meta<typeof AppShell> = {
  title: "Layout/AppShell",
  component: AppShell,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof AppShell>;

const SidebarContent = () => (
  <>
    <div className="sidebar-brand">
      <span className="sidebar-brand-name">Doctor Project</span>
      <span className="sidebar-brand-dot" />
    </div>
    <nav className="sidebar-nav">
      <div className="sidebar-nav-section">
        <div className="sidebar-nav-label">Navigation</div>
        {menuItems.map((item) => (
          <a key={item.label} href={item.href} className="sidebar-nav-item">
            <span
              className="sidebar-nav-icon"
              dangerouslySetInnerHTML={{ __html: item.iconSvg }}
            />
            <span className="sidebar-nav-text">{item.label}</span>
            {item.badge && (
              <span className="sidebar-badge sidebar-badge--purple">
                {item.badge}
              </span>
            )}
          </a>
        ))}
      </div>
    </nav>
  </>
);

const TopbarContent = () => (
  <>
    <div className="topbar-left">
      <h1 className="topbar-title">Dashboard</h1>
    </div>
    <div className="topbar-right">
      <button className="topbar-icon-btn">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <span className="notification-dot" />
      </button>
      <button className="topbar-create-btn">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M12 4v16m8-8H4" />
        </svg>
        Create New
      </button>
    </div>
  </>
);

export const Default: Story = {
  render: () => (
    <div style={{ height: "600px" }}>
      <AppShell
        sidebar={
          <Sidebar>
            <SidebarContent />
          </Sidebar>
        }
        topbar={
          <Topbar>
            <TopbarContent />
          </Topbar>
        }
        footer={<span className="footer-link">© 2026 Doctor Project</span>}
      >
        <div style={{ padding: "24px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "16px",
              marginBottom: "24px",
            }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="drp-card drp-card--sm"
                style={{ padding: "16px" }}
              >
                <p className="drp-label">{s.label}</p>
                <p className="drp-display-md" style={{ margin: "4px 0" }}>
                  {s.value}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "12px",
                    fontWeight: 600,
                    color:
                      s.trend === "up"
                        ? "var(--drp-success)"
                        : "var(--drp-error)",
                  }}
                >
                  {s.change}
                </p>
              </div>
            ))}
          </div>
          <div className="drp-card" style={{ padding: "24px" }}>
            <h3 className="drp-h4" style={{ marginBottom: "16px" }}>
              Recent Activity
            </h3>
            <p className="drp-text--secondary">
              Dashboard content would go here — charts, tables, activity
              feeds...
            </p>
          </div>
        </div>
      </AppShell>
    </div>
  ),
};

export const Dashboard: Story = {
  render: () => (
    <DashboardLayout
      sidebarProps={{
        sections: [
          {
            label: "Navigation",
            items: [
              {
                id: "dashboard",
                label: "Dashboard",
                icon: <span>◎</span>,
                active: true,
              },
              { id: "products", label: "Products", icon: <span>▣</span> },
              { id: "customers", label: "Customers", icon: <span>▥</span> },
              {
                id: "payments",
                label: "Payments",
                icon: <span>▦</span>,
                badge: 3,
              },
            ],
          },
        ],
      }}
      topBarProps={{
        title: "Dashboard",
      }}
    >
      <h2 className="drp-h3">Welcome to Dashboard</h2>
      <p className="drp-text--secondary">
        This is the DashboardLayout component combining TopBar and Sidebar.
      </p>
    </DashboardLayout>
  ),
};
