import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import NotificationMessage from './NotificationMessage';

describe('NotificationMessage', () => {
  it('should display a success message', () => {
    render(
      <NotificationMessage type='success' message='Data saved successfully' />
    );

    expect(screen.getByText('Data saved successfully')).toBeInTheDocument();
  });

  it('should apply the success CSS class', () => {
    render(<NotificationMessage type='success' message='Success' />);

    expect(screen.getByRole('alert')).toHaveClass('success');
  });

  it('should apply the error CSS class', () => {
    render(<NotificationMessage type='error' message='Something went wrong' />);

    expect(screen.getByRole('alert')).toHaveClass('error');
  });

  it('should apply the warning CSS class', () => {
    render(
      <NotificationMessage type='warning' message='Please check your input' />
    );

    expect(screen.getByRole('alert')).toHaveClass('warning');
  });

  it('should render the message inside an alert element', () => {
    render(<NotificationMessage type='success' message='Saved' />);

    expect(screen.getByRole('alert')).toBeInTheDocument();
  });
});
