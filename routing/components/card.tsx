interface Props {
  children: React.ReactNode;
}

const Card = ({ children }: Props) => {
  return (
    <div className="p-100 m-10 shadow-[0,4px, 8px, 0, rgba(0,0,0,0.2)] border border-black flex justify-center items-center">
      {children}
    </div>
  );
};

export default Card;
