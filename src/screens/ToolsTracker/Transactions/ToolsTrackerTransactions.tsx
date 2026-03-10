import React, { useState, useMemo } from "react";
import { ToolsTrackerSidebar } from "../shared/ToolsTrackerSidebar";
import { ToolsTrackerFooter } from "../shared/ToolsTrackerFooter";
import { TopBar } from "../../../components/TopBar/TopBar";
import { Pagination } from "../../../components/Pagination";

/* -------------------------------------------------------------------------- */
/* Types & Data                                                                */
/* -------------------------------------------------------------------------- */

type TFilter = "all" | "paid" | "has-refund" | "refunded";
type TView = "card" | "table";

interface TTransaction {
  id: string;
  name: string;
  extra: number;
  initials: string;
  color: string;
  payment: string;
  amount: number;
  date: string;
  vendor: string;
  status: "paid" | "has-refund" | "refunded";
}

const ALL_TRANSACTIONS: TTransaction[] = [
  {
    id: "1",
    name: "VectorGrove",
    extra: 8,
    initials: "VG",
    color: "#2ecc71",
    payment: "Visa ****7697",
    amount: -195.68,
    date: "Feb 28 1:09 PM",
    vendor: "appsumo",
    status: "paid",
  },
  {
    id: "2",
    name: "Taskade",
    extra: 1,
    initials: "TK",
    color: "#2c3e50",
    payment: "Visa ****7697",
    amount: -118.0,
    date: "Feb 28 1:09 PM",
    vendor: "appsumo",
    status: "paid",
  },
  {
    id: "3",
    name: "SEO Checker for Windows",
    extra: 2,
    initials: "SC",
    color: "#3498db",
    payment: "Visa ****7697",
    amount: -31.0,
    date: "Feb 28 1:09 PM",
    vendor: "appsumo",
    status: "paid",
  },
  {
    id: "4",
    name: "Creaitor.ai",
    extra: 0,
    initials: "CA",
    color: "#1a1a2e",
    payment: "Visa ****7697",
    amount: -89.0,
    date: "Feb 28 1:08 PM",
    vendor: "appsumo",
    status: "paid",
  },
  {
    id: "5",
    name: "AppSumo Plus Yearly Plan",
    extra: 0,
    initials: "AS",
    color: "#e74c3c",
    payment: "Visa ****7697",
    amount: -99.0,
    date: "Feb 28 1:08 PM",
    vendor: "appsumo",
    status: "paid",
  },
  {
    id: "6",
    name: "ApproveMe's Ultimate Contract Template Library",
    extra: 2,
    initials: "AM",
    color: "#95a5a6",
    payment: "Visa ****7697",
    amount: -83.7,
    date: "Feb 28 1:08 PM",
    vendor: "appsumo",
    status: "has-refund",
  },
  {
    id: "7",
    name: "Eurekaa.io - Plus exclusive",
    extra: 0,
    initials: "EU",
    color: "#3498db",
    payment: "Visa ****7697",
    amount: -89.1,
    date: "Feb 28 1:08 PM",
    vendor: "appsumo",
    status: "paid",
  },
  {
    id: "8",
    name: "Automate Job Search - LazyApply",
    extra: 1,
    initials: "LA",
    color: "#1a1a2e",
    payment: "Visa ****7697",
    amount: -149.4,
    date: "Feb 28 1:08 PM",
    vendor: "appsumo",
    status: "paid",
  },
  {
    id: "9",
    name: "MarkCopy",
    extra: 1,
    initials: "MC",
    color: "#27ae60",
    payment: "Visa ****7697",
    amount: -133.2,
    date: "Feb 28 1:08 PM",
    vendor: "appsumo",
    status: "paid",
  },
  {
    id: "10",
    name: "TaskMagic",
    extra: 0,
    initials: "TM",
    color: "#2ecc71",
    payment: "Paid",
    amount: -44.1,
    date: "Feb 28 1:07 PM",
    vendor: "appsumo",
    status: "paid",
  },
  {
    id: "11",
    name: "Agent23.AI Chatbot",
    extra: 0,
    initials: "A2",
    color: "#9b59b6",
    payment: "Visa ****9625",
    amount: -44.1,
    date: "Feb 28 1:06 PM",
    vendor: "appsumo",
    status: "paid",
  },
  {
    id: "12",
    name: "re.tune",
    extra: 0,
    initials: "RT",
    color: "#e67e22",
    payment: "Visa ****9625",
    amount: -44.1,
    date: "Feb 28 1:06 PM",
    vendor: "appsumo",
    status: "paid",
  },
  {
    id: "13",
    name: "Loomly",
    extra: 0,
    initials: "LO",
    color: "#f39c12",
    payment: "Visa ****7697",
    amount: -89.1,
    date: "Feb 27 3:15 PM",
    vendor: "appsumo",
    status: "paid",
  },
  {
    id: "14",
    name: "Pabbly Connect",
    extra: 0,
    initials: "PC",
    color: "#7c3aed",
    payment: "Visa ****7697",
    amount: -249.0,
    date: "Feb 26 11:20 AM",
    vendor: "appsumo",
    status: "has-refund",
  },
  {
    id: "15",
    name: "RocketReach",
    extra: 3,
    initials: "RR",
    color: "#e74c3c",
    payment: "Visa ****9078",
    amount: -99.0,
    date: "Feb 25 9:45 AM",
    vendor: "appsumo",
    status: "paid",
  },
  {
    id: "16",
    name: "Meetric",
    extra: 0,
    initials: "ME",
    color: "#16a085",
    payment: "Visa ****9078",
    amount: -39.0,
    date: "Feb 24 4:30 PM",
    vendor: "appsumo",
    status: "refunded",
  },
  {
    id: "17",
    name: "Writecream",
    extra: 2,
    initials: "WC",
    color: "#8e44ad",
    payment: "Visa ****7697",
    amount: -119.0,
    date: "Feb 23 2:10 PM",
    vendor: "appsumo",
    status: "paid",
  },
  {
    id: "18",
    name: "Durable",
    extra: 0,
    initials: "DU",
    color: "#2980b9",
    payment: "Visa ****7697",
    amount: -59.0,
    date: "Feb 22 10:00 AM",
    vendor: "appsumo",
    status: "paid",
  },
  {
    id: "19",
    name: "Mango DSP",
    extra: 1,
    initials: "MD",
    color: "#f39c12",
    payment: "Visa ****9625",
    amount: -99.0,
    date: "Feb 21 8:20 AM",
    vendor: "appsumo",
    status: "refunded",
  },
  {
    id: "20",
    name: "Frizbit",
    extra: 0,
    initials: "FR",
    color: "#e74c3c",
    payment: "Visa ****9625",
    amount: -59.0,
    date: "Feb 20 1:45 PM",
    vendor: "appsumo",
    status: "paid",
  },
  {
    id: "21",
    name: "Hexomatic",
    extra: 2,
    initials: "HX",
    color: "#27ae60",
    payment: "Visa ****7697",
    amount: -119.0,
    date: "Feb 19 11:30 AM",
    vendor: "appsumo",
    status: "paid",
  },
  {
    id: "22",
    name: "SendFox",
    extra: 0,
    initials: "SF",
    color: "#c0392b",
    payment: "Visa ****7697",
    amount: -49.0,
    date: "Feb 18 3:00 PM",
    vendor: "appsumo",
    status: "paid",
  },
  {
    id: "23",
    name: "Appflowy",
    extra: 0,
    initials: "AF",
    color: "#2c3e50",
    payment: "Visa ****9078",
    amount: -59.0,
    date: "Feb 17 10:15 AM",
    vendor: "manual",
    status: "paid",
  },
  {
    id: "24",
    name: "SocialBee",
    extra: 1,
    initials: "SB",
    color: "#f1c40f",
    payment: "Visa ****9078",
    amount: -199.0,
    date: "Feb 16 2:45 PM",
    vendor: "appsumo",
    status: "has-refund",
  },
  {
    id: "25",
    name: "Landbot",
    extra: 0,
    initials: "LB",
    color: "#1abc9c",
    payment: "Visa ****7697",
    amount: -149.0,
    date: "Feb 15 9:00 AM",
    vendor: "appsumo",
    status: "paid",
  },
  {
    id: "26",
    name: "Hoppy Copy",
    extra: 0,
    initials: "HC",
    color: "#e91e63",
    payment: "Visa ****7697",
    amount: -99.0,
    date: "Feb 14 4:30 PM",
    vendor: "appsumo",
    status: "refunded",
  },
  {
    id: "27",
    name: "CleanMyMac X Business",
    extra: 0,
    initials: "CM",
    color: "#607d8b",
    payment: "Visa ****9625",
    amount: -59.0,
    date: "Feb 13 11:00 AM",
    vendor: "appsumo",
    status: "paid",
  },
  {
    id: "28",
    name: "Scalenut",
    extra: 1,
    initials: "SN",
    color: "#ff5722",
    payment: "Visa ****9625",
    amount: -149.0,
    date: "Feb 12 1:30 PM",
    vendor: "appsumo",
    status: "paid",
  },
  {
    id: "29",
    name: "Zendo",
    extra: 0,
    initials: "ZE",
    color: "#673ab7",
    payment: "Visa ****7697",
    amount: -59.0,
    date: "Feb 11 3:45 PM",
    vendor: "appsumo",
    status: "paid",
  },
  {
    id: "30",
    name: "Taplio",
    extra: 0,
    initials: "TP",
    color: "#ff9800",
    payment: "Visa ****7697",
    amount: -69.0,
    date: "Feb 10 10:00 AM",
    vendor: "appsumo",
    status: "has-refund",
  },
  {
    id: "31",
    name: "InVideo",
    extra: 2,
    initials: "IV",
    color: "#00bcd4",
    payment: "Visa ****9078",
    amount: -119.0,
    date: "Feb 9 2:00 PM",
    vendor: "appsumo",
    status: "paid",
  },
  {
    id: "32",
    name: "Reoon Email Verifier",
    extra: 0,
    initials: "RE",
    color: "#4caf50",
    payment: "Visa ****9078",
    amount: -49.0,
    date: "Feb 8 9:30 AM",
    vendor: "appsumo",
    status: "paid",
  },
  {
    id: "33",
    name: "Animaker",
    extra: 1,
    initials: "AN",
    color: "#ff4081",
    payment: "Visa ****7697",
    amount: -89.0,
    date: "Feb 7 4:15 PM",
    vendor: "appsumo",
    status: "refunded",
  },
  {
    id: "34",
    name: "Publer",
    extra: 0,
    initials: "PB",
    color: "#795548",
    payment: "Visa ****7697",
    amount: -59.0,
    date: "Feb 6 11:45 AM",
    vendor: "appsumo",
    status: "paid",
  },
  {
    id: "35",
    name: "Tidio",
    extra: 0,
    initials: "TI",
    color: "#009688",
    payment: "Visa ****9625",
    amount: -99.0,
    date: "Feb 5 3:30 PM",
    vendor: "appsumo",
    status: "paid",
  },
  {
    id: "36",
    name: "Pallyy",
    extra: 0,
    initials: "PA",
    color: "#e040fb",
    payment: "Visa ****9625",
    amount: -69.0,
    date: "Feb 4 10:00 AM",
    vendor: "appsumo",
    status: "paid",
  },
  {
    id: "37",
    name: "Audiogram",
    extra: 1,
    initials: "AU",
    color: "#3f51b5",
    payment: "Visa ****9078",
    amount: -89.0,
    date: "Feb 3 2:15 PM",
    vendor: "appsumo",
    status: "has-refund",
  },
  {
    id: "38",
    name: "Flodesk",
    extra: 0,
    initials: "FL",
    color: "#e53935",
    payment: "Visa ****9078",
    amount: -59.0,
    date: "Feb 2 9:00 AM",
    vendor: "appsumo",
    status: "paid",
  },
  {
    id: "39",
    name: "Crisp",
    extra: 0,
    initials: "CR",
    color: "#1565c0",
    payment: "Visa ****7697",
    amount: -249.0,
    date: "Feb 1 4:00 PM",
    vendor: "appsumo",
    status: "paid",
  },
  {
    id: "40",
    name: "Involve.me",
    extra: 2,
    initials: "IM",
    color: "#00897b",
    payment: "Visa ****7697",
    amount: -119.0,
    date: "Jan 31 1:30 PM",
    vendor: "appsumo",
    status: "paid",
  },
];

