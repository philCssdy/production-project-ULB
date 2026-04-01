/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Decorator } from "@storybook/react";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";

export const ThemeDecorator = (theme: Theme): Decorator => {
    const DecoratedStory = (Story: any) => (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <Story />
            </div>
        </ThemeProvider>
    );

    DecoratedStory.displayName = "ThemeDecorator";

    return DecoratedStory;
};
