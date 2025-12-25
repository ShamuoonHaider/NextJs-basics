import { getProducts } from "@/prisma-db";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
}

export default async function ProductsDBPage() {
  const products: Product[] = await getProducts();

  return (
    <div>
      <h1 className="text-3xl font-extrabold text-gray-300">
        Products from Prisma DB
      </h1>
      <ul className="space-y-4 p-4">
        {products.map((product) => (
          <li
            key={product.id}
            className="bg-white shadow-md rounded-lg p-6 text-gray-700"
          >
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
