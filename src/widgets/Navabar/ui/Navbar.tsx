import React from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import { AppLinkTheme, Applink } from "shared/ui/AppLink/Applink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";



interface NavbarProps {
    className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
  
      <div className={cls.links}>
        <Applink theme={AppLinkTheme.SECONDARY} className={cls.mainLink} to={"/"}>Glavnaya</Applink>
        <Applink theme={AppLinkTheme.SECONDARY} to={"/about"}>About</Applink>
      </div>
   
    </div>
  );
}
