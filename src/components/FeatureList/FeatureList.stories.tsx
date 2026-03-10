import type { Meta, StoryObj } from "@storybook/react";
import { FeatureList } from "./FeatureList";

const meta: Meta<typeof FeatureList> = {
  title: "Components/FeatureList",
  component: FeatureList,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof FeatureList>;

const medicalFeatures = [
  {
    icon: "♥",
    title: "Patient Records",
    text: "Secure, HIPAA-compliant storage for all patient data and history.",
  },
  {
    icon: "📅",
    title: "Appointment Scheduling",
    text: "Smart scheduling with automated reminders and conflict detection.",
  },
  {
    icon: "💊",
    title: "Prescription Management",
    text: "Digital prescriptions with dosage tracking and renewal alerts.",
  },
];

export const Default: Story = {
  args: { features: medicalFeatures },
};

export const TwoColumns: Story = {
  render: () => (
    <div style={{ maxWidth: 800 }}>
      <FeatureList
        features={[
          {
            icon: "🔒",
            title: "HIPAA Compliant",
            text: "End-to-end encryption and audit logs.",
          },
          {
            icon: "⚡",
            title: "Real-time Sync",
            text: "Instant updates across all devices.",
          },
        ]}
      />
    </div>
  ),
};

export const SixFeatures: Story = {
  render: () => (
    <FeatureList
      features={[
        {
          icon: "♥",
          title: "Patient Records",
          text: "Secure HIPAA-compliant storage.",
        },
        {
          icon: "📅",
          title: "Scheduling",
          text: "Smart appointment management.",
        },
        {
          icon: "💊",
          title: "Prescriptions",
          text: "Digital prescription workflows.",
        },
        {
          icon: "📊",
          title: "Analytics",
          text: "Real-time practice insights.",
        },
        {
          icon: "💬",
          title: "Messaging",
          text: "Secure patient communications.",
        },
        {
          icon: "🔗",
          title: "Integrations",
          text: "Connect with 50+ healthcare tools.",
        },
      ]}
    />
  ),
};
