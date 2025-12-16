interface Props {
  children: React.ReactNode;
}
const ProductDetailsLayout = ({ children }: Props) => {
  return (
    <div>
      <h1>Product Details</h1>
      {children}
    </div>
  );
};

export default ProductDetailsLayout;
