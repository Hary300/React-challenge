import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ShoppingCartItem from './ShoppingCartItem';

describe('ShoppingCartItem', () => {
  const defaultProps = {
    id: 'product-001',
    productName: 'Wireless Mouse',
    category: 'Electronics',
    price: 150000,
    initialQuantity: 2,
    onRemove: vi.fn(),
  };

  it('renders the product name', () => {
    render(<ShoppingCartItem {...defaultProps} />);

    expect(screen.getByText('Wireless Mouse')).toBeInTheDocument();
  });

  it('renders the product category', () => {
    render(<ShoppingCartItem {...defaultProps} />);

    expect(screen.getByText('Electronics')).toBeInTheDocument();
  });

  it('renders the price per item', () => {
    render(<ShoppingCartItem {...defaultProps} />);

    expect(screen.getByText('Price per item:').parentElement).toHaveTextContent(
      '150000'
    );
  });

  it('initializes quantity using initialQuantity', () => {
    render(<ShoppingCartItem {...defaultProps} />);

    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('supports an initial quantity of one', () => {
    render(<ShoppingCartItem {...defaultProps} initialQuantity={1} />);

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('increases quantity when the increase button is clicked', async () => {
    const user = userEvent.setup();

    render(<ShoppingCartItem {...defaultProps} />);

    await user.click(
      screen.getByRole('button', { name: /increase quantity/i })
    );

    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('decreases quantity when the decrease button is clicked', async () => {
    const user = userEvent.setup();

    render(<ShoppingCartItem {...defaultProps} />);

    await user.click(
      screen.getByRole('button', { name: /decrease quantity/i })
    );

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('does not decrease quantity below one', async () => {
    const user = userEvent.setup();

    render(<ShoppingCartItem {...defaultProps} initialQuantity={1} />);

    const decreaseButton = screen.getByRole('button', {
      name: /decrease quantity/i,
    });

    expect(decreaseButton).toBeDisabled();

    await user.click(decreaseButton);

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('disables decrease button when quantity reaches one', async () => {
    const user = userEvent.setup();

    render(<ShoppingCartItem {...defaultProps} />);

    const decreaseButton = screen.getByRole('button', {
      name: /decrease quantity/i,
    });

    await user.click(decreaseButton);

    expect(decreaseButton).toBeDisabled();
  });

  it('enables decrease button when quantity is greater than one', () => {
    render(<ShoppingCartItem {...defaultProps} />);

    expect(
      screen.getByRole('button', { name: /decrease quantity/i })
    ).toBeEnabled();
  });

  it('calculates the initial subtotal correctly', () => {
    render(<ShoppingCartItem {...defaultProps} />);

    expect(screen.getByText('300000')).toBeInTheDocument();
  });

  it('updates subtotal when quantity increases', async () => {
    const user = userEvent.setup();

    render(<ShoppingCartItem {...defaultProps} />);

    await user.click(
      screen.getByRole('button', { name: /increase quantity/i })
    );

    expect(screen.getByText('450000')).toBeInTheDocument();
  });

  it('updates subtotal when quantity decreases', async () => {
    const user = userEvent.setup();

    render(<ShoppingCartItem {...defaultProps} />);

    await user.click(
      screen.getByRole('button', { name: /decrease quantity/i })
    );

    expect(screen.getByText('Subtotal:').parentElement).toHaveTextContent(
      '150000'
    );
  });

  it('calls onRemove with the correct product ID', async () => {
    const user = userEvent.setup();
    const onRemove = vi.fn();

    render(<ShoppingCartItem {...defaultProps} onRemove={onRemove} />);

    await user.click(
      screen.getByRole('button', { name: /remove wireless mouse/i })
    );

    expect(onRemove).toHaveBeenCalledTimes(1);
    expect(onRemove).toHaveBeenCalledWith('product-001');
  });

  it('does not call onRemove during initial rendering', () => {
    const onRemove = vi.fn();

    render(<ShoppingCartItem {...defaultProps} onRemove={onRemove} />);

    expect(onRemove).not.toHaveBeenCalled();
  });

  it('does not call onRemove when quantity is increased', async () => {
    const user = userEvent.setup();
    const onRemove = vi.fn();

    render(<ShoppingCartItem {...defaultProps} onRemove={onRemove} />);

    await user.click(
      screen.getByRole('button', { name: /increase quantity/i })
    );

    expect(onRemove).not.toHaveBeenCalled();
  });

  it('uses the correct product ID for a different product', async () => {
    const user = userEvent.setup();
    const onRemove = vi.fn();

    render(
      <ShoppingCartItem
        {...defaultProps}
        id='product-999'
        productName='Mechanical Keyboard'
        onRemove={onRemove}
      />
    );

    await user.click(
      screen.getByRole('button', {
        name: /remove mechanical keyboard/i,
      })
    );

    expect(onRemove).toHaveBeenCalledWith('product-999');
  });

  it('provides accessible names for all interactive buttons', () => {
    render(<ShoppingCartItem {...defaultProps} />);

    expect(
      screen.getByRole('button', { name: /increase quantity/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /decrease quantity/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /remove wireless mouse/i })
    ).toBeInTheDocument();
  });
});
