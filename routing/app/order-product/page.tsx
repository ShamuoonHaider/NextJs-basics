"use client";

import { useRouter } from "next/navigation";

const OrderProduct = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("Order placed!");
    router.push("/");
  };
  return (
    <>
      <h1>Order Product</h1>
      <button
        onClick={handleClick}
        className="bg-blue-500 text-black p-2 font-semibold text-base cursor-pointer rounded-lg hover:bg-blue-400"
      >
        Place order
      </button>
    </>
  );
};

export default OrderProduct;
