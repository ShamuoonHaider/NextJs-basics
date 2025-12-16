import "../globals.css";

interface Props {
  children: React.ReactNode;
}
export const metadata = {
  title: "Routing",
  description: "Routing in Next js",
};

const AuthLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body>{children}</body>
      <footer className="bg-rose-400 text-black h-20 flex items-center px-10 ">
        <h1 className="text-4xl font-bold">Footer</h1>
      </footer>{" "}
    </html>
  );
};

export default AuthLayout;
