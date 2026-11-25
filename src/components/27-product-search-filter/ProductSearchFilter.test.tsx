import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductSearchFilter from './ProductSearchFilter';

describe('ProductSearchFilter', () => {
  const products = [
    {
      id: 'product-001',
      name: 'Wireless Mouse',
      category: 'Electronics',
      price: 150000,
    },
    {
      id: 'product-002',
      name: 'Mechanical Keyboard',
      category: 'Electronics',
      price: 250000,
    },
    {
      id: 'product-003',
      name: 'Water Bottle',
      category: 'Lifestyle',
      price: 75000,
    },
    {
      id: 'product-004',
      name: 'Laptop Stand',
      category: 'Accessories',
      price: 120000,
    },
  ];

  it('renders all products initially', () => {
    render(<ProductSearchFilter products={products} />);

    expect(screen.getByText('Wireless Mouse')).toBeInTheDocument();
    expect(screen.getByText('Mechanical Keyboard')).toBeInTheDocument();
    expect(screen.getByText('Water Bottle')).toBeInTheDocument();
    expect(screen.getByText('Laptop Stand')).toBeInTheDocument();
  });

  it('renders the search input', () => {
    render(<ProductSearchFilter products={products} />);

    expect(
      screen.getByRole('textbox', { name: /search products/i })
    ).toBeInTheDocument();
  });

  it('displays product categories', () => {
    render(<ProductSearchFilter products={products} />);

    expect(screen.getAllByText('Electronics')).toHaveLength(2);
    expect(screen.getByText('Lifestyle')).toBeInTheDocument();
    expect(screen.getByText('Accessories')).toBeInTheDocument();
  });

  it('displays product prices', () => {
    render(<ProductSearchFilter products={products} />);

    expect(screen.getByText('150000')).toBeInTheDocument();
    expect(screen.getByText('250000')).toBeInTheDocument();
    expect(screen.getByText('75000')).toBeInTheDocument();
    expect(screen.getByText('120000')).toBeInTheDocument();
  });

  it('filters products by name', async () => {
    const user = userEvent.setup();

    render(<ProductSearchFilter products={products} />);

    await user.type(
      screen.getByRole('textbox', { name: /search products/i }),
      'mouse'
    );

    expect(screen.getByText('Wireless Mouse')).toBeInTheDocument();
    expect(screen.queryByText('Mechanical Keyboard')).not.toBeInTheDocument();
    expect(screen.queryByText('Water Bottle')).not.toBeInTheDocument();
  });

  it('filters products by category', async () => {
    const user = userEvent.setup();

    render(<ProductSearchFilter products={products} />);

    await user.type(
      screen.getByRole('textbox', { name: /search products/i }),
      'electronics'
    );

    expect(screen.getByText('Wireless Mouse')).toBeInTheDocument();
    expect(screen.getByText('Mechanical Keyboard')).toBeInTheDocument();
    expect(screen.queryByText('Water Bottle')).not.toBeInTheDocument();
  });

  it('performs case-insensitive searches', async () => {
    const user = userEvent.setup();

    render(<ProductSearchFilter products={products} />);

    await user.type(
      screen.getByRole('textbox', { name: /search products/i }),
      'WIRELESS'
    );

    expect(screen.getByText('Wireless Mouse')).toBeInTheDocument();
    expect(screen.queryByText('Mechanical Keyboard')).not.toBeInTheDocument();
  });

  it('updates results while the user types', async () => {
    const user = userEvent.setup();

    render(<ProductSearchFilter products={products} />);

    const input = screen.getByRole('textbox', {
      name: /search products/i,
    });

    await user.type(input, 'mouse');

    expect(screen.getByText('Wireless Mouse')).toBeInTheDocument();

    await user.clear(input);
    await user.type(input, 'keyboard');

    expect(screen.getByText('Mechanical Keyboard')).toBeInTheDocument();
    expect(screen.queryByText('Wireless Mouse')).not.toBeInTheDocument();
  });

  it('restores all products when the search input is cleared', async () => {
    const user = userEvent.setup();

    render(<ProductSearchFilter products={products} />);

    const input = screen.getByRole('textbox', {
      name: /search products/i,
    });

    await user.type(input, 'mouse');

    await user.clear(input);

    expect(screen.getByText('Wireless Mouse')).toBeInTheDocument();
    expect(screen.getByText('Mechanical Keyboard')).toBeInTheDocument();
    expect(screen.getByText('Water Bottle')).toBeInTheDocument();
    expect(screen.getByText('Laptop Stand')).toBeInTheDocument();
  });

  it('displays a message when no products match the search', async () => {
    const user = userEvent.setup();

    render(<ProductSearchFilter products={products} />);

    await user.type(
      screen.getByRole('textbox', { name: /search products/i }),
      'smartphone'
    );

    expect(screen.getByText('No products found.')).toBeInTheDocument();
  });

  it('does not display products when there are no search matches', async () => {
    const user = userEvent.setup();

    render(<ProductSearchFilter products={products} />);

    await user.type(
      screen.getByRole('textbox', { name: /search products/i }),
      'smartphone'
    );

    expect(screen.queryByText('Wireless Mouse')).not.toBeInTheDocument();
    expect(screen.queryByText('Mechanical Keyboard')).not.toBeInTheDocument();
  });

  it('displays a different message when the product list is empty', () => {
    render(<ProductSearchFilter products={[]} />);

    expect(screen.getByText('No products available.')).toBeInTheDocument();
  });

  it('does not display the no-results message for an empty product list', () => {
    render(<ProductSearchFilter products={[]} />);

    expect(screen.queryByText('No products found.')).not.toBeInTheDocument();
  });

  it('updates displayed products when the products prop changes', () => {
    const { rerender } = render(<ProductSearchFilter products={products} />);

    const updatedProducts = [
      {
        id: 'product-005',
        name: 'Gaming Headset',
        category: 'Electronics',
        price: 350000,
      },
    ];

    rerender(<ProductSearchFilter products={updatedProducts} />);

    expect(screen.getByText('Gaming Headset')).toBeInTheDocument();
    expect(screen.queryByText('Wireless Mouse')).not.toBeInTheDocument();
  });

  it('handles product names containing multiple words', async () => {
    const user = userEvent.setup();

    render(<ProductSearchFilter products={products} />);

    await user.type(
      screen.getByRole('textbox', { name: /search products/i }),
      'mechanical key'
    );

    expect(screen.getByText('Mechanical Keyboard')).toBeInTheDocument();
    expect(screen.queryByText('Wireless Mouse')).not.toBeInTheDocument();
  });
});
