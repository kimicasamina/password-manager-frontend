import React from "react";
import { Outlet } from "react-router-dom";

export default function GuessLayout() {
  return (
    <div className="w-full h-screen">
      <header className="w-full bg-zinc-400">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, hic?
      </header>
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
}
