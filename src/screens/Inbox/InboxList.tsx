import React, { useState } from "react";
import { Pictogram } from "../../components/Pictogram/Pictogram";
import { AppSidebar } from "../shared/AppSidebar";
import { AppTopBar } from "../shared/AppTopBar";
import { AppFooter } from "../shared/AppFooter";
import { Pagination } from "../../components/Pagination";
// ─── Top Bar ─────────────────────────────────────────────────────────────────

// ─── Footer ───────────────────────────────────────────────────────────────────

// ─── Avatar ───────────────────────────────────────────────────────────────────

const avatarColors: Record<string, string> = {
  "Helena Chavez": "var(--drp-pink)",
  "Sallie Wade": "var(--drp-purple)",
  "Blake Howard": "var(--drp-mint)",
  "Devin Williams": "var(--drp-blue)",
  "Raymond Gomez": "var(--drp-orange)",
  "Daya Chitanis": "var(--drp-mint)",
  "Samuil Sadovsky": "var(--drp-orange)",
  "Ishaaq El Vohra": "var(--drp-purple)",
  "Jaquon Hart": "var(--drp-blue)",
  "Sebastian Bennett": "var(--drp-pink)",
  "Anaru Hakopa": "var(--drp-mint)",
  "Rey Milbourne": "var(--drp-mint)",
  "Fua Lamba": "var(--drp-yellow)",
  "Sang Young-Il": "var(--drp-purple)",
  "Gladys Kanyinda": "var(--drp-mint)",
  "Gabriela Pires": "var(--drp-orange)",
};

