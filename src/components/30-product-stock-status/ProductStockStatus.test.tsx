import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductStockStatus from './ProductStockStatus';

const products = [
  { id: '1', name: 'Keyboard', stock: 15 },
  { id: '2', name: 'Mouse', stock: 3 },
  { id: '3', name: 'Monitor', stock: 0 },
  { id: '4', name: 'Headset', stock: 5 },
];

describe('ProductStockStatus', () => {
  it('renders all products', () => {
    render(<ProductStockStatus products={products} lowStockThreshold={5} />);

    expect(screen.getByText('Keyboard')).toBeInTheDocument();
    expect(screen.getByText('Mouse')).toBeInTheDocument();
    expect(screen.getByText('Monitor')).toBeInTheDocument();
    expect(screen.getByText('Headset')).toBeInTheDocument();
  });

  it('displays the stock quantity for each product', () => {
    render(<ProductStockStatus products={products} lowStockThreshold={5} />);

    expect(screen.getByText('15 units available')).toBeInTheDocument();
    expect(screen.getByText('3 units available')).toBeInTheDocument();
    expect(screen.getByText('0 units available')).toBeInTheDocument();
    expect(screen.getByText('5 units available')).toBeInTheDocument();
  });

  it('displays In Stock when stock is above the threshold', () => {
    render(<ProductStockStatus products={products} lowStockThreshold={5} />);

    expect(screen.getByTestId('stock-status-1')).toHaveTextContent('In Stock');
  });

  it('displays Low Stock when stock is below the threshold', () => {
    render(<ProductStockStatus products={products} lowStockThreshold={5} />);

    expect(screen.getByTestId('stock-status-2')).toHaveTextContent('Low Stock');
  });

  it('displays Low Stock when stock equals the threshold', () => {
    render(<ProductStockStatus products={products} lowStockThreshold={5} />);

    expect(screen.getByTestId('stock-status-4')).toHaveTextContent('Low Stock');
  });

  it('displays Out of Stock when stock is zero', () => {
    render(<ProductStockStatus products={products} lowStockThreshold={5} />);

    expect(screen.getByTestId('stock-status-3')).toHaveTextContent(
      'Out of Stock'
    );
  });

  it('uses the lowStockThreshold prop to determine stock status', () => {
    render(<ProductStockStatus products={products} lowStockThreshold={10} />);

    expect(screen.getByTestId('stock-status-1')).toHaveTextContent('In Stock');
  });

  it('displays the correct status for all products', () => {
    render(<ProductStockStatus products={products} lowStockThreshold={5} />);

    expect(screen.getByTestId('stock-status-1')).toHaveTextContent('In Stock');

    expect(screen.getByTestId('stock-status-2')).toHaveTextContent('Low Stock');

    expect(screen.getByTestId('stock-status-3')).toHaveTextContent(
      'Out of Stock'
    );

    expect(screen.getByTestId('stock-status-4')).toHaveTextContent('Low Stock');
  });

  it('displays an empty message when there are no products', () => {
    render(<ProductStockStatus products={[]} lowStockThreshold={5} />);

    expect(screen.getByText('No products available.')).toBeInTheDocument();
  });

  it('does not mutate the original products array', () => {
    const originalProducts = [...products];

    render(<ProductStockStatus products={products} lowStockThreshold={5} />);

    expect(products).toEqual(originalProducts);
  });
});
