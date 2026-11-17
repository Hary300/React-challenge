import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ShoppingCartQuantity from './ShoppingCartQuantity';

describe('ShoppingCartQuantity', () => {
  it('should render the product name', () => {
    render(
      <ShoppingCartQuantity productName='Wireless Mouse' price={150000} />
    );

    expect(screen.getByText('Wireless Mouse')).toBeInTheDocument();
  });

  it('should display the initial quantity as 1', () => {
    render(
      <ShoppingCartQuantity productName='Wireless Mouse' price={150000} />
    );

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('should display the product price', () => {
    render(
      <ShoppingCartQuantity productName='Wireless Mouse' price={150000} />
    );

    expect(screen.getByTestId('product-price')).toHaveTextContent('150000');
    expect(screen.getByTestId('total-price')).toHaveTextContent('150000');
  });

  it('should increase quantity when clicking the increment button', () => {
    render(
      <ShoppingCartQuantity productName='Wireless Mouse' price={150000} />
    );

    fireEvent.click(screen.getByRole('button', { name: '+' }));

    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('should decrease quantity when clicking the decrement button', () => {
    render(
      <ShoppingCartQuantity productName='Wireless Mouse' price={150000} />
    );

    fireEvent.click(screen.getByRole('button', { name: '+' }));
    fireEvent.click(screen.getByRole('button', { name: '-' }));

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('should not allow quantity to go below 1', () => {
    render(
      <ShoppingCartQuantity productName='Wireless Mouse' price={150000} />
    );

    fireEvent.click(screen.getByRole('button', { name: '-' }));

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('should calculate the total price correctly', () => {
    render(
      <ShoppingCartQuantity productName='Wireless Mouse' price={150000} />
    );

    fireEvent.click(screen.getByRole('button', { name: '+' }));
    fireEvent.click(screen.getByRole('button', { name: '+' }));

    expect(screen.getByText('450000')).toBeInTheDocument();
  });

  it('should update the total price when quantity decreases', () => {
    render(
      <ShoppingCartQuantity productName='Wireless Mouse' price={150000} />
    );

    fireEvent.click(screen.getByRole('button', { name: '+' }));
    fireEvent.click(screen.getByRole('button', { name: '+' }));
    fireEvent.click(screen.getByRole('button', { name: '-' }));

    expect(screen.getByText('300000')).toBeInTheDocument();
  });
});