const ITEMS_PER_PAGE = 10;

const FILTERS: { key: TFilter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "paid", label: "Paid" },
  { key: "has-refund", label: "Has Refund" },
  { key: "refunded", label: "Refunded" },
];

const TIME_OPTIONS = [
  { value: "all-time", label: "All Time" },
  { value: "this-month", label: "This Month" },
  { value: "last-3-months", label: "Last 3 Months" },
  { value: "this-year", label: "This Year" },
];

/* -------------------------------------------------------------------------- */
/* Sub-components                                                              */
/* -------------------------------------------------------------------------- */

const ProductAvatar: React.FC<{
  initials: string;
  color: string;
  size?: number;
}> = ({ initials, color, size = 40 }) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: "50%",
      background: color,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontWeight: 700,
      fontSize: size * 0.28,
      flexShrink: 0,
      fontFamily: "var(--drp-font-primary)",
    }}
  >
    {initials}
  </div>
);

const CardRow: React.FC<{ tx: TTransaction }> = ({ tx }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      padding: "var(--drp-space-3) var(--drp-space-4)",
      borderBottom: "var(--drp-border)",
      gap: "var(--drp-space-3)",
    }}
  >
    <ProductAvatar initials={tx.initials} color={tx.color} size={42} />

    <div style={{ flex: 1, minWidth: 0 }}>
      <p
        className="drp-text drp-text--sm drp-text--bold"
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {tx.name}
        {tx.extra > 0 && (
          <span className="drp-text drp-text--muted"> (+{tx.extra} more)</span>
        )}
      </p>
      <p className="drp-text drp-text--xs drp-text--muted">{tx.payment}</p>
    </div>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 2,
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontWeight: 700,
          fontSize: "var(--drp-text-sm)",
          color: tx.status === "refunded" ? "#10b981" : "var(--drp-black)",
        }}
      >
        {tx.status === "refunded"
          ? `+ $${Math.abs(tx.amount).toFixed(2)}`
          : `- $${Math.abs(tx.amount).toFixed(2)}`}
      </span>
      <span className="drp-text drp-text--xs drp-text--muted">{tx.date}</span>
    </div>

    <button
      className="drp-btn drp-btn--ghost drp-btn--sm"
      aria-label="More options"
      style={{ color: "var(--drp-grey)", flexShrink: 0 }}
    >
      ···
    </button>
  </div>
);

