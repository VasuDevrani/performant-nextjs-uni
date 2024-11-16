"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

const prefetchImages = async (imageUrls: string[]) => {
  await Promise.all(
    imageUrls.map((imageUrl) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = imageUrl;
        img.onload = resolve;
        img.onerror = reject;
      });
    })
  );
};

export const CustomLink = ({ children, ...props }: React.ComponentProps<typeof Link>) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (props.prefetch === false) return;

    const linkElement = linkRef.current;
    if (!linkElement) return;

    const handleMouseEnter = async () => {
      router.prefetch(String(props.href));
      
      const imageResponse = await fetch(`/api/prefetch-images${String(props.href)}`, {
        priority: 'low',
      });

      if (!imageResponse.ok && process.env.NODE_ENV === 'development') {
        throw new Error('Failed to prefetch images');
      }
      const { images } = await imageResponse.json();
      await prefetchImages(images);
    };

    linkElement.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      linkElement.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [props.href, props.prefetch]);

  return (
    <Link ref={linkRef} {...props}>
      {children}
    </Link>
  );
};