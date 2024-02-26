"use client";

import { Product } from "@/types/productPageTypes";
import React, { useState } from "react";
import { Button } from "./button";
import { useDispatch, useSelector } from "react-redux";
import {
  CartItem,
  CartState,
  addToCart,
  removeFromCart,
} from "@/app/store/features/cartSlice";
import { AppDispatch, RootState } from "@/app/store/store";

function AddToCart({ product }: { product: Product }) {
  const dispatch: AppDispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cart);

  let [cartNum, updateCart] = useState<CartState>([]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    updateCart(cartNum++);
  };
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product));
    updateCart(cartNum--);
  };

  if (cart.length > 0) {
    return (
      <div className="flex items-center">
        <Button onClick={handleRemoveFromCart}>-</Button>
        <p>{cart.length}</p>
        <Button onClick={handleAddToCart}>+</Button>
      </div>
    );
  }

  return <Button onClick={handleAddToCart}>Add to Cart</Button>;
}

export default AddToCart;
