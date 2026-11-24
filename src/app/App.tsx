import ShoppingCartSummary from '../components/26-shopping-cart-summary/ShoppingCartSummary';

function App() {
  return (
    <>
      <ShoppingCartSummary
        items={[
          {
            id: 'product-001',
            name: 'Wireless Mouse',
            price: 150000,
            quantity: 2,
          },
          {
            id: 'product-002',
            name: 'Mechanical Keyboard',
            price: 250000,
            quantity: 1,
          },
        ]}
        shippingCost={15000}
      />
    </>
  );
}

export default App;
