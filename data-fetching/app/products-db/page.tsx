import { getProducts } from "@/prisma-db";
import { ProductDetail } from "./product-details";
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
}

export default async function ProductsDBPage({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  const { query } = await searchParams;
  const products: Product[] = await getProducts(query);

  return <ProductDetail products={products} />;
}
