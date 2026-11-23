import ProductQuantitySelector from '../components/24-product-quantity-selector/ProductQuantitySelector';

function App() {
  return (
    <>
      <ProductQuantitySelector
        productName='Wireless Mouse'
        price={150000}
        minQuantity={1}
        maxQuantity={10}
      />
    </>
  );
}

export default App;
