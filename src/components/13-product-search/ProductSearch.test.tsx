import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductSearch from './ProductSearch';

describe('ProductSearch', () => {
  it('should render all products initially', () => {
    render(<ProductSearch />);

    expect(screen.getByText('Mechanical Keyboard')).toBeInTheDocument();
    expect(screen.getByText('Wireless Mouse')).toBeInTheDocument();
    expect(screen.getByText('USB-C Hub')).toBeInTheDocument();
    expect(screen.getByText('Gaming Headset')).toBeInTheDocument();
  });

  it('should render a search input', () => {
    render(<ProductSearch />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should filter products based on the search query', () => {
    render(<ProductSearch />);

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'keyboard' },
    });

    expect(screen.getByText('Mechanical Keyboard')).toBeInTheDocument();
    expect(screen.queryByText('Wireless Mouse')).not.toBeInTheDocument();
    expect(screen.queryByText('USB-C Hub')).not.toBeInTheDocument();
  });

  it('should perform case-insensitive searches', () => {
    render(<ProductSearch />);

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'MOUSE' },
    });

    expect(screen.getByText('Wireless Mouse')).toBeInTheDocument();
    expect(screen.queryByText('Mechanical Keyboard')).not.toBeInTheDocument();
  });

  it('should display all products when the search query is cleared', () => {
    render(<ProductSearch />);

    const input = screen.getByRole('textbox');

    fireEvent.change(input, {
      target: { value: 'keyboard' },
    });

    fireEvent.change(input, {
      target: { value: '' },
    });

    expect(screen.getAllByRole('listitem')).toHaveLength(4);
  });

  it('should display a message when no products match', () => {
    render(<ProductSearch />);

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'laptop' },
    });

    expect(screen.getByText('No products found.')).toBeInTheDocument();
  });

  it('should not modify the original product list', () => {
    render(<ProductSearch />);

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'keyboard' },
    });

    expect(screen.getAllByRole('listitem')).toHaveLength(1);
  });
});
