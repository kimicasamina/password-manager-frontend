import React from "react";
import { Outlet } from "react-router-dom";

export default function ProfileLayout() {
  return (
    <div className="w-full h-screen">
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
}
