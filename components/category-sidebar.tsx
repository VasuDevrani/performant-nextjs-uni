import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { getCategories } from '@/lib/products';
// import { cn } from '@/lib/utils';

export default async function CategorySidebar({
  activeCategory,
}: {
  activeCategory?: string;
}) {
  const categories = await getCategories();

  return (
    <div className="bg-card rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <ScrollArea className="h-[calc(100vh-200px)]">
        <div className="space-y-2">
          <Link href="/">
            <Button
              variant={!activeCategory ? 'default' : 'ghost'}
              className="w-full justify-start"
            >
              All Products
              <span className="ml-auto text-muted-foreground">
                ({categories.reduce((acc, cat) => acc + cat.count, 0)})
              </span>
            </Button>
          </Link>
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/?category=${encodeURIComponent(category.name)}`}
            >
              <Button
                variant={activeCategory === category.name ? 'default' : 'ghost'}
                className="w-full justify-start"
              >
                {category.name}
                <span className="ml-auto text-muted-foreground">
                  ({category.count})
                </span>
              </Button>
            </Link>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}