const TableView: React.FC<{ transactions: TTransaction[] }> = ({
  transactions,
}) => (
  <table className="drp-table" style={{ width: "100%" }}>
    <thead>
      <tr>
        {["Date & Time ↑", "Payment ↑", "Service", "Vendor", "Price ↑", ""].map(
          (h) => (
            <th
              key={h}
              className="drp-table__th"
              style={{
                padding: "var(--drp-space-3) var(--drp-space-4)",
                fontSize: "0.65rem",
                letterSpacing: "0.08em",
                textAlign: "left",
                whiteSpace: "nowrap",
              }}
            >
              {h}
            </th>
          ),
        )}
      </tr>
    </thead>
    <tbody>
      {transactions.map((tx) => (
        <tr key={tx.id} className="drp-table__row">
          <td
            className="drp-table__td drp-text drp-text--muted"
            style={{
              padding: "var(--drp-space-3) var(--drp-space-4)",
              fontSize: "var(--drp-text-sm)",
              whiteSpace: "nowrap",
            }}
          >
            {tx.date}
          </td>
          <td
            className="drp-table__td"
            style={{ padding: "var(--drp-space-3) var(--drp-space-4)" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--drp-space-2)",
              }}
            >
              <ProductAvatar
                initials={tx.initials}
                color={tx.color}
                size={28}
              />
              <span
                className="drp-text drp-text--sm drp-text--bold"
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: 260,
                  display: "inline-block",
                }}
              >
                {tx.name}
                {tx.extra > 0 && ` (+${tx.extra} more)`}
              </span>
            </div>
          </td>
          <td
            className="drp-table__td"
            style={{ padding: "var(--drp-space-3) var(--drp-space-4)" }}
          >
            <span
              className={`drp-tag drp-tag--filled drp-tag--${
                tx.status === "refunded"
                  ? "mint"
                  : tx.status === "has-refund"
                    ? "yellow"
                    : "purple"
              }`}
              style={{ fontSize: "0.6rem", letterSpacing: "0.06em" }}
            >
              {tx.status === "refunded"
                ? "REFUNDED"
                : tx.status === "has-refund"
                  ? "HAS REFUND"
                  : "PAID"}
            </span>
          </td>
          <td
            className="drp-table__td drp-text drp-text--sm"
            style={{ padding: "var(--drp-space-3) var(--drp-space-4)" }}
          >
            {tx.vendor}
          </td>
          <td
            className="drp-table__td"
            style={{
              padding: "var(--drp-space-3) var(--drp-space-4)",
              fontWeight: 700,
              fontSize: "var(--drp-text-sm)",
              color: tx.status === "refunded" ? "#10b981" : "var(--drp-black)",
              whiteSpace: "nowrap",
            }}
          >
            {tx.status === "refunded"
              ? `+ $${Math.abs(tx.amount).toFixed(2)}`
              : `- $${Math.abs(tx.amount).toFixed(2)}`}
          </td>
          <td
            className="drp-table__td"
            style={{ padding: "var(--drp-space-3) var(--drp-space-4)" }}
          >
            <button
              className="drp-btn drp-btn--ghost drp-btn--sm"
              aria-label="More options"
              style={{ color: "var(--drp-grey)" }}
            >
              ···
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

/* -------------------------------------------------------------------------- */
/* Main component                                                              */
/* -------------------------------------------------------------------------- */

export interface ToolsTrackerTransactionsProps {
  defaultView?: TView;
  defaultFilter?: TFilter;
}

export const ToolsTrackerTransactions: React.FC<
  ToolsTrackerTransactionsProps
> = ({ defaultView = "card", defaultFilter = "all" }) => {
  const [filter, setFilter] = useState<TFilter>(defaultFilter);
  const [view, setView] = useState<TView>(defaultView);
  const [search, setSearch] = useState("");
  const [timeFilter, setTimeFilter] = useState("all-time");
  const [page, setPage] = useState(1);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const filtered = useMemo(() => {
    return ALL_TRANSACTIONS.filter((tx) => {
      if (filter !== "all" && tx.status !== filter) return false;
      if (
        search &&
        !tx.name.toLowerCase().includes(search.toLowerCase()) &&
        !tx.payment.toLowerCase().includes(search.toLowerCase())
      )
        return false;
      return true;
    });
  }, [filter, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const paged = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handleFilterChange = (f: TFilter) => {
    setFilter(f);
    setPage(1);
  };

  const handleSearch = (val: string) => {
    setSearch(val);
    setPage(1);
  };

  /* Grid/List icon SVGs */
  const GridIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <rect x="1" y="1" width="6" height="6" rx="1" />
      <rect x="9" y="1" width="6" height="6" rx="1" />
      <rect x="1" y="9" width="6" height="6" rx="1" />
      <rect x="9" y="9" width="6" height="6" rx="1" />
    </svg>
  );

  const ListIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <rect x="1" y="2" width="14" height="2" rx="1" />
      <rect x="1" y="7" width="14" height="2" rx="1" />
      <rect x="1" y="12" width="14" height="2" rx="1" />
    </svg>
  );

  return (
    <div
      className={`drp-app-shell${theme === "dark" ? " drp-theme--dark" : ""}`}
      style={{ display: "flex", height: "100vh", overflow: "hidden" }}
    >
      <ToolsTrackerSidebar activeId="transactions" />

      <div
        className="main-content"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Top bar with page title */}
        <TopBar
          title="Transactions"
          actions={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--drp-space-2)",
              }}
            >
              <button
                className="drp-btn drp-btn--ghost drp-btn--sm"
                onClick={() =>
                  setTheme((t) => (t === "light" ? "dark" : "light"))
                }
                aria-label="Toggle theme"
                style={{ fontSize: 16, lineHeight: 1 }}
              >
                {theme === "light" ? "🌙" : "☀️"}
              </button>
              <button
                className="drp-btn drp-btn--ghost drp-btn--sm"
                aria-label="Refresh"
                style={{ fontSize: 18, lineHeight: 1 }}
              >
                ↻
              </button>
              <button className="drp-btn drp-btn--primary drp-btn--sm">
                ↻ Sync with AppSumo
              </button>
            </div>
          }
        />

        {/* Scrollable content */}
        <div
          style={{ flex: 1, overflowY: "auto", padding: "var(--drp-space-6)" }}
        >
          {/* Toolbar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--drp-space-3)",
              marginBottom: "var(--drp-space-5)",
              flexWrap: "wrap",
            }}
          >
            {/* Filter tabs (pill style) */}
            <div
              style={{
                display: "flex",
                border: "var(--drp-border)",
                overflow: "hidden",
                flex: 1,
                minWidth: 240,
              }}
            >
              {FILTERS.map((f) => (
                <button
                  key={f.key}
                  onClick={() => handleFilterChange(f.key)}
                  style={{
                    flex: 1,
                    padding: "8px 18px",
                    fontFamily: "var(--drp-font-primary)",
                    fontSize: "var(--drp-text-sm)",
                    fontWeight: 600,
                    background:
                      filter === f.key ? "var(--drp-purple)" : "transparent",
                    color: filter === f.key ? "#fff" : "var(--drp-grey)",
                    border: "none",
                    borderRight: "var(--drp-border)",
                    cursor: "pointer",
                    transition: "background 0.15s ease, color 0.15s ease",
                    whiteSpace: "nowrap",
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Right: search + time filter + view toggle */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--drp-space-2)",
                flexShrink: 0,
              }}
            >
              <input
                type="text"
                className="drp-input"
                placeholder="Search transactions..."
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                style={{ width: 200, fontSize: "var(--drp-text-sm)" }}
              />

              <select
                className="drp-input"
                value={timeFilter}
                onChange={(e) => setTimeFilter(e.target.value)}
                style={{ fontSize: "var(--drp-text-sm)", width: 130 }}
              >
                {TIME_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>

              {/* View toggle */}
              <div
                style={{
                  display: "flex",
                  border: "var(--drp-border)",
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => setView("card")}
                  aria-label="Card view"
                  style={{
                    padding: "8px 10px",
                    background:
                      view === "card" ? "var(--drp-black)" : "transparent",
                    color: view === "card" ? "#fff" : "var(--drp-grey)",
                    border: "none",
                    borderRight: "var(--drp-border)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <GridIcon />
                </button>
                <button
                  onClick={() => setView("table")}
                  aria-label="Table view"
                  style={{
                    padding: "8px 10px",
                    background:
                      view === "table" ? "var(--drp-black)" : "transparent",
                    color: view === "table" ? "#fff" : "var(--drp-grey)",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ListIcon />
                </button>
              </div>
            </div>
          </div>

          {/* Transaction list */}
          <div className="drp-card" style={{ padding: 0, overflow: "hidden" }}>
            {paged.length === 0 ? (
              <div
                style={{
                  padding: "var(--drp-space-8)",
                  textAlign: "center",
                  color: "var(--drp-grey)",
                }}
              >
                <p className="drp-text drp-text--sm">No transactions found.</p>
              </div>
            ) : view === "card" ? (
              paged.map((tx) => <CardRow key={tx.id} tx={tx} />)
            ) : (
              <div style={{ overflowX: "auto" }}>
                <TableView transactions={paged} />
              </div>
            )}
          </div>

          {/* Pagination */}
          <div
            style={{
              marginTop: "var(--drp-space-4)",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </div>
        </div>

        <ToolsTrackerFooter />
      </div>
    </div>
  );
};
