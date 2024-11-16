import { NextRequest, NextResponse } from "next/server";
import { getProduct } from "@/lib/products";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  const { slug } = await params;
  const pathname = `/${slug.join("/")}`;

  if (pathname.startsWith("/products/")) {
    const productId = pathname.split("/").pop();
    const product = await getProduct(productId as string);

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ images: product.images });
  } else {
    return NextResponse.json({ error: "Invalid pathname" }, { status: 404 });
  }
}
