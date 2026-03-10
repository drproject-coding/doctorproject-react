import type { Meta, StoryObj } from "@storybook/react";
import { CtaBanner } from "./CtaBanner";
import { Button } from "../Button";

const meta: Meta<typeof CtaBanner> = {
  title: "Components/CtaBanner",
  component: CtaBanner,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof CtaBanner>;

export const Default: Story = {
  args: {
    title: "Ready to modernise your practice?",
    text: "Join 2,000+ healthcare providers using DoctorProject to streamline patient care.",
  },
};

export const WithButton: Story = {
  args: {
    title: "Start your free trial today",
    text: "No credit card required. Set up in minutes.",
    children: <Button variant="secondary">Get Started Free</Button>,
  },
};

export const WithTwoButtons: Story = {
  render: () => (
    <CtaBanner
      title="Transform your patient experience"
      text="Everything your practice needs, in one place."
    >
      <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
        <Button variant="secondary">Start Free Trial</Button>
        <Button variant="ghost">Book a Demo</Button>
      </div>
    </CtaBanner>
  ),
};

export const TitleOnly: Story = {
  args: {
    title: "Book a demo today.",
  },
};
