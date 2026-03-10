import React from "react";
import { Pictogram } from "../../components/Pictogram/Pictogram";
import { AppSidebar } from "../shared/AppSidebar";
import { AppTopBar } from "../shared/AppTopBar";
import { AppFooter } from "../shared/AppFooter";
import { Pagination } from "../../components/Pagination";

export interface Customer {
  id: string;
  name: string;
  email: string;
  status: "Tag" | "Pending" | "center";
}

export interface CustomersListProps {
  theme?: "light" | "dark";
  variant?: "v1" | "v2" | "v3" | "details";
}

const SortIcon: React.FC = () => (
  <svg
    style={{
      width: 12,
      height: 12,
      display: "inline-block",
      marginLeft: 4,
      color: "var(--drp-grey)",
    }}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
    />
  </svg>
);

const TablePagination: React.FC = () => (
  <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
);

const customers = [
  {
    name: "Darius Cummings",
    email: "balchen@msn.com",
    service: "Development",
    status: "Tag" as const,
    bg: "var(--drp-orange)",
  },
  {
    name: "Sampson Totton",
    email: "claypool@comcast.net",
    service: "Design",
    status: "Tag" as const,
    bg: "var(--drp-info)",
  },
  {
    name: "Jaroslav Brabec",
    email: "ehood@comcast.net",
    service: "Marketing",
    status: "Pending" as const,
    bg: "var(--drp-pink)",
  },
  {
    name: "Olivia Eklund",
    email: "hoyer@icloud.com",
    service: "Development",
    status: "Tag" as const,
    bg: "var(--drp-mint)",
  },
  {
    name: "Leo Knight",
    email: "mpiotr@me.com",
    service: "Management",
    status: "Tag" as const,
    bg: "var(--drp-purple)",
  },
  {
    name: "Siri Jakobsson",
    email: "marnanel@outlook.com",
    service: "Promotion",
    status: "Pending" as const,
    bg: "var(--drp-success)",
  },
  {
    name: "Mariano Rasgado",
    email: "fraterk@me.com",
    service: "Marketing",
    status: "Tag" as const,
    bg: "var(--drp-error)",
  },
  {
    name: "Hugo Assuncao",
    email: "jugalator@me.com",
    service: "Development",
    status: "Pending" as const,
    bg: "var(--drp-info-dark)",
  },
  {
    name: "Olivia Arribas",
    email: "glenz@outlook.com",
    service: "Marketing",
    status: "Tag" as const,
    bg: "var(--drp-warning)",
  },
];

const TabBar: React.FC<{ active: string }> = ({ active }) => (
  <div
    className="drp-flex drp-items-center drp-justify-between"
    style={{
      padding: "var(--drp-space-3) var(--drp-space-4)",
      borderBottom: "var(--drp-border-thin)",
    }}
  >
    <div className="drp-tabs">
      {["All Contacts", "Teammates", "Customers"].map((tab) => (
        <button
          key={tab}
          className={`drp-tab ${tab === active ? "drp-tab--active" : ""}`}
        >
          {tab}
        </button>
      ))}
    </div>
    <div className="drp-flex drp-items-center drp-gap-2">
      <button className="drp-btn drp-btn--outline drp-btn--sm">
        Sort: A-Z
      </button>
      <button className="drp-btn drp-btn--outline drp-btn--sm">
        Bulk Actions
      </button>
    </div>
  </div>
);

