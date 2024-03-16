"use client";
import React, { useState } from "react";
import { Button } from "./button";
import { useRouter } from "next/navigation";
import axios from "axios";

function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMesssage] = useState<string | null>(null);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const { redirectURL, error } = await res.json();

      if (error) {
        throw new Error(error);
      }
      router.push(redirectURL);
    } catch (err) {
      setErrorMesssage("Username already exists");
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
          {errorMessage && (
            <p className="bg-red-300 text-red-600 p-3 rounded-lg mt-2 ">
              {errorMessage}
            </p>
          )}
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
