import { classNames } from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import { AppLinkTheme, Applink } from "shared/ui/AppLink/Applink";



interface NavbarProps {
    className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
   
    </div>
  );
}
