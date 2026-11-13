import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoFilter from './TodoFilter';

describe('TodoFilter', () => {
  it('should render all initial todos', () => {
    render(<TodoFilter />);

    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Practice TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Build a Project')).toBeInTheDocument();
  });

  it('should display all todos by default', () => {
    render(<TodoFilter />);

    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  it('should display only completed todos when Completed is selected', () => {
    render(<TodoFilter />);

    fireEvent.click(screen.getByRole('button', { name: 'Completed' }));

    expect(screen.getAllByRole('listitem')).toHaveLength(1);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.queryByText('Practice TypeScript')).not.toBeInTheDocument();
    expect(screen.queryByText('Build a Project')).not.toBeInTheDocument();
  });

  it('should display only active todos when Active is selected', () => {
    render(<TodoFilter />);

    fireEvent.click(screen.getByRole('button', { name: 'Active' }));

    expect(screen.getAllByRole('listitem')).toHaveLength(2);
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    expect(screen.getByText('Practice TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Build a Project')).toBeInTheDocument();
  });

  it('should return to all todos when All is selected', () => {
    render(<TodoFilter />);

    fireEvent.click(screen.getByRole('button', { name: 'Completed' }));
    fireEvent.click(screen.getByRole('button', { name: 'All' }));

    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  it('should not modify the original todos when filtering', () => {
    render(<TodoFilter />);

    fireEvent.click(screen.getByRole('button', { name: 'Completed' }));
    fireEvent.click(screen.getByRole('button', { name: 'Active' }));

    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });
});
