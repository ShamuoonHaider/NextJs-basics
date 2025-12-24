interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

const UsersServer = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await response.json();
  console.log(users);
  return (
    <ul className="space-y-4 p-4">
      {users.map((user) => (
        <li
          key={user.id}
          className="bg-gray-700 shadow-md rounded-lg text-white p-4 "
        >
          <div className="  font-bold col-span-3 ">{user.name}</div>
          <div>
            <div>Username: {user.username}</div>
            <div>Email: {user.email}</div>
            <div>Phone: {user.phone}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UsersServer;
