"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";

export const Submit = () => {
  const { pending } = useFormStatus();
  const [loading, setLoading] = useState(false);
  return (
    <button
      type="submit"
      disabled={pending}
      onClick={() => setLoading(true)}
      className="block w-full p-2 bg-blue-500 text-white disabled:bg-gray-600 cursor-pointer disabled:cursor-not-allowed rounded"
    >
      {loading ? (
        <span className="inline-block h-5 w-5 animate-spin rounded-full border-r-2 border-t-2 border-b-2 border-solid"></span>
      ) : (
        "Submit"
      )}
    </button>
  );
};
