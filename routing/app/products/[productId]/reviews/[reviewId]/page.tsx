interface ReviewsProps {
  params: Promise<{ reviewId: string; productId: string }>;
}

const ProductReviews = async ({ params }: ReviewsProps) => {
  const { reviewId, productId } = await params;
  return (
    <>
      <h1>
        Review {reviewId} for product {productId}
      </h1>
    </>
  );
};

export default ProductReviews;
