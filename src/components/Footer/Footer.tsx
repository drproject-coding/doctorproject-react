import type { ReactNode } from "react";

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface FooterProps {
  brand: string;
  tagline?: string;
  columns: FooterColumn[];
  copyright?: string;
  bottomLinks?: { label: string; href: string }[];
  className?: string;
}

export function Footer({
  brand,
  tagline,
  columns,
  copyright,
  bottomLinks,
  className = "",
}: FooterProps) {
  return (
    <footer
      className={className}
      style={{
        background: "var(--drp-black)",
        color: "#FFFFFF",
        padding: "var(--drp-space-16, 64px) 0",
        borderTop: "3px solid var(--drp-purple)",
      }}
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `2fr ${columns.map(() => "1fr").join(" ")}`,
            gap: "32px",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--drp-font-primary)",
                fontSize: "2rem",
                fontWeight: 800,
                marginBottom: "16px",
              }}
            >
              {brand}
            </p>
            {tagline && (
              <p style={{ fontSize: "13px", opacity: 0.7, maxWidth: "300px" }}>
                {tagline}
              </p>
            )}
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <p
                style={{
                  fontFamily: "var(--drp-font-primary)",
                  fontSize: "12px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "16px",
                  color: "var(--drp-orange)",
                }}
              >
                {col.title}
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        color: "#FFFFFF",
                        textDecoration: "none",
                        fontSize: "13px",
                        opacity: 0.7,
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {(copyright || bottomLinks) && (
          <div
            style={{
              marginTop: "48px",
              paddingTop: "24px",
              borderTop: "2px solid #666",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {copyright && (
              <p
                style={{
                  fontFamily: "var(--drp-font-mono)",
                  fontSize: "11px",
                  opacity: 0.5,
                }}
              >
                {copyright}
              </p>
            )}
            {bottomLinks && (
              <div style={{ display: "flex", gap: "16px" }}>
                {bottomLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    style={{
                      color: "#FFFFFF",
                      textDecoration: "none",
                      fontSize: "13px",
                      opacity: 0.7,
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </footer>
  );
}
