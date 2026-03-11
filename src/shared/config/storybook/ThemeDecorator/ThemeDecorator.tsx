import type { Decorator } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider"; // <-- используем alias 'app'

export const ThemeDecorator = (theme: Theme): Decorator => {
  return (Story) => (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  );
};
