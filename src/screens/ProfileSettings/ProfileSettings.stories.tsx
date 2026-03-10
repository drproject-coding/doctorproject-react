import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ProfileAccount } from "./ProfileAccount";
import { ProfileNotifications } from "./ProfileNotifications";
import { ProfileSecurity } from "./ProfileSecurity";
import { ProfileSocial } from "./ProfileSocial";

const meta: Meta<typeof ProfileAccount> = {
  component: ProfileAccount,
  title: "Screens/ProfileSettings",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof ProfileAccount>;

export const Account: Story = {};

export const Notifications: Story = {
  render: () => <ProfileNotifications />,
  parameters: {
    layout: "fullscreen",
  },
};

export const Security: Story = {
  render: () => <ProfileSecurity />,
  parameters: {
    layout: "fullscreen",
  },
};

export const Social: Story = {
  render: () => <ProfileSocial />,
  parameters: {
    layout: "fullscreen",
  },
};
