
import { Counter } from 'app/entities/Counter';
import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';
import { useTranslation } from 'react-i18next';
export default function MainPage() {
  const {t} = useTranslation()
  return (
    <div>
          {t('Главная страница')}
          <Counter />
    </div>
  )
}
