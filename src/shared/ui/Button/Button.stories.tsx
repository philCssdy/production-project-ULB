import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Button, ButtonSize, ButtonTheme } from "./Button";
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

export const ClearInverted: Story = {
    args: {
        children: "Text",
        theme: ButtonTheme.CLEAR_INVERTED,
    },
};

export const OutlineDark: Story = {
    args: {
        children: "Text",
        theme: ButtonTheme.OUTLINE,
    },
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineSizeL: Story = {
    args: {
        children: "Text",
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
    },
};
export const OutlineSizeXL: Story = {
    args: {
        children: "Text",
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
    },
};
export const OutlineSizeM: Story = {
    args: {
        children: "Text",
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.M,
    },
};

export const BackgroundTheme: Story = {
    args: {
        children: "Text",
        theme: ButtonTheme.BACKGROUND,
    },
};
export const InvertedBackground: Story = {
    args: {
        children: "Text",
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};
export const Square: Story = {
    args: {
        children: ">",
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
    },
};

export const SquareSizeM: Story = {
    args: {
        children: ">",
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.M,
    },
};

export const SquareSizeL: Story = {
    args: {
        children: ">",
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
};

export const SquareSizeXL: Story = {
    args: {
        children: ">",
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
};
