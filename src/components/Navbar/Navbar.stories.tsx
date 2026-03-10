import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";

const meta: Meta<typeof Navbar> = {
  title: "Layout/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    brand: (
      <strong
        style={{
          fontFamily: "var(--drp-font-primary)",
          fontSize: "18px",
          fontWeight: 800,
        }}
      >
        DOCTOR PROJECT
      </strong>
    ),
    children: (
      <>
        <a
          href="#"
          style={{ textDecoration: "none", color: "inherit", fontWeight: 600 }}
        >
          Home
        </a>
        <a
          href="#"
          style={{ textDecoration: "none", color: "inherit", fontWeight: 600 }}
        >
          Features
        </a>
        <a
          href="#"
          style={{ textDecoration: "none", color: "inherit", fontWeight: 600 }}
        >
          Pricing
        </a>
        <a
          href="#"
          style={{ textDecoration: "none", color: "inherit", fontWeight: 600 }}
        >
          Docs
        </a>
      </>
    ),
    actions: (
      <button className="drp-btn drp-btn--primary drp-btn--sm">Sign Up</button>
    ),
  },
};
