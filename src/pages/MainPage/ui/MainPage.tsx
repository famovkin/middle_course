// import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';

export const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <div>
      {t('Главная страница')}
      {/* <BugButton /> */}
    </div>
  );
};

export default MainPage;
