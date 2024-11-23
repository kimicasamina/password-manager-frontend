import React from "react";
import { Outlet } from "react-router-dom";
import SidebarMenu from "../components/Sidebar";

export default function ProfileLayout() {
  return (
    <div className="w-full h-screen flex flex-row">
      <SidebarMenu />
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
}
