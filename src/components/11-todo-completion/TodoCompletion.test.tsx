import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoCompletion from './TodoCompletion';

describe('TodoCompletion', () => {
  it('should render all todos', () => {
    render(<TodoCompletion />);

    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Practice TypeScript')).toBeInTheDocument();
  });

  it('should render two checkboxes', () => {
    render(<TodoCompletion />);

    expect(screen.getAllByRole('checkbox')).toHaveLength(2);
  });

  it('should have unchecked checkboxes initially', () => {
    render(<TodoCompletion />);

    const checkboxes = screen.getAllByRole('checkbox');

    checkboxes.forEach((checkbox) => {
      expect(checkbox).not.toBeChecked();
    });
  });

  it('should mark a todo as completed when checked', () => {
    render(<TodoCompletion />);

    const checkbox = screen.getByRole('checkbox', {
      name: 'Learn React',
    });

    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  it('should apply the completed class when a todo is completed', () => {
    render(<TodoCompletion />);

    const checkbox = screen.getByRole('checkbox', {
      name: 'Learn React',
    });

    fireEvent.click(checkbox);

    expect(screen.getByText('Learn React')).toHaveClass('completed');
  });

  it('should allow a completed todo to become incomplete again', () => {
    render(<TodoCompletion />);

    const checkbox = screen.getByRole('checkbox', {
      name: 'Learn React',
    });

    fireEvent.click(checkbox);
    fireEvent.click(checkbox);

    expect(checkbox).not.toBeChecked();
    expect(screen.getByText('Learn React')).not.toHaveClass('completed');
  });

  it('should update only the selected todo', () => {
    render(<TodoCompletion />);

    const firstCheckbox = screen.getByRole('checkbox', {
      name: 'Learn React',
    });

    const secondCheckbox = screen.getByRole('checkbox', {
      name: 'Practice TypeScript',
    });

    fireEvent.click(firstCheckbox);

    expect(firstCheckbox).toBeChecked();
    expect(secondCheckbox).not.toBeChecked();
  });
});
