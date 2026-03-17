/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Decorator } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";

export const ThemeDecorator = (theme: Theme): Decorator => {
    const DecoratedStory = (Story: any) => (
        <div className={`app ${theme}`}>
            <Story />
        </div>
    );

    DecoratedStory.displayName = "ThemeDecorator";

    return DecoratedStory;
};