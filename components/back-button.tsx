'use client';

import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function BackButton() {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      className="gap-2"
      onClick={() => router.back()}
    >
      <ChevronLeft className="h-4 w-4" />
      Back to Products
    </Button>
  );
}