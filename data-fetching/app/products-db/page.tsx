import { getProducts } from "@/prisma-db";
import { ProductDetail } from "./[id]/product-details";
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
}

export default async function ProductsDBPage() {
  const products: Product[] = await getProducts();

  return <ProductDetail products={products} />;
}
