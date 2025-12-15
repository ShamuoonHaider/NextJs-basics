interface ProductProps {
  params: Promise<{ productId: string }>;
}

const ProductDetails = async ({ params }: ProductProps) => {
  const productId = (await params).productId;
  return (
    <div>
      <h1>Details about product {productId}</h1>
    </div>
  );
};

export default ProductDetails;
