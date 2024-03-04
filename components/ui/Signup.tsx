"use client";
import React from "react";
import { Button } from "./button";
import { useRouter } from "next/navigation";

function Signup() {
  const router = useRouter();
  return (
    <div className="md:flex w-4/5 md:w-3/5 h-1/3 shadow-md rounded-lg">
      <div className="bg-blue-600 w-full p-8 space-y-4">
        <h1 className="text-xl font-semibold text-white">
          Looks Like you are new here!
        </h1>
        <p className=" text-white">
          Signup with your credentials to get started
        </p>
      </div>

      <div className="w-full p-6">
        <form className="flex flex-col p-2">
          <div>
            <h2>Username</h2>
            <input
              placeholder="Your Name"
              className="outline-none p-1 border w-full rounded-md"
            />
          </div>
          <div>
            <h2>Password</h2>
            <input
              placeholder="password"
              className="outline-none p-1 border w-full rounded-md"
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
            onClick={() => router.push("/login")}
          >
            Existing User? Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
