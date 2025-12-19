import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  // const requestHeaders = new Headers(request.headers);
  // console.log(requestHeaders.get("Authorization"));

  const theme = request.cookies.get("theme");
  console.log(theme);

  const headersList = await headers();
  console.log(headersList.get("Authorization"));

  const cookieStore = await cookies();
  cookieStore.set("resultPerPage", "10");
  console.log(cookieStore.get("resultPerPage"));

  return new Response("<h1>Profile data</h1>", {
    headers: { "Content-Type": "text/html", "Set-Cookie": "theme=dark" },
  });
};
