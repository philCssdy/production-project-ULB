import type { Meta, StoryObj } from "@storybook/react-webpack5";
import "/src/app/styles/index.scss";
import { Loader } from "./Loader";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Loader> = {
  title: "shared/Loader",
  component: Loader,
  args: {},
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const Light: Story = {
  args: {},
};
export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
