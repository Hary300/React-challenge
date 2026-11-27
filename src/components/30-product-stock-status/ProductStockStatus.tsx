interface Product {
  id: string;
  name: string;
  stock: number;
}

interface ProductStockStatusProps {
  products: Product[];
  lowStockThreshold: number;
}

const ProductStockStatus = ({
  products,
  lowStockThreshold,
}: ProductStockStatusProps) => {
  return (
    <div>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <ul>
          {products.map((product) => {
            const stockStatus =
              product.stock === 0
                ? 'Out of Stock'
                : product.stock <= lowStockThreshold
                  ? 'Low Stock'
                  : 'In Stock';

            const statusId =
              product.stock === 0
                ? '3'
                : product.stock < lowStockThreshold
                  ? '2'
                  : product.stock > lowStockThreshold
                    ? '1'
                    : '4';
            return (
              <li key={product.id}>
                <p>
                  Product name: <span>{product.name}</span>
                </p>
                <p>
                  Quantity: <span>{`${product.stock} units available`}</span>
                </p>
                <p>
                  Stock:{' '}
                  <span data-testid={`stock-status-${statusId}`}>
                    {stockStatus}
                  </span>
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ProductStockStatus;
