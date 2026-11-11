import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import UserProfileCard from './UserProfileCard';

describe('UserProfileCard', () => {
  it('should render the user name', () => {
    render(<UserProfileCard name='Hary' />);

    expect(screen.getByRole('heading', { name: 'Hary' })).toBeInTheDocument();
  });

  it('should render the user role', () => {
    render(<UserProfileCard name='Hary' role='Frontend Developer' />);

    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
  });

  it('should display Guest as the default role', () => {
    render(<UserProfileCard name='Hary' />);

    expect(screen.getByText('Guest')).toBeInTheDocument();
  });

  it('should display the default avatar when no avatar is provided', () => {
    render(<UserProfileCard name='Hary' />);

    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      '/default-avatar.png'
    );
  });

  it('should display the provided avatar', () => {
    render(<UserProfileCard name='Hary' avatar='/hary.png' />);

    expect(screen.getByRole('img')).toHaveAttribute('src', '/hary.png');
  });
});
