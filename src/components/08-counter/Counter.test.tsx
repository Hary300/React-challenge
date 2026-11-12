import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {
  it('should display the initial count', () => {
    render(<Counter />);

    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });

  it('should increase the count when increment button is clicked', () => {
    render(<Counter />);

    fireEvent.click(screen.getByRole('button', { name: 'Increment' }));

    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });

  it('should decrease the count when decrement button is clicked', () => {
    render(<Counter />);

    fireEvent.click(screen.getByRole('button', { name: 'Decrement' }));

    expect(screen.getByText('Count: -1')).toBeInTheDocument();
  });

  it('should update the count multiple times', () => {
    render(<Counter />);

    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    });

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);

    expect(screen.getByText('Count: 3')).toBeInTheDocument();
  });

  it('should reset the count to zero', () => {
    render(<Counter />);

    fireEvent.click(screen.getByRole('button', { name: 'Increment' }));
    fireEvent.click(screen.getByRole('button', { name: 'Increment' }));
    fireEvent.click(screen.getByRole('button', { name: 'Reset' }));

    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });
});
