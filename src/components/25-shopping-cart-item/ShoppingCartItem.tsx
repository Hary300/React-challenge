import { useState } from 'react';

interface ShoppingCartItemProps {
  id: string;
  productName: string;
  category: string;
  price: number;
  initialQuantity: number;
  onRemove: (id: string) => void;
}

const ShoppingCartItem = ({
  id,
  productName,
  category,
  price,
  initialQuantity,
  onRemove,
}: ShoppingCartItemProps) => {
  const [currentQuantity, setCurrentQuantity] = useState(initialQuantity);

  const handleIncrease = () => {
    setCurrentQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setCurrentQuantity((prev) => prev - 1);
  };
  return (
    <div>
      <button onClick={handleIncrease}>Increase quantity</button>
      <button onClick={handleDecrease} disabled={currentQuantity <= 1}>
        Decrease quantity
      </button>
      <p>
        Product Name: <span>{productName}</span>
      </p>
      <p>
        Category: <span>{category}</span>
      </p>
      <p>
        Price per item: <span>{price}</span>
      </p>
      <p>
        Quantity: <span>{currentQuantity}</span>
      </p>
      <p>
        Subtotal: <span>{currentQuantity * price}</span>
      </p>
      <button onClick={() => onRemove(id)}>Remove {productName}</button>
    </div>
  );
};

export default ShoppingCartItem;
