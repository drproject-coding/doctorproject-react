import type { Meta, StoryObj } from "@storybook/react";
import { ChartCard } from "./ChartCard";
import { chartData } from "../../data/fake";

const meta: Meta<typeof ChartCard> = {
  title: "Layout/ChartCard",
  component: ChartCard,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof ChartCard>;

export const Default: Story = {
  args: {
    title: "Revenue Overview",
    subtitle: "Monthly revenue for 2026",
    children: (
      <div
        style={{
          width: "100%",
          height: "200px",
          display: "flex",
          alignItems: "flex-end",
          gap: "4px",
          padding: "16px",
        }}
      >
        {chartData.revenue.map((val, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              background: "var(--drp-purple)",
              height: `${(val / 60000) * 100}%`,
              minHeight: "4px",
              border: "1px solid var(--drp-black)",
            }}
            title={`${chartData.labels[i]}: $${val.toLocaleString()}`}
          />
        ))}
      </div>
    ),
    legend: (
      <div
        style={{
          display: "flex",
          gap: "16px",
          fontSize: "12px",
          fontFamily: "var(--drp-font-primary)",
        }}
      >
        <span>
          <span
            style={{
              display: "inline-block",
              width: 8,
              height: 8,
              background: "var(--drp-purple)",
              marginRight: 4,
            }}
          />
          Revenue
        </span>
      </div>
    ),
  },
};

export const TwoCharts: Story = {
  render: () => (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}
    >
      <ChartCard title="Users" subtitle="Monthly active users">
        <div
          style={{
            width: "100%",
            height: "180px",
            display: "flex",
            alignItems: "flex-end",
            gap: "4px",
            padding: "16px",
          }}
        >
          {chartData.users.map((val, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                background: "var(--drp-mint)",
                height: `${(val / 3000) * 100}%`,
                border: "1px solid var(--drp-black)",
              }}
            />
          ))}
        </div>
      </ChartCard>
      <ChartCard title="Orders" subtitle="Monthly orders">
        <div
          style={{
            width: "100%",
            height: "180px",
            display: "flex",
            alignItems: "flex-end",
            gap: "4px",
            padding: "16px",
          }}
        >
          {chartData.orders.map((val, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                background: "var(--drp-orange)",
                height: `${(val / 500) * 100}%`,
                border: "1px solid var(--drp-black)",
              }}
            />
          ))}
        </div>
      </ChartCard>
    </div>
  ),
};
