import type { Meta, StoryObj } from "@storybook/react";
import { PricingCard } from "./PricingCard";

const meta: Meta<typeof PricingCard> = {
  title: "Composites/PricingCard",
  component: PricingCard,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof PricingCard>;

export const Default: Story = {
  args: {
    title: "Starter",
    price: "$499",
    period: "per month",
    features: [
      "Up to 1,000 SKUs",
      "5 User Seats",
      "Basic DAM",
      "Email Support",
    ],
    action: (
      <button className="drp-btn drp-btn--outline" style={{ width: "100%" }}>
        Get Started
      </button>
    ),
  },
};

export const Featured: Story = {
  args: {
    title: "Professional",
    price: "$1,499",
    period: "per month",
    featured: true,
    badge: "Most Popular",
    features: [
      "Up to 25,000 SKUs",
      "15 User Seats",
      "Advanced DAM + PIM",
      "Priority Support",
      "All Connectors",
      "AI Enrichment",
    ],
    action: (
      <button
        className="drp-btn"
        style={{
          width: "100%",
          background: "#fff",
          color: "var(--drp-purple)",
        }}
      >
        Get Started
      </button>
    ),
  },
};

export const PricingRow: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "16px",
      }}
    >
      <PricingCard
        title="Starter"
        price="$499"
        period="per month"
        features={[
          "Up to 1,000 SKUs",
          "5 User Seats",
          "Basic DAM",
          "Email Support",
          "Standard Connectors",
        ]}
        action={
          <button
            className="drp-btn drp-btn--outline"
            style={{ width: "100%" }}
          >
            Get Started
          </button>
        }
      />
      <PricingCard
        title="Professional"
        price="$1,499"
        period="per month"
        featured
        badge="Most Popular"
        features={[
          "Up to 25,000 SKUs",
          "15 User Seats",
          "Advanced DAM + PIM",
          "Priority Support",
          "All Connectors",
          "AI Enrichment",
        ]}
        action={
          <button
            className="drp-btn"
            style={{
              width: "100%",
              background: "#fff",
              color: "var(--drp-purple)",
            }}
          >
            Get Started
          </button>
        }
      />
      <PricingCard
        title="Enterprise"
        price="Custom"
        period="contact for pricing"
        features={[
          "Unlimited SKUs",
          "Unlimited Users",
          "Full Platform",
          "24/7 Support",
          "Custom Integrations",
          "On-premise Option",
        ]}
        action={
          <button
            className="drp-btn drp-btn--outline"
            style={{ width: "100%" }}
          >
            Contact Sales
          </button>
        }
      />
    </div>
  ),
};
