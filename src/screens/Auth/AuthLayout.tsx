import React, { ReactNode } from "react";

/**
 * Decorative right panel -- floating UI cards over a purple blob background.
 * Purely visual, matches the registration screenshots.
 * Uses drp- design system classes with zero border-radius (brutalist).
 */
const DecorativePanel: React.FC = () => (
  <div
    className="drp-decorative-panel"
    style={{
      display: "none",
      flex: 1,
      position: "relative",
      overflow: "hidden",
      background: "var(--drp-cream)",
    }}
  >
    {/* Purple blob */}
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "520px",
        height: "520px",
        background:
          "radial-gradient(ellipse at 40% 40%, #a78bfa 0%, #7c3aed 35%, var(--drp-purple) 60%, #c4b5fd 100%)",
        filter: "blur(2px)",
        opacity: 0.85,
      }}
    />

    {/* Floating card 1 -- task tracker (top-right area) */}
    <div
      className="drp-card"
      style={{
        position: "absolute",
        top: "8%",
        right: "12%",
        padding: "14px 16px",
        boxShadow: "var(--drp-shadow-md)",
        minWidth: "180px",
        zIndex: 10,
        background: "var(--drp-white)",
      }}
    >
      <div
        className="drp-caption"
        style={{ marginBottom: "var(--drp-space-2)" }}
      >
        NM Tasks
      </div>
      {/* Mini bar chart */}
      <div
        className="drp-flex drp-items-center"
        style={{
          alignItems: "flex-end",
          gap: "4px",
          height: "36px",
          marginBottom: "var(--drp-space-2)",
        }}
      >
        {[14, 22, 18, 30, 24, 20, 28].map((h, i) => (
          <div
            key={i}
            style={{
              width: "10px",
              height: `${h}px`,
              background:
                i === 3 ? "var(--drp-purple)" : "var(--drp-grey-light)",
            }}
          />
        ))}
      </div>
      <div className="drp-caption">Mon -- Sun</div>
    </div>

    {/* Floating card 2 -- user task card (center-left) */}
    <div
      className="drp-card"
      style={{
        position: "absolute",
        top: "30%",
        left: "8%",
        padding: "14px 16px",
        boxShadow: "var(--drp-shadow-md)",
        minWidth: "200px",
        zIndex: 10,
        background: "var(--drp-white)",
      }}
    >
      <div
        className="drp-flex drp-items-center drp-gap-3"
        style={{ marginBottom: "var(--drp-space-3)" }}
      >
        <div
          style={{
            width: "36px",
            height: "36px",
            background: "linear-gradient(135deg, #a78bfa, var(--drp-purple))",
            flexShrink: 0,
          }}
        />
        <div>
          <div className="drp-text drp-text--sm drp-text--bold">
            Delafaran Sorgato
          </div>
          <div className="drp-caption">in progress</div>
        </div>
      </div>
      <div
        className="drp-bg-purple"
        style={{
          fontSize: "var(--drp-text-xs)",
          fontWeight: "var(--drp-weight-semibold)" as any,
          padding: "5px 12px",
          display: "inline-block",
          marginBottom: "var(--drp-space-3)",
        }}
      >
        Task
      </div>
      <div className="drp-flex drp-gap-3">
        <div className="drp-text-center">
          <div className="drp-text drp-text--bold">$123.20</div>
          <div className="drp-caption">Est.</div>
        </div>
        <div className="drp-text-center">
          <div className="drp-text drp-text--bold">14</div>
          <div className="drp-caption">hrs</div>
        </div>
      </div>
    </div>

    {/* Floating card 3 -- "Update design system" (top-right corner) */}
    <div
      className="drp-card"
      style={{
        position: "absolute",
        top: "18%",
        right: "4%",
        padding: "10px 14px",
        boxShadow: "var(--drp-shadow-sm)",
        zIndex: 10,
        whiteSpace: "nowrap",
        background: "var(--drp-white)",
      }}
    >
      <span className="drp-text drp-text--sm drp-text--semibold">
        Update design system
      </span>
    </div>

    {/* Floating card 4 -- revenue card (center-right) */}
    <div
      className="drp-card"
      style={{
        position: "absolute",
        top: "52%",
        left: "10%",
        padding: "14px 16px",
        boxShadow: "var(--drp-shadow-md)",
        minWidth: "180px",
        zIndex: 10,
        background: "var(--drp-white)",
      }}
    >
      <div
        className="drp-caption"
        style={{ marginBottom: "var(--drp-space-1)" }}
      >
        Total revenue
      </div>
      <div className="drp-h4" style={{ marginBottom: "var(--drp-space-2)" }}>
        $68,310.28
      </div>
      <div className="drp-flex drp-items-center drp-gap-2">
        <span
          style={{
            background: "var(--drp-cream)",
            padding: "3px 8px",
            fontSize: "var(--drp-text-xs)",
            color: "var(--drp-purple)",
            fontWeight: "var(--drp-weight-semibold)" as any,
          }}
        >
          7,384
        </span>
        <span className="drp-caption">transactions</span>
      </div>
    </div>

    {/* Floating card 5 -- "Photobook for family move" */}
    <div
      className="drp-card"
      style={{
        position: "absolute",
        top: "58%",
        right: "5%",
        padding: "10px 14px",
        boxShadow: "var(--drp-shadow-sm)",
        zIndex: 10,
        minWidth: "190px",
        background: "var(--drp-white)",
      }}
    >
      <div
        className="drp-text drp-text--sm drp-text--semibold"
        style={{ marginBottom: "var(--drp-space-2)" }}
      >
        Photobook for family move
      </div>
      <div
        className="drp-flex drp-items-center drp-gap-2"
        style={{
          background: "var(--drp-cream)",
          padding: "4px 8px",
          fontSize: "var(--drp-text-xs)",
          color: "var(--drp-purple)",
          fontWeight: "var(--drp-weight-semibold)" as any,
        }}
      >
        <span>Due on 15 Aug 2025</span>
      </div>
    </div>

    {/* Floating card 6 -- "Design tasks" tag (bottom-left) */}
    <div
      className="drp-card"
      style={{
        position: "absolute",
        bottom: "22%",
        left: "6%",
        padding: "8px 12px",
        boxShadow: "var(--drp-shadow-sm)",
        zIndex: 10,
        background: "var(--drp-white)",
      }}
    >
      <span className="drp-text drp-text--sm drp-text--semibold">
        Design tasks
      </span>
    </div>

    {/* Floating card 7 -- "Mockup for task app" (bottom-center) */}
    <div
      className="drp-card"
      style={{
        position: "absolute",
        bottom: "14%",
        left: "18%",
        padding: "8px 14px",
        boxShadow: "var(--drp-shadow-sm)",
        zIndex: 10,
        background: "var(--drp-white)",
      }}
    >
      <span className="drp-text drp-text--sm">Mockup for task app</span>
    </div>

    {/* Decorative dots */}
    <div
      style={{
        position: "absolute",
        top: "10%",
        left: "30%",
        width: "12px",
        height: "12px",
        background: "var(--drp-black)",
        zIndex: 10,
      }}
    />
    <div
      style={{
        position: "absolute",
        top: "22%",
        left: "55%",
        width: "8px",
        height: "8px",
        background: "var(--drp-black)",
        zIndex: 10,
      }}
    />
    <div
      style={{
        position: "absolute",
        bottom: "20%",
        right: "30%",
        width: "10px",
        height: "10px",
        background: "var(--drp-black)",
        zIndex: 10,
      }}
    />

    {/* Decorative squiggly lines (SVG) */}
    <svg
      style={{ position: "absolute", top: "5%", right: "28%", zIndex: 10 }}
      width="60"
      height="40"
      viewBox="0 0 60 40"
      fill="none"
    >
      <path
        d="M2 20 Q10 5 20 20 Q30 35 40 20 Q50 5 58 20"
        stroke="var(--drp-black)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
    <svg
      style={{ position: "absolute", bottom: "28%", right: "18%", zIndex: 10 }}
      width="50"
      height="34"
      viewBox="0 0 50 34"
      fill="none"
    >
      <path
        d="M2 17 Q10 4 18 17 Q26 30 34 17 Q42 4 48 17"
        stroke="var(--drp-black)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>

    {/* Inline style to show panel on lg screens */}
    <style>{`
      @media (min-width: 1024px) {
        .drp-decorative-panel { display: flex !important; }
      }
    `}</style>
  </div>
);

