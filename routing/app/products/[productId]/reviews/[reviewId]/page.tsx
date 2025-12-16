import { notFound } from "next/navigation";

interface ReviewPageProps {
  params: Promise<{ productId: string; reviewId: string }>;
}

const Page = async ({ params }: ReviewPageProps) => {
  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      <h1>
        Product Detiails for {productId} and Review {reviewId}
      </h1>
    </div>
  );
};

export default Page;
