interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  });

  const formattedPrice = formatter.format(product.price).replace(/\s+/, '');
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{formattedPrice}</p>
      <p className={product.inStock ? 'in-stock' : 'out-of-stock'}>
        {product.inStock ? 'In Stock' : 'Out of Stock'}
      </p>
    </div>
  );
};

export default ProductCard;
