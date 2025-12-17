"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <div>
      <p>{error.message}</p>
      <button onClick={() => reload()} className="bg-amber-700 cursor-pointer">
        Try again
      </button>
    </div>
  );
};

export default ErrorBoundary;
