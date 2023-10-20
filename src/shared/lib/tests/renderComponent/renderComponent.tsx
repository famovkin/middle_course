import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTest from 'shared/config/i18n/i18nForTest';

interface renderComponentOptions {
  route?: string;
}

export const renderComponent = (
  component: ReactNode,
  options: renderComponentOptions = {},
) => {
  const { route = '/' } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>
      ,
    </MemoryRouter>,
  );
};
