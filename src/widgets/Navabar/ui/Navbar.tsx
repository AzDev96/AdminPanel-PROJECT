import { classNames } from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import { AppLinkTheme, Applink } from "shared/ui/AppLink/Applink";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { useCallback, useState } from "react";
import { Modal } from "shared/ui/Modal/Modal";



interface NavbarProps {
    className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const {t} = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)
  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev)
  }, [])
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button theme={ThemeButton.OUTLINE} className={cls.links} onClick={onToggleModal}>
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia enim, blanditiis ab iste nisi, quasi maxime tempore voluptatem incidunt illo nulla voluptatum in rem, suscipit nam quod distinctio ullam aliquid!
      </Modal>
    </div>
  );
}
