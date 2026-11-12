import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import NameInput from './NameInput';

describe('NameInput', () => {
  it('should render the input field', () => {
    render(<NameInput />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should have an empty initial value', () => {
    render(<NameInput />);

    expect(screen.getByRole('textbox')).toHaveValue('');
  });

  it('should update the input value when typing', () => {
    render(<NameInput />);

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Hary' },
    });

    expect(screen.getByRole('textbox')).toHaveValue('Hary');
  });

  it('should display the entered name', () => {
    render(<NameInput />);

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Hary' },
    });

    expect(screen.getByText('Hello, Hary!')).toBeInTheDocument();
  });

  it('should update the greeting when the name changes', () => {
    render(<NameInput />);

    const input = screen.getByRole('textbox');

    fireEvent.change(input, {
      target: { value: 'Hary' },
    });

    fireEvent.change(input, {
      target: { value: 'John' },
    });

    expect(screen.getByText('Hello, John!')).toBeInTheDocument();
    expect(screen.queryByText('Hello, Hary!')).not.toBeInTheDocument();
  });

  it('should not display a greeting when the input is empty', () => {
    render(<NameInput />);

    expect(screen.queryByText(/^Hello,/)).not.toBeInTheDocument();
  });
});
