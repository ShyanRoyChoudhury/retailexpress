import { Product } from "@/types/productPageTypes";
import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

interface CartItem extends Product{
    id: string
}

export interface CartState {
    cart: Product[]
}
const initialState: CartState = {
    cart: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart: (state, action: PayloadAction<Product>) => {
            const productToAdd = {
                id: nanoid(),

                ...action.payload
            }
            state.cart.push(productToAdd)
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.cart = state.cart.filter(item=> item.id !== action.payload)
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;