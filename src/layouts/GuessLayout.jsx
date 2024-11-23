import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function GuessLayout() {
  return (
    <div className="w-full max-w-[1280px] mx-auto h-screen bg-zinc-200">
      <Header />
      <main className="w-full px-4 py-4">
        <Outlet />
      </main>
    </div>
  );
}
