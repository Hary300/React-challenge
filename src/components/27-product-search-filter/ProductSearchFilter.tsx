import { useState, type ChangeEvent } from 'react';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
}

interface ProductSearchProps {
  products: Product[];
}

const ProductSearchFilter = ({ products }: ProductSearchProps) => {
  const [query, setQuery] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const filteredProducts =
    query === ''
      ? products
      : products.filter(
          (product) =>
            product.name.toLowerCase().includes(query.trim().toLowerCase()) ||
            product.category.toLowerCase().includes(query.trim().toLowerCase())
        );

  return (
    <div>
      <label htmlFor='search'>Search Products</label>
      <input
        type='text'
        id='search'
        value={query}
        onChange={handleChange}
        placeholder='Search products'
      />
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <ul>
          {filteredProducts.length === 0 ? (
            <p>No products found.</p>
          ) : (
            filteredProducts.map((product) => (
              <li key={product.id}>
                <p>
                  Product name: <span>{product.name}</span>
                </p>
                <p>
                  Category: <span>{product.category}</span>
                </p>
                <p>
                  Price: <span>{product.price}</span>
                </p>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default ProductSearchFilter;
