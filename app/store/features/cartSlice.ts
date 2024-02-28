import { Product } from "@/types/productPageTypes";
import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

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
            state.cart.push(action.payload)
        },
        removeFromCart: (state, action: PayloadAction<Product>) => {
            const index = state.cart.findIndex(item=> item.product_id === action.payload.product_id);
            if(index !== -1){
                state.cart.splice(index, 1)
            }
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;