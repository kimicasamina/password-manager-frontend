import React from "react";
import { useAuth } from "../../context/auth";

const passwords = [
  {
    id: 1,
    name: "Netflix",
    email: "kmbrrlycsmn@gmail.com",
    password: "p4ssw000rd",
    website: "www.nerflix.com",
  },
  {
    id: 2,
    name: "Google",
    email: "saucebot@gmail.com",
    password: "p4ssw000rd",
    website: "www.google.com",
  },
  {
    id: 3,
    name: "Hulu",
    email: "csmnk008@gmail.com",
    password: "hello_world",
    website: "www.hulu.com",
  },
];

export default function Passwords() {
  const { user, isFetching } = useAuth();

  if (!user && isFetching) return <h1>Loading list...</h1>;

  return (
    <div className="w-full h-full">
      {passwords.map((password) => (
        <div className="" key={password.id}>
          <span className="text-sm">{password.name}</span>
        </div>
      ))}
    </div>
  );
}
