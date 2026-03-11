import type { Preview } from "@storybook/react-webpack5";
import "../../src/app/styles/index.scss";
import { StyleDecorator } from "../../src/shared/config/storybook/styleDecorator/styleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "../../src/app/providers/ThemeProvider";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";

const preview: Preview = {
  decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
