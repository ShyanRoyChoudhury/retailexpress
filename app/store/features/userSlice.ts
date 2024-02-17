import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    user: null
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        addUser: (state, action) => {
            // const user = {
            //     id: nanoid(),
            //     name: action.payload.name,
            //     email: action.payload.email
            // }
            // state.user = user;
            state.user = action.payload;
        },
        removeUser: (state, action) => {
            state.user = null;
        }
    }
})

export const { addUser } = userSlice.actions;
export default userSlice.reducer; 