import { ServerSideFunction } from "@/utils/server-utils";

const ServerRoutePage = () => {
  const result = ServerSideFunction();
  return <div>ServerRoutePage {result}</div>;
};

export default ServerRoutePage;
