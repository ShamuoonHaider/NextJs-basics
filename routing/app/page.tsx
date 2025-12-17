import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>Welcome Home!</h1>
      <Link href="/blog">Blog</Link>
      <br />
      <Link href="/products">Products</Link>
      <Link href="/articles/breaking-new-123?lang=en">Read in English</Link>
      <Link href="/articles/breaking-new-123?lang=fr">Read in French</Link>
    </>
  );
};

export default Home;
