import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ListScreen } from "./ListScreen";
import { Tag } from "../../components/Tag/Tag";

const meta: Meta<typeof ListScreen> = {
  component: ListScreen,
  title: "Screens/Common/ListScreen",
};

export default meta;
type Story = StoryObj<typeof ListScreen>;

const sampleData = [
  { id: "1", name: "Product A", status: "Active", price: "$99.99" },
  { id: "2", name: "Product B", status: "Active", price: "$149.99" },
  { id: "3", name: "Product C", status: "Inactive", price: "$79.99" },
  { id: "4", name: "Product D", status: "Active", price: "$199.99" },
  { id: "5", name: "Product E", status: "Inactive", price: "$49.99" },
];

export const Default: Story = {
  parameters: { layout: "fullscreen" },
  args: {
    title: "Products",
    subtitle: "Manage your product inventory",
    activeId: "products",
    data: sampleData,
    columns: [
      { key: "id", label: "ID" },
      { key: "name", label: "Product Name" },
      {
        key: "status",
        label: "Status",
        render: (value: string) => (
          <Tag color={value === "Active" ? "mint" : "grey"}>{value}</Tag>
        ),
      },
      { key: "price", label: "Price" },
    ],
  },
};
