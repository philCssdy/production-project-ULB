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
  M = "size_s",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

export const Button = (props: ButtonProps) => {
  const { className, theme, children, square, size, ...otherProps } = props;

  const mods: Record<string, boolean> = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls.size]: true,
  };

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
