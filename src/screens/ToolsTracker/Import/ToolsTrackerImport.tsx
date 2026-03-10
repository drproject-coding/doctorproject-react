import React, { useState } from "react";
import { ToolsTrackerSidebar } from "../shared/ToolsTrackerSidebar";
import { ToolsTrackerFooter } from "../shared/ToolsTrackerFooter";
import { TopBar } from "../../../components/TopBar/TopBar";
import { Tabs } from "../../../components/Tabs/Tabs";
import { Dropzone } from "../../../components/Dropzone/Dropzone";
import { Button } from "../../../components/Button/Button";
import { Input } from "../../../components/Input/Input";
import { Tag } from "../../../components/Tag/Tag";

/* =========================================================================== */
/* Types                                                                         */
/* =========================================================================== */

type ImportMode = "ai" | "manual";
type ImportStep = "idle" | "form";

export interface ToolsTrackerImportProps {
  defaultMode?: ImportMode;
  defaultStep?: ImportStep;
}

/* =========================================================================== */
/* Helpers                                                                       */
/* =========================================================================== */

const Detected = () => <Tag color="orange">DETECTED</Tag>;

const FieldLabel = ({
  children,
  required = false,
  detected = false,
  reviewOnly = false,
}: {
  children: React.ReactNode;
  required?: boolean;
  detected?: boolean;
  reviewOnly?: boolean;
}) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 6,
      marginBottom: 4,
      flexWrap: "wrap",
    }}
  >
    <span
      style={{
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.06em",
        color: "#6b7280",
        textTransform: "uppercase",
      }}
    >
      {children}
      {required && <span style={{ color: "#ef4444", marginLeft: 1 }}> *</span>}
      {reviewOnly && (
        <span style={{ fontWeight: 400, marginLeft: 4, textTransform: "none" }}>
          (REVIEW ONLY)
        </span>
      )}
    </span>
    {detected && <Detected />}
  </div>
);

const FormRow = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
    {children}
  </div>
);

const FormField = ({ children }: { children: React.ReactNode }) => (
  <div style={{ marginBottom: 12 }}>{children}</div>
);

/* =========================================================================== */
/* Field Completeness Bar                                                        */
/* =========================================================================== */

