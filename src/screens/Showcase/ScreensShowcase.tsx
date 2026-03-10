import React from "react";

interface ScreenItem {
  name: string;
  description: string;
  variants: number;
  category: string;
}

const screens: ScreenItem[] = [
  // Authentication
  {
    name: "SignIn",
    description: "User login screen with email/password",
    variants: 1,
    category: "Authentication",
  },
  {
    name: "SignUp",
    description: "User registration with form validation",
    variants: 1,
    category: "Authentication",
  },
  {
    name: "PasswordReset",
    description: "Password reset with request & reset modes",
    variants: 2,
    category: "Authentication",
  },

  // Templates
  {
    name: "ListScreen",
    description: "Reusable template for all list/table screens",
    variants: 1,
    category: "Templates",
  },

  // Products
  {
    name: "ProductsList",
    description: "Product inventory management",
    variants: 3,
    category: "Products",
  },

  // Customers
  {
    name: "CustomersList",
    description: "Customer relationship management",
    variants: 3,
    category: "Customers",
  },

  // Accounts
  {
    name: "AccountsList",
    description: "Financial account management",
    variants: 2,
    category: "Accounts",
  },

  // Transactions
  {
    name: "TransactionsList",
    description: "Transaction history & tracking",
    variants: 4,
    category: "Transactions",
  },

  // Contacts
  {
    name: "ContactsList",
    description: "Business contact management",
    variants: 4,
    category: "Contacts",
  },

  // Sales
  {
    name: "SalesList",
    description: "Sales pipeline & performance tracking",
    variants: 2,
    category: "Sales",
  },

  // Inbox
  {
    name: "InboxList",
    description: "Message & email management",
    variants: 4,
    category: "Inbox",
  },

  // Payments
  {
    name: "PaymentsList",
    description: "Payment processing & history",
    variants: 3,
    category: "Payments",
  },

  // Education
  {
    name: "EducationCourses",
    description: "Course catalog with progress tracking",
    variants: 3,
    category: "Education",
  },

  // Calendar
  {
    name: "CalendarEvent",
    description: "Event scheduling & management",
    variants: 3,
    category: "Calendar",
  },

  // Support
  {
    name: "SupportHome",
    description: "Help center with documentation",
    variants: 4,
    category: "Support",
  },

  // Profile Settings
  {
    name: "ProfileAccount",
    description: "Account information settings",
    variants: 1,
    category: "Profile",
  },
  {
    name: "ProfileNotifications",
    description: "Notification preferences",
    variants: 1,
    category: "Profile",
  },
  {
    name: "ProfileSecurity",
    description: "Security & authentication settings",
    variants: 1,
    category: "Profile",
  },
  {
    name: "ProfileSocial",
    description: "Social account connections",
    variants: 1,
    category: "Profile",
  },

  // Charts
  {
    name: "ChartBar",
    description: "Bar chart visualization",
    variants: 1,
    category: "Charts",
  },
  {
    name: "ChartPolar",
    description: "Polar chart visualization",
    variants: 1,
    category: "Charts",
  },
  {
    name: "ChartWave",
    description: "Wave chart visualization",
    variants: 1,
    category: "Charts",
  },
  {
    name: "ChartGeometric",
    description: "Geometric chart visualization",
    variants: 1,
    category: "Charts",
  },
  {
    name: "ChartHorizontalBars",
    description: "Horizontal bar chart",
    variants: 1,
    category: "Charts",
  },
  {
    name: "ChartDoubleBars",
    description: "Double bar chart",
    variants: 1,
    category: "Charts",
  },
  {
    name: "ChartMisc",
    description: "Miscellaneous charts",
    variants: 1,
    category: "Charts",
  },
];

const categories = Array.from(new Set(screens.map((s) => s.category))).sort();

