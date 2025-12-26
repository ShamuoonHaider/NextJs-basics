interface AuthorType {
  id: number;
  name: string;
}

export const Author = async ({ userId }: { userId: number }) => {
  // Add 'export const'
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const author: AuthorType = await response.json();

  return (
    <div className="text-sm text-gray-500">
      Written by:{" "}
      <span className="font-semibold text-gray-700 hover:text-gray-900 transition-colors">
        {author.name}
      </span>
    </div>
  );
};
