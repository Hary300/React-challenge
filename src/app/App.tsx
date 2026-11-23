import ShoppingCartItem from '../components/25-shopping-cart-item/ShoppingCartItem';

function App() {
  return (
    <>
      <ShoppingCartItem
        id='product-001'
        productName='Wireless Mouse'
        category='Electronics'
        price={150000}
        initialQuantity={2}
        onRemove={(id) => console.log(id)}
      />
    </>
  );
}

export default App;
