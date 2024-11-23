import React from "react";
import { Outlet } from "react-router-dom";
import SidebarMenu from "../components/Sidebar";
import { useAuth } from "../context/auth";
import { Navigate } from "react-router-dom";

export default function ProfileLayout() {
  const { user, isFetching, error } = useAuth();

  if (isFetching && !user) {
    return <h1 className="">User is fetching...</h1>;
  } else if (!isFetching && !user) {
    return <Navigate to="/signin" />;
  }

  return (
    <div className="w-full h-screen flex flex-row">
      <SidebarMenu />
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
}
