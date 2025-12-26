import Form from "next/form";
export const Search = () => {
  return (
    <Form className="flex gap-2" action="/products-db">
      <input
        name="query"
        className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
        placeholder="search for products"
      />
      <button
        type="submit"
        className="text-xl font-semibold px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 cursor-pointer"
      >
        Search
      </button>
    </Form>
  );
};
