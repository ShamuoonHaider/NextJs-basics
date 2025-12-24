"use client";

import { useTheme } from "@/components/theme-provider";
import { clientOnlyFunction } from "@/utils/client-utils";

const ClientRoutePage = () => {
  const theme = useTheme();
  const result = clientOnlyFunction();
  return (
    <div>
      <h2 style={{ color: theme.colors.secondary }}>Client router page</h2>
      <p>{result}</p>
    </div>
  );
};

export default ClientRoutePage;
