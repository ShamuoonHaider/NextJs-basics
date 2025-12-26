import { getProduct } from "@/prisma-db";
import EditProductForm from "./product-edit-form";
import type { Product } from "../page";
import { notFound } from "next/navigation";

const EditProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const product: Product | null = await getProduct(parseInt(id));

  if (!product) {
    notFound();
  }

  return <EditProductForm product={product} />;
};

export default EditProductPage;
