import React from "react";
import { Pictogram } from "../../components/Pictogram/Pictogram";
import { AppSidebar } from "../shared/AppSidebar";
import { AppTopBar } from "../shared/AppTopBar";
import { AppFooter } from "../shared/AppFooter";

interface AccountsListProps {
  theme?: "light" | "dark";
  variant?: "v1" | "v2";
}

// Simple SVG line chart
const LineChart: React.FC<{ theme: "light" | "dark" }> = ({ theme }) => {
  const points = [
    30, 45, 35, 55, 40, 60, 50, 70, 55, 80, 65, 90, 75, 85, 95, 80, 100, 85,
    110, 90, 120,
  ];
  const max = Math.max(...points);
  const width = 900;
  const height = 160;
  const padX = 20;
  const padY = 10;
  const chartW = width - padX * 2;
  const chartH = height - padY * 2;

  const pathD = points
    .map((p, i) => {
      const x = padX + (i / (points.length - 1)) * chartW;
      const y = padY + chartH - (p / max) * chartH;
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  const areaD = `${pathD} L ${padX + chartW} ${padY + chartH} L ${padX} ${padY + chartH} Z`;

  const lastX = padX + chartW;
  const lastY = padY + chartH - (points[points.length - 1] / max) * chartH;

  return (
    <div style={{ position: "relative" }}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        style={{ width: "100%", height: 128 }}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0%"
              stopColor="var(--drp-success)"
              stopOpacity="0.3"
            />
            <stop
              offset="100%"
              stopColor="var(--drp-success)"
              stopOpacity="0.05"
            />
          </linearGradient>
        </defs>
        <path d={areaD} fill="url(#areaGrad)" />
        <path
          d={pathD}
          fill="none"
          stroke="var(--drp-success)"
          strokeWidth="2.5"
        />
        <circle cx={lastX} cy={lastY} r="6" fill="var(--drp-success)" />
      </svg>
      {/* Tooltip */}
      <div
        className="drp-card drp-card--sm"
        style={{
          position: "absolute",
          top: 16,
          right: 80,
          padding: "var(--drp-space-2) var(--drp-space-3)",
        }}
      >
        <span className="drp-caption" style={{ color: "var(--drp-grey)" }}>
          June 16
        </span>
        <span className="drp-text drp-text--bold">$14.800</span>
      </div>
    </div>
  );
};

const CardRow: React.FC<{
  icon: React.ReactNode;
  cardNumber: string;
  balance: string;
  blocked: string;
  valid: string;
  status: "Active" | "Closed";
}> = ({ icon, cardNumber, balance, blocked, valid, status }) => (
  <tr>
    <td style={{ width: 40 }}>{icon}</td>
    <td>
      <span className="drp-text drp-text--sm drp-text--bold">{cardNumber}</span>
      <br />
      <span className="drp-caption">Card number</span>
    </td>
    <td style={{ textAlign: "right" }}>
      <span className="drp-text drp-text--sm drp-text--bold">{balance}</span>
      <br />
      <span className="drp-caption">Balance</span>
    </td>
    <td style={{ textAlign: "right" }}>
      <span className="drp-text drp-text--sm drp-text--bold">{blocked}</span>
      <br />
      <span className="drp-caption">Blocked amount</span>
    </td>
    <td style={{ textAlign: "right" }}>
      <span className="drp-text drp-text--sm drp-text--bold">{valid}</span>
      <br />
      <span className="drp-caption">Valid</span>
    </td>
    <td>
      <span className="drp-tag drp-tag--dot">
        <span
          className="drp-dot"
          style={{
            background:
              status === "Active" ? "var(--drp-success)" : "var(--drp-error)",
          }}
        />
        {status}
      </span>
    </td>
    <td style={{ width: 40 }}>
      <button className="drp-btn drp-btn--ghost drp-btn--sm">···</button>
    </td>
  </tr>
);

const V1Content: React.FC<{ theme: "light" | "dark" }> = ({ theme }) => (
  <div
    className="content"
    style={{ padding: "var(--drp-space-6)", overflow: "auto" }}
  >
    {/* Your cards */}
    <div className="drp-card" style={{ marginBottom: "var(--drp-space-4)" }}>
      <div className="drp-card__header">
        <h2 className="drp-card__title drp-h5">Your cards</h2>
        <button className="drp-btn drp-btn--primary drp-btn--sm">
          Open new deposit
        </button>
      </div>
      <div style={{ padding: "var(--drp-space-2) var(--drp-space-4)" }}>
        <LineChart theme={theme} />
      </div>
      <table className="drp-table">
        <tbody>
          <CardRow
            icon={
              <span
                className="drp-text drp-text--bold"
                style={{ color: "var(--drp-info)", fontSize: 18 }}
              >
                V
              </span>
            }
            cardNumber="3210 **** **** 7890"
            balance="$88,200.00"
            blocked="$1,200.00"
            valid="06/22"
            status="Active"
          />
          <CardRow
            icon={
              <div
                style={{
                  width: 28,
                  height: 20,
                  background: "var(--drp-grey)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: 10, color: "white" }}>◑</span>
              </div>
            }
            cardNumber="8210 **** **** 4340"
            balance="$64,120.50"
            blocked="$1,960.00"
            valid="06/23"
            status="Active"
          />
          <CardRow
            icon={
              <div
                style={{
                  width: 28,
                  height: 20,
                  background: "var(--drp-grey)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: 10, color: "white" }}>◑</span>
              </div>
            }
            cardNumber="8210 **** **** 4990"
            balance="$0.50"
            blocked="$60.00"
            valid="06/23"
            status="Active"
          />
        </tbody>
      </table>
    </div>

    {/* Your deposits */}
    <div className="drp-card">
      <div className="drp-card__header">
        <h2 className="drp-card__title drp-h5">Your deposits</h2>
        <button className="drp-btn drp-btn--primary drp-btn--sm">
          Open new deposit
        </button>
      </div>
      <table className="drp-table">
        <tbody>
          {[
            {
              name: "Cumulative deposit",
              balance: "$94,800.50",
              accrued: "$2,530.00",
              valid: "04/23",
              status: "Active" as const,
              initials: "U",
              bg: "var(--drp-grey)",
            },
            {
              name: "Cumulative deposit",
              balance: "$55,400.00",
              accrued: "$1,500.00",
              valid: "04/20",
              status: "Closed" as const,
              initials: "A",
              bg: "var(--drp-grey-light, #999)",
            },
          ].map((dep, i) => (
            <tr key={i}>
              <td style={{ width: 40 }}>
                <div
                  className="sidebar-avatar"
                  style={{
                    background: dep.bg,
                    width: 36,
                    height: 36,
                    fontSize: 14,
                  }}
                >
                  {dep.initials}
                </div>
              </td>
              <td>
                <span className="drp-text drp-text--sm drp-text--bold">
                  {dep.name}
                </span>
                <br />
                <span className="drp-caption">Name</span>
              </td>
              <td style={{ textAlign: "right" }}>
                <span className="drp-text drp-text--sm drp-text--bold">
                  {dep.balance}
                </span>
                <br />
                <span className="drp-caption">Balance</span>
              </td>
              <td style={{ textAlign: "right" }}>
                <span className="drp-text drp-text--sm drp-text--bold">
                  {dep.accrued}
                </span>
                <br />
                <span className="drp-caption">Accured</span>
              </td>
              <td style={{ textAlign: "right" }}>
                <span className="drp-text drp-text--sm drp-text--bold">
                  {dep.valid}
                </span>
                <br />
                <span className="drp-caption">Valid</span>
              </td>
              <td>
                <span className="drp-tag drp-tag--dot">
                  <span
                    className="drp-dot"
                    style={{
                      background:
                        dep.status === "Active"
                          ? "var(--drp-success)"
                          : "var(--drp-error)",
                    }}
                  />
                  {dep.status}
                </span>
              </td>
              <td style={{ width: 40 }}>
                <button className="drp-btn drp-btn--ghost drp-btn--sm">
                  ···
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const LimitBar: React.FC<{
  label: string;
  spent: string;
  left: string;
  color: string;
  pct: number;
}> = ({ label, spent, left, color, pct }) => (
  <div
    style={{
      padding: "var(--drp-space-4) 0",
      borderBottom:
        "var(--drp-border-light, 1px solid var(--drp-black-10, rgba(0,0,0,0.1)))",
    }}
  >
    <h3
      className="drp-text drp-text--sm drp-text--bold"
      style={{ marginBottom: "var(--drp-space-2)" }}
    >
      {label}
    </h3>
    <div
      className="drp-progress"
      style={{ marginBottom: "var(--drp-space-2)" }}
    >
      <div
        className="drp-progress__bar"
        style={{ width: `${pct}%`, background: color }}
      />
    </div>
    <div className="drp-flex drp-justify-between">
      <span className="drp-caption">
        <span className="drp-text drp-text--sm drp-text--bold">{spent}</span>{" "}
        Spent
      </span>
      <span className="drp-caption">
        <span className="drp-text drp-text--sm drp-text--bold">{left}</span>{" "}
        Left
      </span>
    </div>
  </div>
);

const V2Content: React.FC<{ theme: "light" | "dark" }> = ({ theme }) => {
  const transfers = [
    {
      icon: "A",
      iconBg: "var(--drp-orange)",
      label: "Monthly home rent",
      sub: "Bank transfer",
      amount: "- $400.00",
      time: "8 Aug 1:00 AM",
      neg: true,
    },
    {
      icon: "I",
      iconBg: "var(--drp-black)",
      label: "Income payment for provided services",
      sub: "Bank transfer",
      amount: "+ $11,400.00",
      time: "10 Aug 4:50 PM",
      neg: false,
    },
    {
      icon: "E",
      iconBg: "var(--drp-info)",
      label: "Online purchase at Ebay.com",
      sub: "Online payment",
      amount: "- $396.00",
      time: "12 Aug 3:10 PM",
      neg: true,
    },
    {
      icon: "S",
      iconBg: "#3b82f6",
      label: "IOfinance UI kit purchase",
      sub: "Online payment",
      amount: "- $28.00",
      time: "14 Aug 4:20 AM",
      neg: true,
    },
    {
      icon: "W",
      iconBg: "#06b6d4",
      label: "Intenet payment",
      sub: "Utility payment",
      amount: "- $4.20",
      time: "14 Aug 7:00 AM",
      neg: true,
    },
  ];

  return (
    <div
      className="content drp-flex drp-gap-4"
      style={{ padding: "var(--drp-space-6)", overflow: "auto" }}
    >
      {/* Left: Your cards */}
      <div
        className="drp-card"
        style={{ flex: 1, display: "flex", flexDirection: "column" }}
      >
        {/* Tabs */}
        <div className="drp-card__header">
          <h2
            className="drp-card__title drp-h5"
            style={{ marginRight: "var(--drp-space-4)" }}
          >
            Your cards
          </h2>
          <div className="drp-tabs">
            <button className="drp-tab drp-tab--active">Overview</button>
            <button className="drp-tab">Currency</button>
            <button className="drp-tab">Statement</button>
          </div>
        </div>

        {/* Card visualization */}
        <div
          className="drp-flex drp-gap-6"
          style={{
            padding: "var(--drp-space-5) var(--drp-space-6)",
            borderBottom: "var(--drp-border)",
          }}
        >
          {/* Card */}
          <div
            style={{
              width: 260,
              height: 160,
              background:
                "linear-gradient(135deg, var(--drp-purple), var(--drp-purple-dark, #4c14b8))",
              padding: "var(--drp-space-5)",
              flexShrink: 0,
              position: "relative",
              boxShadow: "var(--drp-shadow-md)",
            }}
          >
            <div style={{ position: "absolute", top: 16, right: 16 }}>
              <div
                style={{
                  width: 40,
                  height: 24,
                  background: "var(--drp-black)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: 16,
                    height: 16,
                    background: "#666",
                    borderRadius: "50%",
                    marginLeft: -4,
                  }}
                />
                <div
                  style={{
                    width: 16,
                    height: 16,
                    background: "#999",
                    borderRadius: "50%",
                    marginLeft: -8,
                  }}
                />
              </div>
            </div>
            <div style={{ marginTop: 20 }}>
              <div
                className="drp-text drp-text--bold"
                style={{ color: "white", letterSpacing: "0.1em" }}
              >
                3400 5678 9804 3002
              </div>
              <div
                className="drp-caption"
                style={{ color: "rgba(255,255,255,0.6)", marginTop: 4 }}
              >
                Card number
              </div>
            </div>
            <div className="drp-flex drp-gap-8" style={{ marginTop: 16 }}>
              <div>
                <div
                  className="drp-text drp-text--sm drp-text--bold"
                  style={{ color: "white" }}
                >
                  Barry Armstrong
                </div>
                <div
                  className="drp-caption"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  Cardholder
                </div>
              </div>
              <div>
                <div
                  className="drp-text drp-text--sm drp-text--bold"
                  style={{ color: "white" }}
                >
                  06 / 26
                </div>
                <div
                  className="drp-caption"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  Valid
                </div>
              </div>
            </div>
          </div>

          {/* Card details */}
          <div>
            <div className="drp-h2" style={{ marginBottom: 4 }}>
              42.800 USD
            </div>
            <div
              className="drp-text drp-text--muted"
              style={{ marginBottom: "var(--drp-space-4)" }}
            >
              Available amount
            </div>
            <div
              className="drp-text drp-text--bold"
              style={{ marginBottom: 2 }}
            >
              UK64CT00000010034567
            </div>
            <div
              className="drp-text drp-text--muted"
              style={{ marginBottom: "var(--drp-space-4)" }}
            >
              Account number
            </div>
            <button className="drp-btn drp-btn--outline drp-btn--sm">
              Get card details
            </button>
          </div>
        </div>

        {/* Pagination dots */}
        <div
          className="drp-flex drp-items-center drp-justify-center drp-gap-2"
          style={{
            padding: "var(--drp-space-3) 0",
            borderBottom: "var(--drp-border)",
          }}
        >
          <span
            className="drp-dot"
            style={{ background: "var(--drp-purple)", width: 8, height: 8 }}
          />
          <span
            className="drp-dot"
            style={{
              background: "var(--drp-black-20, rgba(0,0,0,0.2))",
              width: 8,
              height: 8,
            }}
          />
          <span
            className="drp-dot"
            style={{
              background: "var(--drp-black-20, rgba(0,0,0,0.2))",
              width: 8,
              height: 8,
            }}
          />
        </div>

        {/* Latest transfers */}
        <div style={{ padding: "var(--drp-space-5)" }}>
          <h3 className="drp-h6" style={{ marginBottom: "var(--drp-space-3)" }}>
            Latest transfers
          </h3>
          <table className="drp-table">
            <tbody>
              {transfers.map((t, i) => (
                <tr key={i}>
                  <td style={{ width: 40 }}>
                    <div
                      className="sidebar-avatar"
                      style={{
                        background: t.iconBg,
                        width: 36,
                        height: 36,
                        fontSize: 14,
                      }}
                    >
                      {t.icon}
                    </div>
                  </td>
                  <td>
                    <span
                      className="drp-text drp-text--sm drp-text--bold"
                      style={{
                        display: "block",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {t.label}
                    </span>
                    <span className="drp-caption">{t.sub}</span>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <span
                      className="drp-text drp-text--sm drp-text--bold"
                      style={{
                        color: t.neg
                          ? "var(--drp-error-dark)"
                          : "var(--drp-success-dark)",
                      }}
                    >
                      {t.amount}
                    </span>
                    <br />
                    <span className="drp-caption">{t.time}</span>
                  </td>
                  <td style={{ width: 40 }}>
                    <button className="drp-btn drp-btn--ghost drp-btn--sm">
                      ···
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Right: Your limits */}
      <div
        className="drp-card"
        style={{
          width: 280,
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="drp-card__header">
          <h2 className="drp-card__title drp-h5">Your limits</h2>
        </div>
        <div style={{ padding: "0 var(--drp-space-5)", flex: 1 }}>
          <LimitBar
            label="ATM Withdrawals"
            spent="$5,100.00"
            left="$1,800.00"
            color="var(--drp-success)"
            pct={75}
          />
          <LimitBar
            label="Daily ATM Withdrawals"
            spent="$600.00"
            left="$400.00"
            color="var(--drp-error)"
            pct={60}
          />
          <LimitBar
            label="Cash In in ATMs"
            spent="$1,500.00"
            left="$8,500.00"
            color="var(--drp-warning)"
            pct={15}
          />
          <LimitBar
            label="Online Purchase"
            spent="$1,500.00"
            left="$8,500.00"
            color="var(--drp-success)"
            pct={15}
          />
        </div>
        <div style={{ padding: "var(--drp-space-4)" }}>
          <button className="drp-btn drp-btn--primary drp-btn--block">
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
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            Setup limits
          </button>
        </div>
      </div>
    </div>
  );
};

export const AccountsList: React.FC<AccountsListProps> = ({
  theme = "light",
  variant = "v1",
}) => (
  <div className="app-layout">
    <AppSidebar activeId="accounts" />
    <div className="main-content">
      <AppTopBar title="Accounts" />
      {variant === "v1" ? (
        <V1Content theme={theme} />
      ) : (
        <V2Content theme={theme} />
      )}
      <AppFooter />
    </div>
  </div>
);
