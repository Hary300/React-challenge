import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductPriceRangeFilter from './ProductPriceRangeFilter';

const products = [
  { id: '1', name: 'Keyboard', price: 150000 },
  { id: '2', name: 'Mouse', price: 75000 },
  { id: '3', name: 'Monitor', price: 1250000 },
  { id: '4', name: 'Headset', price: 350000 },
];

describe('ProductPriceRangeFilter', () => {
  it('renders all products initially', () => {
    render(<ProductPriceRangeFilter products={products} maxPrice={500000} />);

    const productNames = screen.getAllByTestId('product-name');

    expect(productNames.map((item) => item.textContent)).toEqual([
      'Keyboard',
      'Mouse',
      'Monitor',
      'Headset',
    ]);
  });

  it('renders the maximum price input', () => {
    render(<ProductPriceRangeFilter products={products} maxPrice={500000} />);

    expect(
      screen.getByRole('spinbutton', { name: /maximum price/i })
    ).toBeInTheDocument();
  });

  it('uses maxPrice as the initial input value', () => {
    render(<ProductPriceRangeFilter products={products} maxPrice={500000} />);

    expect(
      screen.getByRole('spinbutton', { name: /maximum price/i })
    ).toHaveValue(500000);
  });

  it('displays the selected maximum price', () => {
    render(<ProductPriceRangeFilter products={products} maxPrice={500000} />);

    expect(screen.getByTestId('selected-max-price')).toHaveTextContent(
      '500000'
    );
  });

  it('filters products by maximum price', async () => {
    const user = userEvent.setup();

    render(<ProductPriceRangeFilter products={products} maxPrice={500000} />);

    await user.clear(
      screen.getByRole('spinbutton', { name: /maximum price/i })
    );

    await user.type(
      screen.getByRole('spinbutton', { name: /maximum price/i }),
      '200000'
    );

    const productNames = screen.getAllByTestId('product-name');

    expect(productNames.map((item) => item.textContent)).toEqual([
      'Keyboard',
      'Mouse',
    ]);
  });

  it('includes products with a price equal to the maximum price', async () => {
    const user = userEvent.setup();

    render(<ProductPriceRangeFilter products={products} maxPrice={500000} />);

    const input = screen.getByRole('spinbutton', {
      name: /maximum price/i,
    });

    await user.clear(input);
    await user.type(input, '350000');

    const productNames = screen
      .getAllByTestId('product-name')
      .map((element) => element.textContent);

    expect(productNames).toEqual(['Keyboard', 'Mouse', 'Headset']);
  });

  it('updates the filtered products when the input changes', async () => {
    const user = userEvent.setup();

    render(<ProductPriceRangeFilter products={products} maxPrice={500000} />);

    const input = screen.getByRole('spinbutton', {
      name: /maximum price/i,
    });

    await user.clear(input);
    await user.type(input, '100000');

    expect(screen.queryByText('Keyboard')).not.toBeInTheDocument();
    expect(screen.getByText('Mouse')).toBeInTheDocument();
  });

  it('displays a message when no products match the maximum price', async () => {
    const user = userEvent.setup();

    render(<ProductPriceRangeFilter products={products} maxPrice={500000} />);

    const input = screen.getByRole('spinbutton', {
      name: /maximum price/i,
    });

    await user.clear(input);
    await user.type(input, '10000');

    expect(screen.getByText('No products found.')).toBeInTheDocument();
  });

  it('displays an empty message when there are no products', () => {
    render(<ProductPriceRangeFilter products={[]} maxPrice={500000} />);

    expect(screen.getByText('No products available.')).toBeInTheDocument();
  });

  it('does not display the no-results message when products are empty', () => {
    render(<ProductPriceRangeFilter products={[]} maxPrice={500000} />);

    expect(screen.queryByText('No products found.')).not.toBeInTheDocument();
  });

  it('does not mutate the original products array', async () => {
    const user = userEvent.setup();
    const originalProducts = [...products];

    render(<ProductPriceRangeFilter products={products} maxPrice={500000} />);

    await user.clear(
      screen.getByRole('spinbutton', { name: /maximum price/i })
    );

    await user.type(
      screen.getByRole('spinbutton', { name: /maximum price/i }),
      '200000'
    );

    expect(products).toEqual(originalProducts);
  });
});
