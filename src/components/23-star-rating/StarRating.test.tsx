import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import StarRating from './StarRating';

describe('StarRating', () => {
  it('renders the correct number of stars', () => {
    render(<StarRating maxRating={5} />);

    expect(screen.getAllByRole('button')).toHaveLength(5);
  });

  it('renders a different number of stars based on maxRating', () => {
    render(<StarRating maxRating={3} />);

    expect(screen.getAllByRole('button')).toHaveLength(3);
  });

  it('shows no rating selected initially', () => {
    render(<StarRating maxRating={5} />);

    expect(screen.getByText('No rating selected.')).toBeInTheDocument();
  });

  it('marks all stars as unselected initially', () => {
    render(<StarRating maxRating={5} />);

    screen.getAllByRole('button').forEach((button) => {
      expect(button).toHaveAttribute('aria-pressed', 'false');
    });
  });

  it('selects the correct rating when a star is clicked', async () => {
    const user = userEvent.setup();

    render(<StarRating maxRating={5} />);

    await user.click(screen.getByRole('button', { name: 'Rate 3 out of 5' }));

    expect(screen.getByText('Your rating: 3 / 5')).toBeInTheDocument();
  });

  it('marks the selected star and all lower ratings as selected', async () => {
    const user = userEvent.setup();

    render(<StarRating maxRating={5} />);

    await user.click(screen.getByRole('button', { name: 'Rate 3 out of 5' }));

    const buttons = screen.getAllByRole('button');

    expect(buttons[0]).toHaveAttribute('aria-pressed', 'true');
    expect(buttons[1]).toHaveAttribute('aria-pressed', 'true');
    expect(buttons[2]).toHaveAttribute('aria-pressed', 'true');
    expect(buttons[3]).toHaveAttribute('aria-pressed', 'false');
    expect(buttons[4]).toHaveAttribute('aria-pressed', 'false');
  });

  it('allows users to change their rating', async () => {
    const user = userEvent.setup();

    render(<StarRating maxRating={5} />);

    await user.click(screen.getByRole('button', { name: 'Rate 2 out of 5' }));

    await user.click(screen.getByRole('button', { name: 'Rate 4 out of 5' }));

    expect(screen.getByText('Your rating: 4 / 5')).toBeInTheDocument();
  });

  it('keeps the rating when the currently selected star is clicked again', async () => {
    const user = userEvent.setup();

    render(<StarRating maxRating={5} />);

    const selectedStar = screen.getByRole('button', {
      name: 'Rate 3 out of 5',
    });

    await user.click(selectedStar);
    await user.click(selectedStar);

    expect(screen.getByText('Your rating: 3 / 5')).toBeInTheDocument();
  });

  it('supports selecting the first star', async () => {
    const user = userEvent.setup();

    render(<StarRating maxRating={5} />);

    await user.click(screen.getByRole('button', { name: 'Rate 1 out of 5' }));

    expect(screen.getByText('Your rating: 1 / 5')).toBeInTheDocument();
  });

  it('supports selecting the last star', async () => {
    const user = userEvent.setup();

    render(<StarRating maxRating={5} />);

    await user.click(screen.getByRole('button', { name: 'Rate 5 out of 5' }));

    expect(screen.getByText('Your rating: 5 / 5')).toBeInTheDocument();
  });

  it('supports a rating system with only one star', async () => {
    const user = userEvent.setup();

    render(<StarRating maxRating={1} />);

    await user.click(screen.getByRole('button', { name: 'Rate 1 out of 1' }));

    expect(screen.getByText('Your rating: 1 / 1')).toBeInTheDocument();
  });

  it('does not create more stars than maxRating', () => {
    render(<StarRating maxRating={3} />);

    expect(screen.getAllByRole('button')).toHaveLength(3);
  });

  it('provides an accessible name for every star button', () => {
    render(<StarRating maxRating={5} />);

    for (let rating = 1; rating <= 5; rating++) {
      expect(
        screen.getByRole('button', {
          name: `Rate ${rating} out of 5`,
        })
      ).toBeInTheDocument();
    }
  });
});
