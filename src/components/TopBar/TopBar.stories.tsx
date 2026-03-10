import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { TopBar } from "./TopBar";
import { Pictogram } from "../Pictogram/Pictogram";

const meta: Meta<typeof TopBar> = {
  component: TopBar,
  title: "Navigation/TopBar",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof TopBar>;

export const Default: Story = {
  args: {
    title: "Dashboard",
  },
};

export const WithMenuButton: Story = {
  args: {
    title: "Dashboard",
    menuButton: true,
  },
};

export const WithActions: Story = {
  args: {
    title: "Accounts",
    actions: (
      <>
        <button className="topbar-icon-btn" aria-label="Search">
          <Pictogram name="Filters" size={20} aria-hidden={true} />
        </button>
        <button className="topbar-icon-btn" aria-label="Notifications">
          <Pictogram name="Attention" size={20} aria-hidden={true} />
          <span className="notification-dot" />
        </button>
        <button className="topbar-apps-btn">
          <Pictogram name="Apps" size={20} aria-hidden={true} />
          <span>Apps</span>
        </button>
        <button className="topbar-create-btn">
          <Pictogram name="Add" size={20} aria-hidden={true} />
          <span>Create New</span>
        </button>
      </>
    ),
  },
};
