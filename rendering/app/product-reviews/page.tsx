import Products from "@/components/products";
import Reviews from "@/components/reviews";
import { Suspense } from "react";

const ProductReviews = () => {
  return (
    <div>
      <h1>Product Reviews page</h1>
      <Suspense fallback={<div>Loading Products...</div>}>
        <Products />
      </Suspense>
      <Suspense fallback={<div>Loading Reviews...</div>}>
        <Reviews />
      </Suspense>
    </div>
  );
};

export default ProductReviews;
