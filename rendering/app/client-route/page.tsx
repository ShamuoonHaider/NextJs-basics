"use client";

import { ServerSideFunction } from "@/utils/server-utils";

const ClientRoutePage = () => {
  const result = ServerSideFunction();
  return <div>ClientRoutePage {result}</div>;
};

export default ClientRoutePage;
