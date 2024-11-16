'use client';

import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CartButton() {
  return (
    <Button variant="outline" size="icon">
      <ShoppingCart className="h-5 w-5" />
    </Button>
  );
}