import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import UserList from './UserList';

const users = [
  { id: 1, name: 'Hary' },
  { id: 2, name: 'John' },
  { id: 3, name: 'Sarah' },
];

describe('UserList', () => {
  it('should render all users', () => {
    render(<UserList users={users} />);

    expect(screen.getByText('Hary')).toBeInTheDocument();
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('Sarah')).toBeInTheDocument();
  });

  it('should render the correct number of users', () => {
    render(<UserList users={users} />);

    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  it('should render an empty list when users is empty', () => {
    render(<UserList users={[]} />);

    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });

  it('should render users inside a list', () => {
    render(<UserList users={users} />);

    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
