import { Meta, StoryObj } from "@storybook/react";
import { ContactsList } from "./ContactsList";

const meta: Meta<typeof ContactsList> = {
  component: ContactsList,
  title: "Screens/Contacts/ContactsList",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof ContactsList>;

export const ListV1: Story = {
  args: {
    theme: "light",
    variant: "v1",
  },
};

export const ListV2: Story = {
  args: {
    theme: "light",
    variant: "v2",
  },
};

export const NewContact: Story = {
  args: {
    theme: "light",
    variant: "new-contact",
  },
};

export const Empty: Story = {
  args: {
    theme: "light",
    variant: "empty",
  },
};
