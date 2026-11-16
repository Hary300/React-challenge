import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import SelectableInterests from './SelectableInterests';

const interests = ['Programming', 'Design', 'Reading', 'Gaming'];

describe('SelectableInterests', () => {
  it('should render all available interests', () => {
    render(<SelectableInterests interests={interests} />);

    interests.forEach((interest) => {
      expect(
        screen.getByRole('button', { name: interest })
      ).toBeInTheDocument();
    });
  });

  it('should display a message when no interests are selected', () => {
    render(<SelectableInterests interests={interests} />);

    expect(screen.getByText('No interests selected.')).toBeInTheDocument();
  });

  it('should select an interest when clicked', () => {
    render(<SelectableInterests interests={interests} />);

    fireEvent.click(screen.getByRole('button', { name: 'Programming' }));

    expect(screen.getByRole('button', { name: 'Programming' })).toHaveAttribute(
      'aria-pressed',
      'true'
    );
  });

  it('should deselect an interest when clicked again', () => {
    render(<SelectableInterests interests={interests} />);

    const button = screen.getByRole('button', {
      name: 'Programming',
    });

    fireEvent.click(button);
    fireEvent.click(button);

    expect(button).toHaveAttribute('aria-pressed', 'false');
  });

  it('should allow selecting multiple interests', () => {
    render(<SelectableInterests interests={interests} />);

    fireEvent.click(screen.getByRole('button', { name: 'Programming' }));

    fireEvent.click(screen.getByRole('button', { name: 'Design' }));

    const selectedList = screen.getByRole('list', {
      name: 'Selected interests',
    });

    expect(within(selectedList).getByText('Programming')).toBeInTheDocument();

    expect(within(selectedList).getByText('Design')).toBeInTheDocument();
  });

  it('should remove only the clicked interest', () => {
    render(<SelectableInterests interests={interests} />);

    fireEvent.click(screen.getByRole('button', { name: 'Programming' }));

    fireEvent.click(screen.getByRole('button', { name: 'Design' }));

    fireEvent.click(screen.getByRole('button', { name: 'Programming' }));

    const selectedList = screen.getByRole('list', {
      name: 'Selected interests',
    });

    expect(
      within(selectedList).queryByText('Programming')
    ).not.toBeInTheDocument();

    expect(within(selectedList).getByText('Design')).toBeInTheDocument();
  });

  it('should display the correct number of selected interests', () => {
    render(<SelectableInterests interests={interests} />);

    fireEvent.click(screen.getByRole('button', { name: 'Programming' }));

    fireEvent.click(screen.getByRole('button', { name: 'Design' }));

    expect(screen.getByText('Selected interests (2)')).toBeInTheDocument();
  });
});
