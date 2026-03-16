import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";
import { Icon } from "../Icon/Icon";
import { users } from "../../data/fake";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    columns: [
      { key: "name", header: "Name" },
      { key: "email", header: "Email" },
      { key: "role", header: "Role" },
      { key: "status", header: "Status" },
      { key: "joinDate", header: "Joined" },
    ],
    data: users.slice(0, 8),
  },
};

/**
 * Use Icon components (size="sm") for table row actions — never use "..." buttons.
 * Wrap each Icon in a plain <button> with aria-label for accessibility.
 */
export const WithActions: Story = {
  render: () => (
    <Table
      columns={[
        { key: "name", header: "Name" },
        { key: "email", header: "Email" },
        { key: "role", header: "Role" },
        {
          key: "actions",
          header: "Actions",
          render: (row) => (
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <button
                aria-label={`Edit ${row.name}`}
                onClick={() => alert(`Edit: ${row.name}`)}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                }}
              >
                <Icon name="edit" size="sm" bg="var(--drp-yellow)" />
              </button>
              <button
                aria-label={`Delete ${row.name}`}
                onClick={() => alert(`Delete: ${row.name}`)}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                }}
              >
                <Icon name="trash" size="sm" bg="var(--drp-pink)" />
              </button>
            </div>
          ),
        },
      ]}
      data={users.slice(0, 6)}
    />
  ),
};

export const WithCustomRender: Story = {
  render: () => (
    <Table
      columns={[
        {
          key: "name",
          header: "Name",
          render: (row) => <strong>{String(row.name)}</strong>,
        },
        { key: "email", header: "Email" },
        {
          key: "role",
          header: "Role",
          render: (row) => (
            <span
              className="drp-tag drp-tag--purple"
              style={{ fontSize: "11px" }}
            >
              {String(row.role)}
            </span>
          ),
        },
        {
          key: "status",
          header: "Status",
          render: (row) => {
            const color =
              row.status === "Active"
                ? "mint"
                : row.status === "Pending"
                  ? "yellow"
                  : "pink";
            return (
              <span className={`drp-tag drp-tag--${color} drp-tag--dot`}>
                {String(row.status)}
              </span>
            );
          },
        },
      ]}
      data={users.slice(0, 6)}
    />
  ),
};
