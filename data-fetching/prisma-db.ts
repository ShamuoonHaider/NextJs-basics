import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "@prisma/client";

const connectionString = process.env.DATABASE_URL ?? "file:./dev.db"; // Use env variable or a default

const adapter = new PrismaBetterSqlite3({ url: connectionString });

const prisma = new PrismaClient({ adapter });

const seedProducts = async () => {
  const count = await prisma.product.count();
  if (count === 0) {
    await prisma.product.createMany({
      data: [
        {
          title: "Product 1",
          price: 100,
          description: "Description for Product 1",
        },
        {
          title: "Product 2",
          price: 200,
          description: "Description for Product 2",
        },
        {
          title: "Product 3",
          price: 300,
          description: "Description for Product 3",
        },
      ],
    });
  }
};

export const getProducts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.product.findMany();
};

export const getProduct = async (id: number) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.product.findUnique({
    where: { id },
  });
};

export const addProduct = async (
  title: string,
  price: number,
  description: string
) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.product.create({
    data: {
      title,
      price,
      description,
    },
  });
};
export const updateProduct = async (
  id: number,
  title: string,
  price: number,
  description: string
) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.product.update({
    where: { id },
    data: {
      title,
      price,
      description,
    },
  });
};

export const deleteProduct = async (id: number) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.product.delete({
    where: { id },
  });
};

seedProducts().catch(console.error);
