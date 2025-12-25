"use client";

import { Submit } from "@/components/submit";
import { createProduct, type FormState } from "@/actions/products";
import { useActionState } from "react";

const AddProductPage = () => {
  const initialState: FormState = {
    error: {},
  };

  const [state, formAction] = useActionState(createProduct, initialState);

  return (
    <form action={formAction} className="p-4 space-y-4 max-w-96">
      <div>
        <label className="text-white">
          Title
          <input
            type="text"
            className="block w-full p-2 text-white border rounded"
            name="title"
          />
        </label>
        {state.error.title && (
          <p className="text-red-500">{state.error.title}</p>
        )}
      </div>
      <div>
        <label className="text-white">
          Price
          <input
            type="number"
            className="block w-full p-2 text-white border rounded"
            name="price"
          />
        </label>
        {state.error.price && (
          <p className="text-red-500">{state.error.price}</p>
        )}
      </div>
      <div>
        <label className="text-white">
          Description
          <textarea
            className="block w-full p-2 text-white border rounded"
            name="description"
          />
        </label>
        {state.error.description && (
          <p className="text-red-500">{state.error.description}</p>
        )}
      </div>
      <Submit />
    </form>
  );
};

export default AddProductPage;
