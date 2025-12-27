import { auth, currentUser } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  const authObj = await auth();
  const userObj = await currentUser();

  console.log(authObj, userObj);
  return (
    <div>
      <h2 className="text-5xl text-red-500">Dashboard</h2>
    </div>
  );
}
