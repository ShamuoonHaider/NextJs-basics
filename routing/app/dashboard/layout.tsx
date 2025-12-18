import React from "react";

interface Props {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}

const DashboardLayout = ({
  children,
  users,
  revenue,
  notifications,
  login,
}: Props) => {
  const isLoggIn = true;
  return isLoggIn ? (
    <>
      <div>{children}</div>
      <div className="flex">
        <div className="flex flex-col">
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div className="flex flex-1">{notifications}</div>
      </div>
    </>
  ) : (
    login
  );
};

export default DashboardLayout;
