import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    // confirmPassword: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("HANDLE SUBMIT!!!");
    console.log(formData);

    try {
      const { data } = await axios.post("/api/auth/register/", { ...formData });
      return navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full max-w-[70%] mx-auto flex flex-col pt-14">
      <h1 className="mb-10 text-2xl font-semibold text-center">
        Create a new User
      </h1>
      <form
        className="flex flex-col gap-y-10"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="w-full flex flex-col gap-y-2">
          <label htmlFor="" className="font-semibold">
            Username
          </label>
          <input
            type="text"
            className="rounded-xs bg-zinc-50 p-2 border border-zinc-500"
            placeholder="Enter your Username"
            name="username"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
        </div>
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

        {/* <div className="w-full flex flex-col gap-y-2">
          <label htmlFor="" className="font-semibold">
            Confirm Password
          </label>
          <input
            type="text"
            className="rounded-xs bg-zinc-100 p-2  text-zinc-500 border border-zinc-500"
            placeholder="Enter your Password"
            name="confirmPassword"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
        </div> */}

        <span className="text-sm mt-10">
          Already have an account?
          <Link to="/signin" className="px-2 text-blue-600">
            Sign in
          </Link>
        </span>

        <button className="btn bg-zinc-900 text-zinc-200 p-2 shadow-md hover:opacity-70">
          Sign up
        </button>
      </form>
    </div>
  );
}
