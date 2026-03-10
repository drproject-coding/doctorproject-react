import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return (
      <Pagination currentPage={page} totalPages={8} onPageChange={setPage} />
    );
  },
};

export const Dark: Story = {
  render: () => {
    const [page, setPage] = useState(3);
    return (
      <Pagination
        currentPage={page}
        totalPages={8}
        onPageChange={setPage}
        variant="dark"
      />
    );
  },
};

export const Transparent: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return (
      <Pagination
        currentPage={page}
        totalPages={5}
        onPageChange={setPage}
        variant="transparent"
      />
    );
  },
};
