import React, { useId, useState } from "react";
import { AuthLayout } from "./AuthLayout";

export const SignUp: React.FC = () => {
  const countryId = useId();
  const emailId = useId();
  const passwordId = useId();
  const [country, setCountry] = useState("United States");
  const [countryBusiness, setCountryBusiness] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [receiveUpdates, setReceiveUpdates] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign up:", { country, countryBusiness, email, password });
  };

  return (
    <AuthLayout>
      <div>
        <h1 className="drp-h2" style={{ marginBottom: "var(--drp-space-2)" }}>
          Sign up
        </h1>
        <p
          className="drp-text drp-text--sm drp-text--muted"
          style={{ marginBottom: "var(--drp-space-6)" }}
        >
          Fill out the form below using your current location
        </p>

        <form onSubmit={handleSubmit} className="drp-form-stack">
          {/* Country/Region of Residence */}
          <div className="drp-field">
            <label className="drp-field__label" htmlFor={countryId}>
              Country/Region of Residence
            </label>
            <select
              id={countryId}
              className="drp-select"
              name="country"
              autoComplete="country-name"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              style={{ width: "100%" }}
            >
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
            </select>
          </div>

          {/* Email */}
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

          {/* Password */}
          <div className="drp-field">
            <label className="drp-field__label" htmlFor={passwordId}>
              Password
            </label>
            <div className="drp-field--has-icon">
              <input
                id={passwordId}
                className="drp-input"
                type={showPassword ? "text" : "password"}
                name="new-password"
                autoComplete="new-password"
                spellCheck={false}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
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

          {/* Checkboxes */}
          <div className="drp-flex-col drp-gap-3">
            <label className="drp-checkbox">
              <input
                type="checkbox"
                checked={receiveUpdates}
                onChange={(e) => setReceiveUpdates(e.target.checked)}
              />
              I agree to receive email updates
            </label>
            <label className="drp-checkbox">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
              />
              <span>
                I have read and agree to{" "}
                <a
                  href="#"
                  className="drp-text--purple drp-text--medium"
                  style={{ textDecoration: "none" }}
                >
                  Terms of Service
                </a>
              </span>
            </label>
          </div>

          {/* Create account button */}
          <button
            type="submit"
            className="drp-btn drp-btn--primary drp-btn--block"
          >
            Create account
          </button>
        </form>

        {/* Sign in link */}
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
      </div>
    </AuthLayout>
  );
};
