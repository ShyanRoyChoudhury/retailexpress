import { User } from "@/types/userTypes";
import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

interface userState{
    user: User;
}
const initialState: userState = {
    user: {
        username: ''
    }
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        addUser: (state, action: PayloadAction<string>) => {
            
            state.user.username = action.payload
            // state.user = action.payload;
        },
        removeUser: (state,) => {
            state.user = {
                username: ''
            }
        }
    }
})

export const { addUser } = userSlice.actions;
export default userSlice.reducer; 