import { PayloadAction, createSlice } from "@reduxjs/toolkit";
const initialState = {
    loggedIn: false
}
export const userLoggedInSlice = createSlice({
    name: 'userLoggedIn',
    initialState,
    reducers:{
        updateLoggedInStatus:(state, action: PayloadAction<boolean>) => {
            state.loggedIn = action.payload;
        }
    }
});

export const { updateLoggedInStatus } = userLoggedInSlice.actions;
export default userLoggedInSlice.reducer;