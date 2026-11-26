import { useState, type ChangeEvent } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
}

interface ProductPriceRangeFilterProps {
  products: Product[];
  maxPrice: number;
}

const ProductPriceRangeFilter = ({
  products,
  maxPrice,
}: ProductPriceRangeFilterProps) => {
  const [selectedMaxPrice, setSelectedMaxPrice] = useState(maxPrice);
  const [hasChanged, setHasChanged] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedMaxPrice(Number(e.target.value));
    setHasChanged(true);
  };

  const filteredProducts = hasChanged
    ? products.filter((product) => product.price <= selectedMaxPrice)
    : products;
  return (
    <div>
      <label htmlFor='max-price'>Maximum price: </label>
      <input
        type='number'
        id='max-price'
        value={selectedMaxPrice === 0 ? '' : selectedMaxPrice}
        onChange={handleChange}
        className='border rounded-lg p-1'
      />
      <p data-testId='selected-max-price'>
        Selected max price: {selectedMaxPrice}
      </p>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              <p>
                Product name:{' '}
                <span data-testId='product-name'>{product.name}</span>
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

export default ProductPriceRangeFilter;
