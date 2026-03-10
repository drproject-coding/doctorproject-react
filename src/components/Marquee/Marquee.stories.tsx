import type { Meta, StoryObj } from "@storybook/react";
import { Marquee } from "./Marquee";

const meta: Meta<typeof Marquee> = {
  title: "Composites/Marquee",
  component: Marquee,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof Marquee>;

export const Default: Story = {
  args: {
    items: [
      "SYNDICATION",
      "ENRICHMENT",
      "AUTOMATION",
      "DIGITAL ASSET MANAGEMENT",
    ],
    separator: "+++",
  },
};

export const Fast: Story = {
  args: {
    items: ["BRUTALIST", "DESIGN", "SYSTEM", "DOCTOR PROJECT"],
    separator: "///",
    speed: 10,
  },
};
