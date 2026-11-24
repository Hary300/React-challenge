interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface ShoppingCartSummaryProps {
  items: CartItem[];
  shippingCost: number;
}

const ShoppingCartSummary = ({
  items,
  shippingCost,
}: ShoppingCartSummaryProps) => {
  const subTotal =
    items.length !== 0
      ? items.reduce((acc, item) => acc + item.quantity * item.price, 0)
      : 0;

  return (
    <div>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <p>{item.name}</p>
              <p>
                {item.name} x {item.quantity}
              </p>
              <p>{item.price * item.quantity}</p>
            </li>
          ))}
        </ul>
      )}
      <p>Total items: {items.reduce((acc, item) => acc + item.quantity, 0)}</p>
      <p>Subtotal: {subTotal}</p>
      <p>Shipping: {shippingCost}</p>
      <p>Grand total: {subTotal + shippingCost}</p>
    </div>
  );
};

export default ShoppingCartSummary;
