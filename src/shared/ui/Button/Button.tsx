import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes } from "react";

export enum ThemeButton {
  CLEAR = "clear",
  DARK = "dark",
  LIGHT = "light",
  OUTLINE = "outline",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button = (props: ButtonProps) => {
  const { className, theme, children, ...otherProps } = props;
  return (
    <button
      type="button"
      className={classNames(cls.button, { [cls[theme]]: true }, [className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
