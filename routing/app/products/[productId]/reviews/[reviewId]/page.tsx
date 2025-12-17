import { redirect } from "next/navigation";

interface ReviewPageProps {
  params: Promise<{ productId: string; reviewId: string }>;
}

const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count);
};

const Page = async ({ params }: ReviewPageProps) => {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error loading review");
  }

  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    redirect("/products/");
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
