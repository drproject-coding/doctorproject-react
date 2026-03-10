import { Meta, StoryObj } from "@storybook/react";
import { InboxList } from "./InboxList";

const meta: Meta<typeof InboxList> = {
  component: InboxList,
  title: "Screens/Inbox/InboxList",
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof InboxList>;

export const MailList: Story = {
  args: {
    variant: "mail-list",
    theme: "light",
  },
};

export const Chat: Story = {
  args: {
    variant: "chat",
    theme: "light",
  },
};

export const MailCompose: Story = {
  args: {
    variant: "mail-compose",
    theme: "light",
  },
};

export const Empty: Story = {
  args: {
    variant: "empty",
    theme: "light",
  },
};
