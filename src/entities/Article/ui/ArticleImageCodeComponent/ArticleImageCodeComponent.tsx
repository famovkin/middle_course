import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import cls from './ArticleImageCodeComponent.module.scss';

interface ArticleImageCodeComponentProps {
  className?: string;
}

export const ArticleImageCodeComponent = (props: ArticleImageCodeComponentProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.ArticleImageCodeComponent, {}, [className])}>

    </div>
  );
};
