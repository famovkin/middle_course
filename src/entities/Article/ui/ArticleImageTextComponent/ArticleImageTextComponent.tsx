import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import cls from './ArticleImageTextComponent.module.scss';

interface ArticleImageTextComponentProps {
  className?: string;
}

export const ArticleImageTextComponent = (props: ArticleImageTextComponentProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.ArticleImageTextComponent, {}, [className])}>

    </div>
  );
};
