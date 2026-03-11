import React from "react";
import { Pictogram } from "../../components/Pictogram/Pictogram";
import { AppSidebar } from "../shared/AppSidebar";
import { AppTopBar } from "../shared/AppTopBar";
import { AppFooter } from "../shared/AppFooter";
import { Pagination } from "../../components/Pagination";

export interface Contact {
  id: string;
  name: string;
  email: string;
  service: string;
  status: "Online" | "Away" | "Offline";
  color: string;
}

export interface ContactsListProps {
  theme?: "light" | "dark";
  variant?: "v1" | "v2" | "new-contact" | "empty";
}

// Avatar placeholder with initials
const Avatar: React.FC<{ name: string; bg: string }> = ({ name, bg }) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
  return (
    <div
      className="sidebar-avatar"
      style={{
        background: bg,
        width: 32,
        height: 32,
        fontSize: 12,
        flexShrink: 0,
      }}
    >
      {initials}
    </div>
  );
};

// Sort icon
const SortIcon: React.FC = () => (
  <svg
    width="14"
    height="14"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    style={{ display: "inline", marginLeft: 4, verticalAlign: "middle" }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
    />
  </svg>
);

// V1 contacts data
const v1Contacts = [
  {
    name: "Darius Cummings",
    email: "balchen@msn.com",
    service: "Development",
    status: "Online" as const,
    bg: "var(--drp-orange)",
  },
  {
    name: "Sampson Totton",
    email: "claypool@comcast.net",
    service: "Design",
    status: "Away" as const,
    bg: "var(--drp-info)",
  },
  {
    name: "Jaroslav Brabec",
    email: "ehood@comcast.net",
    service: "Marketing",
    status: "Away" as const,
    bg: "var(--drp-pink)",
  },
  {
    name: "Olivia Eklund",
    email: "hoyer@icloud.com",
    service: "Development",
    status: "Online" as const,
    bg: "var(--drp-mint)",
  },
  {
    name: "Leo Knight",
    email: "mpiotr@me.com",
    service: "Management",
    status: "Offline" as const,
    bg: "var(--drp-purple)",
  },
  {
    name: "Siri Jakobsson",
    email: "marnanel@outlook.com",
    service: "Promotion",
    status: "Online" as const,
    bg: "var(--drp-success)",
  },
  {
    name: "Mariano Rasgado",
    email: "fraterk@me.com",
    service: "Marketing",
    status: "Offline" as const,
    bg: "var(--drp-error)",
  },
  {
    name: "Hugo Assuncao",
    email: "jugalator@me.com",
    service: "Development",
    status: "Away" as const,
    bg: "#6366f1",
  },
  {
    name: "Olivia Arribas",
    email: "glenz@outlook.com",
    service: "Marketing",
    status: "Online" as const,
    bg: "var(--drp-warning)",
  },
];

// V2 contacts data
const v2Contacts = [
  {
    name: "Nadine Petrolli",
    email: "balchen@msn.com",
    accessOn: true,
    bg: "var(--drp-orange)",
  },
  {
    name: "Njimoluh Ebua",
    email: "claypool@comcast.net",
    accessOn: true,
    bg: "var(--drp-info)",
  },
  {
    name: "Laura Sofia Urena",
    email: "ehood@comcast.net",
    accessOn: true,
    bg: "var(--drp-pink)",
  },
  {
    name: "Boniface Esanji",
    email: "hoyer@icloud.com",
    accessOn: true,
    bg: "var(--drp-mint)",
  },
  {
    name: "Pham Quoc Hung",
    email: "mpiotr@me.com",
    accessOn: true,
    bg: "var(--drp-purple)",
  },
  {
    name: "Anje Keizer",
    email: "marnanel@outlook.com",
    accessOn: true,
    bg: "var(--drp-success)",
  },
  {
    name: "Igor Antonovich",
    email: "fraterk@me.com",
    accessOn: false,
    bg: "var(--drp-error)",
  },
  {
    name: "Pavith Nadal",
    email: "jugalator@me.com",
    accessOn: false,
    bg: "#6366f1",
  },
  {
    name: "Gaspar Antunes",
    email: "glenz@outlook.com",
    accessOn: false,
    bg: "var(--drp-warning)",
  },
];

const StatusDot: React.FC<{ status: "Online" | "Away" | "Offline" }> = ({
  status,
}) => {
  if (status === "Online") {
    return (
      <span className="drp-tag drp-tag--dot">
        <span
          className="drp-dot"
          style={{ background: "var(--drp-success)" }}
        />
        Online
      </span>
    );
  }
  if (status === "Offline") {
    return (
      <span className="drp-tag drp-tag--dot">
        <span className="drp-dot" style={{ background: "var(--drp-error)" }} />
        Offline
      </span>
    );
  }
  return <span className="drp-text drp-text--sm drp-text--muted">Away</span>;
};

const Toggle: React.FC<{ on: boolean }> = ({ on }) => (
  <label className="drp-switch">
    <input type="checkbox" checked={on} readOnly />
    <span className="drp-switch__track">
      <span className="drp-switch__knob" />
    </span>
  </label>
);

const TabBar: React.FC<{ active: string }> = ({ active }) => (
  <div
    className="drp-flex drp-items-center drp-justify-between"
    style={{
      padding: "var(--drp-space-3) var(--drp-space-6)",
      borderBottom: "var(--drp-border)",
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
    <div className="drp-flex drp-gap-2">
      <button className="drp-btn drp-btn--outline drp-btn--sm">
        <svg
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z"
          />
        </svg>
        Sort: A-Z
      </button>
      <button className="drp-btn drp-btn--outline drp-btn--sm">
        ··· Bulk Actions
      </button>
    </div>
  </div>
);

const ContactPagination: React.FC = () => (
  <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
);

// V1: Name, Email, Service, Status table
const V1Content: React.FC = () => (
  <div
    className="content"
    style={{
      overflow: "auto",
      padding: "var(--drp-space-4) var(--drp-space-6)",
    }}
  >
    <div className="drp-card">
      <TabBar active="All Contacts" />
      <table className="drp-table">
        <thead>
          <tr>
            <th style={{ width: 32 }} />
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
            <th style={{ width: 40 }} />
          </tr>
        </thead>
        <tbody>
          {v1Contacts.map((contact) => (
            <tr key={contact.name}>
              <td>
                <input
                  type="checkbox"
                  aria-label="Select contact"
                  className="drp-checkbox"
                />
              </td>
              <td>
                <div className="drp-flex drp-items-center drp-gap-3">
                  <Avatar name={contact.name} bg={contact.bg} />
                  <span className="drp-text drp-text--sm drp-text--bold">
                    {contact.name}
                  </span>
                </div>
              </td>
              <td>
                <span className="drp-text drp-text--sm drp-text--muted">
                  {contact.email}
                </span>
              </td>
              <td>
                <span className="drp-text drp-text--sm">{contact.service}</span>
              </td>
              <td>
                <StatusDot status={contact.status} />
              </td>
              <td>
                <button
                  aria-label="More options"
                  className="drp-btn drp-btn--ghost drp-btn--sm"
                >
                  ···
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ContactPagination />
    </div>
  </div>
);

// V2: Name, Email, Access (dropdown + toggle) table
const V2Content: React.FC = () => (
  <div
    className="content"
    style={{
      overflow: "auto",
      padding: "var(--drp-space-4) var(--drp-space-6)",
    }}
  >
    <div className="drp-card">
      <TabBar active="All Contacts" />
      <table className="drp-table">
        <thead>
          <tr>
            <th style={{ width: 32 }} />
            <th>
              Name <SortIcon />
            </th>
            <th>
              Email <SortIcon />
            </th>
            <th>
              Access <SortIcon />
            </th>
            <th style={{ width: 40 }} />
          </tr>
        </thead>
        <tbody>
          {v2Contacts.map((contact) => (
            <tr key={contact.name}>
              <td>
                <input
                  type="checkbox"
                  aria-label="Select contact"
                  className="drp-checkbox"
                />
              </td>
              <td>
                <div className="drp-flex drp-items-center drp-gap-3">
                  <Avatar name={contact.name} bg={contact.bg} />
                  <span className="drp-text drp-text--sm drp-text--bold">
                    {contact.name}
                  </span>
                </div>
              </td>
              <td>
                <span className="drp-text drp-text--sm drp-text--muted">
                  {contact.email}
                </span>
              </td>
              <td>
                <div className="drp-flex drp-items-center drp-gap-3">
                  <button className="drp-btn drp-btn--outline drp-btn--sm">
                    <svg
                      width="14"
                      height="14"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    View and edit
                  </button>
                  <Toggle on={contact.accessOn} />
                </div>
              </td>
              <td>
                <button
                  aria-label="More options"
                  className="drp-btn drp-btn--ghost drp-btn--sm"
                >
                  ···
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ContactPagination />
    </div>
  </div>
);

// New Contact modal overlay on top of V1
const NewContactModal: React.FC = () => (
  <div
    className="content"
    style={{
      overflow: "auto",
      padding: "var(--drp-space-4) var(--drp-space-6)",
      position: "relative",
    }}
  >
    {/* Background: V1 table dimmed */}
    <div className="drp-card" style={{ opacity: 0.4, pointerEvents: "none" }}>
      <TabBar active="All Contacts" />
      <table className="drp-table">
        <thead>
          <tr>
            <th style={{ width: 32 }} />
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
            <th style={{ width: 40 }} />
          </tr>
        </thead>
        <tbody>
          {v1Contacts.slice(0, 6).map((contact) => (
            <tr key={contact.name}>
              <td>
                <input type="checkbox" className="drp-checkbox" readOnly />
              </td>
              <td>
                <div className="drp-flex drp-items-center drp-gap-3">
                  <Avatar name={contact.name} bg={contact.bg} />
                  <span className="drp-text drp-text--sm drp-text--bold">
                    {contact.name}
                  </span>
                </div>
              </td>
              <td>
                <span className="drp-text drp-text--sm drp-text--muted">
                  {contact.email}
                </span>
              </td>
              <td>
                <span className="drp-text drp-text--sm">{contact.service}</span>
              </td>
              <td>
                <StatusDot status={contact.status} />
              </td>
              <td>
                <span className="drp-text drp-text--muted">···</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Modal */}
    <div className="drp-overlay" style={{ position: "absolute", inset: 0 }}>
      <div className="drp-modal" style={{ width: 480 }}>
        {/* Modal header */}
        <div
          className="drp-flex drp-items-center drp-justify-between"
          style={{
            padding: "var(--drp-space-6) var(--drp-space-6) var(--drp-space-4)",
          }}
        >
          <h2 className="drp-h4">Latest transactions</h2>
          <button
            aria-label="Close"
            className="drp-btn drp-btn--ghost drp-btn--icon"
          >
            <svg
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div style={{ padding: "0 var(--drp-space-6) var(--drp-space-6)" }}>
          {/* Photo upload area */}
          <div
            className="drp-flex drp-justify-center"
            style={{ marginBottom: "var(--drp-space-4)" }}
          >
            <div className="drp-dropzone" style={{ width: 112, height: 112 }}>
              <svg
                width="32"
                height="32"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
            </div>
          </div>

          {/* Full Name */}
          <div className="drp-field">
            <label className="drp-label">Full Name</label>
            <input
              type="text"
              className="drp-input"
              placeholder="Start typing ..."
            />
          </div>

          {/* Position */}
          <div className="drp-field">
            <label className="drp-label">Position</label>
            <input
              type="text"
              className="drp-input"
              placeholder="Start typing ..."
            />
          </div>

          {/* Phone number */}
          <div className="drp-field">
            <label className="drp-label">Phone number</label>
            <input
              type="tel"
              className="drp-input"
              placeholder="Start typing ..."
            />
          </div>

          {/* Email */}
          <div className="drp-field">
            <label className="drp-label">Email</label>
            <input
              type="email"
              className="drp-input"
              placeholder="Start typing ..."
            />
          </div>

          {/* Submit button */}
          <button
            className="drp-btn drp-btn--primary drp-btn--block"
            style={{ marginTop: "var(--drp-space-4)" }}
          >
            Create contact
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Empty state
const EmptyContent: React.FC = () => (
  <div
    className="content drp-flex drp-items-center drp-justify-center"
    style={{ position: "relative", overflow: "hidden" }}
  >
    {/* Colorful gradient blobs background */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -80,
          right: 0,
          width: 320,
          height: 320,
          background:
            "radial-gradient(circle, var(--drp-warning) 0%, transparent 70%)",
          opacity: 0.6,
          filter: "blur(40px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: -40,
          width: 288,
          height: 288,
          background:
            "radial-gradient(circle, var(--drp-purple) 0%, transparent 70%)",
          opacity: 0.5,
          filter: "blur(40px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: 80,
          width: 160,
          height: 160,
          background:
            "radial-gradient(circle, var(--drp-mint) 0%, transparent 70%)",
          opacity: 0.4,
          filter: "blur(40px)",
        }}
      />
    </div>

    {/* Empty state card */}
    <div className="drp-empty" style={{ position: "relative", zIndex: 1 }}>
      <div style={{ marginBottom: "var(--drp-space-6)" }}>
        <svg
          width="80"
          height="80"
          fill="none"
          viewBox="0 0 80 80"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx="40" cy="28" r="14" strokeLinecap="round" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 68c0-14.36 11.64-26 26-26s26 11.64 26 26"
          />
          <line
            x1="58"
            y1="8"
            x2="22"
            y2="72"
            strokeWidth={3}
            strokeLinecap="round"
          />
        </svg>
      </div>

      <h2 className="drp-h3" style={{ marginBottom: "var(--drp-space-2)" }}>
        No contacts found?
      </h2>
      <p
        className="drp-text drp-text--muted"
        style={{ marginBottom: "var(--drp-space-8)" }}
      >
        Try to add more contacts from your personal
        <br />
        account or invite your friends.
      </p>

      <button className="drp-btn drp-btn--outline">
        <svg
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
        Create new contact
      </button>
    </div>
  </div>
);

export const ContactsList: React.FC<ContactsListProps> = ({
  theme = "light",
  variant = "v1",
}) => {
  const renderContent = () => {
    switch (variant) {
      case "v2":
        return <V2Content />;
      case "new-contact":
        return <NewContactModal />;
      case "empty":
        return <EmptyContent />;
      default:
        return <V1Content />;
    }
  };

  return (
    <div className="app-layout">
      <AppSidebar activeId="contacts" />
      <div className="main-content">
        <AppTopBar title="Contacts" />
        {renderContent()}
        <AppFooter />
      </div>
    </div>
  );
};
