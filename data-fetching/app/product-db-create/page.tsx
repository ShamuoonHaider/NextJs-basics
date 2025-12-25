import { Submit } from "@/components/submit";
import { addProduct } from "@/prisma-db";
import { redirect } from "next/navigation";
import { useActionState } from "react";

interface Errors {
  title?: string;
  price?: string;
  description?: string;
}

interface FormData {
  error: Errors;
}

const AddProductPage = () => {
  const initialState: FormData = {
    error: {},
  };

  const [state, formAction] = useActionState(createProduct, initialState);

  const createProduct = async (data: FormData) => {
    "use server";
    const title = data.get("title") as string;
    const price = parseInt(data.get("price") as string);
    const description = data.get("description") as string;

    const errors: Errors = {};

    if (!title) {
      errors.title = "Title is required";
    }
    if (!price || price <= 0) {
      errors.price = "Price must be greater than zero";
    }
    if (!description) {
      errors.description = "Description is required";
    }

    if (Object.keys(errors).length > 0) {
      return { error: errors };
    }

    await addProduct(title, price, description);
    redirect("/products-db");
  };
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
