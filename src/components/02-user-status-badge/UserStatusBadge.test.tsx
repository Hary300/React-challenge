import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import UserStatusBadge from './UserStatusBadge';

describe('UserStatusBadge', () => {
  it('should display Online when isOnline is true', () => {
    render(<UserStatusBadge isOnline={true} />);

    expect(screen.getByText('Online')).toBeInTheDocument();
  });

  it('should display Offline when isOnline is false', () => {
    render(<UserStatusBadge isOnline={false} />);

    expect(screen.getByText('Offline')).toBeInTheDocument();
  });

  it('should have the correct CSS class when online', () => {
    render(<UserStatusBadge isOnline={true} />);

    expect(screen.getByText('Online')).toHaveClass('online');
  });

  it('should have the correct CSS class when offline', () => {
    render(<UserStatusBadge isOnline={false} />);

    expect(screen.getByText('Offline')).toHaveClass('offline');
  });
});
