"use client";
import React, { useState } from "react";
import { Button } from "./button";
import Link from "next/link";
import axios from "axios";
import { headers } from "next/headers";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store/store";
import { addUser } from "@/app/store/features/userSlice";
import { useRouter } from "next/navigation";
import { useLogin } from "@/app/hooks/useLogin";
import { updateLoggedInStatus } from "@/app/store/features/userLoggedSlice";
import { cn } from "@/lib/utils";
import Cookies from "js-cookie";

interface SigninProps {
  className?: string;
}
function Signin({ className }: SigninProps) {
  const { login } = useLogin();
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const HandleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login(formData);
    dispatch(updateLoggedInStatus(true));
    Cookies.set("username", formData.username);
    router.back();
  };
  return (
    <div className={cn("md:flex  shadow-md rounded-lg bg-white", className)}>
      <div className="bg-blue-600 w-full md:w-2/5 p-8 space-y-4">
        <h1 className="text-2xl font-semibold text-white">Login</h1>
        <p className=" text-white">Get access to your Orders, Wishlist!</p>
      </div>

      <div className="w-full p-6 md:w-3/5">
        <form className="flex flex-col p-2" onSubmit={HandleSubmit}>
          <div>
            <h2>Username</h2>
            <input
              name="username"
              placeholder="Your Name"
              className="outline-none p-1 border w-full rounded-md"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <h2>Password</h2>
            <input
              name="password"
              placeholder="password"
              className="outline-none p-1 border w-full rounded-md"
              required
              onChange={handleChange}
            />
          </div>
          <Button className="mt-2" type="submit">
            Login
          </Button>
        </form>
        <div className="px-10 pt-10 text-sm text-blue-700">
          <Link href={"/signup"}>New to RetailExpress? Create an account.</Link>
        </div>
      </div>
    </div>
  );
}

export default Signin;
