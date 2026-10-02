import { render, screen } from '@testing-library/react';
import { Logo } from '@/app/components/Logo';

describe('Logo', () => {
  it('renders the Codeflix logo image', () => {
    render(<Logo />);

    expect(screen.getByRole('img', { name: 'Codeflix' })).toBeInTheDocument();
  });
});
