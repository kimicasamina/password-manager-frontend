import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function GuessLayout() {
  return (
    <div className="w-full max-w-[1280px] mx-auto h-screen bg-zinc-200 flex flex-col justify-between">
      <Header />
      <main className="w-full flex-1 ">
        <Outlet />
      </main>
    </div>
  );
}
