import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList', () => {
  it('should render the initial todos', () => {
    render(<TodoList />);

    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Practice TypeScript')).toBeInTheDocument();
  });

  it('should render the correct number of todos', () => {
    render(<TodoList />);

    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });

  it('should render an input field', () => {
    render(<TodoList />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should add a new todo when the form is submitted', () => {
    render(<TodoList />);

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Build a React project' },
    });

    fireEvent.click(screen.getByRole('button', { name: 'Add' }));

    expect(screen.getByText('Build a React project')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  it('should clear the input after adding a todo', () => {
    render(<TodoList />);

    const input = screen.getByRole('textbox');

    fireEvent.change(input, {
      target: { value: 'Build a React project' },
    });

    fireEvent.click(screen.getByRole('button', { name: 'Add' }));

    expect(input).toHaveValue('');
  });

  it('should not add an empty todo', () => {
    render(<TodoList />);

    fireEvent.click(screen.getByRole('button', { name: 'Add' }));

    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });

  it('should not add a todo containing only whitespace', () => {
    render(<TodoList />);

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: '   ' },
    });

    fireEvent.click(screen.getByRole('button', { name: 'Add' }));

    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });
});
