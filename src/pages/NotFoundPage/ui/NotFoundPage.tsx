import { classNames } from "shared/lib/classNames/classNames";
import cls from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';
interface INoutFoundProps {
    className?: string;
}

export function NotFoundPage({ className }: INoutFoundProps) {
    const {t} = useTranslation()
  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
        {t('Страница не найдена')}

    </div>
  );
}
