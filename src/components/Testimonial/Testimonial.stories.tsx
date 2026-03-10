import type { Meta, StoryObj } from "@storybook/react";
import { Testimonial } from "./Testimonial";

const meta: Meta<typeof Testimonial> = {
  title: "Components/Testimonial",
  component: Testimonial,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Testimonial>;

const Avatar = () => (
  <img
    src="https://i.pravatar.cc/48?img=3"
    alt="avatar"
    style={{ width: 48, height: 48, objectFit: "cover" }}
  />
);

export const Default: Story = {
  args: {
    quote:
      "This design system saved us weeks of work. The components are clean, consistent, and extremely well-documented.",
    name: "Sarah Chen",
    role: "Head of Product, MediFlow",
    avatar: <Avatar />,
  },
};

export const NoAvatar: Story = {
  args: {
    quote:
      "The brutalist aesthetic is exactly what our brand needed. Bold, direct, and impossible to ignore.",
    name: "James Okafor",
    role: "Creative Director",
  },
};

export const NoRole: Story = {
  args: {
    quote:
      "Finally a design system that doesn't look like every other SaaS tool out there.",
    name: "Maria Gonzalez",
    avatar: <Avatar />,
  },
};

export const Grid: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
      <Testimonial
        quote="Incredible attention to detail. Every component just works."
        name="Alex Kim"
        role="Frontend Lead"
        avatar={
          <img
            src="https://i.pravatar.cc/48?img=1"
            style={{ width: 48, height: 48 }}
          />
        }
      />
      <Testimonial
        quote="We shipped our MVP 3x faster thanks to this system."
        name="Priya Nair"
        role="CTO, HealthTrack"
        avatar={
          <img
            src="https://i.pravatar.cc/48?img=5"
            style={{ width: 48, height: 48 }}
          />
        }
      />
      <Testimonial
        quote="Dark mode support out of the box. That alone was worth it."
        name="Tom Williams"
        role="Senior Engineer"
        avatar={
          <img
            src="https://i.pravatar.cc/48?img=8"
            style={{ width: 48, height: 48 }}
          />
        }
      />
      <Testimonial
        quote="The typography system is chef's kiss. Super readable at every size."
        name="Leila Hassan"
        role="UX Designer"
        avatar={
          <img
            src="https://i.pravatar.cc/48?img=9"
            style={{ width: 48, height: 48 }}
          />
        }
      />
    </div>
  ),
};
