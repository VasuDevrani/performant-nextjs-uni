import ProductGrid from '@/components/product-grid';
import CategorySidebar from '@/components/category-sidebar';

export default async function Home({searchParams} : {searchParams: Promise<{category: string}>}) {
  const { category } = await searchParams;

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 flex-shrink-0">
          <CategorySidebar activeCategory={category} />
        </aside>
        <div className="flex-grow">
          <h1 className="text-4xl font-bold mb-8">
            {category || 'All Products'}
          </h1>
          <ProductGrid category={category} />
        </div>
      </div>
    </main>
  );
}