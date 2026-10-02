import { act, render, screen } from '@testing-library/react';
import { Header } from '@/app/components/Header';

function scrollTo(y: number) {
  act(() => {
    window.scrollY = y;
    window.dispatchEvent(new Event('scroll'));
  });
}

describe('Header', () => {
  afterEach(() => {
    window.scrollY = 0;
  });

  it('renders the logo, navigation links and profile', () => {
    render(<Header />);

    expect(screen.getByRole('img', { name: 'Codeflix' })).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    for (const link of [
      'Home',
      'TV Shows',
      'Movies',
      'New & Popular',
      'My List',
    ]) {
      expect(screen.getByText(link)).toBeInTheDocument();
    }
    expect(screen.getByRole('img', { name: 'Profile' })).toBeInTheDocument();
  });

  it('highlights the active link', () => {
    render(<Header />);

    expect(screen.getByText('Home')).toHaveClass('font-semibold');
    expect(screen.getByText('Movies')).not.toHaveClass('font-semibold');
  });

  it('uses a gradient background at the top of the page', () => {
    render(<Header />);

    const header = screen.getByRole('banner');
    expect(header).toHaveClass('bg-gradient-to-b');
    expect(header).not.toHaveClass('bg-codeflix-black');
  });

  it('switches to a solid background when the page is scrolled', () => {
    render(<Header />);
    const header = screen.getByRole('banner');

    scrollTo(120);
    expect(header).toHaveClass('bg-codeflix-black');
    expect(header).not.toHaveClass('bg-gradient-to-b');

    scrollTo(0);
    expect(header).toHaveClass('bg-gradient-to-b');
  });
});
