import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: { message: "Changes saved successfully." },
};

export const Success: Story = {
  args: { variant: "success", message: "Patient record updated." },
};

export const Error: Story = {
  args: { variant: "error", message: "Failed to save. Please try again." },
};

export const Warning: Story = {
  args: { variant: "warning", message: "Session expires in 5 minutes." },
};

export const Info: Story = {
  args: { variant: "info", message: "New features available in settings." },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Toast message="Default notification" />
      <Toast variant="success" message="Patient record updated." />
      <Toast variant="error" message="Failed to save. Please try again." />
      <Toast variant="warning" message="Session expires in 5 minutes." />
      <Toast variant="info" message="New features available in settings." />
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Toast variant="success" message="Appointment confirmed." icon="✓" />
      <Toast variant="error" message="Appointment cancelled." icon="✕" />
      <Toast
        variant="warning"
        message="Reminder: appointment in 1 hour."
        icon="⚠"
      />
      <Toast
        variant="info"
        message="Dr. Smith is running 10 min late."
        icon="ℹ"
      />
    </div>
  ),
};
