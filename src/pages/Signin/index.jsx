import React from "react";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div className="w-full max-w-[70%] mx-auto flex flex-col pt-14">
      <h1 className="mb-10 text-2xl font-semibold text-center">
        Login to your Account
      </h1>
      <form className="flex flex-col gap-y-10">
        {/* <div className="w-full flex flex-col gap-y-2">
          <label htmlFor="" className="font-semibold">
            Username
          </label>
          <input
            type="text"
            className="rounded-xs bg-zinc-50 p-2 border border-zinc-500"
            placeholder="Enter your Username"
          />
        </div> */}
        <div className="w-full flex flex-col gap-y-2">
          <label htmlFor="" className="font-semibold">
            Email
          </label>
          <input
            type="text"
            className="rounded-xs bg-zinc-100 p-2  text-zinc-500 border border-zinc-500"
            placeholder="Enter your Email"
          />
        </div>
        <div className="w-full flex flex-col gap-y-2">
          <label htmlFor="" className="font-semibold">
            Password
          </label>
          <input
            type="text"
            className="rounded-xs bg-zinc-100 p-2  text-zinc-500 border border-zinc-500"
            placeholder="Enter your Password"
          />
        </div>

        <span className="text-sm mt-10">
          Don't have an account?
          <Link to="/signup" className="px-2 text-blue-600">
            Sign up
          </Link>
        </span>

        <button className="btn bg-zinc-900 text-zinc-200 p-2 shadow-md hover:opacity-70">
          Sign in
        </button>
      </form>
    </div>
  );
}
