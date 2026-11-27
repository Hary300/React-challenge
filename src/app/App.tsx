import ProductStockStatus from '../components/30-product-stock-status/ProductStockStatus';

const products = [
  { id: '1', name: 'Keyboard', stock: 15 },
  { id: '2', name: 'Mouse', stock: 3 },
  { id: '3', name: 'Monitor', stock: 0 },
  { id: '4', name: 'Headset', stock: 5 },
];

function App() {
  return (
    <>
      <ProductStockStatus products={products} lowStockThreshold={5} />
    </>
  );
}

export default App;
