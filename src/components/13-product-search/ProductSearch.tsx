import { useState, type ChangeEvent } from 'react';

interface Product {
  id: number;
  name: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Mechanical Keyboard',
  },
  {
    id: 2,
    name: 'Wireless Mouse',
  },
  {
    id: 3,
    name: 'USB-C Hub',
  },
  {
    id: 4,
    name: 'Gaming Headset',
  },
];

const ProductSearch = () => {
  const [query, setQuery] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const userQueryInput = e.target.value.trim();
    setQuery(userQueryInput);
  };

  const filteredProducts =
    query === ''
      ? products
      : products.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase())
        );
  return (
    <div>
      <input type='text' value={query} onChange={handleChange} />
      {filteredProducts.length !== 0 ? (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default ProductSearch;
