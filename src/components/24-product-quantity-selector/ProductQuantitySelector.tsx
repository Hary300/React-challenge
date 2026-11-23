import { useState } from 'react';

interface ProductQuantitySelectorProps {
  productName: string;
  price: number;
  minQuantity: number;
  maxQuantity: number;
}
const ProductQuantitySelector = ({
  productName,
  price,
  maxQuantity,
  minQuantity,
}: ProductQuantitySelectorProps) => {
  const [currentQuantity, setCurrentQuantity] = useState(minQuantity);

  const handleIncrease = () => {
    if (currentQuantity === maxQuantity) return;
    setCurrentQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (currentQuantity === minQuantity) return;
    setCurrentQuantity((prev) => prev - 1);
  };
  return (
    <div>
      <button
        onClick={handleIncrease}
        disabled={currentQuantity === maxQuantity}
      >
        Increase quantity
      </button>
      <button
        onClick={handleDecrease}
        disabled={currentQuantity === minQuantity}
      >
        Decrease quantity
      </button>
      <div>
        <p>{productName}</p>
        <p>
          Price per item: <span>{price}</span>
        </p>
        <p>{currentQuantity}</p>
        <p>{currentQuantity * price}</p>
      </div>
    </div>
  );
};

export default ProductQuantitySelector;
