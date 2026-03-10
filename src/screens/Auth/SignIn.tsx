import React, { useId, useState } from "react";
import { AuthLayout } from "./AuthLayout";

export const SignIn: React.FC = () => {
  const emailId = useId();
  const passwordId = useId();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign in:", { email, password, rememberMe });
  };

  return (
    <AuthLayout>
      <div>
        <h1 className="drp-h2" style={{ marginBottom: "var(--drp-space-2)" }}>
          Sign in
        </h1>
        <p
          className="drp-text drp-text--sm drp-text--muted"
          style={{ marginBottom: "var(--drp-space-8)" }}
        >
          Enter your account details or use QR code
        </p>

        <form onSubmit={handleSubmit} className="drp-form-stack">
          {/* Email field */}
          <div className="drp-field">
            <label className="drp-field__label" htmlFor={emailId}>
              Email
            </label>
            <div className="drp-field--has-icon">
              <input
                id={emailId}
                className="drp-input"
                type="email"
                name="email"
                autoComplete="email"
                spellCheck={false}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                style={{ width: "100%" }}
              />
              {/* Mail icon */}
              <svg
                className="drp-field__icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ color: "var(--drp-grey)" }}
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
          </div>

          {/* Password field */}
          <div className="drp-field">
            <label className="drp-field__label" htmlFor={passwordId}>
              Password
            </label>
            <div className="drp-field--has-icon">
              <input
                id={passwordId}
                className="drp-input"
                type={showPassword ? "text" : "password"}
                name="password"
                autoComplete="current-password"
                spellCheck={false}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                style={{ width: "100%" }}
              />
              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "12px",
                  bottom: "12px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  color: "var(--drp-grey)",
                }}
              >
                {showPassword ? (
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
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
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
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Remember me + Recover password */}
          <div className="drp-flex drp-items-center drp-justify-between">
            <label className="drp-checkbox">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember me
            </label>
            <a
              href="#"
              className="drp-text drp-text--sm drp-text--purple drp-text--medium"
              style={{ textDecoration: "none" }}
            >
              Recover password
            </a>
          </div>

          {/* Log in button */}
          <button
            type="submit"
            className="drp-btn drp-btn--dark drp-btn--block"
          >
            Log in
          </button>

          {/* OR divider */}
          <div className="drp-flex drp-items-center drp-gap-3">
            <div className="drp-divider" style={{ flex: 1, margin: 0 }} />
            <span className="drp-text drp-text--sm drp-text--muted">or</span>
            <div className="drp-divider" style={{ flex: 1, margin: 0 }} />
          </div>

          {/* Log in with QR code button */}
          <button
            type="button"
            className="drp-btn drp-btn--outline drp-btn--block"
          >
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
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
              <path
                d="M14 14h1v1h-1zM17 14h1v1h-1zM20 14h1v1h-1zM14 17h1v1h-1zM17 17h1v1h-1zM20 17h1v1h-1zM14 20h1v1h-1zM17 20h1v1h-1zM20 20h1v1h-1z"
                fill="currentColor"
                stroke="none"
              />
            </svg>
            Log in with QR code
          </button>
        </form>

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
};
