import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductSortSelector from './ProductSortSelector';

const products = [
  { id: '1', name: 'Keyboard', price: 150000 },
  { id: '2', name: 'Mouse', price: 75000 },
  { id: '3', name: 'Monitor', price: 1250000 },
];

describe('ProductSortSelector', () => {
  it('renders all products in their original order', () => {
    render(<ProductSortSelector products={products} />);

    const productNames = screen.getAllByTestId('product-name');

    expect(productNames.map((item) => item.textContent)).toEqual([
      'Keyboard',
      'Mouse',
      'Monitor',
    ]);
  });

  it('renders the sorting dropdown', () => {
    render(<ProductSortSelector products={products} />);

    expect(
      screen.getByRole('combobox', { name: /sort products/i })
    ).toBeInTheDocument();
  });

  it('provides all sorting options', () => {
    render(<ProductSortSelector products={products} />);

    const dropdown = screen.getByRole('combobox', {
      name: /sort products/i,
    });

    expect(
      within(dropdown).getByRole('option', { name: 'Default' })
    ).toBeInTheDocument();

    expect(
      within(dropdown).getByRole('option', { name: 'Name: A to Z' })
    ).toBeInTheDocument();

    expect(
      within(dropdown).getByRole('option', { name: 'Name: Z to A' })
    ).toBeInTheDocument();

    expect(
      within(dropdown).getByRole('option', { name: 'Price: Low to High' })
    ).toBeInTheDocument();

    expect(
      within(dropdown).getByRole('option', { name: 'Price: High to Low' })
    ).toBeInTheDocument();
  });

  it('sorts products by name from A to Z', async () => {
    const user = userEvent.setup();

    render(<ProductSortSelector products={products} />);

    await user.selectOptions(
      screen.getByRole('combobox', { name: /sort products/i }),
      'name-asc'
    );

    const productNames = screen.getAllByTestId('product-name');

    expect(productNames.map((item) => item.textContent)).toEqual([
      'Keyboard',
      'Monitor',
      'Mouse',
    ]);
  });

  it('sorts products by name from Z to A', async () => {
    const user = userEvent.setup();

    render(<ProductSortSelector products={products} />);

    await user.selectOptions(
      screen.getByRole('combobox', { name: /sort products/i }),
      'name-desc'
    );

    const productNames = screen.getAllByTestId('product-name');

    expect(productNames.map((item) => item.textContent)).toEqual([
      'Mouse',
      'Monitor',
      'Keyboard',
    ]);
  });

  it('sorts products by price from low to high', async () => {
    const user = userEvent.setup();

    render(<ProductSortSelector products={products} />);

    await user.selectOptions(
      screen.getByRole('combobox', { name: /sort products/i }),
      'price-asc'
    );

    const productNames = screen.getAllByTestId('product-name');

    expect(productNames.map((item) => item.textContent)).toEqual([
      'Mouse',
      'Keyboard',
      'Monitor',
    ]);
  });

  it('sorts products by price from high to low', async () => {
    const user = userEvent.setup();

    render(<ProductSortSelector products={products} />);

    await user.selectOptions(
      screen.getByRole('combobox', { name: /sort products/i }),
      'price-desc'
    );

    const productNames = screen.getAllByTestId('product-name');

    expect(productNames.map((item) => item.textContent)).toEqual([
      'Monitor',
      'Keyboard',
      'Mouse',
    ]);
  });

  it('restores the original order when Default is selected', async () => {
    const user = userEvent.setup();

    render(<ProductSortSelector products={products} />);

    const dropdown = screen.getByRole('combobox', {
      name: /sort products/i,
    });

    await user.selectOptions(dropdown, 'price-asc');
    await user.selectOptions(dropdown, 'default');

    const productNames = screen.getAllByTestId('product-name');

    expect(productNames.map((item) => item.textContent)).toEqual([
      'Keyboard',
      'Mouse',
      'Monitor',
    ]);
  });

  it('updates the product order when the sorting option changes', async () => {
    const user = userEvent.setup();

    render(<ProductSortSelector products={products} />);

    const dropdown = screen.getByRole('combobox', {
      name: /sort products/i,
    });

    await user.selectOptions(dropdown, 'price-asc');

    expect(screen.getAllByTestId('product-name')[0]).toHaveTextContent('Mouse');

    await user.selectOptions(dropdown, 'name-asc');

    expect(screen.getAllByTestId('product-name')[0]).toHaveTextContent(
      'Keyboard'
    );
  });

  it('does not mutate the original products array', async () => {
    const user = userEvent.setup();
    const originalProducts = [...products];

    render(<ProductSortSelector products={products} />);

    await user.selectOptions(
      screen.getByRole('combobox', { name: /sort products/i }),
      'price-asc'
    );

    expect(products).toEqual(originalProducts);
  });

  it('displays an empty message when there are no products', () => {
    render(<ProductSortSelector products={[]} />);

    expect(screen.getByText('No products available.')).toBeInTheDocument();
  });
});
