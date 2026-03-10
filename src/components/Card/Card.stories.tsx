import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [undefined, "raised", "flat", "interactive", "sm"],
    },
    accent: {
      control: "select",
      options: [undefined, "purple", "mint", "pink", "yellow"],
    },
  },
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <>
        <CardHeader title="Card Title" subtitle="Card subtitle text" />
        <p>Card body content goes here.</p>
      </>
    ),
  },
};

export const Raised: Story = {
  args: {
    variant: "raised",
    children: (
      <>
        <CardHeader title="Raised Card" />
        <p>With a big offset shadow.</p>
      </>
    ),
  },
};

export const Interactive: Story = {
  args: {
    variant: "interactive",
    children: (
      <>
        <CardHeader title="Click Me" subtitle="I respond to hover" />
        <p>Interactive card.</p>
      </>
    ),
  },
};

export const WithAccent: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "16px",
        maxWidth: "600px",
      }}
    >
      <Card accent="purple">
        <CardHeader title="Revenue" subtitle="$48,290" />
        <p>+12.5% from last month</p>
      </Card>
      <Card accent="mint">
        <CardHeader title="Users" subtitle="2,847" />
        <p>+8.2% growth</p>
      </Card>
      <Card accent="pink">
        <CardHeader title="Errors" subtitle="23" />
        <p>-15% from yesterday</p>
      </Card>
      <Card accent="yellow">
        <CardHeader title="Pending" subtitle="384" />
        <p>Awaiting review</p>
      </Card>
    </div>
  ),
};

export const StatsCards: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "16px",
      }}
    >
      {[
        {
          label: "Total Revenue",
          value: "$48,290",
          change: "+12.5%",
          accent: "purple" as const,
        },
        {
          label: "Active Users",
          value: "2,847",
          change: "+8.2%",
          accent: "mint" as const,
        },
        {
          label: "New Orders",
          value: "384",
          change: "-3.1%",
          accent: "pink" as const,
        },
        {
          label: "Conversion",
          value: "3.24%",
          change: "+0.8%",
          accent: "yellow" as const,
        },
      ].map((s) => (
        <Card key={s.label} variant="sm" accent={s.accent}>
          <p
            style={{
              margin: 0,
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "#666",
            }}
          >
            {s.label}
          </p>
          <p style={{ margin: "4px 0", fontSize: "28px", fontWeight: 700 }}>
            {s.value}
          </p>
          <p
            style={{
              margin: 0,
              fontSize: "12px",
              color: s.change.startsWith("+") ? "#00AA00" : "#FF4444",
            }}
          >
            {s.change}
          </p>
        </Card>
      ))}
    </div>
  ),
};
