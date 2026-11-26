import ProductPriceRangeFilter from '../components/29-product-price-range-filter/ProductPriceRangeFilter';

const products = [
  { id: '1', name: 'Keyboard', price: 150000 },
  { id: '2', name: 'Mouse', price: 75000 },
  { id: '3', name: 'Monitor', price: 1250000 },
  { id: '4', name: 'Headset', price: 350000 },
];

function App() {
  return (
    <>
      <ProductPriceRangeFilter products={products} maxPrice={500000} />
    </>
  );
}

export default App;
