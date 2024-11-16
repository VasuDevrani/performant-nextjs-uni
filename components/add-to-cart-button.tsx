import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AddToCartButton() {
  return (
    <Button variant="secondary" className="w-full gap-2 bg-black text-white" size="lg">
      <ShoppingCart className="h-5 w-5" />
      Add to Cart
    </Button>
  );
}