import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full max-w-[1280px] mx-auto px-4 h-[70px] text-sm text-zinc-200 bg-zinc-900 flex items-center justify-between">
      <Link to="/" className="flex w-[180px] items-center space-x-2">
        <span className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
            />
          </svg>
        </span>
        <span className="text-sm">Secret Pass</span>
      </Link>

      <div className="flex-1">
        <input
          className="w-full h-full py-2 px-2 text-xs rounded-md"
          type="text"
          placeholder="Search key"
        />
      </div>

      <div className="flex-1 flex justify-end gap-x-4">
        <Link to="/signin">
          <button className="btn p-2 border rounded-md bg-zinc-200 text-zinc-900">
            Signin
          </button>
        </Link>
        <Link to="/signup">
          <button className="btn p-2 border rounded-md bg-zinc-200 text-zinc-900">
            Signup
          </button>
        </Link>
      </div>
    </header>
  );
}
