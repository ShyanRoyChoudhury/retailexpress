"use client";
import { RootState } from "@/app/store/store";
import { groupByProductId } from "@/lib/groupByProductId";
import Image from "next/image";
import { useSelector } from "react-redux";
import AddToCart from "./AddToCart";
import { Button } from "./button";
import { useEffect, useState } from "react";
import { getCartTotal } from "@/lib/getCartTotal";

function Basket() {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const grouped = groupByProductId(cart);

  const [cartTotal, setCartTotal] = useState("");
  useEffect(() => {
    setCartTotal(getCartTotal(cart));
  }, [cart]);

  return (
    <div className="">
      <ul className="divide-y-2">
        {Object.keys(grouped).map((id) => {
          const item = grouped[id][0];
          const upscaledImage = item.thumbnails[0].replace(
            "128/128",
            "720/720"
          );
          return (
            <li key={id} className="flex p-5 space-x-4">
              <div>
                <Image
                  src={upscaledImage}
                  alt={item.name + " " + id}
                  width={100}
                  height={100}
                />
              </div>
              <div className="md:flex space-x-2 space-y-2 items-center">
                <div>
                  <h2 className="font-bold line-clamp-2">{item.name}</h2>
                  <p className="overflow line-clamp-1">{item.highlights}</p>
                </div>
                <div className="border p-4 flex flex-col space-y-1 w-[150px] h-[100px]">
                  <AddToCart product={item} />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="flex justify-end font-bold text-xl space-x-2">
        <p>Cart Total: </p>
        <p>{!cartTotal.match("₹ 0.00") ? `${cartTotal}` : "₹ 0.00"}</p>
      </div>
      <div>
        {cart.length > 0 && (
          <Button className="h-20 mt-5 w-full">Checkout</Button>
        )}
      </div>
    </div>
  );
}

export default Basket;
