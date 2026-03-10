import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ProfileAccount } from "../../screens/ProfileSettings/ProfileAccount";
import { ProfileSecurity } from "../../screens/ProfileSettings/ProfileSecurity";
import { ProfileNotifications } from "../../screens/ProfileSettings/ProfileNotifications";
import { ProfileSocial } from "../../screens/ProfileSettings/ProfileSocial";

const meta: Meta = {
  title: "Pages/Profile Settings",
  parameters: { layout: "fullscreen" },
};
export default meta;

export const Account: StoryObj = { render: () => <ProfileAccount /> };
export const Security: StoryObj = { render: () => <ProfileSecurity /> };
export const Notifications: StoryObj = { render: () => <ProfileNotifications /> };
export const Social: StoryObj = { render: () => <ProfileSocial /> };
