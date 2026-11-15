import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import PasswordVisibilityToggle from './PasswordVisibilityToggle';

describe('PasswordVisibilityToggle', () => {
  it('should render the input with password type initially', () => {
    render(<PasswordVisibilityToggle label='Password' />);

    expect(screen.getByLabelText('Password')).toHaveAttribute(
      'type',
      'password'
    );
  });

  it('should render the Show password button initially', () => {
    render(<PasswordVisibilityToggle label='Password' />);

    expect(
      screen.getByRole('button', { name: 'Show password' })
    ).toBeInTheDocument();
  });

  it('should show the password when clicking the button', () => {
    render(<PasswordVisibilityToggle label='Password' />);

    fireEvent.click(screen.getByRole('button', { name: 'Show password' }));

    expect(screen.getByLabelText('Password')).toHaveAttribute('type', 'text');
  });

  it('should change the button label when password becomes visible', () => {
    render(<PasswordVisibilityToggle label='Password' />);

    fireEvent.click(screen.getByRole('button', { name: 'Show password' }));

    expect(
      screen.getByRole('button', { name: 'Hide password' })
    ).toBeInTheDocument();
  });

  it('should hide the password when clicking the button again', () => {
    render(<PasswordVisibilityToggle label='Password' />);

    fireEvent.click(screen.getByRole('button', { name: 'Show password' }));

    fireEvent.click(screen.getByRole('button', { name: 'Hide password' }));

    expect(screen.getByLabelText('Password')).toHaveAttribute(
      'type',
      'password'
    );
  });

  it('should preserve the password value when toggling visibility', () => {
    render(<PasswordVisibilityToggle label='Password' />);

    const input = screen.getByLabelText('Password');

    fireEvent.change(input, {
      target: { value: 'mySecret123' },
    });

    fireEvent.click(screen.getByRole('button', { name: 'Show password' }));

    expect(input).toHaveValue('mySecret123');
  });

  it('should render the provided label', () => {
    render(<PasswordVisibilityToggle label='Enter your password' />);

    expect(screen.getByLabelText('Enter your password')).toBeInTheDocument();
  });
});
