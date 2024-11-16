import Image from 'next/image';
// import Link from 'next/link';
import { CustomLink as Link } from './custom-link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Product } from '@/lib/types';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link 
      href={`/products/${product.id}`}
      // prefetch={true}
    >
      <Card className="group overflow-hidden transition-all hover:shadow-lg">
        <div className="aspect-square relative overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            quality={85}
          />
        </div>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold line-clamp-1">{product.name}</h2>
          <p className="text-muted-foreground line-clamp-2 mt-2">
            {product.description}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}