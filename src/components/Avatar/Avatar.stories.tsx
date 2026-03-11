import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: [undefined, "sm", "lg"],
      description:
        "Avatar size — use 'sm' in compact rows like comment threads, the default for most contexts, and 'lg' on profile pages.",
    },
    initials: {
      control: "text",
      description:
        "1–2 character fallback shown when no image is available — typically the user's first and last initial.",
    },
  },
};
export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithInitials: Story = { args: { initials: "JD" } };
export const Small: Story = { args: { initials: "AB", size: "sm" } };
export const Large: Story = { args: { initials: "XY", size: "lg" } };

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
      <Avatar size="sm" initials="SM" />
      <Avatar initials="MD" />
      <Avatar size="lg" initials="LG" />
    </div>
  ),
};
