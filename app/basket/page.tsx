"use client";
import { ShoppingCartIcon } from "lucide-react";
import Basket from "@/components/ui/Basket";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useEffect, useState } from "react";
import { getCartTotal } from "@/lib/getCartTotal";

function BasketPage() {
  return (
    <div className="p-10 lg:p-16 w-full mx-auto max-w-7xl lg:px-40">
      <div className="flex space-x-2 items-center">
        <ShoppingCartIcon size={40} />
        <h1 className="text-3xl">Your Cart</h1>
      </div>
      <p className="mt-2">
        Review the items in your cart and checkout when ready!
      </p>
      <div>
        <Basket />
      </div>
    </div>
  );
}

export default BasketPage;
