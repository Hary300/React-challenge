import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Tabs from './Tabs';

const tabs = [
  {
    id: 'profile',
    label: 'Profile',
    content: 'This is the profile content.',
  },
  {
    id: 'settings',
    label: 'Settings',
    content: 'This is the settings content.',
  },
  {
    id: 'activity',
    label: 'Activity',
    content: 'This is the activity content.',
  },
];

describe('Tabs', () => {
  it('should render all tab buttons', () => {
    render(<Tabs tabs={tabs} />);

    tabs.forEach((tab) => {
      expect(screen.getByRole('tab', { name: tab.label })).toBeInTheDocument();
    });
  });

  it('should activate the first tab by default', () => {
    render(<Tabs tabs={tabs} />);

    expect(screen.getByRole('tab', { name: 'Profile' })).toHaveAttribute(
      'aria-selected',
      'true'
    );
  });

  it('should display the first tab content initially', () => {
    render(<Tabs tabs={tabs} />);

    expect(
      screen.getByText('This is the profile content.')
    ).toBeInTheDocument();

    expect(
      screen.queryByText('This is the settings content.')
    ).not.toBeInTheDocument();
  });

  it('should change the active tab when clicked', () => {
    render(<Tabs tabs={tabs} />);

    fireEvent.click(screen.getByRole('tab', { name: 'Settings' }));

    expect(screen.getByRole('tab', { name: 'Settings' })).toHaveAttribute(
      'aria-selected',
      'true'
    );

    expect(screen.getByRole('tab', { name: 'Profile' })).toHaveAttribute(
      'aria-selected',
      'false'
    );
  });

  it('should display the selected tab content', () => {
    render(<Tabs tabs={tabs} />);

    fireEvent.click(screen.getByRole('tab', { name: 'Settings' }));

    expect(
      screen.getByText('This is the settings content.')
    ).toBeInTheDocument();
  });

  it('should hide the previous tab content', () => {
    render(<Tabs tabs={tabs} />);

    fireEvent.click(screen.getByRole('tab', { name: 'Settings' }));

    expect(
      screen.queryByText('This is the profile content.')
    ).not.toBeInTheDocument();
  });

  it('should associate each tab with its corresponding panel', () => {
    render(<Tabs tabs={tabs} />);

    const profileTab = screen.getByRole('tab', {
      name: 'Profile',
    });

    expect(profileTab).toHaveAttribute('aria-controls', 'panel-profile');

    expect(screen.getByRole('tabpanel')).toHaveAttribute('id', 'panel-profile');
  });
});
