import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./login/loginSlice";
import homeReducer from "./home/homeSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: {
        login: loginReducer,
        home: homeReducer,
    },
});
export type rootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
