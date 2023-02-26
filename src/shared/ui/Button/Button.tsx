import { ButtonHTMLAttributes, FC } from "react";
import cls from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum ThemeButton {
  CLEAR = "clear",
  OUTLINE = 'outline',
  BACKGROUND = "background",

  BACKGROUND_INVERTED = "backgroundInverted"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  square?: boolean
}

const mods: Record<string, boolean> = {
  [cls[theme]] : true,
  [cls.square] : square

}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { className, children, theme, square, ...otherProps } = props;
  return (
    <button
     type="button"
      className={classNames(cls.Button, mods, [className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
