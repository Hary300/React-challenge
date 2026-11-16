import { useState, type ChangeEvent } from 'react';

interface Country {
  id: string;
  name: string;
  code: string;
}

interface CountrySelectorProps {
  countries: Country[];
}

const CountrySelector = ({ countries }: CountrySelectorProps) => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = countries.find(
      (country) => country.id === e.target.value
    );

    setSelectedCountry(selectedCountry ?? null);
  };

  return (
    <div>
      <select name='combobox' id='combobox' onChange={handleChange}>
        <option value='' disabled selected>
          Select a country{' '}
        </option>
        {countries.map((country: Country) => (
          <option key={country.id} value={country.id}>
            {country.name}
          </option>
        ))}
      </select>
      <h2 id='selected-country-heading'>Selected country</h2>
      {selectedCountry !== null ? (
        <>
          <p>Name: {selectedCountry?.name}</p>
          <p>Code: {selectedCountry?.code}</p>
        </>
      ) : (
        'No country selected.'
      )}
    </div>
  );
};

export default CountrySelector;
