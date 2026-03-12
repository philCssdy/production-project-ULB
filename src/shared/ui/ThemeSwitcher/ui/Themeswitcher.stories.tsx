import type { Meta, StoryObj } from "@storybook/react-webpack5";
import "/src/app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeSwitcher } from "./ThemeSwitcher";

const meta: Meta<typeof ThemeSwitcher> = {
    title: "shared/ThemeSwitcher",
    component: ThemeSwitcher,
    args: {},
};

export default meta;

type Story = StoryObj<typeof ThemeSwitcher>;

export const Light: Story = {
    args: {},
};
export const Dark: Story = {
    args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
