import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';

const product = {
  id: 1,
  name: 'Mechanical Keyboard',
  price: 750000,
  inStock: true,
};

describe('ProductCard', () => {
  it('should render the product name', () => {
    render(<ProductCard product={product} />);

    expect(
      screen.getByRole('heading', { name: 'Mechanical Keyboard' })
    ).toBeInTheDocument();
  });

  it('should render the product price', () => {
    render(<ProductCard product={product} />);

    expect(screen.getByText('Rp750.000')).toBeInTheDocument();
  });

  it('should display In Stock when product is available', () => {
    render(<ProductCard product={product} />);

    expect(screen.getByText('In Stock')).toBeInTheDocument();
  });

  it('should display Out of Stock when product is unavailable', () => {
    render(<ProductCard product={{ ...product, inStock: false }} />);

    expect(screen.getByText('Out of Stock')).toBeInTheDocument();
  });

  it('should apply the correct stock status class', () => {
    render(<ProductCard product={product} />);

    expect(screen.getByText('In Stock')).toHaveClass('in-stock');
  });

  it('should apply the out-of-stock class', () => {
    render(<ProductCard product={{ ...product, inStock: false }} />);

    expect(screen.getByText('Out of Stock')).toHaveClass('out-of-stock');
  });
});
