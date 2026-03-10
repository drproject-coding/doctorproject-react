import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./Tag";

const CheckIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 7L6 10L11 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const StarIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 1L8.7 5.2H13L9.5 7.8L10.8 12L7 9.4L3.2 12L4.5 7.8L1 5.2H5.3L7 1Z"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="currentColor"
    />
  </svg>
);

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: [
        undefined,
        "purple",
        "mint",
        "pink",
        "yellow",
        "grey",
        "orange",
        "light",
        "teal",
        "black",
      ],
    },
    filled: { control: "boolean" },
    dark: { control: "boolean" },
    dot: { control: "boolean" },
    legend: { control: "boolean" },
    closeable: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = { args: { children: "Tag" } };
export const Purple: Story = { args: { children: "Purple", color: "purple" } };
export const Mint: Story = { args: { children: "Success", color: "mint" } };
export const Pink: Story = { args: { children: "Error", color: "pink" } };
export const Filled: Story = {
  args: { children: "Filled", color: "purple", filled: true },
};
export const WithDot: Story = {
  args: { children: "Active", color: "mint", dot: true },
};
export const Closeable: Story = {
  args: { children: "Remove me", closeable: true },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <Tag>Default</Tag>
      <Tag color="purple">Purple</Tag>
      <Tag color="mint">Mint</Tag>
      <Tag color="pink">Pink</Tag>
      <Tag color="yellow">Yellow</Tag>
      <Tag color="grey">Grey</Tag>
      <Tag color="purple" filled>
        Filled
      </Tag>
      <Tag color="mint" dot>
        With Dot
      </Tag>
      <Tag closeable>Closeable</Tag>
    </div>
  ),
};

export const Orange: Story = { args: { children: "Warning", color: "orange" } };
export const Teal: Story = { args: { children: "Teal", color: "teal" } };
export const Light: Story = { args: { children: "Light", color: "light" } };
export const Black: Story = { args: { children: "Black", color: "black" } };

export const WithLegend: Story = {
  args: { children: "Legend", color: "orange", legend: true },
};
export const WithIcon: Story = {
  args: { children: "Verified", color: "mint", icon: <CheckIcon /> },
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <Tag>Default</Tag>
      <Tag color="black">Black</Tag>
      <Tag color="purple">Purple</Tag>
      <Tag color="mint">Mint</Tag>
      <Tag color="teal">Teal</Tag>
      <Tag color="pink">Pink</Tag>
      <Tag color="yellow">Yellow</Tag>
      <Tag color="orange">Orange</Tag>
      <Tag color="grey">Grey</Tag>
      <Tag color="light">Light</Tag>
    </div>
  ),
};

export const AllColorsFilled: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <Tag filled>Default</Tag>
      <Tag color="black" filled>
        Black
      </Tag>
      <Tag color="purple" filled>
        Purple
      </Tag>
      <Tag color="mint" filled>
        Mint
      </Tag>
      <Tag color="teal" filled>
        Teal
      </Tag>
      <Tag color="pink" filled>
        Pink
      </Tag>
      <Tag color="yellow" filled>
        Yellow
      </Tag>
      <Tag color="orange" filled>
        Orange
      </Tag>
    </div>
  ),
};

export const IconVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <Tag icon={<CheckIcon />} color="mint">
        Verified
      </Tag>
      <Tag icon={<StarIcon />} color="yellow">
        Featured
      </Tag>
      <Tag icon={<CheckIcon />} color="purple" filled>
        Approved
      </Tag>
      <Tag icon={<StarIcon />} color="orange">
        Popular
      </Tag>
    </div>
  ),
};

export const LegendVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <Tag legend color="mint">
        Active
      </Tag>
      <Tag legend color="pink">
        Error
      </Tag>
      <Tag legend color="yellow">
        Pending
      </Tag>
      <Tag legend color="orange">
        Warning
      </Tag>
      <Tag legend color="purple">
        Info
      </Tag>
      <Tag legend color="teal">
        Processing
      </Tag>
    </div>
  ),
};
