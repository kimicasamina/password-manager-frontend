import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

export default function Signin() {
  const { user, isFetching, setUser } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  if (!isFetching && user) {
    return <Navigate to="/" />;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);

    try {
      const { data } = await axios.post("/api/auth/login/", { ...formData });
      console.log("DATA", data);
      if (data) {
        setUser(data.user);
        console.log("MESSAGE:", data.msg);
        return navigate("/");
      }

      // return navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full max-w-[70%] mx-auto flex flex-col pt-14">
      <h1 className="mb-10 text-2xl font-semibold text-center">
        Login to your Account
      </h1>
      <form
        className="flex flex-col gap-y-10"
        onSubmit={(e) => handleSubmit(e)}
      >
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
            name="email"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
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
            name="password"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
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
