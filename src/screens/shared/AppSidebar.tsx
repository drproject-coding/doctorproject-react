import React, { useEffect, useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import type { SidebarNavSection } from "../../components/Sidebar";
import { Pictogram } from "../../components/Pictogram/Pictogram";

// ─── Nav icon helper ──────────────────────────────────────────────────────────

const P = (name: string) => (
  <Pictogram name={name} size={28} aria-hidden={true} />
);

// ─── Canonical nav ────────────────────────────────────────────────────────────

const BASE_SECTIONS: SidebarNavSection[] = [
  {
    label: "Main",
    items: [
      { id: "dashboard", label: "Dashboard", icon: P("Layout") },
      { id: "products", label: "Products", icon: P("Basket") },
      { id: "customers", label: "Customers", icon: P("Apps") },
      { id: "contacts", label: "Contacts", icon: P("Message") },
      { id: "accounts", label: "Accounts", icon: P("Folder") },
      { id: "transactions", label: "Transactions", icon: P("Up arrow") },
      { id: "sales", label: "Sales", icon: P("Analytics") },
      {
        id: "payments",
        label: "Payments",
        icon: P("Credit card"),
        badge: 14,
        badgeVariant: "green",
      },
    ],
  },
  {
    label: "Tools",
    items: [
      { id: "calendar", label: "Calendar", icon: P("Time") },
      {
        id: "inbox",
        label: "Inbox",
        icon: P("Mail"),
        badge: 12,
        badgeVariant: "purple",
      },
      { id: "education", label: "Education", icon: P("Bookmark") },
      { id: "reports", label: "Reports", icon: P("Pie Chart") },
      { id: "support", label: "Support", icon: P("Info") },
    ],
  },
  {
    label: "Account",
    items: [{ id: "settings", label: "Settings", icon: P("Filters") }],
  },
];

// ─── Auto-collapse hook ───────────────────────────────────────────────────────

function useAutoCollapse() {
  const [collapsed, setCollapsed] = useState(
    typeof window !== "undefined" ? window.innerWidth < 1024 : false,
  );

  useEffect(() => {
    const handler = () => setCollapsed(window.innerWidth < 1024);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return collapsed;
}

// ─── AppSidebar ───────────────────────────────────────────────────────────────

export interface AppSidebarProps {
  activeId?: string;
  mobileOpen?: boolean;
  onToggle?: () => void;
}

export const AppSidebar: React.FC<AppSidebarProps> = ({
  activeId,
  mobileOpen = false,
  onToggle,
}) => {
  const autoCollapsed = useAutoCollapse();

  const sections = BASE_SECTIONS.map((section) => ({
    ...section,
    items: section.items.map((item) => ({
      ...item,
      active: item.id === activeId,
    })),
  }));

  return (
    <Sidebar
      brandName="Doctor Project"
      sections={sections}
      collapsed={autoCollapsed}
      mobileOpen={mobileOpen}
      onToggle={onToggle}
    />
  );
};
