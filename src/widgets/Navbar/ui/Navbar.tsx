import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarPros {
  className?: string;
}

export const Navbar = ({ className }: NavbarPros) => {
  const { t } = useTranslation('');

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink className={cls.mainLink} theme={AppLinkTheme.SECONDARY} to="/">
          /
        </AppLink>
      </div>
    </div>
  );
};