export const ScreensShowcase: React.FC = () => {
  const totalScreens = screens.length;
  const totalVariants = screens.reduce((sum, s) => sum + s.variants, 0);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--drp-cream)",
        padding: "var(--drp-space-8)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "var(--drp-space-12)" }}>
          <h1 className="drp-h1" style={{ marginBottom: "var(--drp-space-2)" }}>
            Design System Screens
          </h1>
          <p
            className="drp-text drp-text--muted"
            style={{
              fontSize: "var(--drp-text-lg)",
              marginBottom: "var(--drp-space-6)",
            }}
          >
            Complete showcase of 40+ screens across 15 categories
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "var(--drp-space-4)",
            }}
          >
            {[
              {
                value: totalScreens,
                label: "Screens",
                color: "var(--drp-info)",
              },
              {
                value: totalVariants,
                label: "Variants",
                color: "var(--drp-success)",
              },
              {
                value: categories.length,
                label: "Categories",
                color: "var(--drp-purple)",
              },
              {
                value: "30+",
                label: "Components",
                color: "var(--drp-orange)",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="drp-card"
                style={{ padding: "var(--drp-space-4)" }}
              >
                <div
                  className="drp-h3"
                  style={{
                    color: stat.color,
                    marginBottom: "var(--drp-space-1)",
                  }}
                >
                  {stat.value}
                </div>
                <div className="drp-text drp-text--sm drp-text--muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Screens by Category */}
        <div className="drp-flex-col" style={{ gap: "var(--drp-space-12)" }}>
          {categories.map((category) => {
            const categoryScreens = screens.filter(
              (s) => s.category === category,
            );
            return (
              <div key={category}>
                <div style={{ marginBottom: "var(--drp-space-6)" }}>
                  <h2
                    className="drp-h2"
                    style={{ marginBottom: "var(--drp-space-1)" }}
                  >
                    {category}
                  </h2>
                  <p className="drp-text drp-text--sm drp-text--muted">
                    {categoryScreens.length} screens
                  </p>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "var(--drp-space-6)",
                  }}
                >
                  {categoryScreens.map((screen) => (
                    <div
                      key={screen.name}
                      className="drp-card drp-card--interactive"
                      style={{ padding: "var(--drp-space-6)" }}
                    >
                      <div
                        className="drp-flex drp-items-center drp-justify-between"
                        style={{ marginBottom: "var(--drp-space-3)" }}
                      >
                        <h3 className="drp-h5">{screen.name}</h3>
                        <span className="drp-badge drp-badge--purple">
                          {screen.variants}x
                        </span>
                      </div>
                      <p
                        className="drp-text drp-text--sm drp-text--muted"
                        style={{ marginBottom: "var(--drp-space-4)" }}
                      >
                        {screen.description}
                      </p>
                      <div className="drp-flex drp-gap-2">
                        <button
                          className="drp-btn drp-btn--outline drp-btn--sm"
                          style={{ flex: 1 }}
                        >
                          View Story
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary */}
        <div
          className="drp-card"
          style={{
            marginTop: "var(--drp-space-16)",
            padding: "var(--drp-space-8)",
          }}
        >
          <h2 className="drp-h3" style={{ marginBottom: "var(--drp-space-4)" }}>
            Quick Stats
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "var(--drp-space-8)",
              textAlign: "center",
            }}
          >
            <div>
              <div
                className="drp-h2"
                style={{
                  color: "var(--drp-info)",
                  marginBottom: "var(--drp-space-2)",
                }}
              >
                {totalScreens}
              </div>
              <div className="drp-text drp-text--muted">
                Total Screens Implemented
              </div>
            </div>
            <div>
              <div
                className="drp-h2"
                style={{
                  color: "var(--drp-success)",
                  marginBottom: "var(--drp-space-2)",
                }}
              >
                {totalVariants}
              </div>
              <div className="drp-text drp-text--muted">Storybook Variants</div>
            </div>
            <div>
              <div
                className="drp-h2"
                style={{
                  color: "var(--drp-purple)",
                  marginBottom: "var(--drp-space-2)",
                }}
              >
                All
              </div>
              <div className="drp-text drp-text--muted">
                All with Mock Data & Stories
              </div>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div
          style={{
            marginTop: "var(--drp-space-8)",
            textAlign: "center",
          }}
        >
          <p className="drp-text drp-text--sm drp-text--muted">
            View in Storybook:{" "}
            <code
              style={{
                background: "var(--drp-black)",
                color: "var(--drp-cream)",
                padding: "2px var(--drp-space-2)",
                fontSize: "var(--drp-text-xs)",
              }}
            >
              npm run storybook
            </code>
          </p>
        </div>
      </div>
    </div>
  );
};
