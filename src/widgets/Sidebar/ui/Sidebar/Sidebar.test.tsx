import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import { renderComponent } from 'shared/lib/tests/renderComponent/renderComponent';

describe('Sidebar', () => {
  test('Test render', () => {
    renderComponent(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Test toggle', () => {
    renderComponent(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
