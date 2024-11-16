import { getProducts } from '@/lib/products';
import ProductCard from './product-card';

export default async function ProductGrid({ category }: { category?: string }) {
  const products = await getProducts(category);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}