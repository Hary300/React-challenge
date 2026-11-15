import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import MessageCharacterCounter from './MessageCharacterCounter';

describe('MessageCharacterCounter', () => {
  it('should render an empty textarea initially', () => {
    render(<MessageCharacterCounter maxLength={100} />);

    expect(screen.getByRole('textbox')).toHaveValue('');
  });

  it('should display zero characters initially', () => {
    render(<MessageCharacterCounter maxLength={100} />);

    expect(screen.getByText('0 / 100 characters')).toBeInTheDocument();
  });

  it('should update the character count when typing', () => {
    render(<MessageCharacterCounter maxLength={100} />);

    const textarea = screen.getByRole('textbox');

    fireEvent.change(textarea, {
      target: { value: 'Hello' },
    });

    expect(screen.getByText('5 / 100 characters')).toBeInTheDocument();
  });

  it('should update the character count when deleting text', () => {
    render(<MessageCharacterCounter maxLength={100} />);

    const textarea = screen.getByRole('textbox');

    fireEvent.change(textarea, {
      target: { value: 'Hello' },
    });

    fireEvent.change(textarea, {
      target: { value: 'He' },
    });

    expect(screen.getByText('2 / 100 characters')).toBeInTheDocument();
  });

  it('should use the maxLength prop', () => {
    render(<MessageCharacterCounter maxLength={50} />);

    expect(screen.getByText('0 / 50 characters')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveAttribute('maxLength', '50');
  });

  it('should not allow more characters than maxLength', () => {
    render(<MessageCharacterCounter maxLength={5} />);

    const textarea = screen.getByRole('textbox');

    expect(textarea).toHaveAttribute('maxLength', '5');
  });
});
