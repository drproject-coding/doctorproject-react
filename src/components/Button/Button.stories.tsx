import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const ArrowRight = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 8H13M13 8L9 4M13 8L9 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PlusIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 3V13M3 8H13"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const StarIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 1L10 6H15L11 9L12.5 14L8 11L3.5 14L5 9L1 6H6L8 1Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="currentColor"
    />
  </svg>
);

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        undefined,
        "primary",
        "outline",
        "ghost",
        "ghost-bordered",
        "danger",
        "secondary",
        "dark",
      ],
      description:
        "Visual style — use 'primary' for the main CTA (one per screen), 'danger' for destructive actions, 'outline'/'ghost' for secondary actions.",
    },
    size: {
      control: "select",
      options: [undefined, "sm", "lg"],
      description:
        "Button size — omit for default (md), use 'sm' in dense UIs like tables, 'lg' for hero CTAs.",
    },
    block: {
      control: "boolean",
      description:
        "Stretches the button to fill its container width — use in stacked mobile layouts or full-width form footers.",
    },
    icon: {
      control: "boolean",
      description:
        "Renders as a square icon-only button — always pair with an aria-label for accessibility.",
    },
    disabled: {
      control: "boolean",
      description:
        "Disables the button — always communicate why via surrounding text or a tooltip so users aren't confused.",
    },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = { args: { children: "Button" } };
export const Primary: Story = {
  args: { variant: "primary", children: "Primary" },
};
export const Outline: Story = {
  args: { variant: "outline", children: "Outline" },
};
export const Ghost: Story = { args: { variant: "ghost", children: "Ghost" } };
export const GhostBordered: Story = {
  args: { variant: "ghost-bordered", children: "Ghost Bordered" },
};
export const Danger: Story = {
  args: { variant: "danger", children: "Danger" },
};
export const Secondary: Story = {
  args: { variant: "secondary", children: "Secondary" },
};
export const Dark: Story = { args: { variant: "dark", children: "Dark" } };
export const Small: Story = {
  args: { variant: "primary", size: "sm", children: "Small" },
};
export const Large: Story = {
  args: { variant: "primary", size: "lg", children: "Large" },
};
export const Block: Story = {
  args: { variant: "primary", block: true, children: "Full Width" },
};
export const Disabled: Story = {
  args: { variant: "primary", disabled: true, children: "Disabled" },
};

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "12px",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="ghost-bordered">Ghost Bordered</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="dark">Dark</Button>
    </div>
  ),
};

/** Icon placed before label (Icon + Label layout) */
export const IconLeft: Story = {
  args: {
    variant: "primary",
    iconLeft: <PlusIcon />,
    children: "Create",
  },
};

/** Icon placed after label (Label + Icon layout) */
export const IconRight: Story = {
  args: {
    variant: "primary",
    iconRight: <ArrowRight />,
    children: "Next",
  },
};

/** Icon-only button (square) */
export const IconOnly: Story = {
  args: {
    variant: "outline",
    icon: true,
    children: <StarIcon />,
  },
};

/** Figma variants: Filled (primary), Outline, Transparent (ghost) */
export const FigmaVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <strong style={{ width: 100, fontSize: 12 }}>Filled:</strong>
        <Button variant="primary">Label</Button>
        <Button variant="primary" iconLeft={<PlusIcon />}>
          Label
        </Button>
        <Button variant="primary" iconRight={<ArrowRight />}>
          Label
        </Button>
        <Button variant="primary" icon aria-label="Favorite">
          <StarIcon />
        </Button>
      </div>
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <strong style={{ width: 100, fontSize: 12 }}>Outline:</strong>
        <Button variant="outline">Label</Button>
        <Button variant="outline" iconLeft={<PlusIcon />}>
          Label
        </Button>
        <Button variant="outline" iconRight={<ArrowRight />}>
          Label
        </Button>
        <Button variant="outline" icon aria-label="Favorite">
          <StarIcon />
        </Button>
      </div>
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <strong style={{ width: 100, fontSize: 12 }}>Transparent:</strong>
        <Button variant="ghost">Label</Button>
        <Button variant="ghost" iconLeft={<PlusIcon />}>
          Label
        </Button>
        <Button variant="ghost" iconRight={<ArrowRight />}>
          Label
        </Button>
        <Button variant="ghost" icon aria-label="Favorite">
          <StarIcon />
        </Button>
      </div>
    </div>
  ),
};
