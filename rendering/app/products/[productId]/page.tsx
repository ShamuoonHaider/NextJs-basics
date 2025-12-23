interface Props {
  params: Promise<{ productId: string }>;
}

export async function generateStaticParams() {
  return [{ productId: "1" }, { productId: "2" }, { productId: "3" }];
}

const ProductDetails = async ({ params }: Props) => {
  const { productId } = await params;
  return <div>Product Details for product ID: {productId}</div>;
};

export default ProductDetails;
