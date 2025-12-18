const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count);
};

interface Props {
  children: React.ReactNode;
}
const ProductDetailsLayout = ({ children }: Props) => {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error loading product details");
  }

  return (
    <div>
      <h1>Product Details</h1>
      {children}
    </div>
  );
};

export default ProductDetailsLayout;
