"use client";

import { removeProduct } from "@/actions/products";
import { getProducts } from "@/prisma-db";
import Link from "next/link";
import { useOptimistic } from "react";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
}

export function ProductDetail({ products }: { products: Product[] }) {
  const [optimisticProducts, setOptimisticProducts] = useOptimistic(
    products,
    (currentProducts, productId) => {
      return currentProducts.filter((product) => product.id !== productId);
    }
  );

  const removeProductById = async (productId: number) => {
    setOptimisticProducts(productId);
    await removeProduct(productId);
  };

  return (
    <div>
      <h1 className="text-3xl font-extrabold text-gray-300">
        Products from Prisma DB
      </h1>
      <ul className="space-y-4 p-4">
        {optimisticProducts.map((product) => (
          <li
            key={product.id}
            className="bg-white shadow-md rounded-lg p-6 text-gray-700"
          >
            <h2 className="text-xl font-semibold">
              <Link href={`/products-db/${product.id}`}>{product.title}</Link>
            </h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <form
              action={removeProductById.bind(null, product.id)}
              className="mt-4"
            >
              <button
                type="submit"
                className="text-xl font-semibold px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 cursor-pointer"
              >
                Delete
              </button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}
