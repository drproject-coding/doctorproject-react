import type { Meta, StoryObj } from "@storybook/react";
import { Counter } from "./Counter";

const meta: Meta<typeof Counter> = {
  title: "Components/Counter",
  component: Counter,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "number",
      description:
        "Current numeric value displayed in the counter — controls the component in controlled mode.",
    },
    min: {
      control: "number",
      description:
        "Minimum allowed value — the decrement button disables automatically when this boundary is reached.",
    },
    max: {
      control: "number",
      description:
        "Maximum allowed value — the increment button disables automatically when this boundary is reached.",
    },
  },
};
export default meta;
type Story = StoryObj<typeof Counter>;

export const Default: Story = { args: { value: 1 } };
export const WithRange: Story = { args: { value: 5, min: 0, max: 10 } };
export const AtMin: Story = { args: { value: 0, min: 0 } };
export const AtMax: Story = { args: { value: 99, max: 99 } };
