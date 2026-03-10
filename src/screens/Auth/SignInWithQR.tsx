import React from "react";
import { AuthLayout } from "./AuthLayout";

/**
 * A simple SVG-based QR code placeholder that looks like a real QR code.
 */
const QRCodePlaceholder: React.FC = () => (
  <svg
    width="160"
    height="160"
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: "block" }}
  >
    {/* Outer border */}
    <rect
      x="0"
      y="0"
      width="160"
      height="160"
      fill="var(--drp-white)"
      stroke="var(--drp-grey-light)"
      strokeWidth="1"
    />

    {/* Top-left position pattern */}
    <rect x="12" y="12" width="44" height="44" fill="var(--drp-black)" />
    <rect x="18" y="18" width="32" height="32" fill="var(--drp-white)" />
    <rect x="24" y="24" width="20" height="20" fill="var(--drp-black)" />

    {/* Top-right position pattern */}
    <rect x="104" y="12" width="44" height="44" fill="var(--drp-black)" />
    <rect x="110" y="18" width="32" height="32" fill="var(--drp-white)" />
    <rect x="116" y="24" width="20" height="20" fill="var(--drp-black)" />

    {/* Bottom-left position pattern */}
    <rect x="12" y="104" width="44" height="44" fill="var(--drp-black)" />
    <rect x="18" y="110" width="32" height="32" fill="var(--drp-white)" />
    <rect x="24" y="116" width="20" height="20" fill="var(--drp-black)" />

    {/* Data modules - scattered cells to look like QR data */}
    {/* Row 1 */}
    <rect x="68" y="12" width="8" height="8" fill="var(--drp-black)" />
    <rect x="80" y="12" width="8" height="8" fill="var(--drp-black)" />
    <rect x="68" y="24" width="8" height="8" fill="var(--drp-black)" />
    <rect x="80" y="24" width="8" height="8" fill="var(--drp-black)" />
    <rect x="92" y="24" width="8" height="8" fill="var(--drp-black)" />
    <rect x="68" y="36" width="8" height="8" fill="var(--drp-black)" />
    <rect x="92" y="36" width="8" height="8" fill="var(--drp-black)" />
    <rect x="68" y="48" width="8" height="8" fill="var(--drp-black)" />
    <rect x="80" y="48" width="8" height="8" fill="var(--drp-black)" />

    {/* Middle rows */}
    <rect x="12" y="68" width="8" height="8" fill="var(--drp-black)" />
    <rect x="24" y="68" width="8" height="8" fill="var(--drp-black)" />
    <rect x="36" y="68" width="8" height="8" fill="var(--drp-black)" />
    <rect x="56" y="68" width="8" height="8" fill="var(--drp-black)" />
    <rect x="68" y="68" width="8" height="8" fill="var(--drp-black)" />
    <rect x="80" y="68" width="8" height="8" fill="var(--drp-black)" />
    <rect x="92" y="68" width="8" height="8" fill="var(--drp-black)" />
    <rect x="104" y="68" width="8" height="8" fill="var(--drp-black)" />
    <rect x="116" y="68" width="8" height="8" fill="var(--drp-black)" />
    <rect x="128" y="68" width="8" height="8" fill="var(--drp-black)" />
    <rect x="140" y="68" width="8" height="8" fill="var(--drp-black)" />

    <rect x="12" y="80" width="8" height="8" fill="var(--drp-black)" />
    <rect x="36" y="80" width="8" height="8" fill="var(--drp-black)" />
    <rect x="68" y="80" width="8" height="8" fill="var(--drp-black)" />
    <rect x="92" y="80" width="8" height="8" fill="var(--drp-black)" />
    <rect x="116" y="80" width="8" height="8" fill="var(--drp-black)" />
    <rect x="140" y="80" width="8" height="8" fill="var(--drp-black)" />

    <rect x="12" y="92" width="8" height="8" fill="var(--drp-black)" />
    <rect x="24" y="92" width="8" height="8" fill="var(--drp-black)" />
    <rect x="48" y="92" width="8" height="8" fill="var(--drp-black)" />
    <rect x="68" y="92" width="8" height="8" fill="var(--drp-black)" />
    <rect x="80" y="92" width="8" height="8" fill="var(--drp-black)" />
    <rect x="104" y="92" width="8" height="8" fill="var(--drp-black)" />
    <rect x="128" y="92" width="8" height="8" fill="var(--drp-black)" />
    <rect x="140" y="92" width="8" height="8" fill="var(--drp-black)" />

    {/* Bottom-right data area */}
    <rect x="104" y="80" width="8" height="8" fill="var(--drp-black)" />
    <rect x="116" y="80" width="8" height="8" fill="var(--drp-black)" />
    <rect x="128" y="80" width="8" height="8" fill="var(--drp-black)" />

    <rect x="104" y="104" width="8" height="8" fill="var(--drp-black)" />
    <rect x="116" y="104" width="8" height="8" fill="var(--drp-black)" />
    <rect x="128" y="104" width="8" height="8" fill="var(--drp-black)" />
    <rect x="140" y="104" width="8" height="8" fill="var(--drp-black)" />

    <rect x="104" y="116" width="8" height="8" fill="var(--drp-black)" />
    <rect x="128" y="116" width="8" height="8" fill="var(--drp-black)" />

    <rect x="104" y="128" width="8" height="8" fill="var(--drp-black)" />
    <rect x="116" y="128" width="8" height="8" fill="var(--drp-black)" />
    <rect x="140" y="128" width="8" height="8" fill="var(--drp-black)" />

    <rect x="104" y="140" width="8" height="8" fill="var(--drp-black)" />
    <rect x="128" y="140" width="8" height="8" fill="var(--drp-black)" />
    <rect x="140" y="140" width="8" height="8" fill="var(--drp-black)" />

    {/* Bottom-left extended data */}
    <rect x="12" y="104" width="8" height="8" fill="var(--drp-purple)" />
    <rect x="24" y="104" width="8" height="8" fill="var(--drp-black)" />
    <rect x="36" y="104" width="8" height="8" fill="var(--drp-black)" />
    <rect x="48" y="104" width="8" height="8" fill="var(--drp-purple)" />
    <rect x="56" y="104" width="8" height="8" fill="var(--drp-black)" />

    <rect x="12" y="116" width="8" height="8" fill="var(--drp-black)" />
    <rect x="36" y="116" width="8" height="8" fill="var(--drp-purple)" />
    <rect x="56" y="116" width="8" height="8" fill="var(--drp-black)" />
    <rect x="68" y="116" width="8" height="8" fill="var(--drp-black)" />
    <rect x="80" y="116" width="8" height="8" fill="var(--drp-black)" />
    <rect x="92" y="116" width="8" height="8" fill="var(--drp-purple)" />

    <rect x="24" y="128" width="8" height="8" fill="var(--drp-black)" />
    <rect x="48" y="128" width="8" height="8" fill="var(--drp-black)" />
    <rect x="68" y="128" width="8" height="8" fill="var(--drp-black)" />
    <rect x="80" y="128" width="8" height="8" fill="var(--drp-purple)" />

    <rect x="12" y="140" width="8" height="8" fill="var(--drp-black)" />
    <rect x="36" y="140" width="8" height="8" fill="var(--drp-black)" />
    <rect x="56" y="140" width="8" height="8" fill="var(--drp-purple)" />
    <rect x="80" y="140" width="8" height="8" fill="var(--drp-black)" />
    <rect x="92" y="140" width="8" height="8" fill="var(--drp-black)" />
  </svg>
);

