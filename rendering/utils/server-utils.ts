import "server-only";

export const ServerSideFunction = () => {
  console.log(
    "This function runs only on the server side and cannot be used in client components."
  );
  return "server only";
};
