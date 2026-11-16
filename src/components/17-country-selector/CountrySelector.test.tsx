import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import CountrySelector from './CountrySelector';

const countries = [
  { id: 'id', name: 'Indonesia', code: '+62' },
  { id: 'us', name: 'United States', code: '+1' },
  { id: 'jp', name: 'Japan', code: '+81' },
];

describe('CountrySelector', () => {
  it('should render the country dropdown', () => {
    render(<CountrySelector countries={countries} />);

    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('should render the placeholder initially', () => {
    render(<CountrySelector countries={countries} />);

    expect(screen.getByRole('combobox')).toHaveValue('');
  });

  it('should display all available countries', () => {
    render(<CountrySelector countries={countries} />);

    countries.forEach((country) => {
      expect(
        screen.getByRole('option', { name: country.name })
      ).toBeInTheDocument();
    });
  });

  it('should display a message when no country is selected', () => {
    render(<CountrySelector countries={countries} />);

    expect(screen.getByText('No country selected.')).toBeInTheDocument();
  });

  it('should display the selected country name', () => {
    render(<CountrySelector countries={countries} />);

    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'id' },
    });

    expect(screen.getByText('Name: Indonesia')).toBeInTheDocument();
  });

  it('should display the selected country code', () => {
    render(<CountrySelector countries={countries} />);

    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'id' },
    });

    expect(screen.getByText('Code: +62')).toBeInTheDocument();
  });

  it('should update the selected country when another country is selected', () => {
    render(<CountrySelector countries={countries} />);

    const select = screen.getByRole('combobox');

    fireEvent.change(select, {
      target: { value: 'id' },
    });

    fireEvent.change(select, {
      target: { value: 'jp' },
    });

    expect(screen.getByText('Name: Japan')).toBeInTheDocument();
    expect(screen.getByText('Code: +81')).toBeInTheDocument();

    expect(screen.queryByText('Name: Indonesia')).not.toBeInTheDocument();
  });
});
