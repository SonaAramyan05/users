import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./login/loginSlice";
import homeReducer from "./home/homeSlice";

export const store = configureStore({
    reducer: {
        login: loginReducer,
        home: homeReducer,
    },
});
export type rootState = ReturnType<typeof store.getState>;
