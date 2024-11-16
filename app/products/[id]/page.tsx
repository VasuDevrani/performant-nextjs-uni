import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getProduct, getProducts } from "@/lib/products";
import dynamic from "next/dynamic";
import BackButton from "@/components/back-button";
import ProductSkeleton from "@/components/product-skeleton";

const ProductGallery = dynamic(() => import("@/components/product-gallery"), {
  loading: () => <ProductSkeleton />,
});

const AddToCartButton = dynamic(
  () => import("@/components/add-to-cart-button")
);

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      images: [{ url: product.images[0] }],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <BackButton />
      <div className="grid md:grid-cols-2 gap-8 mt-6">
        <Suspense fallback={<ProductSkeleton />}>
          <ProductGallery images={product.images} />
        </Suspense>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-3xl font-semibold text-primary">
            ${product.price.toFixed(2)}
          </p>
          <div className="prose max-w-none">
            <p>{product.description}</p>
          </div>
          <AddToCartButton />
        </div>
      </div>
    </main>
  );
}
