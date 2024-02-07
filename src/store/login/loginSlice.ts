import { createSlice } from "@reduxjs/toolkit";
type loginState = {
    isLoggedIn: boolean;
};
const initialState: loginState = {
    isLoggedIn: false,
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        login: (state) => {
            state.isLoggedIn = true;
        },
    },
});

export const { login } = loginSlice.actions;
export default loginSlice.reducer;