export const SignInWithQR: React.FC = () => (
  <AuthLayout>
    <div>
      <h1 className="drp-h2" style={{ marginBottom: "var(--drp-space-2)" }}>
        Log in with QR
      </h1>
      <p
        className="drp-text drp-text--sm drp-text--muted"
        style={{
          marginBottom: "var(--drp-space-8)",
          lineHeight: "var(--drp-leading-normal)",
        }}
      >
        Scan this code with the mobile app to log in to Doctor Project
      </p>

      {/* QR code container */}
      <div
        className="drp-card"
        style={{
          display: "inline-flex",
          padding: "var(--drp-space-4)",
          marginBottom: "var(--drp-space-8)",
          background: "var(--drp-white)",
        }}
      >
        <QRCodePlaceholder />
      </div>

      {/* Log in with email button */}
      <button type="button" className="drp-btn drp-btn--outline drp-btn--block">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
        Log in with email or phone number
      </button>

      {/* Sign up link */}
      <p
        className="drp-text drp-text--sm drp-text--muted drp-text-center"
        style={{ marginTop: "var(--drp-space-8)" }}
      >
        You don't have an account?{" "}
        <a
          href="#"
          className="drp-text--purple drp-text--semibold"
          style={{ textDecoration: "none" }}
        >
          Create an account
        </a>
      </p>
    </div>
  </AuthLayout>
);
