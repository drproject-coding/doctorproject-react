import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: [undefined, "xs", "sm", "md", "lg"],
    },
    weight: {
      control: "select",
      options: [undefined, "regular", "medium", "semibold", "bold"],
    },
    as: {
      control: "select",
      options: ["p", "span", "div", "label"],
    },
    muted: { control: "boolean" },
    secondary: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: { children: "Default body text at 14px regular weight." },
};
export const ExtraSmall: Story = {
  args: { size: "xs", children: "Extra small text — 11px" },
};
export const Small: Story = {
  args: { size: "sm", children: "Small text — 12px" },
};
export const Medium: Story = {
  args: { size: "md", children: "Medium text — 14px (default)" },
};
export const Large: Story = {
  args: { size: "lg", children: "Large text — 16px" },
};
export const Bold: Story = {
  args: { weight: "bold", children: "Bold weight text" },
};
export const Semibold: Story = {
  args: { weight: "semibold", children: "Semibold weight text" },
};
export const Muted: Story = {
  args: { muted: true, children: "Muted text for secondary information" },
};
export const Secondary: Story = {
  args: { secondary: true, children: "Secondary text for supporting content" },
};
export const AsSpan: Story = {
  args: { as: "span", children: "Rendered as a <span>" },
};
export const AsLabel: Story = {
  args: { as: "label", weight: "semibold", children: "Rendered as a <label>" },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Text size="xs">Extra Small (11px) — Caption text and metadata</Text>
      <Text size="sm">Small (12px) — Helper text and labels</Text>
      <Text size="md">Medium (14px) — Default body text</Text>
      <Text size="lg">Large (16px) — Emphasized body text</Text>
    </div>
  ),
};

export const AllWeights: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Text weight="regular">Regular (400) — Standard body copy</Text>
      <Text weight="medium">Medium (500) — Slightly emphasized</Text>
      <Text weight="semibold">Semibold (600) — Labels and buttons</Text>
      <Text weight="bold">Bold (700) — Strong emphasis</Text>
    </div>
  ),
};

export const ColorVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Text>Primary text — default color</Text>
      <Text secondary>Secondary text — supporting content</Text>
      <Text muted>Muted text — de-emphasized content</Text>
    </div>
  ),
};
