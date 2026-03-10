import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./Footer";

const meta: Meta<typeof Footer> = {
  title: "Composites/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    brand: "DOCTOR PXM",
    tagline: "The clinical approach to Product Experience Management.",
    columns: [
      {
        title: "Solution",
        links: [
          { label: "PXM Platform", href: "#" },
          { label: "DAM", href: "#" },
          { label: "PIM", href: "#" },
          { label: "Syndication", href: "#" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About Us", href: "#" },
          { label: "Careers", href: "#" },
          { label: "Blog", href: "#" },
          { label: "Contact", href: "#" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Documentation", href: "#" },
          { label: "API Reference", href: "#" },
          { label: "Case Studies", href: "#" },
          { label: "Support", href: "#" },
        ],
      },
    ],
    copyright: "© 2026 Doctor Project. All rights reserved.",
    bottomLinks: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
};
