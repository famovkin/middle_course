import { FC } from 'react';

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          About
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/">
          Main
        </AppLink>
      </div>
    </div>
  );
};