const V1Content: React.FC = () => (
  <div className="content">
    <div className="drp-card" style={{ padding: 0, overflow: "hidden" }}>
      <TabBar active="All Contacts" />
      <table className="drp-table">
        <thead>
          <tr>
            <th style={{ width: 40 }}>
              <label className="drp-checkbox">
                <input type="checkbox" />
              </label>
            </th>
            <th>
              Name <SortIcon />
            </th>
            <th>
              Email <SortIcon />
            </th>
            <th>
              Service <SortIcon />
            </th>
            <th>
              Status <SortIcon />
            </th>
            <th style={{ width: 40 }}></th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => (
            <tr key={c.name}>
              <td>
                <label className="drp-checkbox">
                  <input type="checkbox" />
                </label>
              </td>
              <td>
                <div className="drp-flex drp-items-center drp-gap-3">
                  <div
                    className="sidebar-avatar"
                    style={{
                      background: c.bg,
                      width: 32,
                      height: 32,
                      fontSize: 12,
                    }}
                  >
                    {c.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <span className="drp-text drp-text--bold">{c.name}</span>
                </div>
              </td>
              <td>
                <span className="drp-text drp-text--sm drp-text--muted">
                  {c.email}
                </span>
              </td>
              <td>
                <span className="drp-text drp-text--sm">{c.service}</span>
              </td>
              <td>
                <span
                  className={`drp-tag drp-tag--dot ${c.status === "Tag" ? "drp-tag--mint" : "drp-tag--grey"}`}
                >
                  {c.status === "Tag" ? "Online" : "Away"}
                </span>
              </td>
              <td>
                <button className="drp-btn drp-btn--ghost drp-btn--icon drp-btn--sm">
                  ...
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <TablePagination />
    </div>
  </div>
);

const V2Content: React.FC = () => (
  <div className="content">
    <div className="drp-card" style={{ padding: 0, overflow: "hidden" }}>
      <TabBar active="All Contacts" />
      <table className="drp-table">
        <thead>
          <tr>
            <th style={{ width: 40 }}>
              <label className="drp-checkbox">
                <input type="checkbox" />
              </label>
            </th>
            <th>
              Name <SortIcon />
            </th>
            <th>
              Email <SortIcon />
            </th>
            <th>
              Access <SortIcon />
            </th>
            <th style={{ width: 40 }}></th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c, i) => (
            <tr key={c.name}>
              <td>
                <label className="drp-checkbox">
                  <input type="checkbox" />
                </label>
              </td>
              <td>
                <div className="drp-flex drp-items-center drp-gap-3">
                  <div
                    className="sidebar-avatar"
                    style={{
                      background: c.bg,
                      width: 32,
                      height: 32,
                      fontSize: 12,
                    }}
                  >
                    {c.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <span className="drp-text drp-text--bold">{c.name}</span>
                </div>
              </td>
              <td>
                <span className="drp-text drp-text--sm drp-text--muted">
                  {c.email}
                </span>
              </td>
              <td>
                <div className="drp-flex drp-items-center drp-gap-3">
                  <button className="drp-btn drp-btn--outline drp-btn--sm">
                    View and edit
                  </button>
                  <label className="drp-switch">
                    <input type="checkbox" defaultChecked={i < 6} />
                    <span className="drp-switch__track">
                      <span className="drp-switch__knob" />
                    </span>
                  </label>
                </div>
              </td>
              <td>
                <button className="drp-btn drp-btn--ghost drp-btn--icon drp-btn--sm">
                  ...
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <TablePagination />
    </div>
  </div>
);

const V3Content: React.FC = () => (
  <div className="content">
    <div className="drp-card" style={{ padding: 0, overflow: "hidden" }}>
      <TabBar active="All Contacts" />
      <table className="drp-table">
        <thead>
          <tr>
            <th style={{ width: 40 }}>
              <label className="drp-checkbox">
                <input type="checkbox" />
              </label>
            </th>
            <th>
              Name <SortIcon />
            </th>
            <th>
              Email <SortIcon />
            </th>
            <th>
              Service <SortIcon />
            </th>
            <th>
              Status <SortIcon />
            </th>
            <th style={{ width: 40 }}></th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => (
            <tr key={c.name}>
              <td>
                <label className="drp-checkbox">
                  <input type="checkbox" />
                </label>
              </td>
              <td>
                <div className="drp-flex drp-items-center drp-gap-3">
                  <div
                    className="sidebar-avatar"
                    style={{
                      background: c.bg,
                      width: 32,
                      height: 32,
                      fontSize: 12,
                    }}
                  >
                    {c.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <span className="drp-text drp-text--bold">{c.name}</span>
                </div>
              </td>
              <td>
                <span className="drp-text drp-text--sm drp-text--muted">
                  {c.email}
                </span>
              </td>
              <td>
                <span className="drp-tag">{c.service}</span>
              </td>
              <td>
                <span className="drp-tag drp-tag--filled drp-tag--mint">
                  {c.status}
                </span>
              </td>
              <td>
                <button className="drp-btn drp-btn--ghost drp-btn--icon drp-btn--sm">
                  ...
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <TablePagination />
    </div>
  </div>
);

const DetailsContent: React.FC = () => (
  <div className="content">
    <div className="drp-flex drp-gap-6">
      <div style={{ flex: 1 }}>
        <div className="drp-card" style={{ padding: 0, overflow: "hidden" }}>
          <div
            className="drp-flex drp-items-center drp-gap-4"
            style={{
              padding: "var(--drp-space-5)",
              borderBottom: "var(--drp-border-thin)",
            }}
          >
            <div
              className="sidebar-avatar"
              style={{
                background: "var(--drp-orange)",
                width: 48,
                height: 48,
                fontSize: 18,
              }}
            >
              D
            </div>
            <div>
              <h2 className="drp-h5">Darius Cummings</h2>
              <span className="drp-text drp-text--sm drp-text--muted">
                balchen@msn.com
              </span>
            </div>
          </div>
          <div style={{ padding: "var(--drp-space-5)" }}>
            <div className="drp-flex drp-gap-6 drp-mb-4">
              <div>
                <span className="drp-label">Service</span>
                <p className="drp-text drp-mt-2">Development</p>
              </div>
              <div>
                <span className="drp-label">Status</span>
                <p className="drp-mt-2">
                  <span className="drp-tag drp-tag--dot drp-tag--mint">
                    Online
                  </span>
                </p>
              </div>
              <div>
                <span className="drp-label">Joined</span>
                <p className="drp-text drp-mt-2">Jan 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const CustomersList: React.FC<CustomersListProps> = ({
  theme = "light",
  variant = "v1",
}) => {
  const renderContent = () => {
    switch (variant) {
      case "v2":
        return <V2Content />;
      case "v3":
        return <V3Content />;
      case "details":
        return <DetailsContent />;
      default:
        return <V1Content />;
    }
  };

  return (
    <div className="app-layout">
      <AppSidebar activeId="customers" />
      <div className="main-content">
        <AppTopBar title="Customers" />
        {renderContent()}
        <AppFooter />
      </div>
    </div>
  );
};
