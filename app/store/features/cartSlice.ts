import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

interface Product {
    id?: string
    name: string,
    price: number
}
interface CartItem{
    cart: Product[]
}

const initialState: CartItem = {
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