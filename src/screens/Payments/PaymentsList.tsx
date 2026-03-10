import React, { useState } from "react";
import { Pictogram } from "../../components/Pictogram/Pictogram";
import { AppSidebar } from "../shared/AppSidebar";
import { AppTopBar } from "../shared/AppTopBar";
import { AppFooter } from "../shared/AppFooter";

export type PaymentsTheme = "light" | "dark";

// Legacy type -- kept for backwards-compatible barrel exports
export interface Payment {
  id: string;
  method: string;
  amount: number;
  date: string;
  recipient: string;
  status: "Completed" | "Pending" | "Failed";
}
export type PaymentsVariant =
  | "list"
  | "details"
  | "send-money"
  | "pay-utilities";

export interface PaymentsListProps {
  theme?: PaymentsTheme;
  variant?: PaymentsVariant;
}
// ─────────────────────────────────────────────────────────────────────────────
// Top Bar
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// Footer
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// Currency flag helper
// ─────────────────────────────────────────────────────────────────────────────

const CurrencyFlag: React.FC<{ currency: "USD" | "EUR" | "GBP" }> = ({
  currency,
}) => {
  const flags: Record<string, string> = {
    USD: "\u{1F1FA}\u{1F1F8}",
    EUR: "\u{1F1EA}\u{1F1FA}",
    GBP: "\u{1F1EC}\u{1F1E7}",
  };
  return (
    <span className="drp-flex drp-items-center drp-gap-1">
      <span style={{ fontSize: 14 }}>{flags[currency]}</span>
      <span className="drp-text drp-text--sm drp-text--muted">{currency}</span>
    </span>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Payment category card
// ─────────────────────────────────────────────────────────────────────────────

const CategoryCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}> = ({ icon, title, subtitle }) => (
  <button
    className="drp-card"
    style={{
      display: "flex",
      alignItems: "center",
      gap: "var(--drp-space-4)",
      padding: "var(--drp-space-4)",
      border: "1px dashed var(--drp-black)",
      cursor: "pointer",
    }}
  >
    <div
      style={{
        width: 48,
        height: 48,
        background: "var(--drp-purple)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        color: "var(--drp-white)",
      }}
    >
      {icon}
    </div>
    <div style={{ textAlign: "left" }}>
      <div className="drp-text drp-text--bold">{title}</div>
      <div className="drp-caption">{subtitle}</div>
    </div>
  </button>
);

// ─────────────────────────────────────────────────────────────────────────────
// Recent transfers data
// ─────────────────────────────────────────────────────────────────────────────

const recentTransfers = [
  {
    name: "Harrison Phillips",
    account: "Account ending in 1435",
    currency: "USD" as const,
    bg: "var(--drp-grey)",
    initials: "HP",
  },
  {
    name: "Rustem Tolstobrov",
    account: "Account ending in 3456",
    currency: "USD" as const,
    bg: "var(--drp-orange)",
    initials: "RT",
  },
  {
    name: "Alicia Puma",
    account: "Account ending in 1223",
    currency: "USD" as const,
    bg: "var(--drp-purple)",
    initials: "AP",
  },
  {
    name: "Nonkosi Joyi",
    account: "Account ending in 1156",
    currency: "EUR" as const,
    bg: "var(--drp-blue)",
    initials: "NJ",
  },
  {
    name: "Evelyn Allen",
    account: "Account ending in 1439",
    currency: "EUR" as const,
    bg: "var(--drp-pink)",
    initials: "EA",
  },
  {
    name: "Justine Marshall",
    account: "Account ending in 1567",
    currency: "USD" as const,
    bg: "var(--drp-mint)",
    initials: "JM",
  },
  {
    name: "Yi Chun-Hwa",
    account: "Account ending in 1890",
    currency: "GBP" as const,
    bg: "var(--drp-yellow)",
    initials: "YC",
  },
  {
    name: "Emmy Elsner",
    account: "Account ending in 1546",
    currency: "EUR" as const,
    bg: "var(--drp-purple)",
    initials: "EE",
  },
  {
    name: "Xian Zhou",
    account: "Account ending in 1498",
    currency: "USD" as const,
    bg: "var(--drp-pink)",
    initials: "XZ",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// List variant content (main Payments page)
// ─────────────────────────────────────────────────────────────────────────────

const ListContent: React.FC = () => (
  <div className="content">
    <div className="drp-flex drp-gap-4" style={{ minHeight: 0, flex: 1 }}>
      {/* Left: Make a payment */}
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
        {/* Header */}
        <div
          className="drp-flex drp-items-center drp-justify-between"
          style={{
            padding: "var(--drp-space-5) var(--drp-space-6)",
            borderBottom: "var(--drp-border-thin)",
          }}
        >
          <h2 className="drp-h5">Make a payment</h2>
          <div
            className="drp-flex drp-items-center drp-gap-2"
            style={{
              padding: "var(--drp-space-2) var(--drp-space-4)",
              border: "var(--drp-border-thin)",
            }}
          >
            <svg
              width="16"
              height="16"
              style={{ color: "var(--drp-grey)" }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span className="drp-text drp-text--sm drp-text--muted">
              Search
            </span>
          </div>
        </div>

        <div
          style={{
            flex: 1,
            overflow: "auto",
            padding: "var(--drp-space-5) var(--drp-space-6)",
          }}
        >
          {/* Payment categories */}
          <div style={{ marginBottom: "var(--drp-space-5)" }}>
            <p
              className="drp-caption"
              style={{ marginBottom: "var(--drp-space-3)" }}
            >
              Payment categories
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "var(--drp-space-3)",
              }}
            >
              <CategoryCard
                icon={
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7h12m0 0l-4-4m4 4l-4 4M4 17h12m0 0l-4-4m4 4l-4 4"
                    />
                  </svg>
                }
                title="Transfer to someone"
                subtitle="156 contacts"
              />
              <CategoryCard
                icon={
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="7"
                      height="7"
                      rx="1"
                      strokeWidth={2}
                    />
                    <rect
                      x="14"
                      y="3"
                      width="7"
                      height="7"
                      rx="1"
                      strokeWidth={2}
                    />
                    <rect
                      x="14"
                      y="14"
                      width="7"
                      height="7"
                      rx="1"
                      strokeWidth={2}
                    />
                    <rect
                      x="3"
                      y="14"
                      width="7"
                      height="7"
                      rx="1"
                      strokeWidth={2}
                    />
                  </svg>
                }
                title="Pay for utilities"
                subtitle="98 service providers"
              />
            </div>
          </div>

          {/* Service providers */}
          <div style={{ marginBottom: "var(--drp-space-5)" }}>
            <p
              className="drp-caption"
              style={{ marginBottom: "var(--drp-space-3)" }}
            >
              Service providers
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "var(--drp-space-3)",
              }}
            >
              <CategoryCard
                icon={
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <rect
                      x="5"
                      y="2"
                      width="14"
                      height="20"
                      rx="2"
                      strokeWidth={2}
                    />
                    <path
                      strokeLinecap="round"
                      strokeWidth={2}
                      d="M12 18h.01"
                    />
                  </svg>
                }
                title="Mobile Networks"
                subtitle="Top up your balance instantly"
              />
              <CategoryCard
                icon={
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                }
                title="Utilities"
                subtitle="Check your home utility bills"
              />
              <CategoryCard
                icon={
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                }
                title="Government"
                subtitle="Pay car fines, taxes, and service"
              />
              <CategoryCard
                icon={
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                }
                title="Internet Providers"
                subtitle="Find Internet provider in your area"
              />
            </div>
          </div>

          {/* Latest transfers */}
          <div>
            <h3
              className="drp-h5"
              style={{ marginBottom: "var(--drp-space-3)" }}
            >
              Latest transfers
            </h3>
            {[
              {
                initials: "I",
                iconBg: "var(--drp-black)",
                label: "Income payment for provided services",
                sub: "Bank transfer",
                amount: "+ $11,400.00",
                time: "10 Aug 4:50 PM",
                positive: true,
              },
              {
                initials: "P",
                iconBg: "var(--drp-blue)",
                label: "Online purchase at Ebay.com",
                sub: "Online payment",
                amount: "- $396.00",
                time: "12 Aug 3:10 PM",
                positive: false,
              },
              {
                initials: "S",
                iconBg: "var(--drp-blue)",
                label: "IOfinance UI kit purchase",
                sub: "Online payment",
                amount: "- $28.00",
                time: "14 Aug 4:20 AM",
                positive: false,
              },
            ].map((tx, i) => (
              <div
                key={i}
                className="drp-flex drp-items-center drp-gap-3"
                style={{
                  padding: "var(--drp-space-3) 0",
                  borderBottom: i < 2 ? "var(--drp-border-thin)" : "none",
                }}
              >
                <div
                  className="sidebar-avatar"
                  style={{
                    background: tx.iconBg,
                    width: 40,
                    height: 40,
                    fontSize: 14,
                    flexShrink: 0,
                  }}
                >
                  {tx.initials}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="drp-text drp-text--bold">{tx.label}</div>
                  <div className="drp-caption">{tx.sub}</div>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div
                    className="drp-text drp-text--bold"
                    style={{
                      color: tx.positive
                        ? "var(--drp-mint)"
                        : "var(--drp-black)",
                    }}
                  >
                    {tx.amount}
                  </div>
                  <div className="drp-caption">{tx.time}</div>
                </div>
                <button className="drp-btn drp-btn--ghost drp-btn--icon drp-btn--sm">
                  ...
                </button>
              </div>
            ))}
            <button
              className="drp-btn drp-btn--outline drp-btn--block drp-btn--sm"
              style={{ marginTop: "var(--drp-space-3)" }}
            >
              See all transactions
            </button>
          </div>
        </div>
      </div>

      {/* Right: Recent transfers */}
      <div
        className="drp-card"
        style={{
          width: 300,
          flexShrink: 0,
          padding: 0,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            padding: "var(--drp-space-5)",
            borderBottom: "var(--drp-border-thin)",
          }}
        >
          <h2 className="drp-h6">Recent transfers</h2>
        </div>
        <div style={{ flex: 1, overflow: "auto" }}>
          {recentTransfers.map((contact, i) => (
            <div
              key={i}
              className="drp-flex drp-items-center drp-gap-3"
              style={{
                padding: "var(--drp-space-3) var(--drp-space-5)",
                borderBottom:
                  i < recentTransfers.length - 1
                    ? "var(--drp-border-thin)"
                    : "none",
              }}
            >
              <div
                className="sidebar-avatar"
                style={{
                  background: contact.bg,
                  width: 36,
                  height: 36,
                  fontSize: 11,
                  flexShrink: 0,
                }}
              >
                {contact.initials}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  className="drp-text drp-text--bold"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {contact.name}
                </div>
                <div
                  className="drp-caption"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {contact.account}
                </div>
              </div>
              <CurrencyFlag currency={contact.currency} />
            </div>
          ))}
        </div>
        <div
          style={{
            padding: "var(--drp-space-4)",
            borderTop: "var(--drp-border-thin)",
          }}
        >
          <button className="drp-btn drp-btn--outline drp-btn--block drp-btn--sm">
            See all contacts
          </button>
        </div>
      </div>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// Detail icon helper
// ─────────────────────────────────────────────────────────────────────────────

const DetailIcon: React.FC<{ icon: string }> = ({ icon }) => {
  const s: React.CSSProperties = {
    width: 16,
    height: 16,
    color: "var(--drp-grey)",
    flexShrink: 0,
  };
  switch (icon) {
    case "person":
      return (
        <svg style={s} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      );
    case "routing":
    case "type":
      return (
        <svg style={s} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      );
    case "account":
    case "currency":
      return (
        <svg style={s} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      );
    default:
      return <span style={{ width: 16, height: 16 }}>&#x2022;</span>;
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// Details Modal overlay variant
// ─────────────────────────────────────────────────────────────────────────────

const DetailsContent: React.FC = () => (
  <>
    {/* Background -- blurred list */}
    <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
      <div style={{ opacity: 0.3, pointerEvents: "none" }}>
        <ListContent />
      </div>

      {/* Modal overlay */}
      <div className="drp-overlay" style={{ position: "absolute" }}>
        <div
          className="drp-modal"
          style={{ width: 460, overflow: "hidden", padding: 0 }}
        >
          {/* Modal header -- purple */}
          <div
            style={{
              background: "var(--drp-purple)",
              padding: "var(--drp-space-4) var(--drp-space-6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h2
              className="drp-text drp-text--bold"
              style={{ color: "var(--drp-white)" }}
            >
              Recipient details
            </h2>
            <button
              className="drp-btn drp-btn--ghost drp-btn--icon drp-btn--sm"
              style={{ color: "var(--drp-white)" }}
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Avatar area -- still purple bg */}
          <div
            style={{
              background: "var(--drp-purple)",
              display: "flex",
              justifyContent: "center",
              paddingBottom: "var(--drp-space-8)",
              paddingTop: "var(--drp-space-2)",
            }}
          >
            <div
              className="sidebar-avatar"
              style={{
                width: 64,
                height: 64,
                background:
                  "linear-gradient(135deg, var(--drp-orange), var(--drp-yellow))",
                border: "4px solid var(--drp-white)",
                fontSize: 20,
              }}
            />
          </div>

          {/* Content */}
          <div style={{ padding: "var(--drp-space-6) var(--drp-space-8)" }}>
            <div
              style={{
                textAlign: "center",
                marginBottom: "var(--drp-space-6)",
              }}
            >
              <h3 className="drp-h5">Rustem Tolstobrov</h3>
              <p className="drp-text drp-text--sm drp-text--muted">
                Account ending in 3456
              </p>
            </div>

            {/* Detail rows */}
            {[
              {
                icon: "person",
                label: "Account holder name",
                value: "Rustem Tolstobrov",
              },
              { icon: "routing", label: "Routing number", value: "017062169" },
              { icon: "account", label: "Account number", value: "8910242076" },
              {
                icon: "currency",
                label: "Currency",
                value: "\u{1F1FA}\u{1F1F8} USD",
              },
              { icon: "type", label: "Account type", value: "Checking" },
            ].map((row, i) => (
              <div
                key={i}
                className="drp-flex drp-items-center drp-justify-between"
                style={{
                  padding: "var(--drp-space-3) 0",
                  borderBottom: "var(--drp-border-dashed)",
                }}
              >
                <div className="drp-flex drp-items-center drp-gap-3">
                  <DetailIcon icon={row.icon} />
                  <span className="drp-text drp-text--sm drp-text--muted">
                    {row.label}
                  </span>
                </div>
                <span className="drp-text drp-text--bold">{row.value}</span>
              </div>
            ))}

            {/* Action buttons */}
            <div
              className="drp-flex drp-gap-4"
              style={{ marginTop: "var(--drp-space-6)" }}
            >
              <button className="drp-btn drp-btn--outline" style={{ flex: 1 }}>
                Send Funds
              </button>
              <button className="drp-btn drp-btn--outline" style={{ flex: 1 }}>
                Edit Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

// ─────────────────────────────────────────────────────────────────────────────
// Send Money variant
// ─────────────────────────────────────────────────────────────────────────────

const SendMoneyContent: React.FC = () => (
  <div
    className="content"
    style={{ display: "flex", justifyContent: "center" }}
  >
    <div
      style={{
        maxWidth: 480,
        width: "100%",
        padding: "var(--drp-space-10) var(--drp-space-4)",
      }}
    >
      {/* Select recipient */}
      <div className="drp-field" style={{ marginBottom: "var(--drp-space-6)" }}>
        <label className="drp-label">Select recipient</label>
        <div
          className="drp-input"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span className="drp-text drp-text--bold">Rustem Tolstobrov</span>
          <svg
            width="16"
            height="16"
            style={{ color: "var(--drp-grey)" }}
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
        </div>
      </div>

      {/* Select payment account */}
      <div className="drp-field" style={{ marginBottom: "var(--drp-space-6)" }}>
        <label className="drp-label">Select payment account</label>
        <div
          className="drp-input"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span className="drp-text drp-text--bold">Debit Card **** 7890</span>
          <label className="drp-switch">
            <input type="checkbox" defaultChecked />
            <span className="drp-switch__track" />
          </label>
        </div>
      </div>

      {/* You will send */}
      <div className="drp-field" style={{ marginBottom: "var(--drp-space-6)" }}>
        <label className="drp-label">You will send</label>
        <div
          className="drp-input"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span className="drp-text drp-text--muted">1,290.00</span>
          <span className="drp-text drp-text--sm drp-text--muted">USD</span>
        </div>
      </div>

      {/* Fee breakdown */}
      <div
        style={{
          marginBottom: "var(--drp-space-6)",
          paddingLeft: "var(--drp-space-4)",
        }}
      >
        <div
          className="drp-flex drp-items-center drp-gap-3"
          style={{ marginBottom: "var(--drp-space-2)" }}
        >
          <span
            className="drp-tag--dot"
            style={{ background: "var(--drp-black)" }}
          />
          <span className="drp-text drp-text--sm drp-text--muted">
            Conversion fee
          </span>
          <span className="drp-text drp-text--bold" style={{ marginLeft: 4 }}>
            9.50 USD
          </span>
        </div>
        <div className="drp-flex drp-items-center drp-gap-3">
          <span
            className="drp-tag--dot"
            style={{ background: "var(--drp-black)" }}
          />
          <span className="drp-text drp-text--sm drp-text--muted">
            Transfer fee
          </span>
          <span className="drp-text drp-text--bold" style={{ marginLeft: 4 }}>
            5.50 USD
          </span>
        </div>
      </div>

      {/* Delivery time */}
      <div className="drp-field" style={{ marginBottom: "var(--drp-space-6)" }}>
        <label className="drp-label">Delivery time</label>
        <div className="drp-input">
          <span className="drp-text drp-text--muted">
            Standard Transfer 1-3 days
          </span>
        </div>
      </div>

      {/* Disclaimer */}
      <p
        className="drp-caption"
        style={{ marginBottom: "var(--drp-space-6)", lineHeight: 1.6 }}
      >
        Transfers made on weekends or holidays take longer. All transfers are
        subject to review and could be delayed or stopped if we identify an
        issue.
      </p>

      {/* Action buttons */}
      <div className="drp-flex drp-gap-4">
        <button className="drp-btn drp-btn--outline" style={{ flex: 1 }}>
          Cancel
        </button>
        <button className="drp-btn drp-btn--primary" style={{ flex: 1 }}>
          Continue
        </button>
      </div>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// Pay for Utilities variant
// ─────────────────────────────────────────────────────────────────────────────

const PayUtilitiesContent: React.FC = () => (
  <div
    className="content"
    style={{ display: "flex", justifyContent: "center" }}
  >
    <div
      style={{
        maxWidth: 480,
        width: "100%",
        padding: "var(--drp-space-10) var(--drp-space-4)",
      }}
    >
      {/* Utilities */}
      <div className="drp-field" style={{ marginBottom: "var(--drp-space-6)" }}>
        <label className="drp-label">Utilities</label>
        <div
          className="drp-input"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span className="drp-text drp-text--bold">Mobile Networks</span>
          <svg
            width="16"
            height="16"
            style={{ color: "var(--drp-grey)" }}
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
        </div>
      </div>

      {/* Service provider */}
      <div className="drp-field" style={{ marginBottom: "var(--drp-space-6)" }}>
        <label className="drp-label">Service provider</label>
        <div
          className="drp-input"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span className="drp-text drp-text--bold">Vodafone</span>
          <div
            style={{
              width: 24,
              height: 24,
              background: "var(--drp-pink)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid var(--drp-pink)",
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                border: "2px solid var(--drp-white)",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>
      </div>

      {/* You will send */}
      <div className="drp-field" style={{ marginBottom: "var(--drp-space-6)" }}>
        <label className="drp-label">You will send</label>
        <div
          className="drp-input"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span className="drp-text drp-text--muted">15.50</span>
          <span className="drp-text drp-text--sm drp-text--muted">USD</span>
        </div>
      </div>

      {/* Fee breakdown */}
      <div
        style={{
          marginBottom: "var(--drp-space-6)",
          paddingLeft: "var(--drp-space-4)",
        }}
      >
        <div
          className="drp-flex drp-items-center drp-gap-3"
          style={{ marginBottom: "var(--drp-space-2)" }}
        >
          <span
            className="drp-tag--dot"
            style={{ background: "var(--drp-black)" }}
          />
          <span className="drp-text drp-text--sm drp-text--muted">
            Conversion fee
          </span>
          <span className="drp-text drp-text--bold" style={{ marginLeft: 4 }}>
            9.50 USD
          </span>
        </div>
        <div className="drp-flex drp-items-center drp-gap-3">
          <span
            className="drp-tag--dot"
            style={{ background: "var(--drp-black)" }}
          />
          <span className="drp-text drp-text--sm drp-text--muted">
            Transfer fee
          </span>
          <span className="drp-text drp-text--bold" style={{ marginLeft: 4 }}>
            5.50 USD
          </span>
        </div>
      </div>

      {/* Delivery time */}
      <div className="drp-field" style={{ marginBottom: "var(--drp-space-6)" }}>
        <label className="drp-label">Delivery time</label>
        <div className="drp-input">
          <span className="drp-text drp-text--muted">Instant</span>
        </div>
      </div>

      {/* Disclaimer */}
      <p
        className="drp-caption"
        style={{ marginBottom: "var(--drp-space-6)", lineHeight: 1.6 }}
      >
        Transfers made on weekends or holidays take longer. All transfers are
        subject to review and could be delayed or stopped if we identify an
        issue.
      </p>

      {/* Action buttons */}
      <div className="drp-flex drp-gap-4">
        <button className="drp-btn drp-btn--outline" style={{ flex: 1 }}>
          Cancel
        </button>
        <button className="drp-btn drp-btn--primary" style={{ flex: 1 }}>
          Continue
        </button>
      </div>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// Main exported component
// ─────────────────────────────────────────────────────────────────────────────

export const PaymentsList: React.FC<PaymentsListProps> = ({
  theme = "light",
  variant = "list",
}) => {
  const titleMap: Record<PaymentsVariant, string> = {
    list: "Payments",
    details: "Payments",
    "send-money": "Send Money",
    "pay-utilities": "Pay for utilities",
  };

  const showBack = variant === "send-money" || variant === "pay-utilities";

  return (
    <div className="app-layout">
      <AppSidebar activeId="payments" />
      <div className="main-content">
        <AppTopBar title={titleMap[variant]} />

        {variant === "list" && <ListContent />}
        {variant === "details" && <DetailsContent />}
        {variant === "send-money" && <SendMoneyContent />}
        {variant === "pay-utilities" && <PayUtilitiesContent />}

        <AppFooter />
      </div>
    </div>
  );
};
