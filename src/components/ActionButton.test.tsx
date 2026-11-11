import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ActionButton from './ActionButton';

describe('ActionButton', () => {
  it('should render the button label', () => {
    render(<ActionButton label='Click Me' onClick={() => {}} />);

    expect(
      screen.getByRole('button', { name: 'Click Me' })
    ).toBeInTheDocument();
  });

  it('should call onClick when clicked', () => {
    const handleClick = vi.fn();

    render(<ActionButton label='Submit' onClick={handleClick} />);

    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should call onClick every time the button is clicked', () => {
    const handleClick = vi.fn();

    render(<ActionButton label='Add' onClick={handleClick} />);

    const button = screen.getByRole('button', { name: 'Add' });

    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(3);
  });

  it('should render a disabled button', () => {
    render(<ActionButton label='Submit' onClick={() => {}} disabled={true} />);

    expect(screen.getByRole('button', { name: 'Submit' })).toBeDisabled();
  });

  it('should not call onClick when the button is disabled', () => {
    const handleClick = vi.fn();

    render(
      <ActionButton label='Submit' onClick={handleClick} disabled={true} />
    );

    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(handleClick).not.toHaveBeenCalled();
  });
});
