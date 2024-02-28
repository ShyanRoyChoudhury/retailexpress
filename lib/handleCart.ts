'use client'
import { AppDispatch } from "@/app/store/store";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "@/app/store/features/cartSlice";
import { Product } from "@/types/productPageTypes";


export const HandleAddToCart = ({product}: {product: Product}) => {
  const dispatch: AppDispatch = useDispatch();
  dispatch(addToCart(product));
};

export const HandleRemoveFromCart = ({product}: {product: Product}) => {
  const dispatch: AppDispatch = useDispatch();
  dispatch(removeFromCart(product));
};