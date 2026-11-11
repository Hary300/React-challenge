import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting', () => {
  it('should render a greeting message', () => {
    render(<Greeting name='Hary' />);

    expect(
      screen.getByRole('heading', { name: 'Hello, Hary!' })
    ).toBeInTheDocument();
  });

  it('should render a different name', () => {
    render(<Greeting name='John' />);

    expect(
      screen.getByRole('heading', { name: 'Hello, John!' })
    ).toBeInTheDocument();
  });
});
