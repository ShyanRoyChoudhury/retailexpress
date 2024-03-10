import { useLogout } from "@/app/hooks/useLogout";
import { AppDispatch, RootState } from "@/app/store/store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import axios from "axios";
import { User } from "lucide-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useLogin } from "@/app/hooks/useLogin";

function UserDropdown() {
  const { logout } = useLogout();
  //const router = useRouter();
  //const dispatch: AppDispatch = useDispatch();
  const userLoggedIn = useSelector((state: RootState) => state.userLoggedIn);
  const [username, setUsername] = useState<string | null>(null);
  async function getUserData(token: string) {
    try {
      const res = await axios.get("/api/user", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      setUsername(res.data.username);
    } catch (err) {
      console.error(err);
      Cookies.remove("username");
      Cookies.remove("currentUser");
    }
  }
  useEffect(() => {
    const token = Cookies.get("currentUser");
    const username = Cookies.get("username");
    console.log("inside useEffect dropdown, token:", token);
    console.log("userLoggedIn:", userLoggedIn);
    if (token && username) getUserData(token);
  }, [userLoggedIn]);

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
        <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserDropdown;
