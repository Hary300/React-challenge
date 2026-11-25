import ProductSearchFilter from '../components/27-product-search-filter/ProductSearchFilter';

function App() {
  return (
    <>
      <ProductSearchFilter
        products={[
          {
            id: 'product-001',
            name: 'Wireless Mouse',
            category: 'Electronics',
            price: 150000,
          },
          {
            id: 'product-002',
            name: 'Mechanical Keyboard',
            category: 'Electronics',
            price: 250000,
          },
          {
            id: 'product-003',
            name: 'Water Bottle',
            category: 'Lifestyle',
            price: 75000,
          },
          {
            id: 'product-004',
            name: 'Laptop Stand',
            category: 'Accessories',
            price: 120000,
          },
        ]}
      />
    </>
  );
}

export default App;
