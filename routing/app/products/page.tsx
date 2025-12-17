import Link from "next/link";

const Page = () => {
  const productId = 459;
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Products List</h1>
      <ul>
        <h2>
          <Link href="/products/1">Product 1</Link>
        </h2>
        <h2>
          <Link href="/products/2">Product 2</Link>
        </h2>
        <h2>
          <Link href="/products/3" replace>
            Product 3
          </Link>
        </h2>
        <h2>
          <Link href={`/products/${productId}`} replace>
            Product {productId}
          </Link>
        </h2>
      </ul>
    </div>
  );
};

export default Page;
