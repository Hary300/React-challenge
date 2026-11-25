import ProductSortSelector from '../components/28-product-sort-selector/ProductSortSelector';

function App() {
  return (
    <>
      <ProductSortSelector
        products={[
          { id: '1', name: 'Keyboard', price: 150000 },
          { id: '2', name: 'Mouse', price: 75000 },
          { id: '3', name: 'Monitor', price: 1250000 },
        ]}
      />
    </>
  );
}

export default App;
