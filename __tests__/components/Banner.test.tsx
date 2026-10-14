import { render, screen } from '@testing-library/react';
import { Banner } from '@/app/components/Banner';

describe('Banner', () => {
  it('renders the featured title and synopsis', () => {
    render(<Banner />);

    expect(
      screen.getByRole('heading', { level: 1, name: 'Big Buck Bunny' })
    ).toBeInTheDocument();
    expect(screen.getByText(/kind-hearted rabbit/i)).toBeInTheDocument();
  });

  it('renders the backdrop image with descriptive alt text', () => {
    render(<Banner />);

    expect(
      screen.getByRole('img', { name: 'Scene from Big Buck Bunny' })
    ).toBeInTheDocument();
  });

  it('renders the Play and More Info buttons', () => {
    render(<Banner />);

    expect(screen.getByRole('button', { name: 'Play' })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'More Info' })
    ).toBeInTheDocument();
  });
});
