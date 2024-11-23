import React from "react";
import { Link } from "react-router-dom";

import { TbSettings } from "react-icons/tb";
import { TbSquareKey } from "react-icons/tb";
import { TbNotes } from "react-icons/tb";
import { TbFolder } from "react-icons/tb";
import { TbStarFilled } from "react-icons/tb";

const types = [
  {
    id: 1,
    name: "Passwords",
    icon: <TbSquareKey />,
  },
  {
    id: 2,
    name: "Secret Note",
    icon: <TbNotes />,
  },
  {
    id: 3,
    name: "Settings",
    icon: <TbSettings />,
  },
];

const folders = [
  {
    id: 1,
    name: "Work",
  },
  {
    id: 2,
    name: "Social",
  },
  {
    id: 3,
    name: "Personal",
  },
];

export default function SidebarMenu() {
  return (
    <div className="w-[140px] h-full flex flex-col gap-y-8 p-2 border-r border-r-zinc-400 ">
      <div className="flex flex-col gap-y-2">
        <div className="flex gap-x-2 items-center">
          <TbStarFilled />
          <span className="text-sm">All Items</span>
        </div>
        <div className="flex gap-x-2 items-center">
          <span className="w-4 h-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
              />
            </svg>
          </span>
          <span className="text-sm">Favorites</span>
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <span className="mb-1 text-xs text-zinc-700">Types</span>
        {types.map((type) => (
          <div className="flex items-center gap-x-2" key={type.id}>
            <span>{type.icon}</span>
            <span className="text-sm">{type.name}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-y-2">
        <span className="mb-1 text-xs text-zinc-700">Folders</span>
        {folders.map((folder) => (
          <div className="flex items-center gap-x-2" key={folder.id}>
            <TbFolder />
            <span className="text-sm">{folder.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
