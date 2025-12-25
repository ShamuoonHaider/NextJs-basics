"use server";

import { addProduct } from "@/prisma-db";
import { redirect } from "next/navigation";

interface Errors {
  title?: string;
  price?: string;
  description?: string;
}

export interface FormState {
  error: Errors;
}

export const createProduct = async (prevState: FormState, data: FormData) => {
  "use server";
  const title = data.get("title") as string;
  const price = parseInt(data.get("price") as string);
  const description = data.get("description") as string;

  const errors: Errors = {};

  if (!title) {
    errors.title = "Title is required";
  }
  if (!price || price <= 0) {
    errors.price = "Price must be greater than zero";
  }
  if (!description) {
    errors.description = "Description is required";
  }

  if (Object.keys(errors).length > 0) {
    return { error: errors };
  }

  await addProduct(title, price, description);
  redirect("/products-db");
};
