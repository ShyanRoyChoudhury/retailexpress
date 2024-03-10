'use client'

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import cartReducer from "./features/cartSlice";
import userLoggedInReducer from './features/userLoggedSlice';
export const store = configureStore({
    reducer: {
        user:userReducer,
        cart:cartReducer,
        userLoggedIn: userLoggedInReducer
    }
})

// // Infer the type of makeStore
// export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;