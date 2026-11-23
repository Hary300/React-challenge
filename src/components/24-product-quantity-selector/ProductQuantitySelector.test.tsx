import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductQuantitySelector from './ProductQuantitySelector';

describe('ProductQuantitySelector', () => {
  const defaultProps = {
    productName: 'Wireless Mouse',
    price: 150000,
    minQuantity: 1,
    maxQuantity: 5,
  };

  it('renders the product name', () => {
    render(<ProductQuantitySelector {...defaultProps} />);

    expect(screen.getByText('Wireless Mouse')).toBeInTheDocument();
  });

  it('displays the price per item', () => {
    render(<ProductQuantitySelector {...defaultProps} />);

    expect(screen.getByText('Price per item:').parentElement).toHaveTextContent(
      '150000'
    );
  });

  it('initializes quantity using minQuantity', () => {
    render(<ProductQuantitySelector {...defaultProps} />);

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('initializes quantity correctly when minQuantity is greater than 1', () => {
    render(
      <ProductQuantitySelector
        {...defaultProps}
        minQuantity={3}
        maxQuantity={8}
      />
    );

    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('increases quantity when the increase button is clicked', async () => {
    const user = userEvent.setup();

    render(<ProductQuantitySelector {...defaultProps} />);

    await user.click(
      screen.getByRole('button', { name: /increase quantity/i })
    );

    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('decreases quantity when the decrease button is clicked', async () => {
    const user = userEvent.setup();

    render(<ProductQuantitySelector {...defaultProps} />);

    await user.click(
      screen.getByRole('button', { name: /increase quantity/i })
    );
    await user.click(
      screen.getByRole('button', { name: /decrease quantity/i })
    );

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('does not decrease quantity below minQuantity', async () => {
    const user = userEvent.setup();

    render(<ProductQuantitySelector {...defaultProps} />);

    const decreaseButton = screen.getByRole('button', {
      name: /decrease quantity/i,
    });

    expect(decreaseButton).toBeDisabled();

    await user.click(decreaseButton);

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('does not increase quantity above maxQuantity', async () => {
    const user = userEvent.setup();

    render(<ProductQuantitySelector {...defaultProps} />);

    const increaseButton = screen.getByRole('button', {
      name: /increase quantity/i,
    });

    for (let i = 0; i < 4; i++) {
      await user.click(increaseButton);
    }

    expect(screen.getByText('5')).toBeInTheDocument();
    expect(increaseButton).toBeDisabled();
  });

  it('disables decrease button when quantity reaches minimum', async () => {
    const user = userEvent.setup();

    render(<ProductQuantitySelector {...defaultProps} />);

    const decreaseButton = screen.getByRole('button', {
      name: /decrease quantity/i,
    });

    const increaseButton = screen.getByRole('button', {
      name: /increase quantity/i,
    });

    await user.click(increaseButton);
    await user.click(decreaseButton);

    expect(decreaseButton).toBeDisabled();
  });

  it('disables increase button when quantity reaches maximum', async () => {
    const user = userEvent.setup();

    render(<ProductQuantitySelector {...defaultProps} />);

    const increaseButton = screen.getByRole('button', {
      name: /increase quantity/i,
    });

    for (let i = 0; i < 4; i++) {
      await user.click(increaseButton);
    }

    expect(increaseButton).toBeDisabled();
  });

  it('updates subtotal when quantity increases', async () => {
    const user = userEvent.setup();

    render(<ProductQuantitySelector {...defaultProps} />);

    await user.click(
      screen.getByRole('button', { name: /increase quantity/i })
    );

    expect(screen.getByText('300000')).toBeInTheDocument();
  });

  it('updates subtotal when quantity decreases', async () => {
    const user = userEvent.setup();

    render(<ProductQuantitySelector {...defaultProps} />);

    const increaseButton = screen.getByRole('button', {
      name: /increase quantity/i,
    });

    const decreaseButton = screen.getByRole('button', {
      name: /decrease quantity/i,
    });

    await user.click(increaseButton);
    await user.click(increaseButton);
    await user.click(decreaseButton);

    expect(screen.getByText('300000')).toBeInTheDocument();
  });

  it('calculates subtotal correctly for a different product price', () => {
    render(
      <ProductQuantitySelector
        productName='Keyboard'
        price={250000}
        minQuantity={2}
        maxQuantity={10}
      />
    );

    expect(screen.getByText('500000')).toBeInTheDocument();
  });

  it('does not change quantity after reaching the maximum', async () => {
    const user = userEvent.setup();

    render(<ProductQuantitySelector {...defaultProps} />);

    const increaseButton = screen.getByRole('button', {
      name: /increase quantity/i,
    });

    for (let i = 0; i < 5; i++) {
      await user.click(increaseButton);
    }

    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('provides accessible names for both quantity buttons', () => {
    render(<ProductQuantitySelector {...defaultProps} />);

    expect(
      screen.getByRole('button', { name: /increase quantity/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /decrease quantity/i })
    ).toBeInTheDocument();
  });
});
