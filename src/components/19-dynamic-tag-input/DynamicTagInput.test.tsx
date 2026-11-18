import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import DynamicTagInput from './DynamicTagInput';

describe('DynamicTagInput', () => {
  it('should display an empty message initially', () => {
    render(<DynamicTagInput />);

    expect(screen.getByText('No tags added.')).toBeInTheDocument();
  });

  it('should add a tag when clicking the Add button', () => {
    render(<DynamicTagInput />);

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'React' },
    });

    fireEvent.click(screen.getByRole('button', { name: 'Add' }));

    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('should add a tag when pressing Enter', () => {
    render(<DynamicTagInput />);

    const input = screen.getByRole('textbox');

    fireEvent.change(input, {
      target: { value: 'TypeScript' },
    });

    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('should clear the input after adding a tag', () => {
    render(<DynamicTagInput />);

    const input = screen.getByRole('textbox');

    fireEvent.change(input, {
      target: { value: 'React' },
    });

    fireEvent.click(screen.getByRole('button', { name: 'Add' }));

    expect(input).toHaveValue('');
  });

  it('should not add an empty or whitespace-only tag', () => {
    render(<DynamicTagInput />);

    const input = screen.getByRole('textbox');

    fireEvent.change(input, {
      target: { value: '   ' },
    });

    fireEvent.click(screen.getByRole('button', { name: 'Add' }));

    expect(screen.getByText('No tags added.')).toBeInTheDocument();
  });

  it('should not add duplicate tags regardless of letter case', () => {
    render(<DynamicTagInput />);

    const input = screen.getByRole('textbox');

    fireEvent.change(input, {
      target: { value: 'React' },
    });

    fireEvent.click(screen.getByRole('button', { name: 'Add' }));

    fireEvent.change(input, {
      target: { value: 'react' },
    });

    fireEvent.click(screen.getByRole('button', { name: 'Add' }));

    expect(screen.getAllByText('React')).toHaveLength(1);
    expect(screen.queryByText('react')).not.toBeInTheDocument();
  });

  it('should remove a tag when clicking its remove button', () => {
    render(<DynamicTagInput />);

    const input = screen.getByRole('textbox');

    fireEvent.change(input, {
      target: { value: 'React' },
    });

    fireEvent.click(screen.getByRole('button', { name: 'Add' }));

    const tag = screen.getByText('React').closest('li');

    expect(tag).not.toBeNull();

    fireEvent.click(
      within(tag as HTMLElement).getByRole('button', {
        name: 'Remove React',
      })
    );

    expect(screen.queryByText('React')).not.toBeInTheDocument();
    expect(screen.getByText('No tags added.')).toBeInTheDocument();
  });

  it('should display the total number of tags', () => {
    render(<DynamicTagInput />);

    const input = screen.getByRole('textbox');

    fireEvent.change(input, {
      target: { value: 'React' },
    });

    fireEvent.click(screen.getByRole('button', { name: 'Add' }));

    fireEvent.change(input, {
      target: { value: 'TypeScript' },
    });

    fireEvent.click(screen.getByRole('button', { name: 'Add' }));

    expect(screen.getByText('Total tags: 2')).toBeInTheDocument();
  });
});