const FieldCompletenessBar = ({
  complete,
  total,
}: {
  complete: number;
  total: number;
}) => {
  const pct = Math.round((complete / total) * 100);
  const isComplete = pct === 100;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "10px 16px",
        border: "1px solid #e5e7eb",
        borderRadius: 6,
        background: "#fff",
        marginBottom: 16,
      }}
    >
      <span
        style={{
          fontSize: 13,
          fontWeight: 500,
          color: "#374151",
          flexShrink: 0,
        }}
      >
        Field Completeness: {complete}/{total}
      </span>
      <div
        style={{
          flex: 1,
          height: 4,
          background: "#e5e7eb",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${pct}%`,
            height: "100%",
            background: isComplete ? "#22c55e" : "#ef4444",
            borderRadius: 2,
          }}
        />
      </div>
      <Tag color={isComplete ? "mint" : "pink"}>
        {isComplete ? "COMPLETE" : "INCOMPLETE"}
      </Tag>
    </div>
  );
};

/* =========================================================================== */
/* PDF Viewer                                                                    */
/* =========================================================================== */

const PDFViewer = () => (
  <div
    style={{
      border: "1px solid #e5e7eb",
      borderRadius: 6,
      overflow: "hidden",
      background: "#f9fafb",
      display: "flex",
      flexDirection: "column",
      minWidth: 0,
      flex: "0 0 44%",
    }}
  >
    {/* Header */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 12px",
        borderBottom: "1px solid #e5e7eb",
        background: "#fff",
      }}
    >
      <span
        style={{
          fontSize: 12,
          color: "#374151",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          flex: 1,
        }}
      >
        2022-11-28_appsumo_....
      </span>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          flexShrink: 0,
          marginLeft: 8,
        }}
      >
        <button
          className="drp-btn drp-btn--outline drp-btn--sm"
          style={{ padding: "2px 8px", fontSize: 14, lineHeight: 1 }}
        >
          −
        </button>
        <span style={{ fontSize: 12, color: "#374151" }}>100%</span>
        <button
          className="drp-btn drp-btn--outline drp-btn--sm"
          style={{ padding: "2px 8px", fontSize: 14, lineHeight: 1 }}
        >
          +
        </button>
      </div>
    </div>

    {/* PDF content */}
    <div style={{ flex: 1, overflowY: "auto", padding: 16 }}>
      <div
        style={{
          background: "#fff",
          border: "1px solid #e5e7eb",
          borderRadius: 4,
          padding: "20px 24px",
          fontSize: 11,
          lineHeight: 1.6,
          color: "#374151",
          minHeight: 480,
        }}
      >
        <p style={{ fontWeight: 700, marginBottom: 4 }}>AppSumo Invoice</p>
        <hr style={{ borderColor: "#e5e7eb", margin: "8px 0" }} />
        <p style={{ marginBottom: 2 }}>
          1305 E 6th St, Unit 3 Austin, TX 78702
        </p>
        <p style={{ marginBottom: 2 }}>
          Invoice ID: 7d6ce438-5eb9-41O3-b748-14c13285bef1
        </p>
        <p style={{ marginBottom: 2 }}>Status: PAID</p>
        <p style={{ marginBottom: 2 }}>Date: Nov 28, 2022</p>
        <p style={{ marginBottom: 8 }}>Payment type: Free</p>
        <p style={{ marginBottom: 4 }}>Bill to: yfatihipro@gmail.com</p>
        <hr style={{ borderColor: "#e5e7eb", margin: "8px 0" }} />
        <p style={{ fontWeight: 600, marginBottom: 6 }}>Order summary</p>
        {[
          "Black Growth Study",
          "Million Dollar Email Templates 2.0",
          "Taka The Leap: From Side Hustle to Full-time Creator",
          "How AppSumo Does Black Friday...",
        ].map((name) => (
          <div
            key={name}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 4,
            }}
          >
            <span style={{ flex: 1, paddingRight: 8 }}>{name}</span>
            <span>$0.00</span>
          </div>
        ))}
        <hr style={{ borderColor: "#e5e7eb", margin: "8px 0" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Total</span>
          <span style={{ fontWeight: 600 }}>$49.00</span>
        </div>
      </div>
    </div>

    {/* Footer */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "8px 12px",
        borderTop: "1px solid #e5e7eb",
        background: "#fff",
      }}
    >
      <Tag color="yellow">BASIC EXTRACT</Tag>
      <span style={{ fontSize: 11, color: "#6b7280" }}>
        Regex extraction – verify all fields
      </span>
    </div>
  </div>
);

/* =========================================================================== */
/* Invoice Details Form                                                          */
/* =========================================================================== */

const InvoiceDetailsForm = ({ isAI = false }: { isAI?: boolean }) => {
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: 6,
        background: "#fff",
        marginBottom: 16,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "12px 16px",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <span
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#111827",
          }}
        >
          Invoice Details
        </span>
      </div>
      <div style={{ padding: 16 }}>
        <FormRow>
          <FormField>
            <FieldLabel required detected={isAI}>
              Vendor
            </FieldLabel>
            <select
              className="drp-input"
              style={{ width: "100%" }}
              defaultValue={isAI ? "appsumo" : ""}
            >
              <option value="">Select a vendor...</option>
              <option value="appsumo">AppSumo</option>
              <option value="other">Other</option>
            </select>
          </FormField>
          <FormField>
            <FieldLabel required>Invoice Date</FieldLabel>
            <input
              type="date"
              className="drp-input"
              defaultValue={isAI ? "" : "2026-03-08"}
              style={{ width: "100%" }}
            />
          </FormField>
        </FormRow>
        <FormRow>
          <FormField>
            <FieldLabel required>Total Amount</FieldLabel>
            <Input defaultValue="49.00" />
          </FormField>
          <FormField>
            <FieldLabel detected={isAI}>Currency</FieldLabel>
            <select
              className="drp-input"
              style={{ width: "100%" }}
              defaultValue="USD"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </FormField>
        </FormRow>
        <FormRow>
          <FormField>
            <FieldLabel>Invoice Status</FieldLabel>
            <select
              className="drp-input"
              style={{ width: "100%" }}
              defaultValue="paid"
            >
              <option value="paid">Paid</option>
              <option value="pending">Pending</option>
              <option value="refunded">Refunded</option>
            </select>
          </FormField>
          <FormField>
            <FieldLabel>Invoice URL</FieldLabel>
            <Input placeholder="https://..." />
          </FormField>
        </FormRow>

        {/* More invoice details disclosure */}
        <button
          onClick={() => setMoreOpen((v) => !v)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            background: "none",
            border: "1px dashed #d1d5db",
            borderRadius: 4,
            padding: "6px 12px",
            cursor: "pointer",
            fontSize: 12,
            color: "#374151",
            fontWeight: 500,
            width: "100%",
            marginTop: 4,
          }}
        >
          <span>{moreOpen ? "▼" : "▶"}</span>
          More Invoice Details
        </button>

        {moreOpen && (
          <div style={{ marginTop: 12 }}>
            <FormRow>
              <FormField>
                <FieldLabel detected={isAI}>Invoice Number</FieldLabel>
                <Input
                  defaultValue={
                    isAI ? "7d6ce438-5eb9-41O3-b748-14c13285bef1" : ""
                  }
                />
              </FormField>
              <FormField>
                <FieldLabel>Vendor Company</FieldLabel>
                <Input placeholder="e.g. Every Media Inc." />
              </FormField>
            </FormRow>
            <FormRow>
              <FormField>
                <FieldLabel detected={isAI}>Subtotal</FieldLabel>
                <Input defaultValue="0" />
              </FormField>
              <FormField>
                <FieldLabel detected={isAI}>Tax</FieldLabel>
                <Input defaultValue="0" />
              </FormField>
            </FormRow>
            <FormRow>
              <FormField>
                <FieldLabel>Total Discount</FieldLabel>
                <Input defaultValue="0.00" />
              </FormField>
              <FormField>
                <FieldLabel detected={isAI}>Company Location</FieldLabel>
                <Input defaultValue={isAI ? "Mauritius" : ""} />
              </FormField>
            </FormRow>
            <FormRow>
              <FormField>
                <FieldLabel>Payment Method</FieldLabel>
                <select className="drp-input" style={{ width: "100%" }}>
                  <option value="">Not specified</option>
                  <option value="card">Card</option>
                  <option value="paypal">PayPal</option>
                </select>
              </FormField>
              <FormField>
                <FieldLabel>Card Last 4</FieldLabel>
                <Input placeholder="4242" defaultValue={isAI ? "4242" : ""} />
              </FormField>
            </FormRow>
          </div>
        )}
      </div>
    </div>
  );
};

/* =========================================================================== */
/* Product Details Form                                                          */
/* =========================================================================== */

const ProductDetailsForm = ({ isAI = false }: { isAI?: boolean }) => (
  <div
    style={{
      border: "1px solid #e5e7eb",
      borderRadius: 6,
      background: "#fff",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        padding: "12px 16px",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <span
        style={{
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#111827",
        }}
      >
        Product Details
      </span>
    </div>
    <div style={{ padding: 16 }}>
      <FormRow>
        <FormField>
          <FieldLabel required>Product Name</FieldLabel>
          <Input placeholder="e.g. Notion, Airtable, TidyCal" />
        </FormField>
        <FormField>
          <FieldLabel>Status</FieldLabel>
          <select
            className="drp-input"
            style={{ width: "100%" }}
            defaultValue="active"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="refunded">Refunded</option>
          </select>
        </FormField>
      </FormRow>
      <FormRow>
        <FormField>
          <FieldLabel required>Purchase Date</FieldLabel>
          <input type="date" className="drp-input" style={{ width: "100%" }} />
        </FormField>
        <FormField>
          <FieldLabel>Refund Deadline</FieldLabel>
          <input type="date" className="drp-input" style={{ width: "100%" }} />
        </FormField>
      </FormRow>
      <FormRow>
        <FormField>
          <FieldLabel>Plan Name</FieldLabel>
          <Input placeholder="e.g. Tier 1, Pro Plan" />
        </FormField>
        <FormField>
          <FieldLabel>Stack Count</FieldLabel>
          <Input defaultValue="1" />
        </FormField>
      </FormRow>
      <FormRow>
        <FormField>
          <FieldLabel detected={isAI}>Support Email</FieldLabel>
          <Input
            defaultValue={isAI ? "yfatihipro@gmail.com" : ""}
            placeholder="support@example.com"
          />
        </FormField>
        <FormField>
          <FieldLabel detected={isAI} reviewOnly>
            Customer Email
          </FieldLabel>
          <Input
            defaultValue={isAI ? "yfatihipro@gmail.com" : ""}
            placeholder="your@email.com"
          />
        </FormField>
      </FormRow>
      <FormField>
        <FieldLabel>Product Slug</FieldLabel>
        <Input placeholder="auto-generated from name" />
      </FormField>
    </div>
  </div>
);

/* =========================================================================== */
/* Form Actions                                                                  */
/* =========================================================================== */

const FormActions = ({ onStartOver }: { onStartOver: () => void }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginTop: 20,
    }}
  >
    <Button variant="primary">Import Product</Button>
    <Button variant="outline" onClick={onStartOver}>
      Start Over
    </Button>
  </div>
);

/* =========================================================================== */
/* Recent Imports                                                                */
/* =========================================================================== */

const RecentImports = () => (
  <div style={{ marginTop: 28 }}>
    <p
      style={{
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "#374151",
        marginBottom: 8,
      }}
    >
      Recent Imports
    </p>
    <p className="drp-text drp-text--sm drp-text--muted">No imports yet.</p>
  </div>
);

/* =========================================================================== */
/* Main Component                                                                */
/* =========================================================================== */

const MODE_TABS = [
  { key: "ai", label: "AI Import" },
  { key: "manual", label: "Manual Entry" },
];

export const ToolsTrackerImport: React.FC<ToolsTrackerImportProps> = ({
  defaultMode = "ai",
  defaultStep = "idle",
}) => {
  const [mode, setMode] = useState<ImportMode>(defaultMode);
  const [step, setStep] = useState<ImportStep>(defaultStep);

  const handleStartOver = () => setStep("idle");

  return (
    <div className="drp-app-shell" style={{ display: "flex", height: "100vh" }}>
      <ToolsTrackerSidebar activeId="import" />
      <div
        className="main-content"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          minWidth: 0,
        }}
      >
        <TopBar title="Import" />
        <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px" }}>
          {/* Field completeness bar — visible after file/form starts */}
          {step === "form" && <FieldCompletenessBar complete={1} total={5} />}

          {/* ── IDLE STATE ── Import Invoice card */}
          {step === "idle" && (
            <div
              style={{
                border: "1px solid #374151",
                borderRadius: 6,
                background: "#fff",
                overflow: "hidden",
              }}
            >
              {/* Card header */}
              <div
                style={{
                  padding: "14px 20px",
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#111827",
                  }}
                >
                  Import Invoice
                </span>
              </div>

              {/* Config rows */}
              <div style={{ padding: "12px 20px 0" }}>
                {[
                  {
                    label: "Text Extraction (AI)",
                    action: (
                      <Button variant="outline" size="sm">
                        Configure
                      </Button>
                    ),
                  },
                  {
                    label: "Image Import (Vision)",
                    action: (
                      <span style={{ fontSize: 12, color: "#6b7280" }}>
                        OPTIONAL –{" "}
                        <Button variant="outline" size="sm">
                          Configure
                        </Button>
                      </span>
                    ),
                  },
                ].map(({ label, action }) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 8,
                    }}
                  >
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 8 }}
                    >
                      <span
                        style={{
                          width: 8,
                          height: 8,
                          background: "#9ca3af",
                          borderRadius: 1,
                          flexShrink: 0,
                        }}
                      />
                      <span style={{ fontSize: 13, color: "#374151" }}>
                        {label}
                      </span>
                    </div>
                    {action}
                  </div>
                ))}
              </div>

              {/* Mode tabs */}
              <div style={{ padding: "8px 20px 0" }}>
                <Tabs
                  items={MODE_TABS}
                  activeKey={mode}
                  onChange={(k) => setMode(k as ImportMode)}
                />
              </div>

              {/* Tab content */}
              <div style={{ padding: 20 }}>
                {mode === "ai" ? (
                  <Dropzone
                    hint="PDF, PNG, JPG, or WEBP – max 10 MB each, up to 10 files"
                    accept=".pdf,.png,.jpg,.jpeg,.webp"
                    onFiles={() => setStep("form")}
                    aria-label="Drop invoice files here"
                    icon={
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#9ca3af"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="12" y1="18" x2="12" y2="12" />
                        <line x1="9" y1="15" x2="12" y2="12" />
                        <line x1="15" y1="15" x2="12" y2="12" />
                      </svg>
                    }
                  />
                ) : (
                  <div>
                    <p
                      className="drp-text drp-text--sm drp-text--muted"
                      style={{ marginBottom: 16 }}
                    >
                      Enter invoice and product details manually. All fields
                      marked with * are required.
                    </p>
                    <Button variant="primary" onClick={() => setStep("form")}>
                      Start Manual Entry
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ── FORM STATE: AI IMPORT ── PDF viewer + form side-by-side */}
          {step === "form" && mode === "ai" && (
            <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
              <PDFViewer />
              <div style={{ flex: 1, minWidth: 0 }}>
                <InvoiceDetailsForm isAI />
                <ProductDetailsForm isAI />
                <FormActions onStartOver={handleStartOver} />
              </div>
            </div>
          )}

          {/* ── FORM STATE: MANUAL ENTRY ── full-width forms */}
          {step === "form" && mode === "manual" && (
            <div>
              <InvoiceDetailsForm />
              <ProductDetailsForm />
              <FormActions onStartOver={handleStartOver} />
            </div>
          )}

          <RecentImports />
        </div>
        <ToolsTrackerFooter />
      </div>
    </div>
  );
};
