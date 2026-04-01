import type { Meta, StoryObj } from "@storybook/react-webpack5";
import "/src/app/styles/index.scss";
import { Modal } from "./Modal";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

const meta: Meta<typeof Modal> = {
    title: "shared/Modal",
    component: Modal,
    tags: ["autodocs"],
    args: {},
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolores suscipit molestias eos perferendis hic? Ipsam ipsa officia consequuntur accusamus tempora rem saepe!",
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolores suscipit molestias eos perferendis hic? Ipsam ipsa officia consequuntur accusamus tempora rem saepe!",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
