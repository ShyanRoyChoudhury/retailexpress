import { Product } from "@/types/productPageTypes";
import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

export interface CartItem{
    product: Product;
}
export interface CartState {
    cart: CartItem[]
}
const initialState: CartState = {
    cart: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart: (state, action: PayloadAction<CartItem>) => {
            state.cart.push(action.payload)
            console.log('state inside store: ',action.payload)
        },
        removeFromCart: (state, action: PayloadAction<Product>) => {
            const index = state.cart.findIndex(item=> item.product.product_id === action.payload.product_id);
            if(index !== -1){
                state.cart.splice(index, 1)
            }
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;