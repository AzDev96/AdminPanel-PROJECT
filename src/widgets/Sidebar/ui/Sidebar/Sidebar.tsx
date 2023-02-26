import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LandSwitcher } from "widgets/LandSwitcher/LandSwitcher";
import { Button, ButtonSize, ThemeButton } from "shared/ui/Button/Button";
import { AppLinkTheme, Applink } from "shared/ui/AppLink/Applink";
import { RouterPath } from "shared/config/routeConfig/routeConfig";
import MainIcon from "shared/assets/icons/main-20-20.svg";
import AboutIcon from "shared/assets/icons/about-20-20.svg";
import { useTranslation } from "react-i18next";
interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapsedBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        square
        size={ButtonSize.XL}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={cls.items}>
        <Applink
          className={cls.item}
          theme={AppLinkTheme.SECONDARY}
          to={RouterPath.main}
        >
          <MainIcon className={cls.icon} />
          <span className={cls.link}>{t("Главная страница")}</span>
        </Applink>

        <Applink
          className={cls.item}
          theme={AppLinkTheme.SECONDARY}
          to={RouterPath.about}
        >
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>{t("О сайте")}</span>
        </Applink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LandSwitcher short={collapsed} className={cls.land} />
      </div>
    </div>
  );
}
