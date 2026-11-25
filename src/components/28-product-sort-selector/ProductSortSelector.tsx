import { useState, type ChangeEvent } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
}

interface ProductSortSelectorProps {
  products: Product[];
}

const ProductSortSelector = ({ products }: ProductSortSelectorProps) => {
  const [sortedBy, setSortedBy] = useState('default');

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    setSortedBy(event.target.value);
  };

  const sortedProducts =
    sortedBy === ''
      ? products
      : [...products].sort((currentProduct, nextProduct) => {
          if (sortedBy === 'name-asc') {
            return currentProduct.name.localeCompare(nextProduct.name);
          } else if (sortedBy === 'name-desc') {
            return nextProduct.name.localeCompare(currentProduct.name);
          } else if (sortedBy === 'price-asc') {
            return currentProduct.price - nextProduct.price;
          } else if (sortedBy === 'price-desc') {
            return nextProduct.price - currentProduct.price;
          } else {
            return 0;
          }
        });
  return (
    <div>
      <label htmlFor='sort-product'>Sort products</label>
      <select name='sort-product' id='sort-product' onChange={handleChange}>
        <option value='default'>Default</option>
        <option value='name-asc'>Name: A to Z</option>
        <option value='name-desc'>Name: Z to A</option>
        <option value='price-asc'>Price: Low to High</option>
        <option value='price-desc'>Price: High to Low</option>
      </select>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <ul>
          {sortedProducts.map((product) => (
            <li key={product.id}>
              <p>
                Name: <span data-testid='product-name'>{product.name}</span>
              </p>
              <p>
                Price: <span>{product.price}</span>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductSortSelector;
