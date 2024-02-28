"use client";

import { Product } from "@/types/productPageTypes";
import { useState } from "react";
import { Button } from "./button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/app/store/features/cartSlice";
import { AppDispatch, RootState } from "@/app/store/store";
import { HandleAddToCart, HandleRemoveFromCart } from "@/lib/handleCart";

function AddToCart({ product }: { product: Product }) {
  const dispatch: AppDispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cart);
  console.log(cart);

  const howManyInCart = (product_id: string | undefined): number => {
    const product = cart.filter(
      (cartProduct) => cartProduct.product_id === product_id
    );
    if (!product) return 0;

    console.log("cartTotal: ", product.length);
    return product.length;
  };
  let [cartNum, setCartNum] = useState<number>(
    howManyInCart(product.product_id)
  );
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setCartNum((prevCart) => prevCart + 1);
  };
  const handleRemoveFromCart = (product: Product) => {
    dispatch(removeFromCart(product));
    setCartNum((prevCart) => prevCart - 1);
  };

  // function handleProductAdd(): void {
  //   HandleAddToCart({ product });
  //   setCartNum((prevCart) => prevCart + 1);
  // }

  // function handleProductRemove(): void {
  //   HandleRemoveFromCart({ product });
  //   setCartNum((prevCart) => prevCart + 1);
  // }

  if (cartNum > 0) {
    return (
      <div className="space-y-2 block">
        <div className="flex items-center space-x-4">
          <Button onClick={() => handleRemoveFromCart(product)}>-</Button>
          <p>{cartNum}</p>
          <Button onClick={handleAddToCart}>+</Button>
        </div>
        <div className="flex space-x-2 text-sm">
          <p className="font-bold">Total:</p>
          <p className="font-semibold">
            {product.current_price
              ? "₹" + product.current_price * cartNum
              : "N?A"}
          </p>
        </div>
      </div>
    );
  }

  return <Button onClick={handleAddToCart}>Add to Cart</Button>;
}

export default AddToCart;
