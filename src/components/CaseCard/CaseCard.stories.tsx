import type { Meta, StoryObj } from "@storybook/react";
import { CaseCard } from "./CaseCard";

const meta: Meta<typeof CaseCard> = {
  title: "Composites/CaseCard",
  component: CaseCard,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof CaseCard>;

export const Default: Story = {
  args: {
    imageLabel: "FASHION",
    imageColor: "var(--drp-purple)",
    stat: "+400%",
    statLabel: "Conversion Rate Increase",
    title: "Global Fashion Brand",
    description:
      "Unified product data across 50+ markets. Reduced time-to-market from 3 weeks to 2 days.",
  },
};

export const CaseStudyRow: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "16px",
      }}
    >
      <CaseCard
        imageLabel="FASHION"
        imageColor="var(--drp-purple)"
        stat="+400%"
        statLabel="Conversion Rate Increase"
        title="Global Fashion Brand"
        description="Unified product data across 50+ markets."
      />
      <CaseCard
        imageLabel="ELECTRONICS"
        imageColor="var(--drp-orange)"
        stat="+250%"
        statLabel="Revenue Growth"
        title="Tech Retailer"
        description="Enriched 50,000 SKUs with rich content."
      />
      <CaseCard
        imageLabel="HEALTHCARE"
        imageColor="#00AA00"
        stat="+180%"
        statLabel="Search Visibility"
        title="Medical Supplies Co."
        description="Structured product data for SEO."
      />
    </div>
  ),
};
