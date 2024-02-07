import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../constants";
type homeState = {
    users: User[] | null
};
const initialState: homeState = {
    users: null,
};

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.users = action.payload;
        },
    },
});

export const { setUser } = homeSlice.actions;
export default homeSlice.reducer;
