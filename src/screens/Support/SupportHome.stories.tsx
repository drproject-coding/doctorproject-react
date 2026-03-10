import { Meta, StoryObj } from "@storybook/react";
import { SupportHome } from "./SupportHome";

const meta: Meta<typeof SupportHome> = {
  component: SupportHome,
  title: "Screens/Support/Home",
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof SupportHome>;

export const Home_Light: Story = {
  name: "Home – Light",
  args: {
    view: "home",
  },
};

export const Categories_Light: Story = {
  name: "Categories – Light",
  args: {
    view: "categories",
  },
};

export const Article_Light: Story = {
  name: "Article – Light",
  args: {
    view: "article",
  },
};

export const SearchResults_Light: Story = {
  name: "Search Results – Light",
  args: {
    view: "search",
  },
};
