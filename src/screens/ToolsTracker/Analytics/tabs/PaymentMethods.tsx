import React, { useState } from "react";

/* -------------------------------------------------------------------------- */
/* Data                                                                        */
/* -------------------------------------------------------------------------- */

interface Invoice {
  date: string;
  id: string;
  amount: number;
  isRefund?: boolean;
}

interface PaymentCard {
  id: string;
  last4: string;
  purchases: number;
  refundAmount: string;
  total: string;
  invoices: Invoice[];
}

const CARDS: PaymentCard[] = [
  {
    id: "1",
    last4: "9078",
    purchases: 75,
    refundAmount: "-$1,592.64",
    total: "$26,440.52",
    invoices: [
      {
        date: "28/02/2026",
        id: "d1bcf2ec-449b-41a3-84cc-ef0f41ace523",
        amount: 862.2,
      },
      {
        date: "28/02/2026",
        id: "d2aa3a9f-bc2f-48c3-a200-42d02ecd42f1",
        amount: 714.6,
      },
      {
        date: "28/02/2026",
        id: "585a2c2c-9a4f-4fdd-b654-a1aeef7eed23",
        amount: 306.0,
      },
      {
        date: "28/02/2026",
        id: "a0fa6ca8-ed66-4ee5-a4d9-b6d5ef0a8334",
        amount: 196.29,
      },
      {
        date: "28/02/2026",
        id: "5084339e-439f-429d-88f4-b9d0bcb934b7",
        amount: 125.1,
      },
      {
        date: "28/02/2026",
        id: "4dea64bf-4c70-4d55-846a-8bd1babb1d68",
        amount: 99.0,
      },
      {
        date: "28/02/2026",
        id: "aaa2742a-c097-4551-818d-e70a11de4ac6",
        amount: 1301.67,
      },
      {
        date: "28/02/2026",
        id: "17804d24-f630-4ca2-9a95-0e27d4e7af1f",
        amount: 193.59,
      },
      {
        date: "22/11/2025",
        id: "edde49e1-9c9c-4a75-915a-87d1ea74bd9b",
        amount: 1302.48,
        isRefund: false,
      },
    ],
  },
  {
    id: "2",
    last4: "7697",
    purchases: 15,
    refundAmount: "-$489.60",
    total: "$2,162.56",
    invoices: [
      {
        date: "15/01/2026",
        id: "f7a3c821-b4e9-4f12-9d1a-23c456789abc",
        amount: 498.0,
      },
      {
        date: "10/01/2026",
        id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
        amount: 249.0,
      },
      {
        date: "05/12/2025",
        id: "b9e8d7c6-f5a4-3210-fedc-ba9876543210",
        amount: 99.0,
        isRefund: true,
      },
    ],
  },
  {
    id: "3",
    last4: "9625",
    purchases: 24,
    refundAmount: "-$684.09",
    total: "$1,785.15",
    invoices: [
      {
        date: "20/02/2026",
        id: "c3d4e5f6-a7b8-9012-cdef-345678901234",
        amount: 498.0,
      },
      {
        date: "18/02/2026",
        id: "d4e5f6a7-b8c9-0123-def0-456789012345",
        amount: 199.0,
      },
      {
        date: "10/02/2026",
        id: "e5f6a7b8-c9d0-1234-ef01-567890123456",
        amount: 145.0,
        isRefund: true,
      },
    ],
  },
  {
    id: "4",
    last4: "3400",
    purchases: 8,
    refundAmount: "$0.00",
    total: "$308.00",
    invoices: [
      {
        date: "01/03/2026",
        id: "f6a7b8c9-d0e1-2345-f012-678901234567",
        amount: 99.0,
      },
      {
        date: "14/02/2026",
        id: "a7b8c9d0-e1f2-3456-0123-789012345678",
        amount: 49.0,
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* Card row                                                                    */
/* -------------------------------------------------------------------------- */

const CardRow: React.FC<{ card: PaymentCard }> = ({ card }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        border: "var(--drp-border-thin)",
        borderRadius: "var(--drp-radius)",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "var(--drp-space-4) var(--drp-space-5)",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: "var(--drp-space-4)",
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--drp-space-3)",
            fontSize: "var(--drp-text-sm)",
          }}
        >
          <span style={{ fontWeight: 600 }}>
            Visa ****{card.last4} ({card.purchases} purchases)
          </span>
          {card.refundAmount !== "$0.00" && (
            <span style={{ color: "#e11d48", fontSize: "var(--drp-text-xs)" }}>
              {card.refundAmount} refunds
            </span>
          )}
        </span>

        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--drp-space-2)",
            flexShrink: 0,
          }}
        >
          <span
            style={{ fontSize: "1.05rem", fontWeight: 800, color: "#7c3aed" }}
          >
            {card.total}
          </span>
          <span
            style={{
              fontSize: 11,
              color: "#9ca3af",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s",
              display: "inline-block",
            }}
          >
            ▼
          </span>
        </span>
      </button>

      {/* Transaction history */}
      {open && (
        <div style={{ borderTop: "var(--drp-border-thin)" }}>
          <div
            style={{
              padding: "var(--drp-space-3) var(--drp-space-5)",
              background: "rgba(0,0,0,0.02)",
              borderBottom: "var(--drp-border-thin)",
            }}
          >
            <span
              style={{
                fontSize: "var(--drp-text-xs)",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#374151",
              }}
            >
              Transaction History
            </span>
          </div>

          {card.invoices.map((inv) => (
            <div
              key={inv.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "var(--drp-space-3) var(--drp-space-5)",
                borderBottom: "var(--drp-border-thin)",
              }}
            >
              <span
                style={{
                  fontSize: "var(--drp-text-sm)",
                  color: "#4f46e5",
                  fontFamily: "monospace",
                }}
              >
                {inv.date} – {inv.id}
              </span>
              <div
                style={{
                  textAlign: "right",
                  flexShrink: 0,
                  marginLeft: "var(--drp-space-4)",
                }}
              >
                <span
                  style={{
                    fontSize: "var(--drp-text-sm)",
                    fontWeight: 600,
                    color: inv.isRefund ? "#e11d48" : "#10b981",
                  }}
                >
                  {inv.isRefund ? "-" : "+"}$
                  {inv.amount.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                  })}
                </span>
                {inv.isRefund && (
                  <p
                    style={{ fontSize: "0.65rem", color: "#e11d48", margin: 0 }}
                  >
                    refund
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* Payment Methods Tab                                                         */
/* -------------------------------------------------------------------------- */

export const PaymentMethods: React.FC = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--drp-space-5)",
    }}
  >
    <div className="drp-card" style={{ padding: "var(--drp-space-5)" }}>
      <h3
        className="drp-card__title"
        style={{ marginBottom: "var(--drp-space-4)" }}
      >
        Spending by Payment Method
      </h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--drp-space-3)",
        }}
      >
        {CARDS.map((card) => (
          <CardRow key={card.id} card={card} />
        ))}
      </div>
    </div>

    {/* Summary */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "var(--drp-space-4)",
      }}
    >
      <div className="drp-card" style={{ padding: "var(--drp-space-4)" }}>
        <p
          className="drp-text drp-text--xs drp-text--muted"
          style={{
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "var(--drp-space-1)",
          }}
        >
          Total Cards
        </p>
        <p style={{ fontSize: "1.5rem", fontWeight: 800 }}>4</p>
      </div>
      <div className="drp-card" style={{ padding: "var(--drp-space-4)" }}>
        <p
          className="drp-text drp-text--xs drp-text--muted"
          style={{
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "var(--drp-space-1)",
          }}
        >
          Total Purchases
        </p>
        <p style={{ fontSize: "1.5rem", fontWeight: 800 }}>122</p>
      </div>
      <div className="drp-card" style={{ padding: "var(--drp-space-4)" }}>
        <p
          className="drp-text drp-text--xs drp-text--muted"
          style={{
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "var(--drp-space-1)",
          }}
        >
          Primary Card
        </p>
        <p style={{ fontSize: "1.25rem", fontWeight: 700, color: "#7c3aed" }}>
          Visa ••••9078
        </p>
      </div>
    </div>
  </div>
);
