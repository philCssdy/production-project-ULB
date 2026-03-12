import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Button, ButtonTheme } from "./Button";
import "/src/app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Button> = {
    title: "shared/Button",
    component: Button,
    tags: ["autodocs"],
    args: {
        onClick: () => console.log("clicked"),
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: "Text",
    },
};

export const Clear: Story = {
    args: {
        children: "Text",
        theme: ButtonTheme.CLEAR,
    },
};

export const OutlineDark: Story = {
    args: {
        children: "Text",
        theme: ButtonTheme.OUTLINE,
    },
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineLight: Story = {
    args: {
        children: "Text",
        theme: ButtonTheme.OUTLINE,
    },
};
