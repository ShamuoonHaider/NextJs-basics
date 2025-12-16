interface PageProps {
  params: Promise<{ productId: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { productId } = await params;
  return (
    <div>
      <h1>Product details for {productId}</h1>
    </div>
  );
};

export default Page;
