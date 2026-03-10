import React, { useId, useState } from "react";
import { AuthLayout } from "./AuthLayout";

export interface PasswordResetProps {
  mode?: "request" | "reset";
}

export const PasswordReset: React.FC<PasswordResetProps> = ({
  mode = "request",
}) => {
  const emailId = useId();
  const newPasswordId = useId();
  const confirmPasswordId = useId();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleRequestReset = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword === confirmPassword && newPassword.length >= 8) {
      console.log("Password reset successful");
    }
  };

  return (
    <AuthLayout>
      <div>
        {mode === "request" ? (
          <>
            <h1
              className="drp-h1"
              style={{ marginBottom: "var(--drp-space-3)" }}
            >
              Forgot password?
            </h1>
            <p
              className="drp-text drp-text--sm drp-text--muted"
              style={{
                marginBottom: "var(--drp-space-6)",
                lineHeight: "var(--drp-leading-loose)",
                maxWidth: "320px",
              }}
            >
              Enter your email address and we'll send you instructions on how to
              reset your password in a few minutes. You can also add a recovery
              email if you've never set one before.
            </p>

            {submitted ? (
              <div className="drp-alert drp-alert--success">
                <div className="drp-alert__content">
                  <p className="drp-text drp-text--sm">
                    Check your email for reset instructions.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleRequestReset} className="drp-form-stack">
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

                <button
                  type="submit"
                  className="drp-btn drp-btn--primary drp-btn--block"
                >
                  Start recovery
                </button>
              </form>
            )}

            <p
              className="drp-text drp-text--sm drp-text--muted drp-text-center"
              style={{ marginTop: "var(--drp-space-6)" }}
            >
              Already registered?{" "}
              <a
                href="#"
                className="drp-text--purple drp-text--semibold"
                style={{ textDecoration: "none" }}
              >
                Sign in to your account
              </a>
            </p>
          </>
        ) : (
          <>
            <h1
              className="drp-h2"
              style={{ marginBottom: "var(--drp-space-2)" }}
            >
              Reset Password
            </h1>
            <p
              className="drp-text drp-text--sm drp-text--muted"
              style={{ marginBottom: "var(--drp-space-6)" }}
            >
              Enter your new password below
            </p>

            <form onSubmit={handleResetPassword} className="drp-form-stack">
              {/* New Password */}
              <div className="drp-field">
                <label className="drp-field__label" htmlFor={newPasswordId}>
                  New Password
                </label>
                <div className="drp-field--has-icon">
                  <input
                    id={newPasswordId}
                    className="drp-input"
                    type={showPassword ? "text" : "password"}
                    name="new-password"
                    autoComplete="new-password"
                    spellCheck={false}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password"
                    style={{ width: "100%" }}
                  />
                  <button
                    type="button"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
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
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="drp-field">
                <label className="drp-field__label" htmlFor={confirmPasswordId}>
                  Confirm Password
                </label>
                <div className="drp-field--has-icon">
                  <input
                    id={confirmPasswordId}
                    className="drp-input"
                    type={showPassword ? "text" : "password"}
                    name="confirm-password"
                    autoComplete="new-password"
                    spellCheck={false}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm new password"
                    style={{ width: "100%" }}
                  />
                  <button
                    type="button"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
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
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="drp-btn drp-btn--primary drp-btn--block"
              >
                Reset Password
              </button>
            </form>
          </>
        )}
      </div>
    </AuthLayout>
  );
};
