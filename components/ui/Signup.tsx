"use client";
import React, { useState } from "react";
import { Button } from "./button";
import { useRouter } from "next/navigation";
import axios from "axios";
import { headers } from "next/headers";
import { useDispatch } from "react-redux";
import { addUser } from "@/app/store/features/userSlice";
import { AppDispatch } from "@/app/store/store";

function Signup() {
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(
        "/api/signup",
        {
          username: formData.username,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      //dispatch(addUser(formData.username));
      //router.push("/signin");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="md:flex w-4/5 md:w-3/5 h-1/3 shadow-md rounded-lg bg-white text-left">
      <div className="bg-blue-600 w-full md:w-2/5 p-8 space-y-4">
        <h1 className="text-2xl font-semibold text-white">
          Looks Like you are new here!
        </h1>
        <p className=" text-white">
          Signup with your credentials to get started
        </p>
      </div>

      <div className="w-full p-6 md:w-3/5">
        <form className="flex flex-col p-2" onSubmit={handleSubmit}>
          <div>
            <h2>Username</h2>
            <input
              name="username"
              placeholder="Your Name"
              className="outline-none p-1 border w-full rounded-md"
              required
              onChange={handleOnChange}
            />
          </div>
          <div>
            <h2>Password</h2>
            <input
              name="password"
              placeholder="password"
              className="outline-none p-1 border w-full rounded-md"
              required
              onChange={handleOnChange}
            />
          </div>
          <Button className="mt-2" type="submit">
            Signup
          </Button>
        </form>
        <div className="px-2">
          <Button
            className="w-full bg-white text-black border-2 "
            type="submit"
            onClick={() => router.push("/signin")}
          >
            Existing User? Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
