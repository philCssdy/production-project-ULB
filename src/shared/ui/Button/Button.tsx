import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes } from "react";

export enum ButtonTheme {
  CLEAR = "clear",
  DARK = "dark",
  LIGHT = "light",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundinverted",
}

export enum ButtonSize {
  M = "sizeM",
  L = "sizeL",
  XL = "sizeXl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

export const Button = (props: ButtonProps) => {
    const { className, theme, children, square, size = ButtonSize.M, ...otherProps } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
    };

    // console.log(cls)

    return (
        <button
            type="button"
            className={classNames(cls.button, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
