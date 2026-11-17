import { useState } from 'react';

interface ShoppingCartQuantityProps {
  productName: string;
  price: number;
}

const ShoppingCartQuantity = ({
  productName,
  price,
}: ShoppingCartQuantityProps) => {
  const [quantity, setQuantity] = useState(1);
  const handleInc = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleDec = () => {
    setQuantity((prev) => prev - 1);
  };
  const handleReset = () => {
    setQuantity(1);
  };

  return (
    <div>
      <button onClick={handleInc}>+</button>
      <button onClick={handleReset}>RESET</button>
      <button onClick={handleDec} disabled={quantity <= 1}>
        -
      </button>
      <p>{productName}</p>
      <p data-testid='product-price'>{price}</p>
      <p>{quantity}</p>
      <p data-testId='total-price'>{price * quantity}</p>
    </div>
  );
};

export default ShoppingCartQuantity;
