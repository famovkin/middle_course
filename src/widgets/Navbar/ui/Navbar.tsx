import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/ui/Modal';
import cls from './Navbar.module.scss';

interface NavbarPros {
  className?: string;
}

export const Navbar = ({ className }: NavbarPros) => {
  const { t } = useTranslation('');
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        className={cls.links}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onToggleModal}
      >
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        {/* eslint-disable-next-line max-len */}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur quas sint eligendi, id dolores beatae totam laboriosam hic maxime mollitia officia eveniet eius iste dignissimos praesentium aspernatur quam vitae suscipit dolor autem nam natus voluptatibus delectus. Voluptatem velit tenetur, quae nam harum facilis minus inventore ex eligendi sint! Quam nisi, consequatur laborum laudantium, ex pariatur dolorem doloribus at eveniet blanditiis quasi, ratione illum ipsum facilis! Consequuntur ducimus quos sequi eos magni ad aspernatur iusto dolores expedita exercitationem. Illo cum ipsa nostrum, ratione ex saepe animi. Accusantium temporibus deleniti, dolor quis soluta perferendis eligendi quas repellendus ullam deserunt inventore debitis obcaecati.
      </Modal>
    </div>
  );
};
