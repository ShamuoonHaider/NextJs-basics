import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

const Blog = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("intentional delay");
    }, 2000);
  });
  return (
    <div>
      <h1>Blog page</h1>
    </div>
  );
};

export default Blog;
