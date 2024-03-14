"use client";

import Link from "next/link";
import {
  Grid2X2,
  Heart,
  LayoutGrid,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { getCartTotal } from "@/lib/getCartTotal";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { useEffect, useState } from "react";
import UserDropdown from "./UserDropdown";
import Cookies from "js-cookie";
import { CartItem } from "@/app/store/features/cartSlice";
import { Product } from "@/types/productPageTypes";
function Header() {
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = e.currentTarget.input.value;
    router.push(`/search?q=${input}`);
  };
  const cart = useSelector((state: RootState) => state.cart.cart);
  const user = useSelector((state: RootState) => state.user.user);
  const userLoggedIn = useSelector((state: RootState) => state.userLoggedIn);
  const [cartTotal, setCartTotal] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const cartProducts: Product[] = cart.map((item: CartItem) => item.product);
    setCartTotal(getCartTotal(cartProducts));
  }, [cart]);

  if (!mounted) return <></>;
  return (
    <header className="flex flex-col md:flex-row bg-slate-400 px-10 py-7 space-x-5 items-center w-full">
      <Link href={"/"} className="mb-5 md:mb-0 font-semibold text-white">
        RetailExpress
      </Link>

      <form
        onSubmit={handleSubmit}
        className="flex flex-1 items-center bg-white rounded-full w-full"
      >
        <input
          type="text"
          name="input"
          placeholder="search here..."
          className="flex-1 px-4 rounded-l-full outline-none 
                    placeholder:text-xs text-black"
        />
        <button type="submit">
          <Search className="px-2 w-10 bg-yellow-300 h-10 rounded-full" />
        </button>
      </form>

      <div className="flex space-x-5 mt-5 md:mt-0">
        <Link
          href={"/"}
          className="hidden xl:flex items-center text-sm font-bold text-white"
        >
          <Grid2X2 size={20} />
          Departments
        </Link>

        <Link
          href={"/"}
          className="hidden xl:flex items-center text-sm font-bold text-white space-x-1"
        >
          <LayoutGrid size={20} />
          Services
        </Link>

        <Link
          href={"/"}
          className="flex items-center text-sm font-bold text-white space-x-1"
        >
          <Heart size={20} />
          <div>
            <p className="font-extralight text-xs">Reorder</p>
            <p>Items</p>
          </div>
        </Link>
        {!!Cookies.get("username") ? (
          <UserDropdown />
        ) : (
          <Link
            href={"/signin"}
            className=" flex items-center text-sm font-semibold text-white space-x-1"
          >
            <User size={20} />
            <div>
              <p className="font-extralight text-xs">Sign in</p>
              <p>Account</p>
            </div>
          </Link>
        )}

        <Link
          href={"/basket"}
          className=" flex items-center text-sm font-bold text-white space-x-1"
        >
          <ShoppingCart size={20} />
          <div>
            <div>
              <p className="font-extralight text-xs">
                {cart.length > 0 ? `${cart.length} Items` : `No Items`}
              </p>
              <p>{cartTotal.match("₹ 0.00") ? "Cart empty" : cartTotal}</p>
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
