import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "success", "warning", "error"],
      description:
        "Semantic tone — use 'info' for neutral guidance, 'success' after a completed action, 'warning' for reversible risks, 'error' for blocking failures.",
    },
  },
};
export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    variant: "info",
    title: "Information",
    children: "This is an informational message.",
  },
};
export const Success: Story = {
  args: {
    variant: "success",
    title: "Success",
    children: "Operation completed successfully.",
  },
};
export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Warning",
    children: "Please review before proceeding.",
  },
};
export const Error: Story = {
  args: {
    variant: "error",
    title: "Error",
    children: "Something went wrong. Please try again.",
  },
};
export const Dismissible: Story = {
  args: {
    variant: "info",
    title: "Dismissible",
    children: "Click the X to close.",
    onClose: () => {},
  },
};

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        maxWidth: "500px",
      }}
    >
      <Alert variant="info" title="Info">
        Informational alert message.
      </Alert>
      <Alert variant="success" title="Success">
        Changes saved successfully.
      </Alert>
      <Alert variant="warning" title="Warning">
        Your session expires in 5 minutes.
      </Alert>
      <Alert variant="error" title="Error">
        Failed to save changes.
      </Alert>
    </div>
  ),
};
