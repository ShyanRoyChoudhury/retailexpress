"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import axios from "axios";
import { User } from "lucide-react";
import { useEffect, useState } from "react";

import { signOut, useSession } from "next-auth/react";
import Cookies from "js-cookie";
// import { GetUserData } from "@/lib/getUserData";

function UserDropdown() {
  const session = useSession();

  const [username, setUsername] = useState<string | null>(null);
  console.log(session);
  useEffect(() => {
    const storedUsername =
      (Cookies.get("username") as unknown as string) ||
      (session.data?.user.username as string);
    if (typeof window !== "undefined") {
      // This code runs only on the client
      if (storedUsername) {
        setUsername(storedUsername);
      } else if (session.data?.user?.username) {
        setUsername(session.data.user.username);
        Cookies.set("username", session.data.user.username);
      }
    }
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center text-sm font-semibold text-white space-x-1">
        <User size={20} />
        <div>
          <p className="font-extralight text-xs">Welcome</p>
          <p>{username}</p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            signOut();
            localStorage.removeItem("username");
          }}
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserDropdown;
