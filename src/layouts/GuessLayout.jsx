import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useAuth } from "../context/auth";
import { Navigate } from "react-router-dom";

export default function GuessLayout() {
  return (
    <div className="w-full max-w-[1280px] mx-auto h-screen bg-zinc-200 flex flex-col">
      <Header />
      <main className="w-full flex-1 overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}
