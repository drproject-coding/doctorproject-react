import { Meta, StoryObj } from "@storybook/react";
import { CalendarEvent } from "./CalendarEvent";

const meta: Meta<typeof CalendarEvent> = {
  component: CalendarEvent,
  title: "Screens/Calendar/CalendarEvent",
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof CalendarEvent>;

export const MonthWithEvent: Story = {
  args: { defaultView: "month" },
};

export const DayView: Story = {
  args: { defaultView: "day" },
};

export const WeekView: Story = {
  args: { defaultView: "week" },
};
