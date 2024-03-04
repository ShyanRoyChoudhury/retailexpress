import React from "react";
import { Button } from "./button";
import Link from "next/link";

function Login() {
  return (
    <div className="md:flex w-4/5 md:w-3/5 h-1/3 shadow-md rounded-lg">
      <div className="bg-blue-600 w-full p-8 space-y-4">
        <h1 className="text-xl font-semibold text-white">
          Looks Like you are not new here!
        </h1>
        <p className=" text-white">
          Login with your credentials to get started
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

export default Login;
