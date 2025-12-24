"use client";

import { useTheme } from "@/components/theme-provider";

const ClientRoutePage = () => {
  const theme = useTheme();
  return (
    <div>
      <h2 style={{ color: theme.colors.secondary }}>Client router page</h2>
    </div>
  );
};

export default ClientRoutePage;