export interface AuthLayoutProps {
  children: ReactNode;
}

/**
 * Shared split-panel layout for all Auth screens.
 * Left: cream background with form content.
 * Right: decorative panel with floating cards (desktop only).
 */
export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => (
  <div
    className="drp-flex"
    style={{
      minHeight: "100vh",
      fontFamily: "var(--drp-font-primary)",
    }}
  >
    {/* Left panel */}
    <div
      className="drp-flex-col"
      style={{
        width: "100%",
        maxWidth: "520px",
        minHeight: "100vh",
        padding: "var(--drp-space-10)",
        background: "var(--drp-cream)",
        flexShrink: 0,
      }}
    >
      {/* Logo */}
      <div style={{ marginBottom: "var(--drp-space-12)" }}>
        <span
          className="drp-h5"
          style={{ fontWeight: "var(--drp-weight-heavy)" as any }}
        >
          Doctor Project
          <span style={{ color: "var(--drp-purple)" }}>.</span>
        </span>
      </div>

      {/* Form content */}
      <div
        className="drp-flex-col"
        style={{
          flex: 1,
          justifyContent: "center",
          maxWidth: "384px",
        }}
      >
        {children}
      </div>
    </div>

    {/* Right decorative panel */}
    <DecorativePanel />
  </div>
);
