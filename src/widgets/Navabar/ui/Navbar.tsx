import React from "react";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
interface NavbarProps {
    className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Link to={"/"}>Glavnaya</Link>
      <Link to={"/about"}>About</Link>
    </div>
  );
}
