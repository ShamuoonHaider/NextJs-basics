import { cookies } from "next/headers";

const About = async () => {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");
  console.log(theme);
  return <div>About page</div>;
};

export default About;