const Avatar: React.FC<{ name: string; size?: "sm" | "md" | "lg" }> = ({
  name,
  size = "md",
}) => {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");
  const color = avatarColors[name] ?? "var(--drp-grey)";
  const dims = size === "sm" ? 24 : size === "lg" ? 36 : 32;
  const fs = size === "sm" ? 10 : size === "lg" ? 14 : 12;

  return (
    <div
      className="sidebar-avatar"
      style={{
        background: color,
        width: dims,
        height: dims,
        fontSize: fs,
        flexShrink: 0,
      }}
    >
      {initials}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// VARIANT: Mail List
// ─────────────────────────────────────────────────────────────────────────────

type MailTab = "Incoming" | "Sent" | "Drafts" | "Deleted";

const mailItems = [
  {
    id: "1",
    sender: "Samuil Sadovsky",
    title: "Title",
    subtitle: "Subtitle",
    time: "28 days ago",
    starred: false,
    attachments: [] as { name: string; color: string }[],
  },
  {
    id: "2",
    sender: "Ishaaq El Vohra",
    title: "Re: Canada Tries to Turn Ideas Into Dollars",
    subtitle: "Driver Messages That Drive",
    time: "23 hours ago",
    starred: false,
    attachments: [] as { name: string; color: string }[],
  },
  {
    id: "3",
    sender: "Jaquon Hart",
    title: "Re: Damaging Your Phone, Accidentally",
    subtitle: "Daily Report: Silicon Valley Losing",
    time: "6 days ago",
    starred: false,
    attachments: [
      { name: "app design.sketch", color: "var(--drp-orange)" },
      { name: "spendings.pdf", color: "var(--drp-pink)" },
    ],
  },
  {
    id: "4",
    sender: "Sebastian Bennett",
    title: "Re: Tesla, Reporting Bigger Gains in Production",
    subtitle: "Evidence That Robots",
    time: "5 months ago",
    starred: true,
    attachments: [] as { name: string; color: string }[],
  },
  {
    id: "5",
    sender: "Anaru Hakopa",
    title: "The New Meaning of Fast Fashion",
    subtitle: "Detailing Amazon's Custom-Clothing",
    time: "58 mins ago",
    starred: true,
    attachments: [] as { name: string; color: string }[],
  },
  {
    id: "6",
    sender: "Rey Milbourne",
    title: "Lawyers to Review Mergers",
    subtitle: "Takes On the Flying Car Detailing Amazon's",
    time: "7 days ago",
    starred: false,
    attachments: [
      { name: "money transfer.pdf", color: "var(--drp-pink)" },
      { name: "work scope.xls", color: "var(--drp-mint)" },
      { name: "content articles.docx", color: "var(--drp-blue)" },
    ],
  },
  {
    id: "7",
    sender: "Fua Lamba",
    title: "Trump Appoints One of His Lawyers to Review",
    subtitle: "No Longer a Dream",
    time: "7 days ago",
    starred: true,
    attachments: [] as { name: string; color: string }[],
  },
  {
    id: "8",
    sender: "Sang Young-Il",
    title: "Re: Sleepy Behind the Wheel?",
    subtitle: "Changes to Tech Worker Visas Are Cosmetic",
    time: "2 weeks ago",
    starred: false,
    attachments: [] as { name: string; color: string }[],
  },
];

const MailListVariant: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MailTab>("Incoming");
  const tabs: MailTab[] = ["Incoming", "Sent", "Drafts", "Deleted"];

  return (
    <>
      <AppTopBar title="Inbox" />
      <div className="content">
        {/* Toolbar */}
        <div className="drp-flex drp-items-center drp-justify-between drp-mb-4">
          <div className="drp-flex drp-items-center drp-gap-3">
            <button className="drp-btn drp-btn--outline drp-btn--sm">
              <svg
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
              Compose Email
            </button>
            <div className="drp-tabs">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`drp-tab ${activeTab === tab ? "drp-tab--active" : ""}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div
            className="drp-flex drp-items-center drp-gap-2"
            style={{
              padding: "var(--drp-space-2) var(--drp-space-3)",
              border: "var(--drp-border-thin)",
              background: "var(--drp-white)",
            }}
          >
            <svg
              width="14"
              height="14"
              style={{ color: "var(--drp-grey)" }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Type to search..."
              className="drp-input"
              style={{
                border: "none",
                padding: 0,
                width: 140,
                fontSize: 12,
                background: "transparent",
              }}
              readOnly
            />
          </div>
        </div>

        {/* Table */}
        <div className="drp-card" style={{ padding: 0, overflow: "hidden" }}>
          {mailItems.map((item, idx) => (
            <div
              key={item.id}
              className="drp-flex drp-items-center drp-gap-3"
              style={{
                padding: "var(--drp-space-3) var(--drp-space-4)",
                borderBottom:
                  idx !== mailItems.length - 1
                    ? "var(--drp-border-thin)"
                    : "none",
                cursor: "pointer",
              }}
            >
              {/* Checkbox */}
              <div
                className="drp-flex drp-items-center drp-gap-2"
                style={{ flexShrink: 0 }}
              >
                <label className="drp-checkbox">
                  <input type="checkbox" />
                </label>
                <button
                  className="drp-btn drp-btn--ghost drp-btn--icon drp-btn--sm"
                  style={{ fontSize: 10 }}
                >
                  ...
                </button>
              </div>
              {/* Star */}
              {item.starred ? (
                <svg
                  width="14"
                  height="14"
                  style={{ color: "var(--drp-yellow)", flexShrink: 0 }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ) : (
                <div style={{ width: 14, height: 14, flexShrink: 0 }} />
              )}
              {/* Avatar */}
              <Avatar name={item.sender} size="md" />
              {/* Sender */}
              <span
                className="drp-text drp-text--bold"
                style={{
                  width: 128,
                  flexShrink: 0,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  fontSize: 13,
                }}
              >
                {item.sender}
              </span>
              {/* Title + subtitle */}
              <div
                className="drp-flex drp-items-center drp-gap-2"
                style={{ flex: 1, minWidth: 0 }}
              >
                <span
                  className="drp-text drp-text--bold"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    fontSize: 13,
                  }}
                >
                  {item.title}
                </span>
                {item.subtitle && (
                  <span
                    className="drp-text drp-text--sm drp-text--muted"
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.subtitle}
                  </span>
                )}
              </div>
              {/* Attachments */}
              {item.attachments.length > 0 && (
                <div
                  className="drp-flex drp-items-center drp-gap-1"
                  style={{ flexShrink: 0 }}
                >
                  {item.attachments.map((att) => (
                    <span
                      key={att.name}
                      className="drp-tag drp-tag--sm"
                      style={{ fontSize: 10 }}
                    >
                      <span
                        className="drp-tag--dot"
                        style={{ background: att.color }}
                      />
                      {att.name}
                    </span>
                  ))}
                </div>
              )}
              {/* Time */}
              <span
                className="drp-text drp-text--sm drp-text--muted"
                style={{
                  flexShrink: 0,
                  width: 80,
                  textAlign: "right",
                  fontSize: 12,
                }}
              >
                {item.time}
              </span>
              <button
                className="drp-btn drp-btn--ghost drp-btn--icon drp-btn--sm"
                style={{ flexShrink: 0 }}
              >
                ...
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
      </div>
      <AppFooter />
    </>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// VARIANT: Chat
// ─────────────────────────────────────────────────────────────────────────────

const chatMessages = [
  {
    id: "1",
    sender: "Helena Chavez",
    subject: "Leaving Fingerprints on the iPhone",
    preview: "I want to talk about things that are",
    time: "11:52AM",
  },
  {
    id: "2",
    sender: "Sallie Wade",
    subject: "Microsoft Looks to Regain",
    preview: "I want to talk about things that are",
    time: "10:04AM",
  },
  {
    id: "3",
    sender: "Blake Howard",
    subject: "Tech Roundup: Things Learned",
    preview: "I want to talk about things that are",
    time: "08:31AM",
  },
  {
    id: "4",
    sender: "Devin Williams",
    subject: "Tesla, Reporting Bigger Loss",
    preview: "I want to talk about things that are",
    time: "08:01PM",
  },
  {
    id: "5",
    sender: "Raymond Gomez",
    subject: "Just What Was in That System?",
    preview: "I want to talk about things that are",
    time: "12:54AM",
  },
  {
    id: "6",
    sender: "Devin Williams",
    subject: "Tesla, Reporting Bigger Loss",
    preview: "I want to talk about things that are",
    time: "08:01PM",
  },
  {
    id: "7",
    sender: "Daya Chitanis",
    subject: "Things Learned",
    preview: "Leaving Fingerprints on the iPhone",
    time: "08:01PM",
  },
];

const ChatVariant: React.FC = () => (
  <>
    <AppTopBar title="Inbox" />
    <div className="content">
      <div className="drp-flex drp-gap-4" style={{ flex: 1, minHeight: 0 }}>
        {/* Left Panel: Message List */}
        <div
          className="drp-card"
          style={{
            width: 280,
            flexShrink: 0,
            padding: 0,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Compose + Filter/Search */}
          <div
            className="drp-flex drp-items-center drp-justify-between"
            style={{
              padding: "var(--drp-space-3)",
              borderBottom: "var(--drp-border-thin)",
            }}
          >
            <button className="drp-btn drp-btn--primary drp-btn--sm">
              <svg
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
              Compose
            </button>
            <div className="drp-flex drp-items-center drp-gap-1">
              <button className="drp-btn drp-btn--ghost drp-btn--icon drp-btn--sm">
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z"
                  />
                </svg>
              </button>
              <button className="drp-btn drp-btn--ghost drp-btn--icon drp-btn--sm">
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Message items */}
          <div style={{ flex: 1, overflow: "auto" }}>
            {chatMessages.map((msg, idx) => (
              <div
                key={msg.id}
                className="drp-flex drp-items-start drp-gap-2"
                style={{
                  padding: "var(--drp-space-2) var(--drp-space-3)",
                  borderBottom:
                    idx !== chatMessages.length - 1
                      ? "var(--drp-border-thin)"
                      : "none",
                  cursor: "pointer",
                }}
              >
                <Avatar name={msg.sender} size="md" />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    className="drp-flex drp-items-center drp-justify-between"
                    style={{ marginBottom: 2 }}
                  >
                    <span
                      className="drp-text drp-text--bold"
                      style={{
                        fontSize: 12,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {msg.sender}
                    </span>
                    <span
                      className="drp-caption"
                      style={{ flexShrink: 0, marginLeft: 4, fontSize: 10 }}
                    >
                      {msg.time}
                    </span>
                  </div>
                  <p
                    className="drp-text drp-text--bold"
                    style={{
                      fontSize: 12,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {msg.subject}
                  </p>
                  <p
                    className="drp-caption"
                    style={{
                      fontSize: 10,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {msg.preview}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel: Chat Conversation */}
        <div
          className="drp-card"
          style={{
            flex: 1,
            padding: 0,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Chat header */}
          <div
            className="drp-flex drp-items-center drp-justify-between"
            style={{
              padding: "var(--drp-space-3) var(--drp-space-4)",
              borderBottom: "var(--drp-border-thin)",
            }}
          >
            <button className="drp-btn drp-btn--outline drp-btn--icon drp-btn--sm">
              &#x2039;
            </button>
            <div className="drp-flex drp-items-center drp-gap-2">
              <Avatar name="Sallie Wade" size="sm" />
              <span
                className="drp-text drp-text--bold"
                style={{ fontSize: 13 }}
              >
                Sallie Wade
              </span>
            </div>
            <div className="drp-flex drp-items-center drp-gap-1">
              <button className="drp-btn drp-btn--ghost drp-btn--icon drp-btn--sm">
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  />
                </svg>
              </button>
              <button className="drp-btn drp-btn--ghost drp-btn--icon drp-btn--sm">
                ...
              </button>
            </div>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflow: "auto",
              padding: "var(--drp-space-4)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--drp-space-4)",
            }}
          >
            {/* 48 Messages divider */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <span
                className="drp-tag drp-tag--dark drp-tag--filled"
                style={{ fontSize: 10 }}
              >
                48 Messages
              </span>
            </div>

            {/* Message: Gabriela (right) */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "var(--drp-space-2)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: 4,
                }}
              >
                <div className="drp-flex drp-items-center drp-gap-2">
                  <span className="drp-caption" style={{ fontSize: 10 }}>
                    8:20 PM Gabriela Pires
                  </span>
                  <Avatar name="Gabriela Pires" size="sm" />
                </div>
                <div
                  style={{
                    background: "var(--drp-purple)",
                    color: "var(--drp-white)",
                    fontSize: 12,
                    padding: "var(--drp-space-2) var(--drp-space-3)",
                    maxWidth: 200,
                  }}
                >
                  Freelance Design Tricks
                </div>
              </div>
            </div>

            {/* Message: Sallie (left) */}
            <div style={{ display: "flex", gap: "var(--drp-space-2)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <div className="drp-flex drp-items-center drp-gap-2">
                  <Avatar name="Sallie Wade" size="sm" />
                  <span className="drp-caption" style={{ fontSize: 10 }}>
                    Sallie Wade 8:35 PM
                  </span>
                </div>
                <div
                  style={{
                    background: "var(--drp-cream)",
                    fontSize: 12,
                    padding: "var(--drp-space-2) var(--drp-space-3)",
                    maxWidth: 250,
                  }}
                >
                  Some graphic designers always manage to produce
                </div>
                {/* Image attachments */}
                <div className="drp-flex drp-gap-2" style={{ marginTop: 4 }}>
                  <div
                    style={{
                      width: 80,
                      height: 56,
                      background:
                        "linear-gradient(135deg, var(--drp-purple), var(--drp-blue))",
                      flexShrink: 0,
                    }}
                  />
                  <div
                    style={{
                      width: 80,
                      height: 56,
                      background:
                        "linear-gradient(135deg, var(--drp-blue), var(--drp-mint))",
                      flexShrink: 0,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Message: Gabriela (right) */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "var(--drp-space-2)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: 4,
                }}
              >
                <div className="drp-flex drp-items-center drp-gap-2">
                  <span className="drp-caption" style={{ fontSize: 10 }}>
                    8:40 PM Gabriela Pires
                  </span>
                  <Avatar name="Gabriela Pires" size="sm" />
                </div>
                <div
                  style={{
                    background: "var(--drp-purple)",
                    color: "var(--drp-white)",
                    fontSize: 12,
                    padding: "var(--drp-space-2) var(--drp-space-3)",
                    maxWidth: 260,
                  }}
                >
                  Attending a trade show can be a very effective method
                </div>
              </div>
            </div>

            {/* Message: Sallie (left) */}
            <div style={{ display: "flex", gap: "var(--drp-space-2)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <div className="drp-flex drp-items-center drp-gap-2">
                  <Avatar name="Sallie Wade" size="sm" />
                  <span className="drp-caption" style={{ fontSize: 10 }}>
                    Sallie Wade 8:50 PM
                  </span>
                </div>
                <div
                  style={{
                    background: "var(--drp-cream)",
                    fontSize: 12,
                    padding: "var(--drp-space-2) var(--drp-space-3)",
                    maxWidth: 200,
                  }}
                >
                  Advertising on a budget part
                </div>
              </div>
            </div>

            {/* Message: Sallie typing */}
            <div className="drp-flex drp-items-start drp-gap-2">
              <Avatar name="Sallie Wade" size="sm" />
              <div
                style={{
                  background: "var(--drp-cream)",
                  fontSize: 12,
                  padding: "var(--drp-space-2) var(--drp-space-3)",
                }}
              >
                <div className="drp-flex drp-items-center drp-gap-1">
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      background: "var(--drp-grey)",
                      borderRadius: "50%",
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      background: "var(--drp-grey)",
                      borderRadius: "50%",
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      background: "var(--drp-grey)",
                      borderRadius: "50%",
                      display: "inline-block",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Compose bar */}
          <div
            style={{
              padding: "var(--drp-space-3) var(--drp-space-4)",
              borderTop: "var(--drp-border-thin)",
            }}
          >
            <div
              className="drp-flex drp-items-center drp-gap-2"
              style={{
                background: "var(--drp-cream)",
                border: "var(--drp-border-thin)",
                padding: "var(--drp-space-2) var(--drp-space-3)",
              }}
            >
              <Avatar name="Gabriela Pires" size="sm" />
              <input
                type="text"
                placeholder="Type to add something"
                className="drp-input"
                style={{
                  flex: 1,
                  border: "none",
                  padding: 0,
                  background: "transparent",
                  fontSize: 12,
                }}
                readOnly
              />
              <button className="drp-btn drp-btn--ghost drp-btn--icon drp-btn--sm">
                ...
              </button>
              <button className="drp-btn drp-btn--ghost drp-btn--icon drp-btn--sm">
                ...
              </button>
              <button
                className="drp-btn drp-btn--primary drp-btn--icon drp-btn--sm"
                style={{ width: 24, height: 24 }}
              >
                <svg
                  width="12"
                  height="12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </>
);

// ─────────────────────────────────────────────────────────────────────────────
// VARIANT: Mail Compose (Thread / Detail View)
// ─────────────────────────────────────────────────────────────────────────────

const MailComposeVariant: React.FC = () => (
  <>
    <AppTopBar title="Inbox" />
    <div className="content">
      {/* Action bar */}
      <div className="drp-flex drp-items-center drp-justify-between drp-mb-4">
        <button className="drp-btn drp-btn--outline drp-btn--sm">
          <svg
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
            />
          </svg>
          Save as draft
        </button>
        <div className="drp-flex drp-items-center drp-gap-2">
          <button className="drp-btn drp-btn--outline drp-btn--sm">
            <svg
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
            Forward
          </button>
          <button className="drp-btn drp-btn--danger drp-btn--sm">
            <svg
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            Delete
          </button>
        </div>
      </div>

      {/* Email thread */}
      <div className="drp-card" style={{ padding: 0, overflow: "hidden" }}>
        {/* Email subject */}
        <div
          style={{
            padding: "var(--drp-space-4) var(--drp-space-5)",
            borderBottom: "var(--drp-border-thin)",
          }}
        >
          <h2 className="drp-h5">
            Re: Solar experiment lets trade energy among themselves
          </h2>
        </div>

        {/* First email */}
        <div
          style={{
            padding: "var(--drp-space-4) var(--drp-space-5)",
            borderBottom: "var(--drp-border-thin)",
          }}
        >
          <div
            className="drp-flex drp-items-start drp-justify-between"
            style={{ marginBottom: "var(--drp-space-3)" }}
          >
            <div className="drp-flex drp-items-center drp-gap-3">
              <Avatar name="Helena Chavez" size="lg" />
              <div>
                <p className="drp-text drp-text--bold">Helena Chavez</p>
                <p className="drp-caption">
                  helena.chavez89@outlook.com{" "}
                  <span style={{ color: "var(--drp-grey)" }}>to</span>{" "}
                  <span className="drp-text drp-text--sm drp-text--muted">
                    me
                  </span>
                </p>
              </div>
            </div>
            <div
              className="drp-flex drp-items-center drp-gap-2"
              style={{ flexShrink: 0 }}
            >
              <span className="drp-caption">18 January 2022</span>
              <span className="drp-caption">&#xb7;</span>
              <span className="drp-caption">11:52AM</span>
            </div>
          </div>
          <div
            className="drp-text drp-text--sm"
            style={{ lineHeight: 1.7, marginBottom: "var(--drp-space-4)" }}
          >
            <p>
              Working outside the office should help de-escalate workplace
              toxicity. But in reality, dysfunctional workplace culture may
              actually get worse when you're at home. Instead, her supervisor
              found new ways to monitor the team virtually
            </p>
            <br />
            <p>Best Regards,</p>
            <p>Helena Chavez</p>
          </div>
          {/* Image attachments */}
          <div className="drp-flex drp-gap-3">
            {[
              "linear-gradient(135deg, var(--drp-purple), var(--drp-blue))",
              "linear-gradient(135deg, var(--drp-blue), var(--drp-mint))",
              "linear-gradient(135deg, var(--drp-pink), var(--drp-orange))",
            ].map((gradient, i) => (
              <div
                key={i}
                style={{
                  width: 112,
                  height: 80,
                  background: gradient,
                  flexShrink: 0,
                }}
              />
            ))}
          </div>
        </div>

        {/* 5 replies divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "var(--drp-space-2) 0",
            borderBottom: "var(--drp-border-thin)",
          }}
        >
          <span className="drp-badge drp-badge--purple">5</span>
        </div>

        {/* Second email reply */}
        <div
          style={{
            padding: "var(--drp-space-4) var(--drp-space-5)",
            borderBottom: "var(--drp-border-thin)",
          }}
        >
          <div className="drp-flex drp-items-start drp-gap-3">
            <Avatar name="Gladys Kanyinda" size="lg" />
            <div style={{ flex: 1 }}>
              <div className="drp-flex drp-items-center drp-justify-between">
                <p className="drp-text drp-text--bold">Gladys Kanyinda</p>
                <div className="drp-flex drp-items-center drp-gap-2">
                  <span className="drp-caption">13 January 2022</span>
                  <span className="drp-caption">&#xb7;</span>
                  <span className="drp-caption">10:45AM</span>
                </div>
              </div>
              <p
                className="drp-text drp-text--sm drp-text--muted"
                style={{ marginTop: 4 }}
              >
                Toxic work cultures can have major impacts on employee wellbeing
              </p>
            </div>
          </div>
        </div>

        {/* Compose bar */}
        <div style={{ padding: "var(--drp-space-4) var(--drp-space-5)" }}>
          <div
            className="drp-flex drp-items-center drp-gap-3"
            style={{
              background: "var(--drp-cream)",
              border: "var(--drp-border-thin)",
              padding: "var(--drp-space-2) var(--drp-space-4)",
            }}
          >
            <Avatar name="Helena Chavez" size="sm" />
            <input
              type="text"
              placeholder="Type to add something"
              className="drp-input"
              style={{
                flex: 1,
                border: "none",
                padding: 0,
                background: "transparent",
                fontSize: 13,
              }}
              readOnly
            />
            <button className="drp-btn drp-btn--ghost drp-btn--icon drp-btn--sm">
              ...
            </button>
            <button className="drp-btn drp-btn--ghost drp-btn--icon drp-btn--sm">
              ...
            </button>
            <button
              className="drp-btn drp-btn--primary drp-btn--icon drp-btn--sm"
              style={{ width: 24, height: 24 }}
            >
              <svg
                width="12"
                height="12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </>
);

// ─────────────────────────────────────────────────────────────────────────────
// VARIANT: Empty
// ─────────────────────────────────────────────────────────────────────────────

const EmptyVariant: React.FC = () => (
  <>
    <AppTopBar title="Inbox" />
    <div
      className="content"
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blobs */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-25%)",
          width: 256,
          height: 256,
          background:
            "radial-gradient(circle, var(--drp-yellow) 0%, var(--drp-orange) 50%, transparent 70%)",
          borderRadius: "50%",
          opacity: 0.6,
          filter: "blur(48px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: "25%",
          width: 224,
          height: 224,
          background:
            "radial-gradient(circle, var(--drp-purple) 0%, var(--drp-purple) 50%, transparent 70%)",
          borderRadius: "50%",
          opacity: 0.5,
          filter: "blur(48px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "25%",
          right: 0,
          width: 192,
          height: 192,
          background:
            "radial-gradient(circle, var(--drp-pink) 0%, var(--drp-pink) 50%, transparent 70%)",
          borderRadius: "50%",
          opacity: 0.4,
          filter: "blur(48px)",
          pointerEvents: "none",
        }}
      />

      {/* Empty state content */}
      <div className="drp-empty" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{ width: 64, height: 64, marginBottom: "var(--drp-space-4)" }}
        >
          <svg
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%" }}
          >
            <path
              d="M12 28 C10 20, 16 12, 24 10 C28 9, 36 10, 40 14 C44 8, 52 8, 56 14 C60 20, 58 28, 52 32 L32 52 L12 32 C8 28, 8 24, 12 28 Z"
              stroke="var(--drp-black)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M44 20 C46 16, 50 16, 52 20"
              stroke="var(--drp-black)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>
        <h2 className="drp-h2" style={{ marginBottom: "var(--drp-space-2)" }}>
          No messages found?
        </h2>
        <p
          className="drp-text drp-text--sm drp-text--muted"
          style={{
            marginBottom: "var(--drp-space-6)",
            maxWidth: 320,
            textAlign: "center",
          }}
        >
          Try to add more contacts from your personal account or start new
          discussion
        </p>
        <button className="drp-btn drp-btn--primary">
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          Create a message
        </button>
      </div>
    </div>
    <AppFooter />
  </>
);

// ─────────────────────────────────────────────────────────────────────────────
// Main Export
// ─────────────────────────────────────────────────────────────────────────────

export type InboxVariant = "mail-list" | "chat" | "mail-compose" | "empty";

export interface InboxListProps {
  theme?: "light" | "dark";
  variant?: InboxVariant;
}

export const InboxList: React.FC<InboxListProps> = ({
  theme = "light",
  variant = "mail-list",
}) => {
  const renderContent = () => {
    switch (variant) {
      case "chat":
        return <ChatVariant />;
      case "mail-compose":
        return <MailComposeVariant />;
      case "empty":
        return <EmptyVariant />;
      case "mail-list":
      default:
        return <MailListVariant />;
    }
  };

  return (
    <div className="app-layout">
      <AppSidebar activeId="inbox" />
      <div className="main-content">
        {renderContent()}
      </div>
    </div>
  );
};
