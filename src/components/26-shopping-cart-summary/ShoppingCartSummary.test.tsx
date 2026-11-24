import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ShoppingCartSummary from './ShoppingCartSummary';

describe('ShoppingCartSummary', () => {
  const defaultItems = [
    {
      id: 'product-001',
      name: 'Wireless Mouse',
      price: 150000,
      quantity: 2,
    },
    {
      id: 'product-002',
      name: 'Mechanical Keyboard',
      price: 250000,
      quantity: 1,
    },
    {
      id: 'product-003',
      name: 'USB Hub',
      price: 50000,
      quantity: 3,
    },
  ];

  it('renders all product names', () => {
    render(<ShoppingCartSummary items={defaultItems} shippingCost={15000} />);

    expect(screen.getByText('Wireless Mouse')).toBeInTheDocument();
    expect(screen.getByText('Mechanical Keyboard')).toBeInTheDocument();
    expect(screen.getByText('USB Hub')).toBeInTheDocument();
  });

  it('displays the correct quantity for each product', () => {
    render(<ShoppingCartSummary items={defaultItems} shippingCost={15000} />);

    expect(screen.getByText(/Wireless Mouse.*2/)).toBeInTheDocument();
    expect(screen.getByText(/Mechanical Keyboard.*1/)).toBeInTheDocument();
    expect(screen.getByText(/USB Hub.*3/)).toBeInTheDocument();
  });

  it('calculates each product subtotal correctly', () => {
    render(<ShoppingCartSummary items={defaultItems} shippingCost={15000} />);

    expect(screen.getByText('300000')).toBeInTheDocument();
    expect(screen.getByText('250000')).toBeInTheDocument();
    expect(screen.getByText('150000')).toBeInTheDocument();
  });

  it('calculates total items based on product quantities', () => {
    render(<ShoppingCartSummary items={defaultItems} shippingCost={15000} />);

    expect(screen.getByText('Total items: 6')).toBeInTheDocument();
  });

  it('does not count product types instead of quantities', () => {
    render(<ShoppingCartSummary items={defaultItems} shippingCost={15000} />);

    expect(screen.queryByText('Total items: 3')).not.toBeInTheDocument();
  });

  it('calculates subtotal correctly', () => {
    render(<ShoppingCartSummary items={defaultItems} shippingCost={15000} />);

    expect(screen.getByText('Subtotal: 700000')).toBeInTheDocument();
  });

  it('displays shipping cost correctly', () => {
    render(<ShoppingCartSummary items={defaultItems} shippingCost={15000} />);

    expect(screen.getByText('Shipping: 15000')).toBeInTheDocument();
  });

  it('calculates grand total correctly', () => {
    render(<ShoppingCartSummary items={defaultItems} shippingCost={15000} />);

    expect(screen.getByText('Grand total: 715000')).toBeInTheDocument();
  });

  it('calculates correctly when the cart contains one product', () => {
    render(
      <ShoppingCartSummary
        items={[
          {
            id: 'product-001',
            name: 'Wireless Mouse',
            price: 150000,
            quantity: 2,
          },
        ]}
        shippingCost={10000}
      />
    );

    expect(screen.getByText('Total items: 2')).toBeInTheDocument();
    expect(screen.getByText('Subtotal: 300000')).toBeInTheDocument();
    expect(screen.getByText('Grand total: 310000')).toBeInTheDocument();
  });

  it('handles an empty cart', () => {
    render(<ShoppingCartSummary items={[]} shippingCost={15000} />);

    expect(screen.getByText('Your cart is empty.')).toBeInTheDocument();
  });

  it('sets total items to zero for an empty cart', () => {
    render(<ShoppingCartSummary items={[]} shippingCost={15000} />);

    expect(screen.getByText('Total items: 0')).toBeInTheDocument();
  });

  it('sets subtotal to zero for an empty cart', () => {
    render(<ShoppingCartSummary items={[]} shippingCost={15000} />);

    expect(screen.getByText('Subtotal: 0')).toBeInTheDocument();
  });

  it('uses shipping cost as grand total when the cart is empty', () => {
    render(<ShoppingCartSummary items={[]} shippingCost={15000} />);

    expect(screen.getByText('Grand total: 15000')).toBeInTheDocument();
  });

  it('supports zero shipping cost', () => {
    render(<ShoppingCartSummary items={defaultItems} shippingCost={0} />);

    expect(screen.getByText('Shipping: 0')).toBeInTheDocument();
    expect(screen.getByText('Grand total: 700000')).toBeInTheDocument();
  });

  it('supports a product with quantity one', () => {
    render(
      <ShoppingCartSummary
        items={[
          {
            id: 'product-001',
            name: 'Keyboard',
            price: 250000,
            quantity: 1,
          },
        ]}
        shippingCost={0}
      />
    );

    expect(screen.getByText('Total items: 1')).toBeInTheDocument();
    expect(screen.getByText('Subtotal: 250000')).toBeInTheDocument();
  });

  it('updates calculations when the items prop changes', () => {
    const { rerender } = render(
      <ShoppingCartSummary items={defaultItems} shippingCost={15000} />
    );

    expect(screen.getByText('Grand total: 715000')).toBeInTheDocument();

    rerender(
      <ShoppingCartSummary
        items={[
          {
            id: 'product-004',
            name: 'Monitor',
            price: 2000000,
            quantity: 1,
          },
        ]}
        shippingCost={25000}
      />
    );

    expect(screen.getByText('Grand total: 2025000')).toBeInTheDocument();
    expect(screen.getByText('Monitor')).toBeInTheDocument();
  });

  it('updates calculations when shipping cost changes', () => {
    const { rerender } = render(
      <ShoppingCartSummary items={defaultItems} shippingCost={15000} />
    );

    rerender(<ShoppingCartSummary items={defaultItems} shippingCost={30000} />);

    expect(screen.getByText('Grand total: 730000')).toBeInTheDocument();
  });

  it('handles products with different quantities and prices', () => {
    render(
      <ShoppingCartSummary
        items={[
          {
            id: 'product-001',
            name: 'Product A',
            price: 10000,
            quantity: 4,
          },
          {
            id: 'product-002',
            name: 'Product B',
            price: 25000,
            quantity: 2,
          },
        ]}
        shippingCost={5000}
      />
    );

    expect(screen.getByText('Total items: 6')).toBeInTheDocument();
    expect(screen.getByText('Subtotal: 90000')).toBeInTheDocument();
    expect(screen.getByText('Grand total: 95000')).toBeInTheDocument();
  });
});
