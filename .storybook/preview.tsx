import type { Preview } from "@storybook/react";
import React from "react";
import "../src/styles/global.css";

const ThemeSync: React.FC<{ theme: unknown; children: React.ReactNode }> = ({
  theme,
  children,
}) => {
  React.useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);
  return <>{children}</>;
};

const preview: Preview = {
  decorators: [
    (Story, context) => (
      <ThemeSync theme={context.args?.theme}>
        <Story />
      </ThemeSync>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /date$/i,
      },
    },
    darkMode: {
      classTarget: "body",
      darkClass: "dark-mode",
      lightClass: "",
      stylePreview: true,
    },
    backgrounds: { disable: true },
  },
};

export default preview;
