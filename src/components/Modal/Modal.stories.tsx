import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button
          className="drp-btn drp-btn--primary"
          onClick={() => setOpen(true)}
        >
          Open Modal
        </button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Confirm Action"
          footer={
            <>
              <button
                className="drp-btn drp-btn--outline"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
              <button
                className="drp-btn drp-btn--primary"
                onClick={() => setOpen(false)}
              >
                Confirm
              </button>
            </>
          }
        >
          <p>
            Are you sure you want to proceed with this action? This cannot be
            undone.
          </p>
        </Modal>
      </>
    );
  },
};

export const LongContent: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button
          className="drp-btn drp-btn--outline"
          onClick={() => setOpen(true)}
        >
          Open Long Modal
        </button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Terms of Service"
        >
          {Array.from({ length: 10 }, (_, i) => (
            <p key={i}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          ))}
        </Modal>
      </>
    );
  },
};
