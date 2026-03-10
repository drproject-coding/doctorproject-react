import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "storybook-dark-mode",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  staticDirs: [
    {
      from: "../../../fonts",
      to: "/fonts",
    },
    {
      from: "../../../css",
      to: "/css",
    },
  ],
  docs: {
    autodocs: "tag",
  },
};

export default config;
